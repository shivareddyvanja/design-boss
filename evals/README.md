# Evaluation Suite

The evaluation suite measures whether the skill improves decisions and rendered output, not whether an agent repeats specific wording.

## Run a comparison

For each case in `cases.json`:

1. Use the same capable model, tools, time budget, and starting workspace. For cases with `fixture`, copy the referenced directory to an isolated workspace for each run. For cases requesting a supplied system without a fixture, supply the same representative system to each variant and record it; do not claim the case is runnable until that fixture exists.
2. Run the previous skill version and the revised version; optionally add a no-skill baseline. Preserve the exact version or commit for each run.
3. Require the same artifact type and viewport captures.
4. Randomize labels so reviewers do not know which result used the skill.
5. Check hard invariants before asking for aesthetic preference.
6. Ask at least three reviewers to choose A, B, or tie for task clarity, product fit, visual quality, and overall preference.
7. Record evidence, not only scores.

Do not tune the skill against every evaluation case and then report the same cases as held-out evidence. Keep at least one case per category unseen during instruction changes.

The demo-based cases use the same fixture that informed this revision. They are regression cases, not held-out evidence. Add and reserve fresh, unseen cases before assessing generalization. Record which cases were run; the case definitions alone do not demonstrate improvement.

## Hard gates

- Artifact opens or builds and produces the required render.
- Required content, states, and actions are present.
- No clipped or overlapping task-critical content.
- Contrast and target-size requirements are met for the chosen target.
- Existing components and tokens are reused where the case requires them.
- Task completion has no dead end.
- Important actions, shared values, and relevant states are coherent or explicitly marked as unverified assumptions.

A hard-gate failure cannot be offset by a high aesthetic score.

## Reviewer questions

Score 1–5 and explain:

- Can you identify the screen's purpose and next action immediately?
- Does the hierarchy guide attention in the intended order?
- Does the design feel specific to the product and audience?
- Is the composition visually resolved at the target viewport?
- Does the design have a relevant point of view without gimmicks?
- Would you trust this as a credible production direction?
- For multiple screens, do layouts suit different tasks while retaining a coherent product system?
- Is a persistent action understandable and consistent across the screens where it appears?

For small-edit cases, check that the agent completes the requested change without a full concept exercise, a needless redesign, or changes outside scope. For critique cases, check that it reports actionable evidence without changing the artifact.

Then choose which version is stronger overall and why.

## Metrics

- Hard-gate pass rate.
- Blind win/tie/loss rate.
- Median reviewer score by dimension.
- Inter-reviewer agreement.
- Number of template-gravity flags.
- Number of visual revision passes.
- Component/token reuse rate for extension cases.
- Multi-screen coherence and meaningful compositional variety, scored separately.
- Product-logic defects and unsupported assumptions caught.
- Unnecessary work or out-of-scope changes on small edits.
- Time and tool calls to accepted output.
- Modules and sections actually loaded per stage, repeated reads, and context/token use where the runtime exposes it. Record unavailable metrics as unknown, not zero.
- Whether the agent revisited the stage that caused the highest-impact issue and compared the revision with prior visual evidence.

## Routing checks

On each run, record the task route and resources actually read. A small edit should avoid unrelated direction, platform, and adapter modules; a critique-only task must not modify the fixture. An iOS-only task should not need Android guidance, and a selected Figma task should not need the OpenPencil adapter. For substantial work, verify that discovery, relevant behavior and accessibility, visual review, and the diagnose–revise–compare loop occur at the stage where they are needed; skipping a stage is acceptable only when it does not apply or is explicitly unavailable and reported. Source inspection alone is not a visual review.

For redesign cases, compare both the old and new captures against the stated highest-impact issue. Label or copy changes do not demonstrate that a structural problem was solved. When a revision does not address that issue, record it as unresolved rather than crediting the pass.

## Redesign outcome and regression checks

Before execution, record the case's observable outcomes and capture the original screens where available. Compare the same screens, viewport sizes, content, scroll positions, and states across versions; note any mismatches. For each outcome, independently record resolved, partially resolved, unresolved, or unverified and cite visible or behavior evidence. Score feature capability, content clarity, interaction, composition, identity, and system coherence separately so an added feature cannot mask an unchanged structural problem.

Check the revised captures and exercised interactions for new clipping, overflow, awkward wrapping, obscured controls, inconsistent data, and broken states. Trace representative actions through the actual prototype or implementation when available; screenshots alone cannot prove backend behavior. Record unavailable checks as unverified.

Capture the agent's resource-read trace when supported. Compare files and sections actually loaded, repeated reads, and token usage for a small edit, single-screen critique, multi-screen critique, and substantial redesign. Record the source skill version and whether references were automatically loaded. File sizes and index links alone do not establish context savings.

For interactive cases, check whether applicable states and triggers were identified, which were rendered versus behaviorally verified, and which remain unverified. For visual rewrites, compare affected actions, transitions, and data contracts before and after; do not equate retained IDs with preserved behavior. Record structural passes separately from polish batches and whether the final affected result was verified. Check that artifact and handoff claims are supported by the evidence. These are evaluation questions, not evidence that a run has occurred.

An initial release target is at least 90% hard-gate pass rate and at least 65% blind wins against the no-skill baseline. Recalibrate only after recording the initial baseline and before tuning.

