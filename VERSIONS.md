# Versions

Current versions of all Hiruno V2 skills. Track changes here so the agent can compare against local versions to check for updates.

## v1.0.0 — Initial release

First public version. 12 skills across 6 layers, all built on Jun Yuh's 1×5×3 content system.

### Skills shipped

**Foundation**
- brand-content-context v1.0

**Strategy layer**
- pillars-and-topics v1.0
- posting-grid v1.0

**Messaging layer**
- symptom-first-messaging v1.0

**Hook layer**
- hook-generator v1.0
- hook-audit v1.0

**Format layer**
- direct-to-camera-script v1.0
- storytelling-carousel v1.0
- b-roll-text-post v1.0
- rehook-engineering v1.0

**Multiplication layer**
- repurpose-multiplier v1.0

**Audit layer**
- content-audit v1.0

### References shipped

- `references/jun-yuh-system.md` — full 1×5×3 system reference
- `skills/brand-content-context/references/schema-template.md` — brand context fact-file template
- `skills/symptom-first-messaging/references/doctor-vs-patient-examples.md` — before/after examples across verticals
- `skills/hook-generator/references/5-hook-types.md` — hook type definitions and examples
- `skills/hook-generator/references/pro-tips.md` — hook-specific pro tips

### Known limitations

- Skills are calibrated for short-form social content (Instagram, TikTok, YouTube Shorts, LinkedIn posts). They do not currently handle long-form (YouTube long-form, podcasts, blog posts) — those would need their own skills.
- No native MCP integrations yet. Add as needed (e.g. Meta Ads MCP for ad audit, Google Drive MCP for fetching client briefs).
- No automated A/B testing or performance feedback loops yet. Performance baselines are filled in manually.

## How versioning works

- **Major (v1.0 → v2.0):** breaking changes to skill output format, schema, or workflow that require users to update their brand context file or learn new commands.
- **Minor (v1.0 → v1.1):** new skills added, or significant new capability in an existing skill.
- **Patch (v1.0.0 → v1.0.1):** bug fixes, description tweaks for better triggering, reference doc updates.

## Roadmap (not yet shipped)

Things we know we want but haven't built yet:

- **brand-deck-export** — export the brand context as a client-facing PDF or Notion page for proposal/onboarding use.
- **post-performance-tracker** — input post URLs and view counts, get back which hook type and format are winning. Auto-update brand context performance baselines.
- **mass-rewrite** — given an existing feed, generate symptom-first rewrites for all hooks at once.
- **ad-creative-bridge** — translate organic content into Meta ad creative with the same hook/format system applied.
- **client-onboarding-flow** — orchestrate brand-content-context + pillars-and-topics + first posting-grid as a single onboarding workflow for new Hiruno clients.

If you build any of these, document them here when shipped.
