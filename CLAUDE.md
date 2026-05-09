# CLAUDE.md

Claude Code-specific notes for Hiruno V2.

## Auto-injection of brand context

Claude Code supports inline shell command execution in SKILL.md files using `` !`command` `` syntax. To auto-inject the brand context file at the top of every skill, override the skills locally with this prefix added to each SKILL.md body (right after the frontmatter):

```
Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`
```

This pattern keeps the SKILL.md files in the repo cross-agent compatible (no Claude-specific syntax) while letting Claude Code users get the auto-injection behaviour by overriding locally.

### How to add the override

Two options:

#### Option A: edit your local copy

Clone the repo and edit each SKILL.md directly to add the line. You lose the ability to `git pull` updates without merge conflicts, but the skills always inject context.

#### Option B: write a wrapper

Create a script that copies the SKILL.md files into your `.claude/skills/` directory and inserts the auto-inject line as a build step. Re-run after `git pull`. This keeps the source repo clean.

Example wrapper script (`tools/build-claude-overrides.sh`):

```bash
#!/usr/bin/env bash
set -e

SOURCE_DIR="${1:-./skills}"
TARGET_DIR="${2:-$HOME/.claude/skills}"

mkdir -p "$TARGET_DIR"

for skill_dir in "$SOURCE_DIR"/*/; do
  skill_name=$(basename "$skill_dir")
  source_skill="$skill_dir/SKILL.md"
  target_skill_dir="$TARGET_DIR/$skill_name"
  target_skill="$target_skill_dir/SKILL.md"
  
  mkdir -p "$target_skill_dir"
  
  # Copy references if present
  if [ -d "$skill_dir/references" ]; then
    cp -r "$skill_dir/references" "$target_skill_dir/"
  fi
  
  # Insert auto-inject line after frontmatter
  awk '
    /^---$/ { count++; print; next }
    count == 2 && !injected {
      print "";
      print "Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo \"No brand context found. Run /brand-content-context first to set up.\"`";
      print "";
      injected = 1
    }
    { print }
  ' "$source_skill" > "$target_skill"
done

echo "Hiruno V2 skills built into $TARGET_DIR"
```

Run it after every `git pull`:

```bash
bash tools/build-claude-overrides.sh
```

## Slash commands

Each skill registers a slash command derived from its name:

- `/brand-content-context`
- `/pillars-and-topics`
- `/posting-grid`
- `/symptom-first-messaging`
- `/hook-generator`
- `/hook-audit`
- `/direct-to-camera-script`
- `/storytelling-carousel`
- `/b-roll-text-post`
- `/rehook-engineering`
- `/repurpose-multiplier`
- `/content-audit`

Use slash commands when you want to force a specific skill to run rather than letting Claude Code pick one based on the request.

## Plugin marketplace

The repo includes a `.claude-plugin/marketplace.json` so it can be installed via:

```
/plugin marketplace add github:angelobaricante/hiruno-content-skills
/plugin install hiruno-v2
```

Skills install under the `hiruno-v2:` namespace (e.g. `hiruno-v2:hook-generator`). Private-repo auth is handled by your local `gh` CLI credentials.

## Brand context locations

Claude Code defaults to looking in `.agents/` for the brand context file. The skills in this repo specify `.agents/brand-content-context.md` as the canonical path. If you have older Claude Code projects that put context files in `.claude/`, the skills will still tell the user to migrate them to `.agents/`.

## Per-project brand contexts

Recommended workflow for Hiruno's multi-client structure:

```
~/clients/
  cult-of-sauna/
    .agents/
      brand-content-context.md
    [project files]
  volt-dropper/
    .agents/
      brand-content-context.md
    [project files]
  new-client/
    .agents/
      brand-content-context.md
    [project files]
```

The skills (whether installed globally at `~/.claude/skills/` or per-project at `.agents/skills/`) read whichever `.agents/brand-content-context.md` is in the current working directory. So you `cd` into a client project, open Claude Code, and the agent automatically uses that client's brand context.

## Updating skills

When the source repo updates:

```bash
cd ~/path/to/hiruno-v2
git pull
bash tools/build-claude-overrides.sh   # if using the wrapper
```

If you've forked the repo to add Hiruno-specific skills, rebase your branch on `main` periodically.
