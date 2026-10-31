# Platform and Accessibility

Last reviewed: 2026-10-31.

Use this reference when producing or reviewing iOS, Android, cross-platform, adaptive, localized, or accessibility-sensitive work. It summarizes decision points; consult current primary guidance for exact platform behavior.

Index: [platform modules](#platform-modules) · [web](#web-based-mobile-surfaces) · [accessibility](#accessibility-contract) · [contrast](#contrast) · [localization and RTL](#localization-and-rtl) · [adaptive layout](#adaptive-layout) · [verification](#verification-boundary).

## Shared principle

Keep product identity in composition, typography, color, imagery, shape, and motion. Keep system behavior familiar for navigation, input, permissions, focus, text scaling, safe areas, and assistive technology.

Cross-platform does not mean pixel-identical. Preserve meaning and information architecture while adapting controls and behaviors where platform expectations differ.

## Platform modules

Use [iOS and iPadOS](platform-ios.md) and/or [Android](platform-android.md) when those platforms are targeted. Shared accessibility guidance remains below.

## Web-based mobile surfaces

When the output is a responsive web app or HTML prototype, apply relevant WCAG 2.2 success criteria. WCAG's minimum target-size criterion is not a replacement for platform-native target guidance, and exceptions must not become the default.

Primary sources:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Understanding target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)

## Accessibility contract

### Perceivable

- Text and meaningful non-text controls meet the selected contrast target.
- Information is not conveyed by color, motion, shape, audio, or position alone.
- Images with meaning have an alternative; decorative images are excluded from the accessibility tree.
- Text can grow without clipping, overlapping, or hiding task completion.

### Operable

- Controls have adequate target area and separation.
- Focus order follows the intended reading and interaction order.
- Every gesture-only action has an accessible alternative.
- Focus moves into and returns from sheets, dialogs, and navigation appropriately.
- Motion can be reduced when the platform exposes that preference.

### Understandable

- Labels describe outcomes, not merely icons or positions.
- Errors identify the issue and offer recovery.
- Disabled or locked states explain why when it is not obvious.
- Destructive actions describe their consequence.
- State changes that matter are announced to assistive technology.

### Robust

- Use native or semantically strong controls before custom recreations.
- Expose name, role, value, state, and actions.
- Ensure custom components work with keyboard/switch access where relevant.
- Do not make visual order and accessibility-tree order contradict each other.

## Contrast

Use the applicable standard and product target. For WCAG-style checks, common AA thresholds are:

- 4.5:1 for normal text.
- 3:1 for large text.
- 3:1 for meaningful graphical objects and UI component boundaries when the criterion applies.

Run:

```bash
python3 scripts/contrast_check.py '#111827' '#FFFFFF'
```

The bundled script compares two solid, opaque hex colors only. It does not automatically composite transparency or sample rendered gradients, images, scrims, changing content, or component states. For text or meaningful controls over variable backgrounds, evaluate the effective rendered foreground and background beneath the element, including opacity and overlays, across the area and states in which it appears. Check relevant gradient stops and intermediate values; endpoint checks alone do not necessarily establish the worst case. Use appropriate rendering or accessibility tools when available; if the effective worst case cannot be determined, report the contrast as unverified rather than claiming a pass. A sampled pair does not prove every element or the whole app conforms.

## Localization and RTL

- Use realistic string expansion; do not truncate actions by default.
- Allow labels and rows to grow vertically.
- Mirror directional layout and icons when meaning changes with direction.
- Do not mirror nondirectional symbols, brand marks, media controls, maps, or data visualizations blindly.
- Use locale-aware dates, numbers, currencies, names, and plural rules.
- Test mixed-direction content.

## Adaptive layout

- Decide from available width and height rather than device marketing names.
- Reflow, reveal, replace, or constrain content instead of scaling the phone UI uniformly.
- Do not stretch full-width controls indefinitely on large screens.
- Keep functionality recognizable across size changes.
- Preserve the primary task on short-height and keyboard-open layouts.

## Verification boundary

Automated checks help find missing labels, insufficient contrast, small targets, and some ordering issues. They do not prove that labels make sense, focus is useful, the task is completable, or the experience works with VoiceOver/TalkBack. Require manual assistive-technology testing for production-sensitive flows.

