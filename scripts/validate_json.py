#!/usr/bin/env python3
"""Parse one or more JSON files and report useful syntax errors."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("files", nargs="+", type=Path)
    args = parser.parse_args()
    failures = 0

    for path in args.files:
        try:
            with path.open(encoding="utf-8") as handle:
                json.load(handle)
        except FileNotFoundError:
            print(f"FAIL {path}: file not found")
            failures += 1
        except json.JSONDecodeError as error:
            print(f"FAIL {path}:{error.lineno}:{error.colno}: {error.msg}")
            failures += 1
        else:
            print(f"PASS {path}")

    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())

