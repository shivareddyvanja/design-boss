/**
 * AETHER — CARD INDEX
 * A warm editorial wallet prototype. Same product logic, clearer first move.
 */

(function () {
  'use strict';

  // ==========================================================================
  // STATE
  // ==========================================================================
  const state = {
    activeTab: 'view-wallet',
    activeCardIndex: 0,
    selectedCategory: 'dining',
    filterCard: 'all',
    isDark: false,
    isLargeText: false,
    isMontageMode: false,

    cards: [
      {
        id: 'amex',
        name: 'Amex Gold Reserve',
        brandClass: 'card-theme-amex',
        network: 'AMEX',
        last4: '1004',
        fullNumber: '3782 8224 9018 1004',
        exp: '09/29',
        cvv: '8492',
        balance: 842.10,
        limit: 15000,
        statementDue: 842.10,
        minDue: 35.00,
        dueDate: 'Nov 4, 2026',
        daysUntilDue: 4,
        isPaid: false,
        autoPay: true,
        autoPaySource: 'Chase Checking ··8921',
        isFrozen: false,
        isFlipped: false,
        isSensitiveRevealed: false,
        sensitiveCountdown: 30,
        sensitiveTimer: null,
        apr: '20.99%',
        cycle: 'Oct 05 – Nov 04',
        topPerk: '4× dining',
        rewards: {
          dining: { multiplier: 4, label: '4× points', rate: '8.0%', basis: '4.0 pts/$1 × 2.0¢/pt baseline travel redemption = 8.0% return', note: 'Use for restaurants worldwide and delivery.' },
          groceries: { multiplier: 4, label: '4× points', rate: '8.0%', basis: '4.0 pts/$1 × 2.0¢/pt baseline travel redemption = 8.0% return', note: 'Supermarket purchases up to $25k a year.' },
          flights: { multiplier: 3, label: '3× flights', rate: '6.0%', basis: '3.0 pts/$1 × 2.0¢/pt = 6.0% return', note: 'Book direct with airlines or through Amex Travel.' },
          streaming: { multiplier: 1, label: '1× points', rate: '2.0%', basis: '1.0 pt/$1 × 2.0¢/pt = 2.0% return', note: 'Standard base multiplier.' },
          fuel: { multiplier: 1, label: '1× points', rate: '2.0%', basis: '1.0 pt/$1 × 2.0¢/pt = 2.0% return', note: 'Standard base multiplier.' },
          online: { multiplier: 1, label: '1× points', rate: '2.0%', basis: '1.0 pt/$1 × 2.0¢/pt = 2.0% return', note: 'Standard base multiplier.' }
        },
        benefits: [
          { title: '$120 annual dining credit', desc: '$10 a month at Grubhub, Cheesecake Factory, and Goldbelly.' },
          { title: '$120 Uber Cash allowance', desc: '$10 a month added to Uber Eats and rides.' },
          { title: 'Global baggage and car insurance', desc: 'Secondary collision coverage and lost-luggage reimbursement.' }
        ]
      },
      {
        id: 'chase',
        name: 'Chase Sapphire Reserve',
        brandClass: 'card-theme-chase',
        network: 'VISA INFINITE',
        last4: '4092',
        fullNumber: '4147 2091 8830 4092',
        exp: '11/28',
        cvv: '391',
        balance: 1420.00,
        limit: 20000,
        statementDue: 1420.00,
        minDue: 45.00,
        dueDate: 'Nov 12, 2026',
        daysUntilDue: 12,
        isPaid: false,
        autoPay: true,
        autoPaySource: 'Chase Checking ··8921',
        isFrozen: false,
        isFlipped: false,
        isSensitiveRevealed: false,
        sensitiveCountdown: 30,
        sensitiveTimer: null,
        apr: '21.49%',
        cycle: 'Oct 13 – Nov 12',
        topPerk: '5× flights',
        rewards: {
          flights: { multiplier: 5, label: '5× via portal', rate: '7.5%', basis: '5.0 pts/$1 × 1.5¢/pt travel portal redemption = 7.5% return', note: 'Airfare booked through Chase Ultimate Rewards.' },
          travel: { multiplier: 3, label: '3× travel', rate: '4.5%', basis: '3.0 pts/$1 × 1.5¢/pt = 4.5% return', note: 'Hotels, trains, and rideshare worldwide.' },
          dining: { multiplier: 3, label: '3× dining', rate: '4.5%', basis: '3.0 pts/$1 × 1.5¢/pt = 4.5% return', note: 'Restaurants and takeout.' },
          groceries: { multiplier: 1, label: '1× points', rate: '1.5%', basis: '1.0 pt/$1 × 1.5¢/pt = 1.5% return', note: 'Standard base multiplier.' },
          streaming: { multiplier: 3, label: '3× streaming', rate: '4.5%', basis: '3.0 pts/$1 × 1.5¢/pt = 4.5% return', note: 'Select digital streaming services.' },
          fuel: { multiplier: 1, label: '1× points', rate: '1.5%', basis: '1.0 pt/$1 × 1.5¢/pt = 1.5% return', note: 'Standard base multiplier.' },
          online: { multiplier: 1, label: '1× points', rate: '1.5%', basis: '1.0 pt/$1 × 1.5¢/pt = 1.5% return', note: 'Standard base multiplier.' }
        },
        benefits: [
          { title: '$300 annual travel credit', desc: 'Automatic reimbursement for any travel charge.' },
          { title: 'Priority Pass Select lounge access', desc: 'Complimentary airport club entry for you and two guests.' },
          { title: 'Primary car rental insurance', desc: 'Covers theft and physical damage up to $75,000.' }
        ]
      },
      {
        id: 'apple',
        name: 'Apple Titanium Card',
        brandClass: 'card-theme-apple',
        network: 'MASTERCARD',
        last4: '8812',
        fullNumber: '5421 9901 3241 8812',
        exp: '03/30',
        cvv: '710',
        balance: 310.25,
        limit: 8500,
        statementDue: 310.25,
        minDue: 25.00,
        dueDate: 'Nov 24, 2026',
        daysUntilDue: 24,
        isPaid: false,
        autoPay: false,
        autoPaySource: null,
        isFrozen: false,
        isFlipped: false,
        isSensitiveRevealed: false,
        sensitiveCountdown: 30,
        sensitiveTimer: null,
        apr: '18.24%',
        cycle: 'Oct 25 – Nov 24',
        topPerk: '2% daily cash',
        rewards: {
          online: { multiplier: 2, label: '2% daily cash', rate: '2.0%', basis: '2% instant Daily Cash on Apple Pay purchases', note: 'Unlimited 2% everywhere Apple Pay is accepted.' },
          streaming: { multiplier: 2, label: '2% daily cash', rate: '2.0%', basis: '2% instant Daily Cash on Apple Pay purchases', note: 'Paid with iPhone or Apple Watch.' },
          fuel: { multiplier: 2, label: '2% Exxon/Mobil', rate: '2.0%', basis: '2% Daily Cash at Mobil and Exxon pumps', note: 'Using Apple Pay at the pump.' },
          dining: { multiplier: 2, label: '2% daily cash', rate: '2.0%', basis: '2% instant Daily Cash', note: 'When using Apple Pay contactless.' },
          flights: { multiplier: 2, label: '2% daily cash', rate: '2.0%', basis: '2% instant Daily Cash', note: 'Airfare booked with Apple Pay.' },
          groceries: { multiplier: 2, label: '2% daily cash', rate: '2.0%', basis: '2% instant Daily Cash', note: 'Supermarkets using Apple Pay.' }
        },
        benefits: [
          { title: 'Instant Daily Cash', desc: 'Cash back deposited daily to Apple Savings at 4.4% APY.' },
          { title: 'Zero fees', desc: 'No annual, late, international, or over-limit fees.' },
          { title: 'Rotating virtual card numbers', desc: 'Dynamic card numbers for safer online checkout.' }
        ]
      },
      {
        id: 'venture',
        name: 'Capital One Venture X',
        brandClass: 'card-theme-venture',
        network: 'VISA INFINITE',
        last4: '5519',
        fullNumber: '4000 1289 7721 5519',
        exp: '07/29',
        cvv: '502',
        balance: 650.50,
        limit: 25000,
        statementDue: 650.50,
        minDue: 30.00,
        dueDate: 'Nov 18, 2026',
        daysUntilDue: 18,
        isPaid: false,
        autoPay: true,
        autoPaySource: 'Chase Checking ··8921',
        isFrozen: false,
        isFlipped: false,
        isSensitiveRevealed: false,
        sensitiveCountdown: 30,
        sensitiveTimer: null,
        apr: '19.99%',
        cycle: 'Oct 19 – Nov 18',
        topPerk: '2× all miles',
        rewards: {
          fuel: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Uncapped 2× miles on every category.' },
          online: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Uncapped 2× miles on online purchases.' },
          streaming: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Subscriptions and streaming.' },
          groceries: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Non-bonused supermarkets.' },
          dining: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Baseline dining return.' },
          flights: { multiplier: 2, label: '2× all miles', rate: '3.6%', basis: '2.0 miles/$1 × 1.8¢/mile partner redemption = 3.6% return', note: 'Flights booked direct.' }
        },
        benefits: [
          { title: '$300 Capital One Travel credit', desc: 'Annual statement credit for portal bookings.' },
          { title: '10,000 anniversary miles', desc: 'Bonus miles awarded each anniversary, worth $100+.' },
          { title: 'Capital One Lounge access', desc: 'Unlimited club access with dining and espresso.' }
        ]
      }
    ],

    transactions: [
      { id: 'tx-1', merchant: 'Whole Foods Market #1029', category: 'Groceries', categoryIcon: 'groceries', amount: 84.20, cardId: 'amex', cardName: 'Amex Gold', date: 'Today, 3:15 PM', rewardText: '+337 pts' },
      { id: 'tx-2', merchant: 'Blue Bottle Coffee Roasters', category: 'Dining', categoryIcon: 'dining', amount: 14.80, cardId: 'amex', cardName: 'Amex Gold', date: 'Today, 9:20 AM', rewardText: '+59 pts' },
      { id: 'tx-3', merchant: 'Delta Air Lines #DL891', category: 'Travel', categoryIcon: 'travel', amount: 412.50, cardId: 'chase', cardName: 'Sapphire Reserve', date: 'Yesterday', rewardText: '+2,063 pts' },
      { id: 'tx-4', merchant: "Trader Joe's Wine & Spirits #402 — Lower Manhattan", category: 'Groceries', categoryIcon: 'groceries', amount: 67.40, cardId: 'amex', cardName: 'Amex Gold', date: 'Oct 29', rewardText: '+270 pts' },
      { id: 'tx-5', merchant: 'Apple Store 5th Ave NYC', category: 'Online', categoryIcon: 'online', amount: 129.00, cardId: 'apple', cardName: 'Apple Card', date: 'Oct 28', rewardText: '+$2.58 cash' },
      { id: 'tx-6', merchant: 'Chevron Fuel Station #9142', category: 'Fuel', categoryIcon: 'fuel', amount: 55.40, cardId: 'venture', cardName: 'Venture X', date: 'Oct 27', rewardText: '+111 miles' }
    ],

    perks: [
      { id: 'perk-1', title: '$120 dining credit', card: 'Amex Gold', used: 80, total: 120, resetText: '$10 left for November' },
      { id: 'perk-2', title: '$300 annual travel credit', card: 'Sapphire Reserve', used: 120, total: 300, resetText: '$180 left this year' },
      { id: 'perk-3', title: '$100 Global Entry / TSA Pre', card: 'Venture X', used: 100, total: 100, resetText: 'Claimed · renews in 4 years' }
    ]
  };

  // ==========================================================================
  // DOM
  // ==========================================================================
  const dom = {
    liveTime: document.getElementById('liveTime'),
    deviceShell: document.getElementById('deviceShell'),
    montageWrapper: document.getElementById('montageWrapper'),
    montageColumns: document.getElementById('montageColumns'),
    presetBtns: document.querySelectorAll('.preset-btn'),
    btnDesktopThemeToggle: document.getElementById('btn-desktop-theme-toggle'),
    desktopThemeIcon: document.getElementById('desktop-theme-icon'),
    desktopThemeText: document.getElementById('desktop-theme-text'),
    btnDesktopA11yToggle: document.getElementById('btn-desktop-a11y-toggle'),
    a11yLabel: document.getElementById('a11y-label'),
    btnAppThemeToggle: document.getElementById('btn-app-theme-toggle'),
    appThemeIcon: document.getElementById('app-theme-icon'),
    btnQuickInsights: document.getElementById('btn-quick-insights'),

    statTotalBalance: document.getElementById('stat-total-balance'),
    totalUtilPercent: document.getElementById('total-util-percent'),
    utilBarFill: document.getElementById('util-bar-fill'),
    utilHintText: document.getElementById('util-hint-text'),
    cardsCount: document.getElementById('cards-count'),

    cardsCarousel: document.getElementById('cardsCarousel'),
    cardTrack: document.getElementById('cardTrack'),
    carouselDots: document.getElementById('carouselDots'),
    btnFlipCard: document.getElementById('btn-flip-card'),
    flipBtnText: document.getElementById('flip-btn-text'),
    btnCardPerks: document.getElementById('btn-card-perks'),
    btnCardFreeze: document.getElementById('btn-card-freeze'),
    freezeText: document.getElementById('freeze-text'),

    urgentBillWidget: document.getElementById('urgentBillWidget'),
    urgentBadgeText: document.getElementById('urgent-badge-text'),
    urgentBillTitle: document.getElementById('urgent-bill-title'),
    urgentBillSub: document.getElementById('urgent-bill-sub'),
    urgentBillAmount: document.getElementById('urgent-bill-amount'),
    btnQuickPayUrgent: document.getElementById('btn-quick-pay-urgent'),
    linkToBills: document.getElementById('link-to-bills'),
    linkToActivity: document.getElementById('link-to-activity'),

    compactTxList: document.getElementById('compactTxList'),
    fullTxList: document.getElementById('fullTxList'),
    txFilterChips: document.getElementById('txFilterChips'),
    btnOpenAiParser: document.getElementById('btn-open-ai-parser'),
    btnOpenManualEntry: document.getElementById('btn-open-manual-entry'),

    catChips: document.querySelectorAll('.category-chip'),
    compCategoryTitle: document.getElementById('compCategoryTitle'),
    categoryComparisonStack: document.getElementById('categoryComparisonStack'),
    bestCardSpotlight: document.getElementById('bestCardSpotlight'),
    spotlightCardVisual: document.getElementById('spotlightCardVisual'),
    spotlightMultiplier: document.getElementById('spotlight-multiplier'),
    spotlightRate: document.getElementById('spotlight-rate'),
    spotlightFormula: document.getElementById('spotlight-formula'),
    spotlightExplanation: document.getElementById('spotlightExplanation'),
    calcSpendInput: document.getElementById('calc-spend-input'),
    calcBestCardLabel: document.getElementById('calc-best-card-label'),
    calcBestVal: document.getElementById('calc-best-val'),
    calcDefaultVal: document.getElementById('calc-default-val'),
    calcDelta: document.getElementById('calc-delta'),
    perksList: document.getElementById('perksList'),
    perksActiveCount: document.getElementById('perks-active-count'),
    spendChips: document.querySelectorAll('.preset-chip'),

    billsTimelineList: document.getElementById('billsTimelineList'),
    kpiDueSoon: document.getElementById('kpi-due-soon'),
    kpiDueCountBadge: document.getElementById('kpi-due-count-badge'),
    kpiAutopayCount: document.getElementById('kpi-autopay-count'),
    navBillsDot: document.getElementById('nav-bills-dot'),

    navItems: document.querySelectorAll('.nav-item'),
    tabViews: document.querySelectorAll('.tab-view'),

    txCaptureBackdrop: document.getElementById('txCaptureBackdrop'),
    txCaptureSheet: document.getElementById('txCaptureSheet'),
    btnCloseSheet: document.getElementById('btn-close-sheet'),
    tabAiMode: document.getElementById('tab-ai-mode'),
    tabManualMode: document.getElementById('tab-manual-mode'),
    modeAiView: document.getElementById('mode-ai-view'),
    modeManualView: document.getElementById('mode-manual-view'),
    aiTextInput: document.getElementById('ai-text-input'),
    btnRunAiParse: document.getElementById('btn-run-ai-parse'),
    aiBtnText: document.getElementById('ai-btn-text'),
    aiErrorBanner: document.getElementById('aiErrorBanner'),
    aiErrorMsg: document.getElementById('aiErrorMsg'),
    btnRecoveryManual: document.getElementById('btn-recovery-manual'),
    btnRecoverySample: document.getElementById('btn-recovery-sample'),
    aiParsedPreview: document.getElementById('aiParsedPreview'),
    parsedMatchCard: document.getElementById('parsedMatchCard'),
    parsedMerchant: document.getElementById('parsed-merchant'),
    parsedAmount: document.getElementById('parsed-amount'),
    parsedCategory: document.getElementById('parsed-category'),
    parsedRewards: document.getElementById('parsed-rewards'),
    btnConfirmAiTx: document.getElementById('btn-confirm-ai-tx'),
    manualTxForm: document.getElementById('manualTxForm'),
    smsPresetChips: document.querySelectorAll('.sample-chip'),

    billPayBackdrop: document.getElementById('billPayBackdrop'),
    billPaySheet: document.getElementById('billPaySheet'),
    btnClosePaySheet: document.getElementById('btn-close-pay-sheet'),
    payCardName: document.getElementById('pay-card-name'),
    paySelectedAmount: document.getElementById('pay-selected-amount'),
    payDueNotice: document.getElementById('pay-due-notice'),
    autopayConflictNotice: document.getElementById('autopayConflictNotice'),
    autopayConflictMsg: document.getElementById('autopayConflictMsg'),
    optStatementAmt: document.getElementById('opt-statement-amt'),
    optMinAmt: document.getElementById('opt-min-amt'),
    chkSimulatePayError: document.getElementById('chk-simulate-pay-error'),
    payErrorBanner: document.getElementById('payErrorBanner'),
    btnExecutePayment: document.getElementById('btn-execute-payment'),
    payButtonLabel: document.getElementById('pay-button-label'),
    payRadios: document.querySelectorAll('input[name="payAmountType"]'),

    cardPerksBackdrop: document.getElementById('cardPerksBackdrop'),
    cardPerksSheet: document.getElementById('cardPerksSheet'),
    cardPerksTitle: document.getElementById('cardPerksTitle'),
    cardPerksBody: document.getElementById('cardPerksBody'),
    btnClosePerksSheet: document.getElementById('btn-close-perks-sheet'),

    toastContainer: document.getElementById('toastContainer')
  };

  let currentPaymentCard = null;
  let stagedAiTransaction = null;
  let isScrollingTrack = false;

  // ==========================================================================
  // INIT
  // ==========================================================================
  function init() {
    startClock();
    renderCardsTrack();
    renderDots();
    calculatePortfolioTotals();
    renderTransactions();
    renderOptimizer();
    renderPerks();
    renderBillsTimeline();
    setupEventListeners();
    setupCarouselScrollSync();

    // Check URL parameters or hash for direct tab / montage links
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#', '');
    const tabParam = urlParams.get('tab') || (['wallet', 'optimizer', 'bills', 'activity'].includes(hash) ? hash : null);
    if (tabParam) {
      const targetView = tabParam.startsWith('view-') ? tabParam : `view-${tabParam}`;
      switchTab(targetView);
    }
    if (urlParams.get('preset') === 'montage' || hash === 'montage') {
      const montageBtn = document.querySelector('.preset-btn[data-width="montage"]');
      if (montageBtn) montageBtn.click();
    }
  }

  function startClock() {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      dom.liveTime.textContent = `${h}:${m < 10 ? '0' + m : m}`;
    };
    updateTime();
    setInterval(updateTime, 30000);
  }

  // ==========================================================================
  // ICONS
  // ==========================================================================
  function icon(name) {
    const icons = {
      groceries: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8h14l-1.5 11h-11zM9 8a3 3 0 0 1 6 0"/></svg>',
      dining: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 3v8M10 3v8M7 11v10M17 3c-1.7 1.5-2.5 4-2.5 7 0 1.4.8 2 2 2h.5v9"/></svg>',
      travel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 15.5 21 8l-4.5-1.5-5 3-5-2L4 9l4 3-5 3.5z"/></svg>',
      online: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16l-1.4 12H5.4zM8 7a4 4 0 0 1 8 0"/></svg>',
      fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 21V4h8v17M6 9h8M14 7h3l2 2v9a2 2 0 0 1-4 0V9M4 21h12"/></svg>',
      streaming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="5" width="16" height="12" rx="2"/><path d="m10 9 4 2.5-4 2.5zM8 21h8"/></svg>',
      payment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8.5"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
      general: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v8M8 12h8"/></svg>',
      sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7zM18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/></svg>'
    };
    return icons[name] || icons.general;
  }

  // ==========================================================================
  // PORTFOLIO TOTALS
  // ==========================================================================
  function calculatePortfolioTotals() {
    const totalBalance = state.cards.reduce((sum, c) => sum + c.balance, 0);
    const totalLimit = state.cards.reduce((sum, c) => sum + c.limit, 0);
    const utilPercent = totalLimit > 0 ? (totalBalance / totalLimit) * 100 : 0;

    dom.statTotalBalance.textContent = totalBalance.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    dom.totalUtilPercent.textContent = `${utilPercent.toFixed(1)}% used`;
    dom.utilBarFill.style.width = `${Math.min(utilPercent, 100)}%`;

    if (utilPercent <= 30) {
      dom.totalUtilPercent.className = 'util-percent';
      dom.utilBarFill.style.background = 'var(--good)';
      dom.utilHintText.textContent = 'Excellent · under 30%';
    } else if (utilPercent <= 50) {
      dom.totalUtilPercent.className = 'util-percent warning';
      dom.utilBarFill.style.background = 'var(--warn)';
      dom.utilHintText.textContent = 'Moderate · pay down to improve';
    } else {
      dom.totalUtilPercent.className = 'util-percent danger';
      dom.utilBarFill.style.background = 'var(--danger)';
      dom.utilHintText.textContent = 'High · pay immediately';
    }

    const dueSoonCards = state.cards.filter(c => !c.isPaid && c.daysUntilDue <= 14);
    const dueSoonTotal = dueSoonCards.reduce((sum, c) => sum + c.statementDue, 0);
    dom.kpiDueSoon.textContent = dollars(dueSoonTotal);
    dom.kpiDueCountBadge.textContent = `${dueSoonCards.length} card${dueSoonCards.length === 1 ? '' : 's'} pending`;

    const autoPayActiveCards = state.cards.filter(c => c.autoPay);
    dom.kpiAutopayCount.textContent = `${autoPayActiveCards.length} of ${state.cards.length}`;

    renderNextMove();

    if (state.isMontageMode) renderMontageView();
  }

  function renderNextMove() {
    const urgentCard = state.cards
      .filter(c => !c.isPaid)
      .sort((a, b) => a.daysUntilDue - b.daysUntilDue)[0];

    if (urgentCard) {
      dom.urgentBillWidget.classList.remove('settled');
      dom.urgentBadgeText.className = 'status-tag';
      dom.urgentBadgeText.textContent = urgentCard.daysUntilDue <= 0 ? 'Due today' : `Due in ${urgentCard.daysUntilDue} days`;
      dom.urgentBillTitle.textContent = urgentCard.name;
      dom.urgentBillSub.textContent = urgentCard.autoPay
        ? `${urgentCard.dueDate} · auto-pay from ${urgentCard.autoPaySource}`
        : `${urgentCard.dueDate} · no auto-pay scheduled`;
      dom.urgentBillAmount.textContent = dollars(urgentCard.statementDue);
      dom.btnQuickPayUrgent.disabled = false;
      dom.btnQuickPayUrgent.textContent = urgentCard.autoPay ? 'Pay early' : 'Pay statement';
      dom.btnQuickPayUrgent.onclick = () => openPaymentModal(urgentCard.id);
      dom.navBillsDot.style.display = 'block';
    } else {
      dom.urgentBillWidget.classList.add('settled');
      dom.urgentBadgeText.className = 'status-tag settled';
      dom.urgentBadgeText.textContent = 'All clear';
      dom.urgentBillTitle.textContent = 'Zero interest secured';
      dom.urgentBillSub.textContent = 'Every statement is settled. The next cycle closes in 18 days.';
      dom.urgentBillAmount.textContent = '$0.00';
      dom.btnQuickPayUrgent.disabled = true;
      dom.btnQuickPayUrgent.textContent = 'Settled';
      dom.btnQuickPayUrgent.onclick = null;
      dom.navBillsDot.style.display = 'none';
    }
  }

  // ==========================================================================
  // CARDS
  // ==========================================================================
  function renderCardsTrack() {
    dom.cardTrack.innerHTML = '';
    dom.cardsCount.textContent = String(state.cards.length);

    state.cards.forEach((card, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = `credit-card-wrapper ${card.isFlipped ? 'flipped' : ''} ${card.isFrozen ? 'is-frozen' : ''}`;
      cardEl.setAttribute('data-card-id', card.id);
      cardEl.setAttribute('data-card-index', String(idx));
      cardEl.setAttribute('role', 'article');
      cardEl.setAttribute('aria-label', `${card.name} ending ${card.last4}`);

      const util = Math.min(100, (card.balance / card.limit) * 100);
      const maskedNumber = `•••• •••• •••• ${card.last4}`;

      cardEl.innerHTML = `
        <div class="credit-card-flipper">
          <div class="card-face card-front ${card.brandClass}">
            <div class="card-top-row">
              <div>
                <span class="card-issuer">Aether card index</span>
                <span class="card-brand-title">${escapeHtml(card.name)}</span>
              </div>
              <span class="card-badge-perk">${escapeHtml(card.topPerk)}</span>
            </div>
            <div class="card-mid-row">
              <div class="card-chip" aria-hidden="true"></div>
              <svg class="card-nfc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15" aria-hidden="true"><path d="M8.5 16.5a5 5 0 0 1 0-7M12 20a9 9 0 0 0 0-14M15.5 22.5a13 13 0 0 0 0-21"/></svg>
              <span class="card-lock-badge" style="display:${card.isFrozen ? 'inline-block' : 'none'}">Frozen</span>
            </div>
            <div>
              <div class="card-bottom-row">
                <div>
                  <div class="card-number">${maskedNumber}</div>
                  <div class="card-meta">EXP ${card.exp} · ${card.network}</div>
                </div>
                <div>
                  <span class="bal-label">Balance</span>
                  <span class="bal-num">${dollars(card.balance)}</span>
                </div>
              </div>
              <div class="card-util-line">
                <span>${util.toFixed(1)}% of limit</span>
                <span class="card-util-track"><span class="card-util-fill" style="width:${util}%"></span></span>
              </div>
            </div>
          </div>

          <div class="card-face card-back">
            <div class="mag-stripe" aria-hidden="true"></div>
            <div class="card-back-body">
              <div>
                <span class="card-back-label">Card number</span>
                <span class="sensitive-number">${maskedNumber}</span>
                <div class="card-sensitive-block" style="margin-top:7px;">
                  ${sensitiveBlockMarkup(card)}
                </div>
              </div>
              <div class="card-back-grid">
                <div class="back-cell"><span>Billing cycle</span><span>${card.cycle}</span></div>
                <div class="back-cell"><span>Purchase APR</span><span>${card.apr}</span></div>
                <div class="back-cell"><span>Credit limit</span><span>$${card.limit.toLocaleString()}</span></div>
                <div class="back-cell"><span>Auto-pay</span><span style="color:${card.autoPay ? 'var(--good)' : 'var(--ink-3)'}">${card.autoPay ? 'Enrolled' : 'Off'}</span></div>
              </div>
            </div>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        scrollToCard(idx);
      });

      dom.cardTrack.appendChild(cardEl);
    });

    updateActiveCardControls();
  }

  function sensitiveBlockMarkup(card) {
    if (card.isSensitiveRevealed) {
      return `
        <div class="sensitive-details">
          <span class="sensitive-label">Security code</span>
          <span class="sensitive-val">${card.cvv}</span>
        </div>
        <div class="sensitive-actions">
          <span class="sensitive-countdown-badge">${card.sensitiveCountdown}s</span>
          <button type="button" class="btn-sensitive-action" onclick="window.aetherCopyCard('${card.id}')" aria-label="Copy card details">Copy</button>
        </div>
      `;
    }
    return `
      <div class="sensitive-details">
        <span class="sensitive-label">Security code</span>
        <span class="sensitive-val">••••</span>
      </div>
      <button type="button" class="btn-sensitive-action" onclick="window.aetherRevealCvv('${card.id}')" aria-label="Reveal security code with simulated biometric">Show</button>
    `;
  }

  function updateActiveCardControls() {
    const card = state.cards[state.activeCardIndex] || state.cards[0];
    if (!card) return;
    dom.freezeText.textContent = card.isFrozen ? 'Unfreeze' : 'Freeze';
    dom.flipBtnText.textContent = card.isFlipped ? 'Hide details' : 'Details';
    dom.btnFlipCard.setAttribute('aria-label', card.isFlipped ? 'Hide card details' : 'Show card details');
  }

  function renderDots() {
    dom.carouselDots.innerHTML = '';
    state.cards.forEach((card, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `dot ${idx === state.activeCardIndex ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', idx === state.activeCardIndex ? 'true' : 'false');
      dot.setAttribute('aria-label', `Show ${card.name}`);
      dot.addEventListener('click', () => scrollToCard(idx));
      dom.carouselDots.appendChild(dot);
    });
  }

  function scrollToCard(idx) {
    state.activeCardIndex = idx;
    const cardEls = dom.cardTrack.querySelectorAll('.credit-card-wrapper');
    if (cardEls[idx]) {
      isScrollingTrack = true;
      cardEls[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setTimeout(() => { isScrollingTrack = false; }, 420);
    }
    updateActiveCardControls();
    renderDots();
  }

  function setupCarouselScrollSync() {
    let scrollTimeout;
    dom.cardTrack.addEventListener('scroll', () => {
      if (isScrollingTrack) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const trackRect = dom.cardTrack.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closestIdx = 0;
        let closestDist = Infinity;

        dom.cardTrack.querySelectorAll('.credit-card-wrapper').forEach((el, idx) => {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(trackCenter - (rect.left + rect.width / 2));
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });

        if (state.activeCardIndex !== closestIdx) {
          state.activeCardIndex = closestIdx;
          updateActiveCardControls();
          renderDots();
        }
      }, 70);
    }, { passive: true });
  }

  function toggleCurrentCardFlip() {
    const card = state.cards[state.activeCardIndex];
    if (!card) return;
    card.isFlipped = !card.isFlipped;
    const cardEl = dom.cardTrack.querySelector(`.credit-card-wrapper[data-card-id="${card.id}"]`);
    if (cardEl) cardEl.classList.toggle('flipped', card.isFlipped);
    updateActiveCardControls();
  }

  function toggleCurrentCardFreeze() {
    const card = state.cards[state.activeCardIndex];
    if (!card) return;
    card.isFrozen = !card.isFrozen;
    const cardEl = dom.cardTrack.querySelector(`.credit-card-wrapper[data-card-id="${card.id}"]`);
    if (cardEl) {
      cardEl.classList.toggle('is-frozen', card.isFrozen);
      const lockBadge = cardEl.querySelector('.card-lock-badge');
      if (lockBadge) lockBadge.style.display = card.isFrozen ? 'inline-block' : 'none';
    }
    updateActiveCardControls();
    showToast(card.isFrozen ? `${card.name} frozen` : `${card.name} unfrozen`, card.isFrozen ? 'error' : 'success');
  }

  function refreshCardBalances() {
    state.cards.forEach(card => {
      const cardEl = dom.cardTrack.querySelector(`.credit-card-wrapper[data-card-id="${card.id}"]`);
      if (!cardEl) return;
      const util = Math.min(100, (card.balance / card.limit) * 100);
      const balNum = cardEl.querySelector('.bal-num');
      const utilLabel = cardEl.querySelector('.card-util-line > span');
      const utilFill = cardEl.querySelector('.card-util-fill');
      if (balNum) balNum.textContent = dollars(card.balance);
      if (utilLabel) utilLabel.textContent = `${util.toFixed(1)}% of limit`;
      if (utilFill) utilFill.style.width = `${util}%`;
    });
  }

  // Biometric reveal is simulated. It expires on its own and never leaves data exposed.
  window.aetherRevealCvv = function (cardId) {
    const card = state.cards.find(c => c.id === cardId);
    if (!card) return;

    showToast('Biometric verified · 30 seconds', 'success');
    card.isSensitiveRevealed = true;
    card.sensitiveCountdown = 30;

    const update = () => {
      const cardEl = dom.cardTrack.querySelector(`.credit-card-wrapper[data-card-id="${card.id}"]`);
      if (!cardEl) return;
      const block = cardEl.querySelector('.card-sensitive-block');
      const number = cardEl.querySelector('.sensitive-number');
      if (number) number.textContent = card.isSensitiveRevealed ? card.fullNumber : `•••• •••• •••• ${card.last4}`;
      if (block) block.innerHTML = sensitiveBlockMarkup(card);
    };

    if (card.sensitiveTimer) clearInterval(card.sensitiveTimer);
    card.sensitiveTimer = setInterval(() => {
      card.sensitiveCountdown -= 1;
      if (card.sensitiveCountdown <= 0) {
        clearInterval(card.sensitiveTimer);
        card.isSensitiveRevealed = false;
        update();
        showToast('Security code hidden again', 'info');
      } else {
        const cardEl = dom.cardTrack.querySelector(`.credit-card-wrapper[data-card-id="${card.id}"]`);
        const badge = cardEl && cardEl.querySelector('.sensitive-countdown-badge');
        if (badge) badge.textContent = `${card.sensitiveCountdown}s`;
      }
    }, 1000);

    update();
  };

  window.aetherCopyCard = function (cardId) {
    const card = state.cards.find(c => c.id === cardId);
    if (!card) return;
    const value = card.isSensitiveRevealed ? `${card.fullNumber} · CVV ${card.cvv}` : `Card ending ${card.last4}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    showToast(card.isSensitiveRevealed ? 'Card details copied' : `Card ending ${card.last4} copied`, 'success');
  };

  // ==========================================================================
  // TRANSACTIONS
  // ==========================================================================
  function renderTransactions() {
    dom.compactTxList.innerHTML = '';
    state.transactions.slice(0, 3).forEach(tx => {
      dom.compactTxList.appendChild(createTxRow(tx));
    });

    dom.fullTxList.innerHTML = '';
    const filtered = state.filterCard === 'all'
      ? state.transactions
      : state.transactions.filter(tx => tx.cardId === state.filterCard);

    if (!filtered.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.innerHTML = '<strong>No entries yet</strong><p>Nothing is recorded for this card in the current view.</p>';
      dom.fullTxList.appendChild(empty);
    } else {
      let lastGroup = null;
      filtered.forEach(tx => {
        const group = formatDayGroup(tx.date);
        if (group !== lastGroup) {
          const day = document.createElement('div');
          day.className = 'ledger-day';
          day.innerHTML = `<span>${escapeHtml(group)}</span>`;
          dom.fullTxList.appendChild(day);
          lastGroup = group;
        }
        dom.fullTxList.appendChild(createTxRow(tx));
      });
    }

    if (state.isMontageMode) renderMontageView();
  }

  function createTxRow(tx) {
    const row = document.createElement('article');
    row.className = 'transaction-row';
    const isPayment = tx.category === 'Payment';

    row.innerHTML = `
      <span class="tx-icon" aria-hidden="true">${icon(tx.categoryIcon || 'general')}</span>
      <div class="tx-main">
        <span class="tx-merchant">${escapeHtml(tx.merchant)}</span>
        <span class="tx-sub">${escapeHtml(tx.cardName)} · ${escapeHtml(tx.date)}</span>
      </div>
      <div class="tx-end">
        <span class="tx-amount ${isPayment ? 'credit-positive' : ''}">${isPayment ? '+' : ''}${dollars(Math.abs(tx.amount))}</span>
        <span class="tx-reward">${escapeHtml(tx.rewardText)}</span>
      </div>
    `;
    return row;
  }

  function formatDayGroup(date) {
    if (!date) return 'Recent';
    if (date.startsWith('Just now') || date.startsWith('Today')) return 'Today';
    if (date.startsWith('Yesterday')) return 'Yesterday';
    const months = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December' };
    const match = date.match(/^([A-Z][a-z]{2}) (\d{1,2})$/);
    if (match && months[match[1]]) return `${months[match[1]]} ${match[2]}`;
    return date;
  }

  // ==========================================================================
  // OPTIMIZER
  // ==========================================================================
  function renderOptimizer() {
    const cat = state.selectedCategory;

    const rankedCards = [...state.cards].map(card => {
      const reward = card.rewards[cat] || {
        multiplier: 1,
        label: '1× points',
        rate: '1.0%',
        basis: '1.0 pt/$1 × 1.0¢/pt = 1.0% return',
        note: 'Standard base multiplier.'
      };
      return { card, reward, numericRate: parseFloat(reward.rate) || 1.0 };
    }).sort((a, b) => b.numericRate - a.numericRate);

    const winner = rankedCards[0];
    const bestCard = winner.card;
    const bestReward = winner.reward;

    dom.compCategoryTitle.textContent = getCategoryDisplay(cat);
    dom.spotlightCardVisual.innerHTML = miniCardMarkup(bestCard, bestReward);
    dom.spotlightMultiplier.textContent = bestReward.label;
    dom.spotlightRate.textContent = `${bestReward.rate} back`;
    dom.spotlightFormula.textContent = bestReward.basis;
    dom.spotlightExplanation.innerHTML = `<strong>${escapeHtml(bestCard.name)}</strong> · ${escapeHtml(bestReward.note)}`;

    dom.categoryComparisonStack.innerHTML = '';
    rankedCards.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = `ranking-row ${index === 0 ? 'is-winner' : ''}`;
      row.innerHTML = `
        <span class="ranking-position">${index === 0 ? '01' : `0${index + 1}`}</span>
        <div class="ranking-main">
          <span class="ranking-name">${escapeHtml(item.card.name)}</span>
          <span class="ranking-sub">${index === 0 ? 'Top pick' : 'Alternative'} · ending ${item.card.last4}</span>
        </div>
        <div class="ranking-value">
          <span class="ranking-rate">${escapeHtml(item.reward.rate)}</span>
          <span class="ranking-mult">${escapeHtml(item.reward.label)}</span>
        </div>
      `;
      dom.categoryComparisonStack.appendChild(row);
    });

    const spend = parseFloat(dom.calcSpendInput.value) || 0;
    const bestPoints = Math.round(spend * bestReward.multiplier);
    const bestValue = spend * (parseFloat(bestReward.rate) / 100);
    const defaultPoints = Math.round(spend);
    const defaultValue = spend * 0.01;
    const delta = Math.max(0, bestValue - defaultValue);

    dom.calcBestCardLabel.textContent = bestCard.name;
    dom.calcBestVal.textContent = `${bestPoints.toLocaleString()} pts · ${dollars(bestValue)}`;
    dom.calcDefaultVal.textContent = `${defaultPoints.toLocaleString()} pts · ${dollars(defaultValue)}`;
    dom.calcDelta.textContent = `You gain ${dollars(delta)} by choosing ${bestCard.name}.`;

    if (state.isMontageMode) renderMontageView();
  }

  function miniCardMarkup(card, reward) {
    return `
      <div class="card-face card-front ${card.brandClass}">
        <div class="card-top-row">
          <div>
            <span class="card-issuer">${escapeHtml(card.network)}</span>
            <span class="card-brand-title">${escapeHtml(card.name)}</span>
          </div>
          <span class="card-badge-perk">${escapeHtml(reward.label)}</span>
        </div>
        <div class="card-bottom-row">
          <div>
            <div class="card-number">•••• ${card.last4}</div>
          </div>
          <div>
            <span class="bal-label">Return</span>
            <span class="bal-num">${escapeHtml(reward.rate)}</span>
          </div>
        </div>
      </div>
    `;
  }

  function getCategoryDisplay(cat) {
    const labels = {
      dining: 'Dining',
      flights: 'Flights',
      groceries: 'Groceries',
      streaming: 'Streaming',
      fuel: 'Fuel',
      online: 'Online'
    };
    return labels[cat] || 'Dining';
  }

  // ==========================================================================
  // PERKS
  // ==========================================================================
  function renderPerks() {
    dom.perksList.innerHTML = '';
    state.perks.forEach(perk => {
      const pct = Math.min(100, Math.round((perk.used / perk.total) * 100));
      const row = document.createElement('div');
      row.className = 'perk-row';
      row.innerHTML = `
        <div class="perk-row-head">
          <span class="perk-name">${escapeHtml(perk.title)}</span>
          <span class="perk-card">${escapeHtml(perk.card)}</span>
        </div>
        <div class="perk-bar-track" role="img" aria-label="${pct}% used">
          <div class="perk-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="perk-row-foot">
          <span>${dollars(perk.used, 0)} used of ${dollars(perk.total, 0)}</span>
          <strong>${escapeHtml(perk.resetText)}</strong>
        </div>
      `;
      dom.perksList.appendChild(row);
    });
    dom.perksActiveCount.textContent = `${state.perks.length} active`;
  }

  // ==========================================================================
  // BILLS
  // ==========================================================================
  function renderBillsTimeline() {
    dom.billsTimelineList.innerHTML = '';
    const sorted = [...state.cards].sort((a, b) => a.daysUntilDue - b.daysUntilDue);

    sorted.forEach(card => {
      const row = document.createElement('article');
      row.className = `bill-row ${card.isPaid ? 'paid' : ''}`;

      const dateParts = parseDueDate(card.dueDate);
      const isUrgent = !card.isPaid && card.daysUntilDue <= 7;
      const dateClass = card.isPaid ? 'paid' : (isUrgent ? 'urgent' : '');
      const statusText = card.isPaid ? 'Settled' : (card.autoPay ? 'Auto-pay' : 'Manual');
      const statusClass = card.isPaid ? 'paid' : (card.autoPay ? '' : 'manual');

      let actionMarkup = '';
      if (card.isPaid) {
        actionMarkup = `
          <button type="button" class="bill-button" disabled>Statement settled</button>
          <span class="bill-quiet-note">Auto-pay adjusted to $0.00</span>
        `;
      } else if (card.autoPay) {
        actionMarkup = `
          <button type="button" class="bill-button" onclick="window.aetherOpenPay('${card.id}')">Pay early</button>
          <span class="bill-quiet-note">Auto-pay ${card.dueDate.replace(', 2026', '')} · ${escapeHtml(card.autoPaySource)}</span>
        `;
      } else {
        actionMarkup = `
          <button type="button" class="bill-button primary" onclick="window.aetherOpenPay('${card.id}')">Pay statement</button>
          <span class="bill-quiet-note">No auto-pay on this card</span>
        `;
      }

      row.innerHTML = `
        <div class="bill-date ${dateClass}" aria-hidden="true">
          <span class="bill-date-month">${dateParts.month}</span>
          <span class="bill-date-day">${dateParts.day}</span>
        </div>
        <div class="bill-content">
          <div class="bill-top">
            <span class="bill-name">${escapeHtml(card.name)}</span>
            <span class="bill-status ${statusClass}">${statusText}</span>
          </div>
          <p class="bill-meta">Cycle ${escapeHtml(card.cycle)} · ${card.isPaid ? 'Paid in full' : `due in ${card.daysUntilDue} days`}</p>
          <div class="bill-amount-line">
            <span class="bill-amount">${dollars(card.statementDue)}</span>
            <span class="bill-min">min ${dollars(card.minDue)}</span>
          </div>
          <div class="bill-action">${actionMarkup}</div>
        </div>
      `;

      dom.billsTimelineList.appendChild(row);
    });

    if (state.isMontageMode) renderMontageView();
  }

  function parseDueDate(dueDate) {
    const months = { Jan: 'Jan', Feb: 'Feb', Mar: 'Mar', Apr: 'Apr', May: 'May', Jun: 'Jun', Jul: 'Jul', Aug: 'Aug', Sep: 'Sep', Oct: 'Oct', Nov: 'Nov', Dec: 'Dec' };
    const match = String(dueDate).match(/^([A-Z][a-z]{2}) (\d{1,2})/);
    if (!match) return { month: 'DUE', day: '—' };
    return { month: months[match[1]] || match[1].toUpperCase(), day: match[2] };
  }

  window.aetherOpenPay = function (cardId) {
    openPaymentModal(cardId);
  };

  // ==========================================================================
  // PAYMENT
  // ==========================================================================
  function openPaymentModal(cardId) {
    currentPaymentCard = state.cards.find(c => c.id === cardId) || state.cards[0];
    if (!currentPaymentCard || currentPaymentCard.isPaid) return;

    dom.payCardName.textContent = currentPaymentCard.name;
    dom.paySelectedAmount.textContent = money(currentPaymentCard.statementDue);
    dom.optStatementAmt.textContent = dollars(currentPaymentCard.statementDue);
    dom.optMinAmt.textContent = dollars(currentPaymentCard.minDue);
    dom.payDueNotice.textContent = `Due in ${currentPaymentCard.daysUntilDue} days · no late fee`;
    dom.payErrorBanner.classList.add('hidden');
    dom.chkSimulatePayError.checked = false;

    if (currentPaymentCard.autoPay) {
      dom.autopayConflictNotice.classList.remove('hidden');
      dom.autopayConflictNotice.style.display = 'flex';
      dom.autopayConflictMsg.textContent = `${currentPaymentCard.autoPaySource} is scheduled for ${currentPaymentCard.dueDate}. Paying now will adjust that auto-pay to $0.00 to prevent a double debit.`;
    } else {
      dom.autopayConflictNotice.classList.add('hidden');
      dom.autopayConflictNotice.style.display = 'none';
    }

    const statementRadio = document.querySelector('input[name="payAmountType"][value="statement"]');
    if (statementRadio) statementRadio.checked = true;
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
    const activeOpt = statementRadio && statementRadio.closest('.payment-option');
    if (activeOpt) activeOpt.classList.add('active');

    updatePayButtonLabel();
    openSheet(dom.billPayBackdrop);
  }

  function closePaySheet() {
    dom.billPayBackdrop.classList.remove('active');
    dom.payErrorBanner.classList.add('hidden');
  }

  function updatePayButtonLabel() {
    if (!currentPaymentCard) return;
    const checked = document.querySelector('input[name="payAmountType"]:checked');
    const isStatement = !checked || checked.value === 'statement';
    const amount = isStatement ? currentPaymentCard.statementDue : currentPaymentCard.minDue;
    dom.paySelectedAmount.textContent = money(amount);
    dom.payButtonLabel.textContent = `Authorize payment · ${dollars(amount)}`;
  }

  // ==========================================================================
  // CAPTURE
  // ==========================================================================
  function openCaptureSheet(mode = 'ai') {
    openSheet(dom.txCaptureBackdrop);
    switchCaptureMode(mode);
  }

  function closeCaptureSheet() {
    dom.txCaptureBackdrop.classList.remove('active');
    dom.aiErrorBanner.classList.add('hidden');
    dom.aiParsedPreview.classList.add('hidden');
    dom.aiTextInput.value = '';
    stagedAiTransaction = null;
  }

  function switchCaptureMode(mode) {
    const isAi = mode === 'ai';
    dom.tabAiMode.classList.toggle('active', isAi);
    dom.tabManualMode.classList.toggle('active', !isAi);
    dom.tabAiMode.setAttribute('aria-selected', String(isAi));
    dom.tabManualMode.setAttribute('aria-selected', String(!isAi));
    dom.modeAiView.classList.toggle('active', isAi);
    dom.modeManualView.classList.toggle('active', !isAi);
  }

  function runAiParse() {
    const text = dom.aiTextInput.value.trim();
    if (!text) {
      showToast('Paste a notification first', 'error');
      return;
    }

    dom.btnRunAiParse.disabled = true;
    dom.aiBtnText.textContent = 'Reading…';
    dom.aiErrorBanner.classList.add('hidden');
    dom.aiParsedPreview.classList.add('hidden');

    setTimeout(() => {
      dom.btnRunAiParse.disabled = false;
      dom.aiBtnText.textContent = 'Read the message';

      const lowered = text.toLowerCase();
      if (lowered.includes('verification code') || lowered.includes('do not share') || !text.includes('$')) {
        dom.aiErrorBanner.classList.remove('hidden');
        dom.aiErrorMsg.textContent = 'No merchant or amount was found. Verification codes and non-receipt text cannot be read as a purchase.';
        return;
      }

      let amount = 48.20;
      let merchant = 'Whole Foods Market';
      let category = 'Groceries';
      let matchedCard = state.cards[0];

      if (text.includes('Nobu')) {
        amount = 134.50;
        merchant = 'Nobu Restaurant NYC';
        category = 'Dining';
        matchedCard = state.cards.find(c => c.id === 'amex') || state.cards[0];
      } else if (text.includes('Delta')) {
        amount = 389.00;
        merchant = 'Delta Air Lines';
        category = 'Travel';
        matchedCard = state.cards.find(c => c.id === 'chase') || state.cards[0];
      } else if (text.includes('4092')) {
        matchedCard = state.cards.find(c => c.id === 'chase') || state.cards[0];
      }

      const dollarMatch = text.match(/\$(\d+(?:\.\d{2})?)/);
      if (dollarMatch) amount = parseFloat(dollarMatch[1]);

      const key = rewardKey(category);
      const reward = matchedCard.rewards[key] || { multiplier: 1 };
      const points = Math.round(amount * reward.multiplier);

      stagedAiTransaction = {
        merchant,
        amount,
        category,
        categoryIcon: getCategoryIcon(category),
        card: matchedCard,
        rewardText: `+${points.toLocaleString()} pts`
      };

      dom.parsedMerchant.textContent = merchant;
      dom.parsedAmount.textContent = dollars(amount);
      dom.parsedCategory.textContent = category;
      dom.parsedRewards.textContent = stagedAiTransaction.rewardText;
      dom.parsedMatchCard.innerHTML = `<span>Matched card</span> <strong>${escapeHtml(matchedCard.name)} · ending ${matchedCard.last4}</strong>`;
      dom.aiParsedPreview.classList.remove('hidden');
    }, 520);
  }

  function commitAiTransaction() {
    if (!stagedAiTransaction) return;
    const tx = stagedAiTransaction;

    state.transactions.unshift({
      id: `tx-${Date.now()}`,
      merchant: tx.merchant,
      category: tx.category,
      categoryIcon: tx.categoryIcon,
      amount: tx.amount,
      cardId: tx.card.id,
      cardName: tx.card.name,
      rewardText: tx.rewardText,
      date: 'Just now'
    });

    tx.card.balance += tx.amount;
    calculatePortfolioTotals();
    refreshCardBalances();
    renderTransactions();
    closeCaptureSheet();
    showToast(`${dollars(tx.amount)} added to ${tx.card.name}`, 'success');
    switchTab('view-activity');
  }

  // ==========================================================================
  // PERKS SHEET
  // ==========================================================================
  function openPerksModal(cardId) {
    const card = state.cards.find(c => c.id === cardId) || state.cards[state.activeCardIndex];
    if (!card) return;

    dom.cardPerksTitle.textContent = card.name;
    dom.cardPerksBody.innerHTML = `
      <p class="sheet-description">Everything this card adds beyond the multiplier, with the terms that matter.</p>
      <div class="perks-detail-list">
        ${card.benefits.map(b => `
          <div class="perk-detail-row">
            <span class="perk-detail-icon" aria-hidden="true">${icon('sparkle')}</span>
            <div>
              <div class="perk-detail-title">${escapeHtml(b.title)}</div>
              <div class="perk-detail-desc">${escapeHtml(b.desc)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    openSheet(dom.cardPerksBackdrop);
  }

  function closePerksModal() {
    dom.cardPerksBackdrop.classList.remove('active');
  }

  // ==========================================================================
  // NAVIGATION / MONTAGE
  // ==========================================================================
  function switchTab(targetId) {
    state.activeTab = targetId;
    dom.tabViews.forEach(view => view.classList.toggle('active', view.id === targetId));
    dom.navItems.forEach(item => item.classList.toggle('active', item.getAttribute('data-target') === targetId));
    document.getElementById('appViewport').scrollTop = 0;
    if (state.isMontageMode) renderMontageView();
  }

  function renderMontageView() {
    if (!state.isMontageMode) return;
    dom.montageColumns.innerHTML = '';

    const screens = [
      { id: 'view-wallet', label: '01 · Cards' },
      { id: 'view-optimizer', label: '02 · Swipe' },
      { id: 'view-bills', label: '03 · Bills' },
      { id: 'view-activity', label: '04 · Activity' }
    ];

    screens.forEach(screen => {
      const frame = document.createElement('div');
      frame.className = 'montage-frame';

      const label = document.createElement('div');
      label.className = 'montage-label';
      label.innerHTML = `<span>${screen.label}</span><span>393 × 844</span>`;

      const view = document.getElementById(screen.id).cloneNode(true);
      view.classList.add('active');
      view.style.display = 'block';

      const scroll = document.createElement('div');
      scroll.className = 'montage-view-scroll';
      scroll.appendChild(view);

      frame.appendChild(label);
      frame.appendChild(scroll);
      dom.montageColumns.appendChild(frame);
    });
  }

  // ==========================================================================
  // SHEET HELPERS
  // ==========================================================================
  function openSheet(backdrop) {
    backdrop.classList.add('active');
    const focusTarget = backdrop.querySelector('.sheet-close-btn');
    if (focusTarget) {
      requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
    }
  }

  function closeTopSheet() {
    if (dom.billPayBackdrop.classList.contains('active')) {
      closePaySheet();
      return true;
    }
    if (dom.txCaptureBackdrop.classList.contains('active')) {
      closeCaptureSheet();
      return true;
    }
    if (dom.cardPerksBackdrop.classList.contains('active')) {
      closePerksModal();
      return true;
    }
    return false;
  }

  // ==========================================================================
  // EVENTS
  // ==========================================================================
  function setupEventListeners() {
    dom.navItems.forEach(item => {
      item.addEventListener('click', () => switchTab(item.getAttribute('data-target')));
    });

    dom.linkToBills.addEventListener('click', () => switchTab('view-bills'));
    dom.linkToActivity.addEventListener('click', () => switchTab('view-activity'));

    dom.btnFlipCard.addEventListener('click', toggleCurrentCardFlip);
    dom.btnCardFreeze.addEventListener('click', toggleCurrentCardFreeze);
    dom.btnCardPerks.addEventListener('click', () => openPerksModal());

    dom.btnClosePerksSheet.addEventListener('click', closePerksModal);
    dom.cardPerksBackdrop.addEventListener('click', (e) => {
      if (e.target === dom.cardPerksBackdrop) closePerksModal();
    });

    dom.catChips.forEach(chip => {
      chip.addEventListener('click', () => {
        dom.catChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        state.selectedCategory = chip.getAttribute('data-category');
        renderOptimizer();
      });
    });

    dom.calcSpendInput.addEventListener('input', renderOptimizer);

    dom.spendChips.forEach(chip => {
      chip.addEventListener('click', () => {
        dom.spendChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        dom.calcSpendInput.value = chip.getAttribute('data-amount');
        renderOptimizer();
      });
    });

    dom.txFilterChips.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        dom.txFilterChips.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.filterCard = chip.getAttribute('data-filter');
        renderTransactions();
      });
    });

    dom.btnOpenAiParser.addEventListener('click', () => openCaptureSheet('ai'));
    dom.btnOpenManualEntry.addEventListener('click', () => openCaptureSheet('manual'));
    dom.btnCloseSheet.addEventListener('click', closeCaptureSheet);
    dom.txCaptureBackdrop.addEventListener('click', (e) => {
      if (e.target === dom.txCaptureBackdrop) closeCaptureSheet();
    });

    dom.tabAiMode.addEventListener('click', () => switchCaptureMode('ai'));
    dom.tabManualMode.addEventListener('click', () => switchCaptureMode('manual'));

    dom.smsPresetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        dom.aiTextInput.value = chip.getAttribute('data-sample');
        runAiParse();
      });
    });

    dom.btnRecoveryManual.addEventListener('click', () => switchCaptureMode('manual'));

    dom.btnRecoverySample.addEventListener('click', () => {
      dom.aiTextInput.value = 'Chase Alert: You made a $48.20 charge at Whole Foods Market with card ending 4092.';
      runAiParse();
    });

    dom.btnRunAiParse.addEventListener('click', runAiParse);
    dom.btnConfirmAiTx.addEventListener('click', commitAiTransaction);

    dom.manualTxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = parseFloat(document.getElementById('manual-amount').value);
      const merchant = document.getElementById('manual-merchant').value.trim();
      const cardId = document.getElementById('manual-card-select').value;
      const category = document.getElementById('manual-category').value;
      if (!amount || !merchant) return;

      const card = state.cards.find(c => c.id === cardId) || state.cards[0];
      const reward = card.rewards[rewardKey(category)] || { multiplier: 1 };
      const points = Math.round(amount * reward.multiplier);

      state.transactions.unshift({
        id: `tx-${Date.now()}`,
        merchant,
        category,
        categoryIcon: getCategoryIcon(category),
        amount,
        cardId: card.id,
        cardName: card.name,
        rewardText: `+${points.toLocaleString()} pts`,
        date: 'Just now'
      });

      card.balance += amount;
      calculatePortfolioTotals();
      refreshCardBalances();
      renderTransactions();
      closeCaptureSheet();
      showToast(`${dollars(amount)} added to ${card.name}`, 'success');
      switchTab('view-activity');
    });

    dom.btnClosePaySheet.addEventListener('click', closePaySheet);
    dom.billPayBackdrop.addEventListener('click', (e) => {
      if (e.target === dom.billPayBackdrop) closePaySheet();
    });

    dom.payRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
        const opt = radio.closest('.payment-option');
        if (opt) opt.classList.add('active');
        updatePayButtonLabel();
      });
    });

    dom.btnExecutePayment.addEventListener('click', () => {
      if (!currentPaymentCard) return;

      const checked = document.querySelector('input[name="payAmountType"]:checked');
      const isStatement = !checked || checked.value === 'statement';
      const paidAmount = isStatement ? currentPaymentCard.statementDue : currentPaymentCard.minDue;
      if (paidAmount <= 0) {
        showToast('Nothing due on this option', 'info');
        return;
      }

      const shouldError = dom.chkSimulatePayError.checked;
      dom.btnExecutePayment.disabled = true;
      dom.payButtonLabel.textContent = 'Contacting bank…';
      dom.payErrorBanner.classList.add('hidden');

      setTimeout(() => {
        dom.btnExecutePayment.disabled = false;
        dom.payButtonLabel.textContent = `Authorize payment · ${dollars(paidAmount)}`;

        if (shouldError) {
          dom.payErrorBanner.classList.remove('hidden');
          showToast('Bank did not respond · not charged', 'error');
          return;
        }

        const card = currentPaymentCard;
        card.balance = Math.max(0, card.balance - paidAmount);
        if (isStatement) {
          card.statementDue = 0;
          card.minDue = 0;
          card.isPaid = true;
        } else {
          card.statementDue = Math.max(0, card.statementDue - paidAmount);
          card.minDue = 0;
        }

        state.transactions.unshift({
          id: `tx-pay-${Date.now()}`,
          merchant: 'Payment received — thank you',
          category: 'Payment',
          categoryIcon: 'payment',
          amount: paidAmount,
          cardId: card.id,
          cardName: card.name,
          rewardText: card.autoPay ? 'Auto-pay adjusted' : 'Direct payment',
          date: 'Just now'
        });

        calculatePortfolioTotals();
        refreshCardBalances();
        renderBillsTimeline();
        renderTransactions();
        closePaySheet();
        showToast(`${dollars(paidAmount)} paid · ${isStatement ? 'statement settled' : 'minimum met'}`, 'success');
      }, 700);
    });

    const toggleTheme = () => {
      state.isDark = !state.isDark;
      document.body.classList.toggle('theme-dark', state.isDark);
      dom.appThemeIcon.textContent = state.isDark ? '☀' : '☾';
      dom.desktopThemeIcon.textContent = state.isDark ? '☀' : '☾';
      dom.desktopThemeText.textContent = state.isDark ? 'Dark' : 'Light';
    };

    dom.btnDesktopThemeToggle.addEventListener('click', toggleTheme);
    dom.btnAppThemeToggle.addEventListener('click', toggleTheme);

    dom.btnDesktopA11yToggle.addEventListener('click', () => {
      state.isLargeText = !state.isLargeText;
      document.body.classList.toggle('accessibility-large-text', state.isLargeText);
      dom.btnDesktopA11yToggle.classList.toggle('active', state.isLargeText);
      dom.a11yLabel.textContent = state.isLargeText ? 'Standard text' : 'Large text';
      showToast(state.isLargeText ? 'Large text enabled' : 'Standard text', 'info');
      if (state.isMontageMode) renderMontageView();
    });

    dom.presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const widthAttr = btn.getAttribute('data-width');
        if (widthAttr === 'montage') {
          state.isMontageMode = true;
          dom.deviceShell.style.display = 'none';
          dom.montageWrapper.classList.remove('hidden');
          renderMontageView();
          showToast('Montage view · all four screens', 'info');
        } else {
          state.isMontageMode = false;
          dom.montageWrapper.classList.add('hidden');
          dom.deviceShell.style.display = 'flex';
          if (widthAttr === 'fluid') {
            dom.deviceShell.classList.add('fluid-mode');
            dom.deviceShell.style.width = '100%';
          } else {
            dom.deviceShell.classList.remove('fluid-mode');
            dom.deviceShell.style.width = `${widthAttr}px`;
          }
        }
      });
    });

    dom.btnQuickInsights.addEventListener('click', () => {
      const util = state.cards.reduce((sum, c) => sum + c.balance, 0) / state.cards.reduce((sum, c) => sum + c.limit, 0) * 100;
      const auto = state.cards.filter(c => c.autoPay).length;
      showToast(`Portfolio health · ${util.toFixed(1)}% used · ${auto} auto-pays active`, 'success');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && closeTopSheet()) {
        e.stopPropagation();
      }
    });
  }

  // ==========================================================================
  // HELPERS
  // ==========================================================================
  function rewardKey(category) {
    const key = String(category).toLowerCase();
    if (key === 'travel') return 'flights';
    if (key === 'restaurants' || key === 'bars') return 'dining';
    if (key === 'supermarkets') return 'groceries';
    return key;
  }

  function getCategoryIcon(category) {
    const key = String(category).toLowerCase();
    if (key === 'groceries') return 'groceries';
    if (key === 'dining') return 'dining';
    if (key === 'travel' || key === 'flights') return 'travel';
    if (key === 'online') return 'online';
    if (key === 'fuel') return 'fuel';
    if (key === 'streaming') return 'streaming';
    if (key === 'payment') return 'payment';
    return 'general';
  }

  function money(value, decimals = 2) {
    const num = Number(value);
    if (!Number.isFinite(num)) return (0).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function dollars(value, decimals = 2) {
    return `$${money(value, decimals)}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
