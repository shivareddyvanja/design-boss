# Interaction, States, and Motion

Use this reference for flows, controls, feedback, states, gestures, recovery, and motion.

Index: [action contract](#write-the-interaction-contract) · [product integrity](product-integrity.md) · [states](#state-model) · [state inventory](#state-inventory) · [inputs](#inputs-and-validation) · [navigation](#navigation-and-overlays) · [gestures](#gestures) · [motion](#motion) · [high-risk actions](#destructive-and-high-risk-actions) · [flow review](#flow-review).

## Write the interaction contract

For each important action, define:

```text
Trigger:
Precondition:
Immediate feedback:
State change:
Success result:
Failure and recovery:
Cancellation or undo:
Accessibility announcement:
```

Keep contracts proportional. Do not document obvious behavior that a native component already provides unless it is being changed.

## Product integrity

See [product integrity and action tracing](product-integrity.md).

## State model

Include states that can occur:

- Initial or ready.
- Loading or refreshing.
- Empty or first-use.
- Partial data.
- In progress.
- Success or completed.
- Validation error.
- Service or network error.
- Offline or stale.
- Permission denied or restricted.
- Disabled or locked.
- Destructive confirmation.

Every state should answer what happened, what remains possible, and what the user can do next. Do not turn every state into a full-screen illustration.

## State inventory

For a substantial interactive screen or flow, list only states that can actually occur, including relevant existing states that a visual rewrite could break. For each, note the screen/component, trigger or precondition, expected behavior, and verification status. Keep this as brief working context unless a handoff is requested.

Distinguish **rendered** from **behavior verified**: a screenshot can show a state without proving its trigger, recovery, or integration. Record untested states as unverified, with the reason. For a small change, check only affected states and behavior. Do not mechanically render every state, invent back-end capabilities, or remove edge cases merely to shorten the inventory.

### Honest feedback

- Use a determinate progress indicator only when progress is known.
- Preserve user input after recoverable failures.
- Explain disabled controls when the reason is not obvious.
- Label stale data rather than presenting it as current.
- Pair success animation with a durable text or state change.
- Make retry safe; avoid duplicate submissions.

## Inputs and validation

- Prefer appropriate platform controls and keyboard types.
- Place labels so they survive filled, focused, error, and autofill states.
- Validate at the earliest helpful moment, not on every keystroke by default.
- Put specific error text near the source and provide a summary when the form is long.
- Preserve values and focus after a failed submission.
- Do not rely on placeholder text as the label.
- Make formatting tolerant; store or normalize input rather than forcing fragile typing.

## Navigation and overlays

Use navigation when the user is moving to a new place or task. Use an overlay when the current context must remain visible and the interruption is bounded.

- A sheet suits a focused subtask or supplemental choice.
- A dialog suits a short blocking decision.
- Inline disclosure suits supporting content that belongs to the current reading flow.
- A new screen suits deep content, independent navigation, or substantial input.

Define dismissal, back behavior, focus restoration, keyboard behavior, and unsaved changes.

## Gestures

- Provide a visible or discoverable alternative for nonstandard gestures.
- Do not place destructive behavior behind an easy accidental gesture without confirmation or undo.
- Respect system back and edge gestures.
- Keep gesture targets and conflicts explicit for nested scroll, maps, carousels, or swipe actions.
- Pair haptics with visible or audible state feedback where appropriate; haptics are not the sole signal.

## Motion

Motion should explain relationship, state, or causality.

Useful roles:

- Connect an origin to a destination.
- Preserve spatial context.
- Confirm an action.
- Direct attention to a changed region.
- Express progress truthfully.

Avoid motion that delays comprehension, blocks input unnecessarily, loops on task-focused screens, or exists only to decorate a generic composition.

Specify motion by behavior rather than arbitrary milliseconds alone:

```text
Element/state:
Trigger:
Purpose:
Spatial relationship:
Duration class: instant | short | medium
Interruption behavior:
Reduced-motion alternative:
```

Use longer or choreographed motion only when storytelling is itself part of the product experience.

## Destructive and high-risk actions

- Name the consequence in the action label.
- Prefer undo for common reversible actions.
- Require confirmation when the consequence is difficult to reverse or easy to trigger accidentally.
- Do not use color alone to signal danger.
- Keep destructive action away from the routine continuation path.
- For financial, medical, identity, privacy, or legal consequences, require domain review and make assumptions visible.

## Flow review

Walk the flow as a user:

1. Entry from each plausible source.
2. First successful use.
3. Interruption and resume.
4. Slow or failed network.
5. Back, cancel, and undo.
6. Permission denied.
7. Repeated use with existing data.
8. Completion and next destination.

The most polished resting screen cannot compensate for a dead end or lost work.
