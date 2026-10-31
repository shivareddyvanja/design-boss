# Discovery and Visual DNA

Use this reference when the task is greenfield, the brief is visually open, or the work must fit an existing product.

Index: [use situation](#start-with-the-use-situation) · [existing product and visual DNA](#existing-product-scan) · [greenfield premise](#greenfield-premise) · [content](#content-inventory) · [when to ask](#when-to-ask-the-user).

## Start with the use situation

Capture the smallest useful context:

| Question | Why it changes design |
| --- | --- |
| Who is acting? | Literacy, expertise, trust, and accessibility needs |
| Where and under what pressure? | Density, target size, interruption, one-handed use |
| What must they know or do next? | Focal point and primary action |
| What is the cost of error? | Confirmation, reversibility, warning strength |
| How often is this used? | Learnability versus efficiency |
| What content varies? | Wrapping, empty states, loading, localization |

Do not invent research findings. Label a product assumption as an assumption and keep it easy to revise.

## Existing-product scan

Inspect narrowly. Prefer evidence closest to the requested flow:

1. Two or three adjacent or functionally similar screens.
2. Design tokens and type styles.
3. Reusable components and meaningful variants.
4. Navigation and state-management conventions.
5. Icons, illustration, photography, and motion.
6. Production copy and localization files.
7. Current screenshots or renders when docs and implementation disagree.

Stop when the design problem is bounded. Do not inventory an entire application for one screen.

### Visual DNA record

Summarize observations under three headings:

**Preserve**

- Product-recognition cues.
- Proven navigation and interaction patterns.
- Token roles, typography, icons, imagery, and voice that are actively used.

**Flex**

- Areas with no established precedent.
- Components that permit variants.
- Density or composition that can change for the task.

**Avoid**

- Legacy inconsistencies.
- One-off values and duplicated components.
- Patterns that fail accessibility or the current content.

Distinguish an intentional invariant from repetition caused by historical accident.

## Greenfield premise

When no product system exists, produce a compact premise:

```text
User:
Situation:
Primary job:
Emotional target:
Content character:
Brand attributes:
Platform:
Visible consequences:
```

Translate attributes into interface behavior.

Example:

```text
Emotional target: Reassuring control during an unfamiliar medical appointment.
Visible consequences: Stable vertical rhythm, plain-language status first,
one strong next action, restrained color, no decorative motion, recovery copy
beside any failed task.
```

Avoid direction statements such as “modern and clean.” Ask what the user should feel and which visible choices create that feeling.

## Content inventory

Before layout, list content by function:

- Orientation: where am I?
- Status: what is true now?
- Decision: what do I need to choose?
- Action: what can I do next?
- Evidence: why should I trust this?
- Recovery: what if it fails?
- Education: what can be deferred?

Assign priority only relative to the screen's job. If everything is primary, the model is unresolved.

Use realistic content:

- Representative names, dates, prices, and values.
- Long but plausible labels.
- Zero, one, and many-item cases.
- Sensitive data only when safe and fictional.
- Localized expansion or RTL content when required.

## When to ask the user

Ask when the answer changes product behavior, such as:

- A destructive action is reversible or irreversible.
- A permission is required or optional.
- The primary user segment changes the navigation model.
- The product has a mandatory brand asset or typeface that is unavailable.

Do not block on:

- Exact radius or shadow preference.
- A named trend or style.
- Which of several equally feasible layout details the agent can evaluate visually.

