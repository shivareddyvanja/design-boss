# Product Integrity and Action Tracing

Use when a substantial screen or flow contains meaningful actions, changing data, recommendations, sensitive information, or recovery behavior. For a small edit, inspect only behavior affected by the change.

## Trace the actual action

Use available implementation, prototype interactions, state definitions, and requirements. For each important action, follow trigger → precondition → immediate feedback → state or data change → success/failure → retry, cancellation, or undo. Check whether a pending or scheduled action can conflict, repeat, lose input, or lead to a dead end. Distinguish real integration from a simulated prototype.

Confirm, where evidence permits, that shared values, labels, units, selected items, and statuses agree across screens; check arithmetic against available inputs. Explain the basis and uncertainty of estimates or recommendations where it affects a decision. Inspect sensitive-data exposure against actual capabilities and product requirements; do not invent a security guarantee.

If the interaction, backend, data, or domain rule is unavailable, mark its behavior **unverified** and state what evidence is needed. Do not claim an unseen behavior works or fails solely from a screenshot, and do not execute a live consequential action without authorization.

## Preserve behavior during visual work

Before a redesign or visual-layer rewrite, identify affected observable actions, navigation, state transitions, validation, persistence, data contracts, and integrations using available source and behavior. Preserve them unless the user requested a behavior change; do not rely solely on unchanged element IDs or a screenshot. Afterward, exercise affected actions and relevant states with the project's existing tests or safe prototype interactions. Record what passed, failed, or could not be verified, and distinguish local simulation from a real backend. For a narrow edit, restrict this to the affected behavior.

Examples of transferable checks: a scheduled and manual action may conflict; a health reading should not imply an unsupported diagnosis; a booking should preserve the chosen itinerary; a shared document should make its audience clear. These are prompts, not mandatory designs.

For detailed state, input, navigation, gesture, and motion contracts, load [interaction](interaction.md) only when needed.
