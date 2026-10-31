#!/usr/bin/env node
/**
 * Capture the Aether prototype with Chrome DevTools Protocol.
 *
 * No npm dependencies. Launches headless Chrome, drives the real UI,
 * and writes PNGs to demo/screenshots.
 *
 * Usage:
 *   node scripts/capture_demo.mjs
 *   node scripts/capture_demo.mjs --url http://localhost:8080
 */

import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DEMO_DIR = join(ROOT, 'demo');
const OUT_DIR = join(DEMO_DIR, 'screenshots');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const DEBUG_PORT = 9223;
const DEFAULT_APP = 'http://127.0.0.1:8099';

const args = process.argv.slice(2);
const urlArg = args.indexOf('--url');
const APP_URL = urlArg >= 0 ? args[urlArg + 1] : DEFAULT_APP;

const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms));

async function waitForJson(endpoint, tries = 80) {
  let lastError;
  for (let i = 0; i < tries; i += 1) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) return await response.json();
    } catch (error) {
      lastError = error;
    }
    await sleep(150);
  }
  throw new Error(`Chrome did not become ready: ${lastError?.message || 'unknown error'}`);
}

class Cdp {
  constructor(socketUrl) {
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
    this.ws = new WebSocket(socketUrl);
  }

  async open() {
    await new Promise((resolveOpen, rejectOpen) => {
      this.ws.addEventListener('open', resolveOpen, { once: true });
      this.ws.addEventListener('error', rejectOpen, { once: true });
    });
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve: resolveCall, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolveCall(message.result);
        return;
      }
      if (message.method) {
        const waiters = this.listeners.get(message.method) || [];
        waiters.splice(0).forEach((resolveEvent) => resolveEvent(message.params));
      }
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolveCall, reject) => {
      this.pending.set(id, { resolve: resolveCall, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  once(method, timeout = 15000) {
    return new Promise((resolveEvent, reject) => {
      const waiters = this.listeners.get(method) || [];
      const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeout);
      waiters.push((params) => {
        clearTimeout(timer);
        resolveEvent(params);
      });
      this.listeners.set(method, waiters);
    });
  }

  close() {
    this.ws.close();
  }
}

async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || 'Page evaluation failed');
  }
  return result.result?.value;
}

async function setViewport(cdp, { width, height, mobile = true, scale = 2 }) {
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: scale,
    mobile,
    screenWidth: width,
    screenHeight: height
  });
}

async function navigate(cdp, url) {
  const loaded = cdp.once('Page.loadEventFired');
  await cdp.send('Page.navigate', { url });
  await loaded;
  await evaluate(cdp, 'document.fonts.ready.then(() => true)');
  await sleep(350);
}

async function click(cdp, selector) {
  return evaluate(cdp, `(() => {
    const element = document.querySelector(${JSON.stringify(selector)});
    if (!element) return false;
    element.click();
    return true;
  })()`);
}

async function clickNav(cdp, target) {
  await click(cdp, `.nav-item[data-target="${target}"]`);
  await evaluate(cdp, 'document.getElementById("appViewport").scrollTop = 0');
  await sleep(260);
}

async function scrollApp(cdp, top) {
  await evaluate(cdp, `document.getElementById('appViewport').scrollTop = ${top}`);
  await sleep(180);
}

async function capture(cdp, name) {
  await sleep(220);
  const shot = await cdp.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false
  });
  const file = join(OUT_DIR, `${name}.png`);
  await writeFile(file, Buffer.from(shot.data, 'base64'));
  console.log(`  ${name}.png`);
}

async function resetSheet(cdp) {
  await evaluate(cdp, `document.querySelectorAll('.sheet-backdrop.active').forEach(el => el.classList.remove('active'))`);
  await sleep(250);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const server = spawn('python3', ['-m', 'http.server', '8099'], {
    cwd: DEMO_DIR,
    stdio: 'ignore'
  });
  await sleep(500);

  const profile = await mkdtemp(join(tmpdir(), 'aether-capture-'));
  const chrome = spawn(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--force-color-profile=srgb',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${profile}`,
    APP_URL
  ], { stdio: 'ignore' });

  let cdp;
  try {
    await waitForJson(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    const targets = await waitForJson(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
    const page = targets.find((target) => target.type === 'page');
    if (!page) throw new Error('No Chrome page target was created');

    cdp = new Cdp(page.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    console.log('Capturing mobile states at 393 × 844');
    await setViewport(cdp, { width: 393, height: 844 });
    await navigate(cdp, `${APP_URL}/?capture=1`);

    await capture(cdp, '01-wallet-top');
    await scrollApp(cdp, 520);
    await capture(cdp, '02-wallet-lower');
    await scrollApp(cdp, 0);

    await click(cdp, '#btn-flip-card');
    await sleep(720);
    await capture(cdp, '03-wallet-card-back');
    await click(cdp, '#btn-flip-card');
    await sleep(650);

    await clickNav(cdp, 'view-optimizer');
    await capture(cdp, '04-swipe-top');
    await scrollApp(cdp, 620);
    await capture(cdp, '05-swipe-lower');
    await scrollApp(cdp, 0);

    await clickNav(cdp, 'view-bills');
    await capture(cdp, '06-bills-top');
    await scrollApp(cdp, 560);
    await capture(cdp, '07-bills-lower');
    await scrollApp(cdp, 0);

    await clickNav(cdp, 'view-activity');
    await capture(cdp, '08-activity-top');
    await scrollApp(cdp, 500);
    await capture(cdp, '09-activity-lower');
    await scrollApp(cdp, 0);

    await click(cdp, '#btn-open-ai-parser');
    await sleep(500);
    await capture(cdp, '10-capture-ai');
    await click(cdp, '.sample-chip-error');
    await sleep(900);
    await capture(cdp, '11-capture-ai-error');
    await resetSheet(cdp);

    await clickNav(cdp, 'view-wallet');
    await click(cdp, '#btn-quick-pay-urgent');
    await sleep(550);
    await capture(cdp, '12-payment-sheet');
    await resetSheet(cdp);

    await click(cdp, '#btn-card-perks');
    await sleep(550);
    await capture(cdp, '13-perks-sheet');
    await resetSheet(cdp);

    await scrollApp(cdp, 0);
    await click(cdp, '#btn-app-theme-toggle');
    await sleep(400);
    await capture(cdp, '14-wallet-dark');
    await click(cdp, '#btn-app-theme-toggle');
    await sleep(350);

    await evaluate(cdp, `document.body.classList.add('accessibility-large-text')`);
    await sleep(350);
    await capture(cdp, '15-wallet-large-text');
    await evaluate(cdp, `document.body.classList.remove('accessibility-large-text')`);
    await sleep(300);

    console.log('Capturing compact 375 state');
    await setViewport(cdp, { width: 375, height: 812 });
    await sleep(400);
    await scrollApp(cdp, 0);
    await capture(cdp, '16-wallet-375');

    console.log('Capturing montage at desktop width');
    await setViewport(cdp, { width: 1440, height: 1000, mobile: false, scale: 1 });
    await sleep(400);
    await click(cdp, '.preset-btn[data-width="montage"]');
    await sleep(800);
    await capture(cdp, '17-montage');

    console.log('Capturing compact 375 activity state');
    await click(cdp, '.preset-btn[data-width="393"]');
    await setViewport(cdp, { width: 375, height: 812 });
    await sleep(400);
    await clickNav(cdp, 'view-activity');
    await capture(cdp, '18-activity-375');

    console.log(`\nSaved ${OUT_DIR}`);
  } finally {
    cdp?.close();
    chrome.kill('SIGTERM');
    server.kill('SIGTERM');
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
