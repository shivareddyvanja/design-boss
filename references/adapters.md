# Output Adapters

Use this reference when selecting or operating an output surface. The skill's design intent should survive a change of adapter.

Index: [capability check](#capability-check) · [Figma](adapter-figma.md) · [OpenPencil](adapter-openpencil.md) · [native and cross-platform code](adapter-code.md) · [HTML prototype](#htmlcss-prototype) · [raster concept](#raster-concept-or-image-generation) · [specification](#specification-only-output) · [handoff](#adapter-handoff-contract).

## Capability check

Before choosing a surface, determine:

```text
can_create:
can_edit:
can_inspect_existing:
can_use_components_and_tokens:
can_render_or_capture:
can_export:
artifact_format:
```

Honor the user's chosen surface. If none is chosen, prefer the option that yields an inspectable, editable artifact and a reproducible render with the available tools.

## Dedicated adapters

For an existing design surface or implementation use [Figma](adapter-figma.md), [OpenPencil](adapter-openpencil.md), or [native and cross-platform code](adapter-code.md). Select only the relevant adapter.

## HTML/CSS prototype

Best for fast, reproducible concept evaluation or when no mobile framework is present.

- Set an explicit viewport and emulate safe regions where relevant.
- Use semantic HTML and keyboard/focus behavior.
- Keep tokens in CSS custom properties.
- Test narrow, target, long-content, and large-text captures.
- Make it clear when the artifact is a prototype rather than production-native UI.

HTML is often the fastest first evaluation adapter because screenshot generation can be deterministic, but it must not silently substitute web behavior for native behavior.

## Raster concept or image generation

Best for mood, art direction, illustration, texture, or rapid visual exploration.

- Use it to explore a visual thesis or create supporting assets.
- Do not treat flattened UI as an editable production artifact.
- Reconstruct selected interface decisions in an editable surface.
- Inspect generated text, controls, system UI, and accessibility assumptions; they are often unreliable.
- Preserve asset licensing/provenance requirements.

## Specification-only output

Use when the environment cannot create or render the target artifact or when the user explicitly wants a handoff.

Include:

- Chosen thesis and direction card.
- Content hierarchy and state model.
- Component/token mapping.
- Interaction contracts.
- Responsive and platform behavior.
- Accessibility requirements.
- A clear note that visual QA remains outstanding.

Do not present a specification-only result as visually verified.

## Adapter handoff contract

Regardless of surface, preserve:

```text
Mode: create | extend | redesign | critique
Primary job:
Visual thesis:
Focal point:
Content hierarchy:
States:
Components/tokens to reuse:
New system gaps:
Platform differences:
Accessibility requirements:
Required renders:
Open risks:
```

This contract is the bridge between design reasoning and tool execution. Keep it concise and update it when the rendered result changes the design.
