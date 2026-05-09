# Hiruno Content Skills — Content Strategist Agent

A collection of AI agent skills built on Jun Yuh's 1×5×3 content system. Designed for Hiruno's solo-operator workflow and used across DTC clients (Cult of Sauna, Volt Dropper, future) and personal-brand work.

Built for Claude Code, Cursor, Codex, and any agent that supports the [Agent Skills spec](https://agentskills.io).

## What this is

Twelve skills that let an AI agent do real content strategy work for a specific brand. The whole system is engineered around one piece of math:

**1 topic × 5 hooks × 3 formats = 15 posts**

One foundational skill (`brand-content-context`) writes a per-brand fact-file. Every other skill reads it before doing anything. That's how the agent stays calibrated to a specific brand instead of producing generic content.

See `references/jun-yuh-system.md` for the full system this is built around.

## How skills work together

```
                                ┌──────────────────────────────────────┐
                                │       brand-content-context          │
                                │   (read by all other skills first)   │
                                │   .agents/brand-content-context.md   │
                                └──────────────────┬───────────────────┘
                                                   │
        ┌──────────────┬─────────────┬─────────────┼─────────────┬──────────────┐
        ▼              ▼             ▼             ▼             ▼              ▼
    ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌──────────┐
    │ STRATEGY │ │ MESSAGE  │ │  HOOKS   │ │  FORMATS   │ │ MULTIPLY │ │  AUDIT   │
    ├──────────┤ ├──────────┤ ├──────────┤ ├────────────┤ ├──────────┤ ├──────────┤
    │ pillars- │ │ symptom- │ │ hook-    │ │ direct-to- │ │ posting- │ │ content- │
    │ and-     │ │ first-   │ │ generator│ │ camera-    │ │ grid     │ │ audit    │
    │ topics   │ │ messaging│ │          │ │ script     │ │          │ │          │
    │          │ │          │ │ hook-    │ │            │ │repurpose-│ │          │
    │          │ │          │ │ audit    │ │ story-     │ │multiplier│ │          │
    │          │ │          │ │          │ │ telling-   │ │          │ │          │
    │          │ │          │ │          │ │ carousel   │ │          │ │          │
    │          │ │          │ │          │ │            │ │          │ │          │
    │          │ │          │ │          │ │ b-roll-    │ │          │ │          │
    │          │ │          │ │          │ │ text-post  │ │          │ │          │
    │          │ │          │ │          │ │            │ │          │ │          │
    │          │ │          │ │          │ │ rehook-    │ │          │ │          │
    │          │ │          │ │          │ │ engineering│ │          │ │          │
    └──────────┘ └──────────┘ └──────────┘ └────────────┘ └──────────┘ └──────────┘
```

Skills cross-reference each other. See each skill's "Related skills" section.

## The skills

| Skill | What it does |
|---|---|
| [brand-content-context](skills/brand-content-context) | Walks a brand through one-time setup. Writes the fact-file every other skill reads. Run this first for any new brand. |
| [pillars-and-topics](skills/pillars-and-topics) | Finds 3 content pillars for the brand and populates each with 10 to 30 specific topics. |
| [posting-grid](skills/posting-grid) | Lays topics × hooks × formats across a calendar. 30-day plans, posting cadence. |
| [symptom-first-messaging](skills/symptom-first-messaging) | Rewrites expert-talk into customer-symptom language. Doctor vs patient. |
| [hook-generator](skills/hook-generator) | Generates 5 hooks (one per type) for any topic. The most-used skill in the system. |
| [hook-audit](skills/hook-audit) | Audits a batch of existing hooks for hook type fit, symptom-first, curiosity gap, demographic call-out. |
| [direct-to-camera-script](skills/direct-to-camera-script) | Writes 30 to 90 second talking-head scripts with hook, value beats, re-hooks, CTA. |
| [storytelling-carousel](skills/storytelling-carousel) | Designs 5 to 10 slide carousels with hook, content slides, payoff. Image direction included. |
| [b-roll-text-post](skills/b-roll-text-post) | Builds single-clip B-roll posts with on-screen hook and caption-driven value. |
| [rehook-engineering](skills/rehook-engineering) | Inserts structural turns inside existing content to keep retention high. |
| [repurpose-multiplier](skills/repurpose-multiplier) | Takes one topic and multiplies it across 5 hooks × 3 formats = 15 posts. |
| [content-audit](skills/content-audit) | Meta-auditor. Scores existing content on hook strength, symptom-first, value, re-hooks, format fit, voice. |

## Installation

Recommended path is the `npx skills` CLI — it works across Claude Code, Cursor, Codex, OpenCode, and 50+ other agents that follow the [Agent Skills spec](https://agentskills.io). Three fallbacks below.

### Option 1: install via `npx skills` (recommended)

Use the [open agent skills CLI](https://github.com/vercel-labs/skills) to install directly from this repo:

```bash
# Install all skills (project-local: ./.claude/skills, ./.cursor/skills, etc.)
npx skills add angelobaricante/hiruno-content-skills

# Install globally (~/.claude/skills, ~/.cursor/skills, etc.)
npx skills add angelobaricante/hiruno-content-skills -g

# Install specific skills only
npx skills add angelobaricante/hiruno-content-skills --skill hook-generator --skill posting-grid

# List skills available in this repo without installing
npx skills add angelobaricante/hiruno-content-skills --list

# Target a specific agent (claude-code, cursor, codex, opencode, ...)
npx skills add angelobaricante/hiruno-content-skills -a claude-code
```

Each `SKILL.md` already has the brand-context auto-inject line pre-baked — at runtime it shells out to `cat .agents/brand-content-context.md` from the current working directory, so per-project brand contexts work automatically.

To update later: `npx skills update`. To remove: `npx skills remove`. See `npx skills --help` for the full command set.

### Option 2: install as a Claude Code plugin

If you prefer the namespaced Claude Code plugin install (skills appear as `hiruno-content-skills:hook-generator`, etc):

```
/plugin marketplace add angelobaricante/hiruno-content-skills
/plugin install hiruno-content-skills
```

To update later, re-run `/plugin marketplace add` or use `/plugin update hiruno-content-skills`. To uninstall, `/plugin uninstall hiruno-content-skills`.

### Option 3: per-project clone

For each brand or project, clone this repo into the project's `.agents/skills/` directory:

```bash
mkdir -p .agents
git clone git@github.com:angelobaricante/hiruno-content-skills.git .agents/hiruno-content-skills
ln -s .agents/hiruno-content-skills/skills .agents/skills
```

Then in the project, run the agent and start with the brand-content-context skill to create `.agents/brand-content-context.md` for that specific brand.

### Option 4: global symlink (manual)

If you want the raw skills available across all projects without going through any CLI:

```bash
git clone git@github.com:angelobaricante/hiruno-content-skills.git ~/.claude/hiruno-content-skills
ln -s ~/.claude/hiruno-content-skills/skills/* ~/.claude/skills/
```

## Usage

Once skills are installed and a brand context exists for the active project, just describe what you want:

```
"Set up the brand context for Volt Dropper"
→ runs brand-content-context

"Write 5 hooks about your phone dying on day one of a camping trip"
→ runs hook-generator (reads brand context for voice and audience symptoms)

"Audit my last 30 posts"
→ runs content-audit

"Build a 30-day content calendar for Cult of Sauna"
→ runs posting-grid

"Repurpose this one good post into 15"
→ runs repurpose-multiplier
```

The agent will pick the right skill based on the request.

## Workflow for a new brand

1. **Set up brand context.** Run `/brand-content-context`. Walk through the 7-section interview. The file gets saved to `.agents/brand-content-context.md`.
2. **Find pillars.** Run `/pillars-and-topics`. Get 3 pillars with topics each, written back into the context.
3. **First content batch.** Run `/posting-grid` for a 4-week plan. Or run `/hook-generator` on a specific topic and `/direct-to-camera-script` (or carousel/B-roll) to ship a single post.
4. **Audit after week 1.** Run `/content-audit` on the posts that went out. Update brand context performance baselines based on what worked.
5. **Multiply the winners.** Run `/repurpose-multiplier` on the best-performing post.

## Build philosophy

- **Symptom-first everywhere.** Every output is calibrated to the customer describing their own pain or desire, not the expert lecturing about the topic.
- **Specificity wins.** Generic content advice is forbidden. Every skill outputs specific lines, specific scores, specific fixes.
- **The hook is the post.** Skip rate is the algorithm's number-one signal. The system pours engineering into the first 3 seconds.
- **Repurpose, don't restart.** The best creators don't write fresh content every day. They multiply one topic. The math reflects that.
- **Voice is non-negotiable.** Every skill reads the brand context. No skill outputs anything until it knows the brand voice.

## References

- `references/jun-yuh-system.md` — the full 1×5×3 system this is built on
- Per-skill `references/` folders for hook types, schemas, and examples

## Versions

See `VERSIONS.md`.

## License

Private. Hiruno internal use.
