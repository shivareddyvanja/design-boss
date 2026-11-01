# Mobile Design Craft Skill — Build Plan

## 1. Product decision

Build a new, agent-agnostic skill rather than adopting one existing skill unchanged.

Use the open Agent Skills format as the portable shell, borrow proven ideas from existing projects, and keep rendering integrations optional. The skill's core job is not to operate Figma or emit Flutter; it is to make better design decisions and verify the visual result. Editors and frameworks are adapters.

Working name: `design-boss`.

### Why this direction

Existing open-source skills are strongest at standards, tokens, platform correctness, and tool operation. They are much weaker at consistently producing a distinctive visual concept. A useful new skill should therefore combine:

1. Product and user-context reasoning.
2. Deliberate art direction rather than style-word prompting.
3. Mobile composition and interaction knowledge.
4. Product-specific visual memory when it exists.
5. Rendered visual critique and revision.
6. Deterministic checks for the parts that can actually be measured.

The differentiator is the loop `context -> directions -> commit -> render -> critique -> revise`, not a larger catalog of UI rules.

## 2. Intended users and jobs

The skill should work for Codex, Claude Code, Cursor, Gemini CLI, and other runtimes that support the Agent Skills convention or can read a `SKILL.md` directory.

It should handle four jobs:

| Mode | User intent | Expected result |
| --- | --- | --- |
| Create | Design a new mobile screen or flow | A deliberate visual direction plus an editable or implemented result |
| Extend | Add a screen to an existing product | A result that inherits the product's visual grammar and components |
| Redesign | Improve an existing screenshot or implementation | Diagnosed problems, a chosen redesign thesis, and a revised artifact |
| Critique | Review a mobile design | Prioritized, actionable feedback tied to user goals and visual evidence |

The core skill should remain independent of output surface. A task may end as a Figma/OpenPencil file, SwiftUI/Compose/Flutter/React Native code, HTML prototype, or a design specification.

## 3. Explicit non-goals for v1

- Do not become a general UX-research methodology.
- Do not reproduce Apple, Google, or WCAG documentation.
- Do not include hundreds of rules simply because they can be collected.
- Do not promise that a static rubric can measure beauty.
- Do not generate a full design system for every screen.
- Do not require a particular editor, MCP server, framework, or image model.
- Do not force multiple directions for tiny edits or well-established products.
- Do not output long design documents unless the user asks for a handoff.

## 4. Design principles for the skill itself

### 4.1 Taste is comparative

The agent should compare meaningfully different compositions before committing when the visual direction is open. Variants must differ in hierarchy, spatial structure, typography, imagery, and interaction emphasis—not merely color.

### 4.2 Product context outranks a house style

For an existing product, inspect and reuse its tokens, components, typography, icons, imagery, copy voice, and adjacent screens. For greenfield work, construct a small visual premise from the audience, task, content, emotion, and brand attributes.

### 4.3 Composition comes before decoration

The agent should decide the focal point, reading path, density, primary action, content grouping, and edge behavior before choosing gradients, shadows, radii, or illustration treatments.

### 4.4 One visual thesis, clearly executed

After exploration, select one direction and push it consistently. Do not average directions into a generic compromise.

### 4.5 Native behavior, branded expression

Navigation, gestures, system regions, input behavior, accessibility, and responsive adaptation should respect the target platform. Brand expression should come through type, color, composition, imagery, shape, and motion without breaking expected behavior.

### 4.6 Rendered evidence beats textual confidence

A high-fidelity task is not complete until the agent has rendered or captured the design at representative phone sizes and reviewed the pixels. If the environment cannot render, the agent must state that limitation rather than claim visual completion.

### 4.7 Automate facts; use judgment for aesthetics

Scripts should validate measurable facts such as token usage, contrast, touch-target size, overflow, missing states, and artifact structure. Visual hierarchy, novelty, coherence, and emotional fit require visual review.

## 5. Proposed package architecture

Use progressive disclosure so the default context stays small. Target a concise `SKILL.md` that routes to focused references.

```text
mobile-design-craft/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── discovery.md
│   ├── art-direction.md
│   ├── composition.md
│   ├── interaction-and-states.md
│   ├── platform-ios.md
│   ├── platform-android.md
│   ├── accessibility.md
│   ├── visual-critique.md
│   ├── output-contracts.md
│   └── adapter-guide.md
├── rubrics/
│   ├── visual-quality.yaml
│   ├── usability.yaml
│   └── implementation.yaml
├── scripts/
│   ├── validate_skill.py
│   ├── validate_brief.py
│   ├── audit_tokens.py
│   ├── audit_contrast.py
│   ├── audit_touch_targets.py
│   └── compare_renders.py
├── schemas/
│   ├── design-brief.schema.json
│   ├── direction.schema.json
│   └── critique.schema.json
├── evals/
│   ├── cases/
│   ├── baselines/
│   ├── expected-invariants/
│   └── scorecards/
└── assets/
    ├── reference-manifest.yaml
    └── sample-product-pack/
```

Only create files that earn their place during implementation. In particular, do not add scripts until a repeated deterministic check is defined.

### Portable core versus adapters

The core should produce a normalized design brief, a chosen direction, and a critique record. Adapters translate that intent to a tool.

```text
User request + product context
            ↓
Portable design core
  brief → directions → selection → quality gate
            ↓
Output adapter
  Figma | OpenPencil | code | HTML | specification
            ↓
Render/capture
            ↓
Portable visual critique and revision loop
```

The core must never assume adapter-specific tools exist. Each adapter declares capabilities such as `can_edit`, `can_render`, `can_inspect_tokens`, and `can_export`.

## 6. Runtime workflow

The workflow should scale with the task. A spacing fix should not trigger a full concept exercise; a greenfield home screen should.

### Stage A — Bound the task

Infer or establish:

- Product and screen purpose.
- Primary user and situation of use.
- Primary action and cost of error.
- Target platforms and implementation surface.
- Existing-product versus greenfield status.
- Required states, content, and data realism.
- Available design system, screenshots, code, assets, and tools.

Ask only for information that would materially change the result. Do not ask for vague style preferences if product context can produce a stronger premise.

### Stage B — Read the product's visual DNA

For an existing product, inspect a narrow set of relevant evidence:

- The two or three closest screens in the flow.
- Tokens and type scale.
- Reusable components and their variants.
- Icon and illustration language.
- Typical density, spacing rhythm, radii, borders, and elevation.
- Copy tone and recurring interaction patterns.

Summarize this as a compact `visual DNA` record: invariants to preserve, elements that can flex, and known inconsistencies to avoid copying.

For greenfield work, derive a premise instead: user need, emotional target, content character, brand attributes, and a small set of concrete visual consequences.

### Stage C — Form the content model before layout

Define real or realistic content, priority, states, and actions. Reject placeholder-driven composition. The amount, length, and variability of content should shape the design.

At minimum cover relevant ready, loading, empty, error, offline, permission, destructive-confirmation, and success states. Do not mechanically require states that cannot occur.

### Stage D — Explore directions

When visual direction is open, create two or three direction cards. Each card must include:

- A one-sentence thesis.
- Focal point and reading path.
- Layout/composition model.
- Type strategy.
- Color and surface behavior.
- Image/illustration role.
- Motion character where relevant.
- One deliberate signature moment.
- Risks and why it fits the task.

Directions must be structurally distinct. A rubric should reject variants whose only meaningful difference is palette or radius.

For established products or small changes, skip exploration and state why.

### Stage E — Select and commit

Choose a direction against four criteria:

1. Task clarity.
2. Product and audience fit.
3. Distinctiveness without novelty theater.
4. Feasibility on the target platform and output surface.

Record the rejected alternatives briefly. Then commit to one thesis; do not blend every attractive idea.

### Stage F — Build with system-aware constraints

- Reuse existing tokens and components when they fit.
- Extend the system deliberately when the concept needs it; name the gap.
- Use platform-native patterns for system behavior.
- Design for available width/height, safe areas, keyboard, text scaling, localization, and RTL where relevant.
- Prefer real content and production-feasible assets.
- Include interaction and state behavior, not only a resting screenshot.

### Stage G — Render and critique

Capture at least:

- One small phone width.
- One standard target phone.
- A large-text or long-content case when the screen contains substantial text.

Add dark mode, RTL, landscape, tablet, or foldable only when the product supports them or the task makes them material.

Critique the render in this order:

1. Three-second read: purpose, focal point, next action.
2. Composition: balance, rhythm, alignment, negative space, density.
3. Typography: hierarchy, measure, wrapping, weights, truncation.
4. Color and surfaces: contrast, role discipline, depth, visual noise.
5. Product character: does it feel specific or template-derived?
6. Interaction and state clarity.
7. Platform and accessibility integrity.
8. Production plausibility.

The critique must name evidence visible in the render and prescribe a change. Avoid comments such as “make it pop.”

### Stage H — Revise to a stopping condition

Perform up to two normal visual-revision passes. Continue only when a pass makes material progress. Stop when:

- No blocking usability/accessibility defect remains.
- The design's visual thesis is obvious and coherent.
- The primary hierarchy survives the required viewport and content tests.
- Remaining feedback is preference-level rather than defect-level.

Escalate to the user when two viable but materially different product choices remain, the design system blocks the chosen direction, or a required asset/decision is unavailable.

### Stage I — Deliver compactly

Lead with the artifact or implementation. Include only:

- Chosen direction and why.
- Important product/system decisions.
- States and platform differences that need engineering attention.
- What was rendered and verified.
- Any unresolved risk.

Do not force the user to read the agent's entire process.

## 7. Anti-generic design mechanism

This should be a positive design method, not a giant negative prompt.

### Require specificity

Replace vague words with observable decisions:

| Vague | Concrete |
| --- | --- |
| Premium | Editorial type contrast, quiet surfaces, controlled density, one high-chroma action color |
| Playful | Rounded display type, asymmetrical image cropping, elastic micro-motion, warm semantic palette |
| Calm | Low contrast between nonessential surfaces, stable layout, restrained motion, generous reading measure |
| Bold | Oversized focal type, strong figure/ground separation, compressed supporting hierarchy |

### Detect template gravity

During critique, explicitly look for:

- A large greeting plus generic stat cards without task justification.
- Excessive rounded cards used as the only grouping mechanism.
- Gradient blobs, glass panels, or oversized illustrations added without semantic purpose.
- Every element centered or every section equally weighted.
- A floating primary button that conflicts with platform/task behavior.
- Repeated icon-plus-label rows where richer hierarchy is needed.
- Default blue/purple accent plus neutral sans typography with no product rationale.
- Placeholder copy that makes the layout appear cleaner than production content will be.

These are diagnostic signals, not universal bans. The agent may use any pattern when it can explain why the content and task call for it.

### Use references as principles, not style copies

A reference manifest should store metadata and observations, not scraped screenshots by default:

- Source and usage rights.
- Product category and platform.
- The design problem solved.
- Composition pattern.
- Why it works.
- What not to copy out of context.

User-provided or properly licensed images can live in `assets/`. Third-party app screenshots should not be redistributed in the skill without clear permission.

## 8. Quality model

Separate hard gates from scored judgment.

### Hard gates

- Artifact opens/builds and renders.
- No clipped or overlapping required content at target sizes.
- Required interaction states exist.
- Touch targets meet the target platform's guidance.
- Text/control contrast meets the chosen accessibility target.
- Screen-reader labels and focus order are defined when implementation is produced.
- No unapproved hardcoded values when an existing token system is in scope.
- Primary task is completable without a dead end.

### Scored dimensions

Score 1–5 with evidence:

| Dimension | What a 5 means |
| --- | --- |
| Task clarity | Purpose and next action are immediately legible |
| Information hierarchy | Attention follows the intended order without competing focal points |
| Composition | Spacing, rhythm, alignment, density, and scale feel intentional |
| Product fit | The result reflects the audience, brand, content, and surrounding product |
| Distinctiveness | It has a memorable, relevant point of view without gimmicks |
| Typography | Type roles, measure, wrapping, and contrast carry hierarchy effectively |
| Interaction quality | States, feedback, gestures, and recovery are coherent |
| Platform fit | It behaves naturally on iOS/Android while retaining brand character |
| Accessibility | It remains usable with assistive settings and nonideal input/vision conditions |
| Production realism | Content, assets, component reuse, and implementation choices are credible |

Do not collapse these into one magic score. A design with an accessibility hard-gate failure does not pass because its aesthetic average is high.

## 9. Evaluation strategy

The skill needs a repeatable benchmark from the beginning. Otherwise it will accumulate rules without evidence that output improves.

### Evaluation set

Start with 12 prompts across four groups:

1. Greenfield: finance, wellness, travel, creator tool.
2. Existing-system extension: add a screen using supplied tokens/components/screenshots.
3. Redesign: visually generic or hierarchy-broken screens.
4. Stress cases: localization, large text, error recovery, dense data.

Each case should contain:

- The raw user request.
- Minimal product context and realistic content.
- Required outputs.
- Hard invariants.
- Hidden stress cases.
- Baseline artifact from the same model without the skill.

### Comparison method

Run blind A/B comparisons where reviewers do not know which artifact used the skill. Ask at least three reviewers to choose on task clarity, product fit, visual quality, and preference, then explain the choice. Track inter-reviewer agreement rather than pretending aesthetics are objective.

Also measure:

- Hard-gate pass rate.
- Number of visual revision cycles.
- Token/component reuse rate for existing products.
- Time/tool calls to acceptable output.
- Rate of generic-pattern flags.
- Reviewer preference over baseline.

### Initial success bar

For a v1 release:

- 100% of benchmark artifacts render or open successfully.
- At least 90% pass all non-subjective hard gates.
- Skill output wins at least 65% of blind comparisons against the no-skill baseline.
- No more than 20% of outputs trigger two or more template-gravity flags.
- Existing-product tasks reuse suitable provided components/tokens at least 90% of the time.

The exact thresholds can be recalibrated after the first baseline run, but they must be fixed before tuning against the evaluation set.

## 10. Implementation roadmap

### Phase 0 — Baseline and corpus (2–3 days)

Deliverables:

- Select 8 of the eventual 12 evaluation prompts.
- Generate no-skill baseline outputs with one primary model and output adapter.
- Define the hard-gate checklist and reviewer scorecard.
- Curate 15–25 legally usable references or reference observations.

Exit criterion: the team can explain the five most common failure modes using actual rendered examples.

### Phase 1 — Portable core MVP (4–6 days)

Deliverables:

- `SKILL.md` with mode routing and the adaptive workflow.
- `discovery.md`, `art-direction.md`, `composition.md`, and `visual-critique.md`.
- Normalized design-brief and direction schemas.
- One output contract for code or HTML prototypes.
- Skill-format validation.

Exit criterion: an agent can complete create, extend, redesign, and critique tasks without tool-specific instructions in the core.

### Phase 2 — First rendering adapter and visual loop (4–6 days)

Choose exactly one adapter for development speed. Recommended starting order:

1. HTML/mobile viewport if the priority is fast, reproducible automated evaluation.
2. OpenPencil if the priority is editable design artifacts and open tooling.
3. Figma if the priority is existing design-system integration.

Deliverables:

- Adapter instructions and capability declaration.
- Deterministic render/capture command.
- Small/standard/large-text captures.
- Structured critique record and two-pass revision behavior.

Exit criterion: every evaluation case produces comparable screenshots and an inspectable final artifact.

### Phase 3 — Platform and accessibility packs (3–5 days)

Deliverables:

- Focused iOS and Android references linked to official guidance.
- Accessibility reference.
- Contrast and target-size validators where artifact structure permits.
- Localization, Dynamic Type/font scaling, safe-area, keyboard, and RTL stress cases.

Exit criterion: the benchmark passes the hard gates without bloating the default skill context.

### Phase 4 — Existing-product intelligence (4–6 days)

Deliverables:

- Visual-DNA extraction contract.
- Component/token inventory format.
- Reuse-versus-extend decision rule.
- Sample product pack with components, tokens, screens, and a new-feature prompt.

Exit criterion: blinded reviewers identify the generated screen as belonging to the sample product, and component/token reuse meets the target.

### Phase 5 — Evaluation and tuning (3–5 days)

Deliverables:

- Full 12-case benchmark.
- Blind review results against baseline.
- Failure taxonomy with evidence.
- Narrow revisions to instructions, rubrics, or validators.
- Versioned v1 release candidate.

Exit criterion: the release meets the predeclared success bar on held-out or previously unseen prompts.

### Phase 6 — Additional adapters (after v1)

Add adapters only in response to real use:

- OpenPencil/Figma.
- SwiftUI.
- Jetpack Compose.
- Flutter.
- React Native.

Each adapter must reuse the same core brief, direction, and critique contracts. Avoid copying the full skill into framework-specific forks.

## 11. Open-source strategy

Study and selectively reuse ideas from:

- [Mobile App UI/UX Pro Max Skill](https://github.com/noumanzindani/mobile-app-uiux-pro-max-skill): progressive disclosure, atomic rules, deterministic validators, platform/framework packs. Apache-2.0.
- [mobile-ui-ux-designer](https://github.com/mdrmuhaimin/agentic-skills/blob/main/codex/mobile-ui-ux-designer/skill.md): task triage, state completeness, implementation contracts, approval gates. MIT metadata in the skill.
- [Pencil Skill](https://github.com/de-novo/pencil-skill): portable agent support, format-aware scripts, anti-generic checks. MIT.
- [OpenPencil](https://github.com/open-pencil/open-pencil): optional open, local-first, editable design surface with CLI/MCP and token analysis. MIT.
- [Mimic AI](https://github.com/miapre/mimic-ai): design-system discovery and real component/token reuse in Figma. MIT.

Prefer clean-room authoring from observed principles for the first version. If code or substantial text is copied or adapted, preserve the source license and attribution in a `NOTICE` file and document the origin at file level.

Do not vendor entire upstream rule libraries. They will age quickly, consume context, and obscure what actually improves outcomes.

## 12. Standards and source policy

Keep volatile platform details out of the main workflow. Link to and periodically review primary sources:

- [Open Agent Skills specification](https://openagentskills.dev/docs/specification)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Apple layout guidance](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Android adaptive layout guidance](https://developer.android.com/design/ui/mobile/guides/layout-and-content/adapt-layout)
- [Android accessibility guidance](https://developer.android.com/guide/topics/ui/accessibility/apps)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Version platform packs separately from the core workflow. Include a `last-reviewed` date and source URLs. Summarize decisions; do not copy standards documentation into the repository.

## 13. Key risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Rule volume makes the agent conservative | Keep the core small; route to references; distinguish hard gates from heuristics |
| “Anti-generic” becomes a fixed house style | Require context-derived theses and structurally distinct exploration; treat flags as diagnostic |
| Self-critique is overly generous | Use rendered evidence, deterministic gates, blind human A/B review, and held-out prompts |
| Tool lock-in | Normalize briefs/directions/critiques and isolate adapters |
| References cause imitation or copyright issues | Store observations and licensed assets; require transformation and context fit |
| Platform guidance becomes stale | Maintain small dated platform packs sourced from official docs |
| Workflow is too slow for small tasks | Triage by task scope and skip exploration/render variants when the change is narrow |
| Beautiful static screen but weak UX | Require state model, realistic content, task completion, and recovery checks |
| Technically correct but visually dull | Weight product fit, distinctiveness, typography, and composition in blind evaluation |

## 14. Decisions to lock before implementation

These do not block the architecture, but should be chosen at the start of Phase 1:

1. Primary first adapter: HTML, OpenPencil, or Figma.
2. Primary evaluation model and one secondary portability model.
3. Whether v1 produces design artifacts only or may also implement production code.
4. License for this repository; Apache-2.0 or MIT are the simplest candidates.
5. Public, product-neutral skill versus a product-specific edition layered on top.

Recommended defaults: HTML as the evaluation adapter, OpenPencil as the first editable-design adapter, one product-neutral core, optional product packs, and Apache-2.0 for explicit patent terms.

## 15. Immediate next milestone

Do not begin by writing the full skill. Begin with evidence.

1. Create eight representative prompts and realistic content packs.
2. Generate baseline mobile screens without the skill.
3. Review the renders and label recurring failures.
4. Write the smallest core instructions that directly address those failures.
5. Run the same prompts with the skill and compare blindly.

The first milestone is complete when the team has a baseline gallery, a failure taxonomy, and a compact MVP skill whose improvement can be measured.
