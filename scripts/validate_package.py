#!/usr/bin/env python3
"""Validate the portable structure and links of this Agent Skill package."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
PLACEHOLDER_RE = re.compile(r"\b(?:TODO|FIXME|TBD)\b", re.IGNORECASE)
REQUIRED = (
    "SKILL.md",
    "ROUTER.md",
    "LICENSE",
    "agents/openai.yaml",
    "references/discovery.md",
    "references/art-direction.md",
    "references/composition.md",
    "references/composition-surfaces.md",
    "references/interaction.md",
    "references/product-integrity.md",
    "references/platform-and-accessibility.md",
    "references/platform-ios.md",
    "references/platform-android.md",
    "references/visual-critique.md",
    "references/critique-screen.md",
    "references/critique-system.md",
    "references/redesign-review.md",
    "references/adapters.md",
    "references/adapter-figma.md",
    "references/adapter-openpencil.md",
    "references/adapter-code.md",
    "schemas/design-brief.schema.json",
    "schemas/direction.schema.json",
)


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        raise ValueError("SKILL.md must start with YAML frontmatter")
    try:
        raw, _body = text[4:].split("\n---\n", 1)
    except ValueError as error:
        raise ValueError("SKILL.md frontmatter is not closed") from error

    values: dict[str, str] = {}
    for line in raw.splitlines():
        if not line or line[0].isspace() or ":" not in line:
            continue
        key, value = line.split(":", 1)
        values[key.strip()] = value.strip().strip('"\'')
    return values


def local_markdown_links(path: Path, root: Path) -> list[Path]:
    missing: list[Path] = []
    text = path.read_text(encoding="utf-8")
    for target in LINK_RE.findall(text):
        if target.startswith(("http://", "https://", "mailto:")):
            continue
        target_path, separator, fragment = target.partition("#")
        resolved = (path.parent / target_path).resolve() if target_path else path.resolve()
        if root.resolve() not in (resolved, *resolved.parents) or not resolved.exists():
            missing.append(Path(target))
        elif separator and fragment and resolved.suffix == ".md":
            headings = re.findall(r"^#{1,6}\s+(.+?)\s*#*\s*$", resolved.read_text(encoding="utf-8"), re.MULTILINE)
            slugs = set()
            counts: dict[str, int] = {}
            for heading in headings:
                slug = re.sub(r"[^\w\- ]", "", heading.lower()).replace(" ", "-")
                count = counts.get(slug, 0)
                counts[slug] = count + 1
                slugs.add(f"{slug}-{count}" if count else slug)
            if fragment not in slugs:
                missing.append(Path(target))
    return missing


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", default=".", type=Path)
    args = parser.parse_args()
    root = args.root.resolve()
    failures: list[str] = []

    for relative in REQUIRED:
        if not (root / relative).is_file():
            failures.append(f"missing required file: {relative}")

    skill_path = root / "SKILL.md"
    if skill_path.is_file():
        text = skill_path.read_text(encoding="utf-8")
        try:
            frontmatter = parse_frontmatter(text)
        except ValueError as error:
            failures.append(str(error))
        else:
            name = frontmatter.get("name", "")
            description = frontmatter.get("description", "")
            if not NAME_RE.fullmatch(name):
                failures.append("frontmatter name must use lowercase letters, digits, and hyphens")
            if len(name) > 64:
                failures.append("frontmatter name exceeds 64 characters")
            if not description:
                failures.append("frontmatter description is required")
            if len(description) > 1024:
                failures.append("frontmatter description exceeds 1024 characters")

    for path in root.rglob("*"):
        if not path.is_file() or ".git" in path.parts:
            continue
        if path.suffix == ".md":
            text = path.read_text(encoding="utf-8")
            if PLACEHOLDER_RE.search(text):
                failures.append(f"unfinished placeholder in {path.relative_to(root)}")
            for missing in local_markdown_links(path, root):
                failures.append(f"broken local link in {path.relative_to(root)}: {missing}")
        elif path.suffix == ".json":
            try:
                json.loads(path.read_text(encoding="utf-8"))
            except json.JSONDecodeError as error:
                failures.append(
                    f"invalid JSON in {path.relative_to(root)}:{error.lineno}:{error.colno}: {error.msg}"
                )

    if failures:
        for failure in failures:
            print(f"FAIL {failure}")
        return 1

    print(f"PASS mobile-design-craft package at {root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

