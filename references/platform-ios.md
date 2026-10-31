# iOS and iPadOS

Last reviewed: 2026-10-31. Use alongside [shared accessibility](platform-and-accessibility.md#accessibility-contract) for iOS or iPadOS. Check current platform guidance and actual target versions.

- Respect safe areas, system bars, home indicator, keyboard, transient system UI, and navigation/back conventions.
- Support Dynamic Type with reflow; expose VoiceOver labels, values, traits, order, and meaningful state announcements.
- Use system permissions and standard pickers where appropriate. Apple commonly recommends 44 by 44 pt touch controls; verify current guidance and component behavior.
- Consider compact and regular size classes when iPad, multitasking, or resizing is in scope.
- Support applicable Reduced Motion, Increase Contrast, and Differentiate Without Color settings.

Sources: [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/), [layout](https://developer.apple.com/design/human-interface-guidelines/layout), and [accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).
