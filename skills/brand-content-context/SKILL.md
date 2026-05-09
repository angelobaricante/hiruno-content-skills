---
name: brand-content-context
description: Use this skill at the start of any new content project, before any other Hiruno skill runs. It walks the user through a one-time brand setup and writes `.agents/brand-content-context.md`, the single source of truth for brand voice, audience symptoms, content pillars, format library, and the why anchor. Every other content skill in this repo reads that file first. Trigger this skill whenever the user mentions "set up the brand", "brand context", "new client", "onboard a brand", "brand voice", "audience research", "content pillars", "find the niche", or starts a content project for a brand that has no `.agents/brand-content-context.md` yet. Also trigger when the user wants to update an existing brand context with new pains, desires, pillars, or voice notes.
---

# Brand Content Context

You help users create and maintain the brand content context document. This file captures everything the agent needs to write content in the brand's voice for the brand's audience, so the user does not repeat themselves across every skill.

The document is stored at `.agents/brand-content-context.md`.

## Before you start

First check if `.agents/brand-content-context.md` already exists.

- If it exists and the user wants to **update** it, read it and ask which sections need changes. Update only those sections.
- If it exists and the user wants to **review** it, read it back, summarise it, and ask what needs correcting.
- If it does not exist, create it now using the steps below.

You can also auto-draft from existing material. If the user has a website, social account, deck, or other brand collateral, offer to study it and produce a V1 draft, then walk through corrections section by section. This is faster than starting from scratch and most users prefer it.

## Why each section matters

This file replaces the "AI sounds generic" problem. With brand context, every downstream skill (hook generation, scripts, carousels, audits) is calibrated to one specific brand. Without it, every output is flavoured like the average internet creator. The schema below is engineered around Jun Yuh's 1×5×3 system, so the fields map directly to what hook-generator, the format skills, and content-audit need.

See `references/schema-template.md` for the full template you'll fill in, and `references/jun-yuh-system.md` at the repo root for the system this is built around.

## The interview

Walk through each section conversationally, one at a time. Don't dump all questions at once. Be specific in your asks. Ask "what's the number-one frustration that brings them to you" not "what problem do they solve". Capture **exact words** from the customer wherever possible — verbatim language beats polished descriptions because it makes downstream copy resonate.

Validate as you go. Summarise each section back to the user and confirm before moving on.

### Section 1: Brand essentials

- One-liner. What is this brand in one sentence.
- Business model. DTC, agency, creator, SaaS, coach, service, retail.
- Active platforms. Which ones get content (Instagram, TikTok, YouTube Shorts, LinkedIn, etc.).
- Posting cadence target. Daily, 5x/week, 3x/week.

### Section 2: Voice

This calibrates every line the agent writes.

- Tone in 3 words. Pick three. Examples: warm/direct/playful, sharp/calm/dry, hyped/raw/funny.
- Vocabulary list. Words this brand uses naturally.
- Banned words. Words this brand never uses. Be specific. (Common bans for direct brands: "synergy", "leverage", "unlock", "elevate", any em-dashes if the brand prefers them.)
- Reference creators. 1 to 3 creators or brands this brand sounds like. Used as a tonal benchmark.
- Sample paragraph. Three sentences in brand voice. This is the gold-standard tonal sample. Write it together with the user.

### Section 3: Audience symptoms (most important section)

This is Jun's doctor-patient lens. Every hook the agent writes will pull from this section. **Insist on customer's exact words.**

- Top 5 pains in customer's exact words. Format: "I feel..." or "I can't..." or "I'm tired of...". Pull from reviews, DMs, sales calls, support tickets if available.
- Top 5 desires in customer's exact words. Format: "I want to..." or "I wish I could..." or "What I really want is...".
- Demographic call-outs. Age, life stage, role, income bracket, family situation. The specifics that let a hook call them out by name (Jun's "should athletes eat pasta or rice" example).
- Identity tags. What does the customer call themselves? Mom, founder, single dad, "girl in her flop era", apprentice tradie. These are tribal flags hooks can use.

### Section 4: Why anchor

Jun's mindset layer. Captures what carries this brand through the inflection dip.

- Brand's why. One paragraph. Why does this brand exist beyond making money. Who does it serve and what's the transformation.
- Transformation offered. Before-state to after-state, in customer language. ("Goes from 'my phone dies on day one of a camping trip' to 'I never think about charging on a four-day off-grid'.")

### Section 5: Content pillars

- 3 pillars maximum. Three is plenty. Four is too many.
- 10 to 30 topics under each pillar. Topics are specific enough to make a single piece of content about. ("Camping electronics" is a pillar. "Why your headlamp drains your power bank overnight" is a topic.)
- Pillar weight. Percent of content per pillar. Most brands do 50/30/20.

### Section 6: Format library

The agent will pick from these formats. Capture one example of each, in this brand's voice, so format skills produce on-brand work.

- Direct to camera example. A 30 to 60 second script in brand voice.
- Carousel example. 5 to 7 slides with hook, content slides, payoff. Image direction notes.
- B-roll plus text example. On-screen hook, B-roll direction, full caption.

### Section 7: Performance baselines

Helps the agent benchmark and audit. Skip if the brand is brand new.

- Current avg skip rate. If known.
- Current avg watch time.
- Best performing post link or description.
- Hook type that's working best for this brand. Question, list, story, negative, or contrarian.

## Output

Write the file to `.agents/brand-content-context.md`. Use the template in `references/schema-template.md` for the exact format.

After writing, tell the user:

> Brand context saved. Every other Hiruno skill will now read this file automatically. Run /brand-content-context anytime to update it.

If the user wants to immediately use the context for content work, suggest the next skill based on what they need:
- "Write hooks" → hook-generator
- "Make a content calendar" → posting-grid
- "Find pillars and topics" → pillars-and-topics
- "Audit my last 30 days" → content-audit

## Pushing for quality

When users give vague answers, push back kindly. Vague brand context produces vague content. Specifically:

- "Help women feel confident" is too generic. Push to "help 30-something moms who feel invisible after kids feel like themselves again."
- "Sell coffee" is too generic. Push to "sell single-origin coffee to home brewers who want cafe-quality without the cafe price."
- "We're warm and approachable" is too generic. Push to "we sound like the friend who's actually been through what you're going through, not the influencer."

Specificity downstream comes from specificity here. This is the foundation.

## Related skills

- **pillars-and-topics**: Run after this skill if the user couldn't fill out pillars on their own.
- **hook-generator**: First downstream skill that consumes this context.
- **content-audit**: Uses voice and audience symptoms to score existing content.
