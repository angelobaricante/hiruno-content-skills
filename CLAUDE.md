# CLAUDE.md

Claude Code-specific notes for Hiruno Content Skills.

## Brand context auto-injection

Each `SKILL.md` in this repo already contains the line:

```
Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`
```

Right after the YAML frontmatter. Claude Code resolves the `` !`shell` `` syntax at skill-load time, shelling out from the current working directory, so per-project brand contexts in `.agents/brand-content-context.md` get pulled in automatically.

The line is harmless to other agents that don't support inline shell — it just renders as a literal string.

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

## Install paths

Recommended: the open agent skills CLI.

```bash
npx skills add angelobaricante/hiruno-content-skills          # project-local
npx skills add angelobaricante/hiruno-content-skills -g       # global
npx skills add angelobaricante/hiruno-content-skills -a claude-code
```

Plugin marketplace alternative (namespaced under `hiruno-content-skills:`):

```
/plugin marketplace add angelobaricante/hiruno-content-skills
/plugin install hiruno-content-skills
```

See `README.md` for all install options.

## Brand context locations

Claude Code looks in `.agents/` for the brand context file. The skills in this repo specify `.agents/brand-content-context.md` as the canonical path. If you have older Claude Code projects that put context files in `.claude/`, the skills will still tell the user to migrate them to `.agents/`.

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

The skills (whether installed globally at `~/.claude/skills/` or per-project at `./.claude/skills/`) read whichever `.agents/brand-content-context.md` is in the current working directory. So you `cd` into a client project, open Claude Code, and the agent automatically uses that client's brand context.

## Updating skills

```bash
npx skills update                        # CLI install
/plugin update hiruno-content-skills     # plugin install
```
