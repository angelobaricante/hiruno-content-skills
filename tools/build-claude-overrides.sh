#!/usr/bin/env bash
# build-claude-overrides.sh
#
# Copies Hiruno V2 skills into Claude Code's local skill directory and inserts
# the brand-context auto-inject line at the top of each SKILL.md body.
#
# This pattern keeps the source repo cross-agent compatible (no Claude-specific
# shell syntax in the committed SKILL.md files) while giving Claude Code users
# the auto-inject behaviour locally.
#
# Usage:
#   bash tools/build-claude-overrides.sh                          # default paths
#   bash tools/build-claude-overrides.sh ./skills ~/.claude/skills # explicit paths
#
# Run after every `git pull` to refresh the local overrides.

set -euo pipefail

SOURCE_DIR="${1:-./skills}"
TARGET_DIR="${2:-$HOME/.claude/skills}"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"

INJECT_LINE='Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`'

count=0

for skill_dir in "$SOURCE_DIR"/*/; do
  skill_name=$(basename "$skill_dir")
  source_skill="$skill_dir/SKILL.md"
  target_skill_dir="$TARGET_DIR/$skill_name"
  target_skill="$target_skill_dir/SKILL.md"

  if [ ! -f "$source_skill" ]; then
    echo "  skip: $skill_name (no SKILL.md)"
    continue
  fi

  mkdir -p "$target_skill_dir"

  # Copy references if present
  if [ -d "$skill_dir/references" ]; then
    rm -rf "$target_skill_dir/references"
    cp -r "$skill_dir/references" "$target_skill_dir/"
  fi

  # Copy assets if present
  if [ -d "$skill_dir/assets" ]; then
    rm -rf "$target_skill_dir/assets"
    cp -r "$skill_dir/assets" "$target_skill_dir/"
  fi

  # Insert auto-inject line right after the closing --- of frontmatter.
  awk -v inject="$INJECT_LINE" '
    BEGIN { fm_count = 0; injected = 0 }
    /^---$/ { fm_count++; print; next }
    fm_count == 2 && !injected {
      print ""
      print inject
      print ""
      injected = 1
    }
    { print }
  ' "$source_skill" > "$target_skill"

  count=$((count + 1))
  echo "  built: $skill_name"
done

echo ""
echo "Done. Built $count skills into $TARGET_DIR"
echo ""
echo "Each SKILL.md now auto-injects .agents/brand-content-context.md at runtime."
echo "Run this script again after every \`git pull\` to refresh."
