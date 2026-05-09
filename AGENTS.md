# AGENTS.md

How Hiruno V2 skills work across different AI agents.

## Compatibility

These skills follow the [Agent Skills spec](https://agentskills.io) and work with:

- Claude Code
- Cursor
- OpenAI Codex
- Windsurf
- Any agent that reads SKILL.md files with frontmatter

## The shared context pattern

Every skill in this repo references the same per-project file:

```
.agents/brand-content-context.md
```

This file is created by the `brand-content-context` skill and contains the brand's voice, audience symptoms, content pillars, format library, and performance baselines.

Every other skill checks for this file at the start of its body. If it doesn't exist, the skill instructs the user to run `brand-content-context` first.

## Auto-injection (Claude Code only)

Claude Code supports embedding shell commands in SKILL.md using `!` ` `command` ` `` syntax. When the skill is invoked, Claude Code runs the command and injects the output inline.

To auto-inject the brand context at the top of every skill (saving the file-reading step), add this line right after the frontmatter:

```
Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`
```

This pattern is **Claude Code only**. Do NOT add it to the SKILL.md files in this repo, because the skills are designed to be cross-agent compatible. Apply it locally in your own project's `.claude/skills/` overrides instead, or via your Claude Code agent configuration.

In all other agents (Cursor, Codex, Windsurf), the skill body's plain-text instruction "Read `.agents/brand-content-context.md` before doing anything" tells the agent to read the file manually. This works universally.

## Path conventions

- Brand context lives at `.agents/brand-content-context.md`
- Skills live at `.agents/skills/<skill-name>/SKILL.md`
- Skill references live at `.agents/skills/<skill-name>/references/<file>.md`
- Repo-level references (the system doc) live at `references/jun-yuh-system.md`

If you've installed via symlink or submodule, the skills directory may be at a different path — adjust your agent's skill-loading config accordingly.

## Skill descriptions

The `description` field in each SKILL.md frontmatter is what the agent uses to decide whether to invoke the skill. Descriptions in this repo are written to be slightly pushy on triggering — they include common trigger phrases, near-synonyms, and indirect ways the user might describe the task.

If a skill is undertriggering for your team's vocabulary, add the missing phrases to the `description` field. The descriptions are designed to be edited.

## Skill structure

Each skill follows this pattern:

```
skills/<skill-name>/
├── SKILL.md          # Required. Frontmatter + body.
└── references/       # Optional. Deeper docs the skill links to.
    └── <file>.md
```

SKILL.md structure:

```markdown
---
name: skill-name
description: When the user wants to [verb], [scope]. Trigger on phrases like "X", "Y", "Z". Also use when [edge case].
---

# Skill Title

[Body. Under 500 lines. Imperative voice. Specific examples.]

## Brand context

Read `.agents/brand-content-context.md` first.

## What you produce

...

## Process

...

## Output format

```
[exact template]
```

## Related skills

...
```

## Cross-references between skills

Each SKILL.md ends with a "Related skills" section. The agent uses these to chain skills naturally:

- `hook-generator` references `symptom-first-messaging` for rewrite work
- All format skills reference `hook-generator` for the hook input
- `posting-grid` chains into `hook-generator` and the format skills
- `content-audit` references almost everything as the meta-auditor

When adding new skills, include them in the "Related skills" section of any skill they connect to.

## Updating skills

When updating a skill in production:

1. Update the SKILL.md
2. Update `VERSIONS.md` with the change
3. Test with at least one real brand context (Cult of Sauna, Volt Dropper, or a test brand)
4. If the change affects output format, update any other skills that reference this one's output

## Adding new skills

To add a new skill to the system:

1. Decide which layer it belongs to (Strategy, Message, Hooks, Formats, Multiply, Audit) or whether a new layer is needed
2. Create `skills/<new-skill-name>/SKILL.md` following the structure above
3. Make sure the body reads the brand context first
4. Add it to the relevant "Related skills" sections in the existing skills it connects to
5. Add it to `README.md` (table) and the architecture diagram
6. Update `.claude-plugin/marketplace.json`
7. Bump version in `VERSIONS.md`

## Scope discipline

This repo is content-strategy specific. Don't add general marketing skills here (paid ads, SEO, email sequences, lifecycle marketing). If those skills are needed, layer them into a separate repo or fork Corey Haines' marketingskills repo and reference it alongside.

The job of Hiruno V2 is one thing well: organic content strategy on the 1×5×3 system.
