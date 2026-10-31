# Mobile Composition

Use this reference for screen structure, hierarchy, density, responsive behavior, safe areas, and mobile ergonomics.

For a focused review of hierarchy, grouping, and surface decisions, use [composition and surfaces](composition-surfaces.md).

Index: [reading path](#start-from-the-reading-path) · [focal model](#establish-a-focal-model) · [rhythm](#build-spatial-rhythm) · [density](#control-density) · [containers](#containers-and-cards) · [actions](#action-placement) · [scroll](#scroll-and-edge-behavior) · [responsive](#responsive-classes) · [images](#images-and-visual-crops) · [stress tests](#composition-stress-tests).

## Start from the reading path

A strong mobile composition answers in sequence:

1. Where am I?
2. What is true or important now?
3. What should I do next?
4. What supports that decision?
5. How do I recover or learn more?

This sequence can be spatial, typographic, or interactive. It does not require a standard header-card-button stack.

## Establish a focal model

Choose one dominant model:

- **Task-first** — action or input dominates.
- **Status-first** — current state and change dominate.
- **Content-first** — media, story, map, or document dominates.
- **Decision-first** — comparison or choice dominates.
- **Progress-first** — sequence and next step dominate.

Secondary content should support the focal model rather than competing with it.

## Build spatial rhythm

- Use a small spacing scale, but vary grouping intentionally.
- Tight space signals relationship; larger space signals a new section.
- Align elements that should be compared.
- Avoid equal spacing between every block; it flattens hierarchy.
- Make edge insets, container padding, and internal gaps distinct roles.
- Preserve breathing room around the focal element rather than adding empty space everywhere.

## Control density

Density depends on expertise, frequency, environment, and content:

- Repeated expert tools can be compact if scanning remains strong.
- Infrequent, stressful, or safety-sensitive tasks need fewer simultaneous choices.
- Data-dense screens need stable alignment and progressive disclosure, not simply smaller type.
- Empty space is valuable when it creates hierarchy; it is wasteful when it separates related content or hides the next step.

## Containers and cards

Use a visible container when it provides at least one of:

- Interaction boundary.
- State or selection.
- Semantic grouping not clear from alignment and spacing.
- Layering or scroll behavior.
- Contrast required for comprehension.

For each major surface, identify its job from the list above. If it adds no useful grouping, interaction boundary, state, or contrast, try removing it and compare the render. Nested cards often indicate unresolved hierarchy, but established components or complex content may justify them.

## Action placement

- Put the primary action where it follows the decision or input it completes.
- Sticky actions must not obscure content, keyboard, system gestures, or validation.
- A bottom action is useful for thumb reach but not automatically correct.
- Avoid multiple filled actions with equal weight unless the state is an explicit peer choice.
- Keep destructive actions visually and spatially distinct from routine continuation.

## Scroll and edge behavior

Define:

- What scrolls and what remains fixed.
- How headers collapse, if at all.
- Whether content can appear beneath system or translucent regions.
- How the bottom safe area and gesture region are protected.
- What happens when the keyboard appears.
- Where scroll position goes after state changes or navigation back.

Do not create an apparent continuation below the fold when the screen is actually complete, or hide essential content in a gesture-only region.

## Responsive classes

Design for available space, not named phone models.

At minimum consider:

- Narrow phone width and short height.
- Primary compact phone size.
- Larger compact width.
- Large text and long localization.

For tablets, foldables, or resizable windows, adapt through:

- **Reflow** — change arrangement.
- **Reveal** — show supporting content when space permits.
- **Replace** — use a more suitable presentation, such as side sheet for bottom sheet.
- **Constrain** — cap line length and component width rather than stretching.

Keep task behavior recognizable across size changes.

## Images and visual crops

- Protect the subject with a focal point or safe crop region.
- Do not distort aspect ratio.
- Decide whether imagery is fixed, responsive, edge-to-edge, or contained.
- Provide layout behavior for loading and missing assets.
- Avoid image height that pushes the primary task out of reach on short screens.

## Composition stress tests

Before approval, test:

- Long title, button, and body copy.
- Zero, one, and many repeated items.
- Keyboard open.
- Largest supported text setting or a representative large-text case.
- Error message inserted near the affected control.
- Loading skeleton or progress state without layout jump.
- Safe areas and system bars.
- RTL mirroring if the product supports RTL.

If a screen only works with ideal content, the composition is unfinished.

