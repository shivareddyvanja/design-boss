#!/usr/bin/env python3
"""Calculate WCAG-style contrast ratio for two hex colors using only stdlib."""

from __future__ import annotations

import argparse
import re
import sys


HEX_RE = re.compile(r"^#?(?P<value>[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$")


def parse_hex(value: str) -> tuple[int, int, int]:
    match = HEX_RE.fullmatch(value.strip())
    if not match:
        raise ValueError(f"invalid hex color: {value!r}; use #RGB or #RRGGBB")
    digits = match.group("value")
    if len(digits) == 3:
        digits = "".join(character * 2 for character in digits)
    return tuple(int(digits[index : index + 2], 16) for index in (0, 2, 4))


def linearize(channel: int) -> float:
    normalized = channel / 255
    return normalized / 12.92 if normalized <= 0.04045 else ((normalized + 0.055) / 1.055) ** 2.4


def luminance(color: tuple[int, int, int]) -> float:
    red, green, blue = (linearize(channel) for channel in color)
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue


def contrast(first: tuple[int, int, int], second: tuple[int, int, int]) -> float:
    lighter, darker = sorted((luminance(first), luminance(second)), reverse=True)
    return (lighter + 0.05) / (darker + 0.05)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("foreground", help="foreground color as #RGB or #RRGGBB")
    parser.add_argument("background", help="background color as #RGB or #RRGGBB")
    parser.add_argument(
        "--threshold",
        type=float,
        help="exit non-zero when the ratio is lower than this value",
    )
    args = parser.parse_args()

    try:
        ratio = contrast(parse_hex(args.foreground), parse_hex(args.background))
    except ValueError as error:
        print(f"error: {error}", file=sys.stderr)
        return 2

    print(f"{ratio:.2f}:1")
    if args.threshold is not None:
        if args.threshold <= 1:
            print("error: threshold must be greater than 1", file=sys.stderr)
            return 2
        if ratio < args.threshold:
            print(f"FAIL: below {args.threshold:.2f}:1", file=sys.stderr)
            return 1
        print(f"PASS: meets {args.threshold:.2f}:1")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

