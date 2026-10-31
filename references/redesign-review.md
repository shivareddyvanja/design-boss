# Redesign Acceptance and Comparison

Use for a substantial redesign. For narrow edits, verify the specific requested change without a full contract. For critique-only work, recommend outcomes and do not alter the artifact.

## Before editing

Inspect the original artifact and identify the highest-impact problems in the request. Record a short working contract; it need not be a separate deliverable:

| Problem and evidence | Type | Observable outcome | How to verify |
| --- | --- | --- | --- |
| What is wrong, and where? | Feature, content, interaction, composition, identity, system, or accessibility | What user-visible behavior or visual relationship should change? | Matching render, interaction trace, or explicit unverified limitation |

Keep outcomes specific to the actual request. For example, when repetitive grouping is the problem, identify how affected screens should use different, task-appropriate hierarchy or grouping; do not prescribe a particular aesthetic. Treat an existing design system and user direction as constraints.

When a composition change is requested and the direction is open, compare alternatives that change at least two meaningful structural decisions: focal point, reading order, grouping, density, content/action relationship, or data presentation. A palette swap is not structural change. Choose one based on task fit and feasibility; do not force novelty into a stable product.

## Capture and compare

Capture the original and revised versions at the same affected screens, viewport sizes, scroll positions, content, and states where feasible. For a multi-screen task, compare the principal screens individually and assess consistency across them; a montage is optional. Include the relevant stressed content or text size and an important error state when they are in scope. Do not manufacture a baseline or imply matching views if capture is unavailable.

Assess changes separately: feature capability, content clarity, interaction behavior, composition, visual identity, and system coherence. A useful new feature or clearer label can improve a product while leaving a composition outcome unresolved. Do not count addition of explanations or extra surfaces as proof that structure improved.

For each contract outcome, classify it as **resolved**, **partially resolved**, or **unresolved**, and cite what changed in the comparable render or verified behavior. If the evidence is unavailable, mark the outcome **unverified** and state the limitation; do not infer success from code or the agent's intent. Apply the [single-screen](critique-screen.md) and, where applicable, [multi-screen](critique-system.md) reviews.

## Regression check and loop

After each material revision, check the affected result for newly introduced clipping, overflow, awkward wrapping, obscured controls, hierarchy changes, inconsistent values, degraded states, or broken interactions. For an apparent cut-off, check actual scroll or overlay behavior when possible before asserting it is defective. Use [product integrity](product-integrity.md) to trace important actions.

Return unresolved high-impact issues to the responsible stage, make a targeted change, render again, and compare with the previous capture and acceptance outcome. Continue while progress is meaningful and within scope. If evidence, tools, or a required product decision are missing, deliver what is complete and report the exact unresolved issue. Summarize the outcomes and verification in proportion to the user's request.
