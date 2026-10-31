# Android

Last reviewed: 2026-10-31. Use alongside [shared accessibility](platform-and-accessibility.md#accessibility-contract) for Android. Check current platform guidance and actual target versions.

- Respect system and predictive back when applicable, system bars, gesture insets, keyboard, and edge-to-edge layouts.
- Provide appropriate TalkBack semantics, traversal order, labels, roles, and live state changes; support font scaling and responsive reflow.
- Use platform permissions and system surfaces where appropriate. Android guidance generally recommends at least 48 by 48 dp touch targets; verify current component defaults.
- Apply window size classes and adaptive behavior for supported foldables, tablets, and resizable windows.
- Respect supported animation and accessibility preferences.

Sources: [Android mobile design](https://developer.android.com/design/ui/mobile), [adaptive layout](https://developer.android.com/design/ui/mobile/guides/layout-and-content/adapt-layout), and [accessibility](https://developer.android.com/guide/topics/ui/accessibility/apps).
