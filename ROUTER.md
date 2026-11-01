# Design Boss Router

Use this router with [SKILL.md](SKILL.md). Classify the task and follow the applicable stages. Load a linked module or section when the decision arises; reuse already-read guidance. If an agent cannot read sections selectively, read the linked file. Revisit earlier stages when review reveals a specific defect, not as a fixed repeated sequence.

## Task routes

| Request | Route |
| --- | --- |
| New screen or app | Discover → explore when visually open → build → review → revise if needed |
| Extend an existing product | Inspect existing system → define content and states → build within the system → review |
| Redesign | Inspect and diagnose → define outcomes → capture baseline where possible → explore appropriate alternatives → build → compare and check regressions |
| Narrow edit | Inspect affected context → make the requested edit → verify the affected behavior and layout |
| Critique only | Inspect and review evidence → report prioritized findings; do not modify |

For a narrow edit, load only relevant guidance, do not force direction cards or a whole-app audit, and do not expand scope. If a task turns out to require a broader product decision, flag that decision rather than silently redesigning.

### Calibrate scope

- **Narrow:** a label, spacing, or one localized state; inspect and verify the affected behavior and layout.
- **Screen-level:** a new screen, meaningful redesign of one screen, or flow extension; inspect relevant context, interactions, and states. Treat visual direction as open only when the request and existing system leave it open.
- **Multi-screen/system:** a flow, several screens, or a shared component/system change; consider cross-screen consistency, state coverage, and comparable renders.

"Substantial" means screen-level or multi-screen work that changes information hierarchy, interaction, or visual direction; it is not defined solely by screen count. Scale review to the task's risk and requested output. Critique remains read-only at every scope.

## Stage index

### 1. Discover and diagnose

- New work or visual DNA: [discovery](references/discovery.md).
- Existing screen or app critique: [single-screen critique](references/critique-screen.md); for several screens also use [multi-screen review](references/critique-system.md). The skill's installation README is for people installing it; inspect a project or demo README only when it provides relevant product context.
- Separate issues into copy, interaction, composition, visual identity, and system consistency. Identify the highest-impact issue and what would visibly demonstrate it is fixed.
- For a substantial redesign, create the concise [redesign acceptance contract](references/redesign-review.md) before editing. Identify observable outcomes for the actual request, and capture baseline screens/states when feasible. Do not introduce a mandatory document for a narrow edit or critique.

### 2. Explore and decide

- For visually open substantial create or redesign work, read [direction cards and structural difference](references/art-direction.md#direction-cards) and [selection](references/art-direction.md#selection). Compare two or three structurally distinct directions; at least one should explore grouping without relying primarily on a card stack. Do not force this on an established system or a narrow change.
- Select a suitable direction autonomously and continue unless the user asks to choose or an unresolved product decision materially changes the result. Briefly explain the selected direction in the handoff when relevant.
- For content hierarchy and surface choices, use [composition and surfaces](references/composition-surfaces.md); load [responsive composition](references/composition.md) when layout adaptation or stress testing is relevant. Keep a short working record of screen jobs, selected thesis, focal points, product-derived decisions, rejected tradeoff, and any persistent global action's purpose; it need not be user-facing.
- When redesigning a diagnosed composition problem and visual direction is open, compare alternatives that change at least two relevant structural decisions, as explained in [redesign review](references/redesign-review.md). Respect fixed brand, accessibility, and existing-system constraints.
- For product logic and tracing important actions use [product integrity](references/product-integrity.md). Load [interaction and states](references/interaction.md) when the task needs deeper control, input, gesture, or motion guidance. Base assertions on actual evidence; flag unknowns.
- For substantial interactive work, make a compact working inventory of applicable screen states and triggers before building; see [state inventory](references/interaction.md#state-inventory). Record what was rendered, behaviorally verified, or not checked. Do not generate unrelated states or a formal document for a narrow edit.

### 3. Build

- Honor the requested output and reuse appropriate existing components and tokens. When creating or editing an artifact, use the [adapter index](references/adapters.md) to select and read the guidance for the chosen surface; skip unrelated adapters. For a narrow edit, load adapter details only if needed. Do not install tools or add dependencies without the relevant authorization.
- For platform behavior read [iOS](references/platform-ios.md), [Android](references/platform-android.md), or both as applicable. For all relevant output, apply [accessibility and adaptation](references/platform-and-accessibility.md); use its index for web, RTL, contrast, or responsive needs.
- Address realistic content and the applicable states. Distinguish a concept, prototype, and implementation; do not imply an unbuilt interaction works.
- Before rewriting a visual layer, inventory affected actions, state transitions, data contracts, and integrations; preserve and verify them unless the user requested a behavior change. See [behavior preservation](references/product-integrity.md#preserve-behavior-during-visual-work).

### 4. Render and review

For substantial high-fidelity work, inspect an actual render at a small supported phone and the primary target; add a large-text or long-content case when relevant. Include a relevant error or other state when it affects the task. Add dark mode, RTL, landscape, or expanded screens only when supported or relevant. Use [single-screen critique](references/critique-screen.md) and load the [visual critique index](references/visual-critique.md) only if a detailed scorecard or additional guidance is useful.

First check for the project's existing preview, simulator, screenshot, or browser tooling; use a suitable available renderer for the chosen surface. If rendering is unavailable, complete relevant checks that the environment supports, such as build or structural checks, interaction tests, or solid-color contrast calculations. Deliver the requested artifact where possible and explicitly mark visual review and any other unavailable checks as unverified. These fallback checks do not substitute for inspecting rendered pixels. Do not install tools or change the output surface without the appropriate authorization.

For multiple principal screens, compare existing captures or previews using [multi-screen review](references/critique-system.md). View them side by side when convenient, or inspect them sequentially; a montage is optional and not a required deliverable. Do not build montage tooling or create a separate montage solely to satisfy this workflow. If no usable visual evidence is available, report that visual review is unverified. Trace important product behavior using [product integrity](references/product-integrity.md); do not infer that an unseen interaction works or fails from a screenshot alone.

For redesigns, use [redesign review](references/redesign-review.md): compare equivalent before-and-after screens, viewport sizes, scroll positions, content, and states where possible; evaluate each acceptance outcome; and check for new regressions. Distinguish feature, copy, interaction, composition, identity, and system changes. A label change alone does not resolve a structural problem. If an equivalent capture or behavior check is unavailable, record what is missing and mark the affected outcome unverified.

### 5. Diagnose → revise → compare

Order findings by impact. For each important unresolved finding, record evidence, the change intended to fix it, and the affected stage. Return to that stage, make the change within the user's requested scope, render again, and compare against the prior evidence:

| Finding | Return to |
| --- | --- |
| Ambiguous action, conflicting state, misleading value, or missing recovery | Interaction and product integrity |
| Generic or unfocused visual character | Direction and composition |
| Repeated layouts that do not fit different screen jobs | Composition and multi-screen review |
| Clipping, obscured action, or text stress failure | Composition, platform, and implementation |
| Contrast, semantics, touch, or focus failure | Accessibility and implementation |
| Minor visual inconsistency | Relevant visual critique section |

For substantial visual work, two or more distinct unexplained [template signals](references/critique-screen.md#template-signals) require a substantive revision and another visual review. A familiar pattern justified by the product is not an unexplained flag. Count separate problems, not repeated instances of one problem. Assess whether the underlying issue improved; extra labels, colors, or boxes alone do not fix structural monotony.

A structural pass changes a hierarchy, composition, interaction, or visual direction; a polish batch groups smaller copy, formatting, or spacing fixes. Normally allow up to two structural passes, continuing if a specific unresolved issue is improving. Batch related polish and perform a final affected render or test when the changes could affect layout or behavior; do not rerender separately for every cosmetic edit. Stop when the required checks have passed, the main diagnosed problems are resolved or explicitly reported, and only preference-level issues remain. Do not treat clipped content, misleading values, accessibility, or broken behavior as cosmetic. If rendering or revision is unavailable, progress stalls, or the remaining issue requires an unavailable product decision, report the specific limitation and do not claim the check passed. For critique-only tasks, provide findings without editing the artifact.

## Delivery

Deliver the requested artifact or critique. Report the chosen direction if relevant, what was reviewed and at which sizes or states, whether the significant diagnosed issues improved, and unresolved assumptions or risks. For substantial work, keep a concise working record of checks, method or evidence, and status: verified, failed, or unverified. In the artifact and handoff, verify or qualify consequential claims such as production readiness, security, real-time behavior, or accessibility conformance; never silently expand the task into an unrelated audit. Keep reporting proportional to the task.
