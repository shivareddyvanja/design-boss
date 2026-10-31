# Aether Wallet — Mobile Design Craft Demo (v0.4 — Card Index)

A production-grade mobile prototype demonstrating the **`mobile-design-craft`** Agent Skill in action. It models a multi-card financial companion managing credit cards, rewards optimization, billing schedules, and transaction capture.

The demo was completely rebuilt following the **`mobile-design-craft`** workflow, addressing all anti-template flags, product-logic invariants, accessibility stress requirements, and multi-screen review standards.

---

## 1. Skill Workflow Application

### Step 1: Bounded Problem & Screen Jobs
- **Target Audience**: Active cardholders managing 2–6 credit cards who need to avoid interest/late fees, optimize category rewards at checkout, and review account activity.
- **Surface**: High-fidelity mobile HTML/CSS/JS prototype with responsive device shell:
  - iPhone SE (375px compact)
  - iPhone 16 (393px standard)
  - Pro Max (430px large)
  - Fluid Full
  - **Multi-Screen Montage Mode** (all 4 principal screens side-by-side at comparable scale for instant visual review)
- **Primary Screen Jobs**:
  1. **Cards & Portfolio**: Instant credit portfolio health, utilization tier, tactile card carousel with biometric CVV security, and urgent bill ticker.
  2. **Smart Swipe Optimizer**: Rapid decision at checkout: *"Which card should I swipe right now?"* with transparent reward calculations and a wallet-wide stack ranking.
  3. **Bills & Due Dates**: Chronological statement schedule with explicit auto-pay conflict protection and timeout recovery testing.
  4. **Activity Ledger**: Unified chronological ledger with contextual AI SMS capture, manual expense logging, and filterable transaction history.

---

### Step 2: Visual Context & DNA
- **Preserve**: Recognizable physical card identities (Amex Gold, Chase Sapphire Reserve, Apple Card, Venture X); tabular figures for money; a card deck that can be flipped and frozen; the four core jobs (portfolio, swipe advice, bills, activity).
- **Flex**: Grouping models (typographic alignment and hairline rules replace nested rounded cards); layout adaptation under Dynamic Type text scaling.
- **Avoid**: Generic dashboard card grids, emoji iconography, decorative gradients on every surface, plaintext sensitive data, and ambiguous reward claims.

### Art direction: Card Index
A warm paper-and-ink editorial system that treats the wallet like a well-set index page. Serif display type (`Fraunces`) carries the headlines, `Manrope` handles body copy, and `IBM Plex Mono` keeps every figure aligned. One burnt-vermilion signal colour (`#A6331B`) marks the next action; a dark inverted “Next move” panel gives the wallet a focal point. The physical card deck stays tactile, but the surrounding UI is flat, ruled, and typographic rather than card-inside-card.

### Step 3: Direction Cards Explored

```text
Direction A: Card Index (Selected)
Thesis: A warm editorial financial index. Paper, ink, one signal colour, and a physical card deck.
Focal point: Portfolio balance -> inverted Next Move panel -> tactile card deck.
Reading path: What do I owe next -> which card is in my hand -> what changed in the ledger.
Composition: Single-column mobile scroll with a native four-tab bottom bar.
Type strategy: Fraunces display, Manrope body, IBM Plex Mono figures.
Colour/surface: Ink #171511 on paper #F3EFE6, accent #A6331B, functional green/amber/red.
Signature moment: A card that flips in place to reveal a masked CVV behind a simulated biometric reveal.
Why it fits: Specific to a wallet, readable at a glance, and free of dashboard-template gravity.
```

```text
Direction B: Cash Flow Stream (Discarded)
Thesis: Outflow timeline and point accrual first; cards reduced to coloured pills.
Tradeoff: Felt like an accounting spreadsheet rather than a wallet you carry. Discarded.
```

```text
Direction C: Dark Concierge (Discarded)
Thesis: Near-black surfaces with metallic card art and a premium concierge voice.
Tradeoff: Dramatic, but reduced legibility for bills and made everyday scanning slower. Kept dark mode as an option instead.
```

---

## 2. Anti-Template Audit & Resolutions

| Template Gravity Flag | Previous State | Resolved State in v0.4 |
| :--- | :--- | :--- |
| **Floating Action Anti-pattern** | Floating center `+` FAB punched through the iOS bottom tab bar, offering an irrelevant action on Bills/Perks tabs. | **Removed**. Replaced with platform-standard 4-tab iOS bar. Transaction logging is placed contextually in the Activity ledger header (`[✨ AI Scan]` and `[+ Log]`). |
| **Card-Inside-Card Boxing** | Every widget was a rounded white box with drop shadows, flattening visual hierarchy. | **Typographic & Divider Grouping**. Sections use subtle borders, alignment, and hairline separators, reserving card elevation for physical cards and urgent alerts. |
| **Decoration before Hierarchy** | 3D card flipping displayed plaintext CVV with zero security protection and DOM resets. | **In-Place Flip & Sensitive Masking**. CVV and card numbers are masked (`••••`). Flip operates in-place without scroll reset. Simulated Face ID reveals credentials for 30s with live countdown. |
| **Unexplained Calculations** | Optimizer claimed "8.0% Effective" with 4x points without explaining valuation assumptions. | **Transparent Math & Wallet Stack Ranking**. Shows `4.0 pts/$1 × 2.0¢/pt baseline travel partner redemption = 8.0% return`, alongside a full 4-card stack ranking for the chosen category. |
| **Placeholder Copy & Brevity** | Short merchant names ("Nobu") and zero error handling. | **Stress Content & Honest Error Recovery**. Added long merchant strings (`Trader Joe's Wine & Spirits #402 - Lower Manhattan`), SMS parse error banners with direct recovery actions, and a simulated bank timeout test. |
| **Isolated Screen Review** | Single phone preview only, requiring manual switching to compare screens. | **Multi-Screen Review Montage**. Added a one-click montage mode rendering all 4 principal screens side-by-side in parallel viewports. |

---

## 3. Product Logic & Hard Invariants Fulfillment

1. **Auto-Pay Conflict Resolution**:
   - The urgent bill widget and statement timeline explicitly note when auto-pay is active (`Scheduled from Chase Checking (...8921)`).
   - Opening the payment sheet displays an explicit notice:
     > *"⚠️ Auto-Pay Protection Active: An automatic payment from Chase Checking (...8921) is scheduled for Nov 4. Authorizing this payment now will adjust the scheduled auto-pay for this statement to $0.00 to prevent double debits."*
2. **Cross-Screen State Consistency**:
   - When a payment is executed, it updates:
     - Card balance (reduced immediately).
     - Statement status (marked Paid with green checkmark, auto-pay adjusted note).
     - Total Portfolio Balance (recalculated).
     - Credit Limit Utilization (recalculated).
     - Urgent Bill Widget (advances to next pending bill or displays *"All Statements Settled • Zero Interest Secured"*).
     - Bills Due Timeline (marks card as settled and disables payment button).
     - **Activity Ledger**: automatically inserts a `Payment Received — Thank You` transaction with credit badge and auto-pay adjustment note!
3. **Sensitive Information Protection**:
   - Masked CVV (`••••`) and virtual card numbers.
   - Tap-to-authenticate Face ID trigger reveals credentials for 30 seconds with an auto-hide countdown.
   - One-tap clipboard copy with toast confirmation.
4. **Stress Testing & Accessibility**:
   - **Dynamic Type (Large Text)**: Toggleable from the desktop preview toolbar (`[🔍 Large Text]`), scaling typography to 18px+ without clipping or overflowing layout containers.
   - **Failure Recovery**: Test invalid / verification code SMS in AI parser to verify the error recovery banner with action buttons.
   - **Bank Gateway Timeout**: Checkbox in Payment modal to test bank API network failure and recovery without debiting accounts.
   - **Multi-Screen Montage**: Inspect all 4 screens side-by-side at comparable scale.

---

## 4. WCAG AA Contrast Verification

Verified with `scripts/contrast_check.py` against the Card Index palette (light mode unless noted). All UI text pairings meet the 4.5:1 AA threshold for normal text.

| Element | Foreground | Background | Contrast |
| :--- | :--- | :--- | :--- |
| Primary text | `#171511` | `#F3EFE6` | **15.89 : 1** |
| Secondary text | `#5A554A` | `#F3EFE6` | **6.46 : 1** |
| Muted text | `#696356` | `#F3EFE6` | **5.20 : 1** |
| Muted on sunken surface | `#696356` | `#E8E2D5` | **4.62 : 1** |
| Accent / signal | `#A6331B` | `#F3EFE6` | **5.88 : 1** |
| Accent on soft accent | `#A6331B` | `#F0DCD2` | **5.10 : 1** |
| On-accent (button label) | `#FFF9F1` | `#A6331B` | **6.45 : 1** |
| Positive / rewards | `#276749` | `#F3EFE6` | **5.86 : 1** |
| Warning / due soon | `#8A4B0F` | `#F3EFE6` | **5.91 : 1** |
| Danger / error | `#A4262C` | `#F3EFE6` | **6.33 : 1** |
| Inverted panel text | `#F6F1E6` | `#1B1915` | **15.58 : 1** |
| Inverted panel muted | `#C9C1B4` | `#1B1915` | **9.84 : 1** |
| Dark mode primary | `#F3EFE6` | `#12110E` | **16.45 : 1** |
| Dark mode muted | `#A99F90` | `#12110E` | **7.24 : 1** |
| Dark mode accent | `#FF8A6B` | `#12110E` | **8.18 : 1** |
| Gold card text | `#17130B` | `#9A783F` (darkest stop) | **4.52 : 1** |

Card artwork micro-labels use the same ink at full opacity. The desktop badge reads “AA text · 4.5:1” to state the verified claim precisely.

---

## 5. Screenshots and Automated Capture

All review states live in `demo/screenshots/` (18 PNGs):

- `01`–`09`: wallet, optimizer, bills, and activity at top and lower scroll positions
- `10`–`13`: AI capture, AI error, payment sheet, perks sheet
- `14`–`16`: dark wallet, large-text wallet, 375px wallet
- `17`: four-screen montage overview (optional)
- `18`: 375px activity check for the compact header

Regenerate them with the dependency-free Chrome CDP script:

```bash
node scripts/capture_demo.mjs
```

The script starts its own local server on port `8099`, launches headless Chrome, drives the real UI, and overwrites the PNGs. Pass `--url http://localhost:8080` to capture an already-running server instead.

---

## 6. How to Run and Test

Open `demo/index.html` in any web browser or serve locally:

```bash
cd demo
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.

### Key Interactive Flows to Verify:
1. **Multi-Screen Montage**: In the desktop toolbar, choose **Montage** to compare all four screens at once.
2. **Card deck**: Swipe between cards; use **Details** to flip, **Perks** for benefits, and **Freeze** to lock a card.
3. **Biometric CVV**: Flip a card, tap **Show**, and watch the 30-second countdown relock the code.
4. **Rewards optimizer**: On **Swipe**, change category chips, edit the spend amount or presets, and inspect the pick plus the four-card ranking.
5. **Auto-pay conflict**: On **Bills**, pay the Amex statement early; the sheet explains that auto-pay will be adjusted to $0.00.
6. **Payment timeout**: Tick the simulated-error option in the payment sheet and authorize to see the recovery banner.
7. **Capture recovery**: On **Activity**, tap **Scan**, try the invalid-SMS sample, then recover with manual entry or a real sample.
8. **Accessibility**: Use **Large text** and the theme toggle in the desktop toolbar; verify reflow and contrast.
