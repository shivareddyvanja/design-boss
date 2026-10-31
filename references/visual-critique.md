# Visual Critique and Revision

Use this reference after a render exists, for redesign work, or when the user asks for critique. Judge visible evidence rather than source-code intention.

Index: [single-screen review](critique-screen.md) · [evidence-based feedback](#evidence-based-feedback) · [scorecard](#scorecard) · [template signals](critique-screen.md#template-signals) · [multi-screen review](critique-system.md) · [redesign comparison](redesign-review.md) · [revision order](#revision-order) · [stopping rule](#stopping-rule).

## Inspection order

See [single-screen critique](critique-screen.md).

## Evidence-based feedback

Each critique item should contain:

```text
Priority: blocking | high | medium | polish
Evidence: what is visibly happening and where
Impact: what the user may misunderstand or struggle with
Change: a concrete revision
Keep: what should remain stable, if relevant
```

Bad: “The screen needs more visual interest.”

Better: “The headline, balance, and primary action use nearly equal size and contrast, creating three focal points. Keep the balance prominent, reduce the headline one role, and reserve the saturated color for Add money.”

## Scorecard

Score 1–5 only after identifying evidence. A 3 is competent but unremarkable; a 5 is unusually strong for the task.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Task clarity | Purpose/action unclear | Understandable with minor competition | Immediate and unmistakable |
| Hierarchy | Flat or chaotic | Functional ordering | Effortless intentional path |
| Composition | Broken rhythm/alignment | Competent structure | Controlled, distinctive balance |
| Product fit | Interchangeable template | Some contextual choices | Deeply specific to product/user |
| Distinctiveness | Generic or trend collage | Familiar but coherent | Memorable and relevant |
| Typography | Weak roles/readability | Solid functional system | Expressive and highly readable |
| Interaction | Dead ends/unclear states | Core behavior covered | States and feedback feel complete |
| Platform fit | Fights conventions | Mostly natural | Native behavior with brand character |
| Accessibility | Blocking failures | Baseline requirements met | Robust under stress settings |
| Production realism | Impractical/placeholder-led | Feasible | Credible, reusable, well resolved |

Do not average away a hard-gate failure. Record it separately and fix it.

## Template-gravity flags

See [template signals](critique-screen.md#template-signals).

## Multi-screen review

See [multi-screen critique](critique-system.md).

## Revision order

Revise from largest leverage to smallest:

1. Product behavior and missing content/state.
2. Focal point and reading path.
3. Grouping, density, and action placement.
4. Typography.
5. Color, surface, imagery, and motion.
6. Pixel polish.

Do not polish an unresolved composition.

## Stopping rule

Normally allow up to two structural passes, plus a batch of smaller fixes, when:

- No blocking usability or accessibility problem remains.
- The visual thesis is obvious and coherent.
- Hierarchy survives required viewport and content stress tests.
- Remaining feedback is preference-level.

Continue beyond two structural passes when a specific unresolved defect is likely to improve. Batch related polish and verify the affected result when changes could affect layout or behavior. Report unresolved or unverified issues rather than declaring them passed; see the [router](../ROUTER.md#5-diagnose--revise--compare).

