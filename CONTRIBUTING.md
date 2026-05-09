# Contributing to Hiruno V2

This is a private repo. "Contributing" here means: how to add or modify skills internally as Hiruno's content system evolves.

## Anatomy of a skill

```
skills/your-skill-name/
├── SKILL.md          # Required - main instructions
├── references/       # Optional - additional documentation
│   └── guide.md
└── assets/           # Optional - templates, schemas, examples
    └── template.md
```

## SKILL.md frontmatter

```yaml
---
name: your-skill-name
description: When the user wants to [verb], [scope]. Trigger on phrases like "X", "Y", "Z". Also use when [edge case]. [Why it matters in one sentence.]
---
```

### Description rules

- Lead with "Use this skill when..." or equivalent
- Include 5 to 10 trigger phrases the user might actually say
- Include indirect ways the user might describe the task
- End with one sentence on why this skill matters / what its output is
- Be slightly pushy on triggering — Claude tends to under-trigger skills

### Naming rules

- Directory name: lowercase, hyphens only (e.g. `hook-generator`, `direct-to-camera-script`)
- Same name in `name:` field in frontmatter
- Pick names that read clearly as imperatives or things ("hook-generator" not "generate-hooks")

## SKILL.md body structure

Every skill body should follow roughly this pattern:

```markdown
# Skill Title

[1-2 sentence opening: what this skill does and why it matters]

**Brand context:** Read `.agents/brand-content-context.md` first. [Which sections matter most for this skill.] If missing, run `/brand-content-context` first.

## What this is for / when to use

## What you produce

## Process

[Numbered steps]

## Output format

```
[Exact template]
```

## [Skill-specific sections]

## Common failures / pushback

## Related skills

- **skill-name**: [how it relates]
```

Keep SKILL.md under 500 lines. If the skill needs more, push detail into `references/`.

## Reference files

When to use `references/`:

- Long examples (50+ lines) that would clutter SKILL.md
- Tables or schemas the skill links to but doesn't always need
- Type-specific deep dives (e.g. one file per hook type)

Always cite reference files clearly from SKILL.md so the agent knows when to load them.

## The brand context contract

Every skill MUST read `.agents/brand-content-context.md` before doing anything that produces brand-facing output. The only exception is `brand-content-context` itself, which creates the file.

If you're adding a skill that doesn't need brand context (e.g. a meta-skill or a system utility), document why explicitly in the body. Don't silently skip it.

## Testing a new skill

For each new skill, write 2 to 3 realistic test prompts a Hiruno operator would actually say. Run them with the skill loaded. Check:

1. Does the skill trigger on those prompts? If not, sharpen the description.
2. Does the output match the format defined in the skill body? If not, the body is unclear.
3. Does the output use brand context correctly? If it sounds generic, the body isn't pulling from the right context sections.
4. Does the output respect brand banned words and voice? If not, voice integration is weak.

Iterate until all four pass.

## The cross-reference contract

When adding a new skill:

1. Update the existing skills' "Related skills" sections that link to the new skill
2. Update `README.md` (the skills table and the architecture diagram)
3. Update `.claude-plugin/marketplace.json` with the new entry
4. Bump version in `VERSIONS.md` and document the addition

If you don't do all four, the new skill is half-installed and the agent won't know when to use it.

## When NOT to add a skill

This repo is content-strategy specific. Don't add:

- Generic marketing skills (paid ads, SEO, email, lifecycle) — those belong in a separate repo or fork of Corey Haines' marketingskills
- Long-form content skills (YouTube long-form, podcasts, blogs) until we deliberately scope a long-form expansion
- Skills that duplicate functionality of an existing skill — extend the existing one instead

If a skill is genuinely needed but doesn't fit the system, propose a new layer first.

## Style guide

- Plain language, direct tone (matches Hiruno's brand voice)
- No em-dashes
- Imperative voice in instructions ("Read the file" not "You should read the file")
- Specific examples, not abstractions
- 2-space tabs in JSON, 4-space tabs in YAML if any

## Process for shipping a new skill

1. Draft SKILL.md following the structure above
2. Add references if needed
3. Cross-reference into existing skills
4. Update README, marketplace.json, VERSIONS.md
5. Test with at least one real brand context (Cult of Sauna, Volt Dropper)
6. Commit with a message like "feat(skills): add [skill-name]"
