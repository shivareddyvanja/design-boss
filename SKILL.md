---
name: mobile-design-craft
description: Design, redesign, critique, or implement distinctive mobile screens and flows for iOS, Android, and cross-platform apps. Use for new mobile UI, extending an existing app, turning requirements into polished screens, improving generic-looking interfaces, or visually reviewing mobile implementations. Produces context-specific art direction, mobile interaction states, and rendered visual QA when tools permit. Do not use for desktop-only or general web design.
license: MIT
metadata:
  version: "0.5.2"
---

# Mobile Design Craft

Design mobile interfaces with a specific point of view, credible product behavior, and production-aware details. The result should fit the user, task, content, and product—not a house style or a template.

Read [ROUTER.md](ROUTER.md) to select the task route. Follow its stage-specific links and review loop. Load the relevant module or indexed section when needed; reuse guidance already in context and reread only if it is missing, the task changes, or a specific detail needs verification. Some agents load whole files even for section links; no particular tool or partial-read capability is required.

## Scope and behavior

- Match the user's requested artifact and platform. Create, extend, redesign, and critique are different tasks; critique alone does not authorize edits. A narrow change does not need multiple directions or a full redesign.
- For substantial visual work, derive the hierarchy from realistic content and the user's main job. Inspect an existing product's components and tokens before extending it. For visually open work, compare structurally distinct directions and choose one deliberately.
- For a substantial redesign, define observable outcomes for the highest-impact requested problems before editing. Compare the result with the original against those outcomes; report each as resolved, partially resolved, or unresolved, with evidence and any comparison limitations.
- Use available tools to render, inspect, and revise the result. For multiple screens, compare their consistency using available captures; a montage is optional. Review actual evidence, not source code alone or the agent's intention. If rendering, implementation, or a requested check is unavailable, describe the limitation and do not claim it passed.
- Check important actions, states, values, uncertainty, recovery, and sensitive information against available product evidence. Separate assumptions from verified behavior; do not invent functionality or guarantees.
- Before a visual rewrite, identify and preserve affected observable behaviors and data contracts unless the user requests a change; verify them afterward where possible.
- Preserve user instructions, product conventions, and applicable platform behavior. Do not force a new style or unfamiliar pattern solely for novelty. Ask for a decision when unresolved product behavior or a missing choice would materially invalidate the work.

## Quality gates

Before calling a substantial high-fidelity result complete, verify what can be verified:

- Purpose, next action, and hierarchy are clear; related actions and values are coherent across screens.
- Relevant loading, empty, error, disabled, permission, and recovery states are addressed. Do not mechanically add states that cannot occur.
- Required content is not clipped, overlapped, or obscured at the applicable phone sizes and with realistic or enlarged text.
- Applicable touch targets, contrast, semantics, focus order, and reduced-motion behavior are addressed. Color, gesture, and motion do not carry essential meaning alone.
- Existing components and tokens are reused where appropriate; new gaps are deliberate. An artifact opens, builds, or renders on the chosen surface.
- Visual character and grouping support the product. For substantial work, two or more distinct unexplained template signals require a concrete revision and another visual review; justified familiar patterns are not failures.

Do not report unverified gates as passing. Use `python3 scripts/contrast_check.py` for known solid hex colors where useful; it does not evaluate opacity, gradients, images, or rendered accessibility. For high-risk flows, surface the relevant assumptions and seek appropriate domain review before presenting work as production-ready.

Lead the final response with the requested artifact or findings, followed by the important design decisions, what was actually verified, and any remaining risk. Avoid mandatory process documents for a simple request.
