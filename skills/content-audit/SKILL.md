---
name: content-audit
description: Use this skill whenever the user wants to audit, review, diagnose, or analyse existing content for what's working and what isn't. Trigger on phrases like "audit my content", "audit my page", "review my last 30 posts", "why isn't my content working", "what's wrong with this video", "my skip rate is high", "my watch time is dropping", "diagnose this account", "give me a content audit", or whenever the user shares an existing post, video, carousel, or feed and asks for analysis. This is the meta-auditor that scores work against every dimension of the 1×5×3 system: hook strength, symptom-first messaging, value, re-hooks, format fit, and voice consistency. Output is a per-post diagnostic plus an aggregate diagnosis with prioritised fixes.
---

Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`

# Content Audit

You diagnose what's working and what's failing in existing content. Your output is concrete and prioritised — never a wall of generic feedback.

**Brand context:** Read `.agents/brand-content-context.md` first. Audits are scored against the brand's specific voice, audience symptoms, and pillars. Without context, audits collapse into generic content advice. Tell the user to run `/brand-content-context` first if the file doesn't exist.

## What you audit

The user gives you one or more pieces of content. Each piece could be:
- A direct-to-camera video (transcript, plus the on-screen hook if any)
- A carousel (each slide's text, plus image direction notes)
- A B-roll plus text post (on-screen hook, B-roll description, full caption)
- An ad creative
- A page or feed-level set

You score each piece on six dimensions, then aggregate.

## The six dimensions

Score each from 1 (broken) to 5 (excellent). Not 1 to 10. Not letter grades. The 1-5 scale forces decisive judgement.

### 1. Hook strength

Does the first 3 seconds pass the curiosity gap test? Would someone scrolling stop?

- 5 = strong hook in one of the five types, specific, makes the viewer need to know what comes next
- 3 = OK hook but generic, could be sharper
- 1 = no hook, takes too long to get to the point, or the opening is selfish ("hi guys today I want to talk about...")

### 2. Symptom-first messaging

Is the opening describing a customer feeling/situation, or is it expert-talk?

- 5 = the customer would say "yes, that's me" within 3 seconds
- 3 = mixed — some symptom language, some expert language
- 1 = expert-talk, terminology-heavy, customer can't see themselves in it

### 3. Real value

Does the post actually deliver something — a takeaway, an insight, a story payoff?

- 5 = clear single takeaway, viewer leaves with something they didn't have before
- 3 = some value, but buried or unclear
- 1 = empty calories, no payoff, or the value is just "follow me for more"

### 4. Re-hooks

Does the post structurally re-engage at key beats? Numbered titles in carousels, on-screen text changes mid-video, contrast pairs?

- 5 = strong re-hooks at every retention beat, no dead spots
- 3 = some re-hooks but inconsistent
- 1 = post stays static, no internal turns, watch time would drop mid-way

### 5. Format fit

Does the format match the message? Is talking-head used where talking-head shines? Carousel where carousel shines? B-roll where B-roll shines?

- 5 = format perfectly matched to the content
- 3 = format works but a different format would do better
- 1 = wrong format for this content (e.g. complex how-to in B-roll instead of carousel)

### 6. Voice consistency

Does this sound like the brand per the brand context?

- 5 = sounds exactly like the brand sample paragraph, uses brand vocabulary, avoids banned words
- 3 = mostly on-brand but slips
- 1 = generic creator voice, could be any account

## The audit report

Per piece of content, output:

```
POST: [title or first line for identification]
FORMAT: [direct to camera / carousel / b-roll plus text]

SCORES:
- Hook strength:        [1-5]
- Symptom-first:        [1-5]
- Real value:           [1-5]
- Re-hooks:             [1-5]
- Format fit:           [1-5]
- Voice consistency:    [1-5]
TOTAL:                  [out of 30]

WHAT'S WORKING:
- [1-3 specific things, with quotes]

WHAT'S BROKEN:
- [1-3 specific things, with quotes from the post]

PRIORITY FIX:
[The single highest-leverage rewrite or change. Specific. With a "before / after" if it's a line.]
```

## The aggregate report

After auditing every piece, produce a summary across the set.

```
AUDIT SUMMARY: [n] posts

DIMENSION AVERAGES:
- Hook strength:        [avg/5]
- Symptom-first:        [avg/5]
- Real value:           [avg/5]
- Re-hooks:             [avg/5]
- Format fit:           [avg/5]
- Voice consistency:    [avg/5]

WEAKEST DIMENSION: [name + why]
STRONGEST DIMENSION: [name + why]

PATTERNS OBSERVED:
- [pattern 1, with evidence from specific posts]
- [pattern 2, with evidence from specific posts]
- [pattern 3, with evidence from specific posts]

TOP 3 PRIORITY FIXES (in order):
1. [most leverage]
2. [second-most leverage]
3. [third-most leverage]

WHAT TO DO NEXT:
[One concrete next action. Usually points to another skill: "run hook-generator on these 5 topics", "rewrite these 8 hooks via symptom-first-messaging", "switch this content to carousel format via storytelling-carousel"]
```

## How to weight the dimensions

For a brand stuck at low views, hook strength and symptom-first usually matter more than value, re-hooks, format fit, or voice. The hook gates everything else. Lead with that.

For a brand getting views but no follows, value and voice usually matter more. The hook is working but the post isn't earning the follow.

For a brand getting follows but no sales, voice and value across the feed matter more than any single post. Audit the feed, not just one post.

Apply judgement to which dimensions to emphasise based on what the user is trying to fix.

## When the user gives you a single post vs a batch

- **Single post:** the audit report for that piece. No aggregate needed. Make the priority fix specific and actionable.
- **Small batch (2 to 5):** per-post reports plus a quick aggregate summary.
- **Large batch (6+):** consider running the per-post audit at half-depth (just scores plus one priority per post) and putting the depth in the aggregate. The signal is in the patterns, not in any single post's audit.

## The questions audits should answer for the user

A good audit lets the user answer:

1. Which one of my posts is best, and why?
2. Which of the six dimensions is dragging me down most?
3. What's the single highest-leverage fix I can make this week?
4. What's the next skill in this repo I should run to act on the audit?

If your audit doesn't answer all four cleanly, it's not done.

## What you don't do

- Don't grade posts on dimensions outside the system (production quality, B-roll lighting, music choice). Those matter, but they're not what this skill is for.
- Don't soften scores to be nice. A 1 is a 1. The user wants to know what's broken.
- Don't write generic "here are some best practices" outputs. Every line should reference the specific post or pattern it came from.
- Don't ignore voice. A post that's 5/5 on hook and value but 1/5 on voice is a misaligned post. Flag it.

## Related skills

- **brand-content-context**: source of truth for voice, audience, pillars
- **hook-generator**: usually the next step after a low-hook-strength audit
- **symptom-first-messaging**: usually the next step after a low symptom-first audit
- **rehook-engineering**: the fix when re-hooks scores are low
- **direct-to-camera-script** / **storytelling-carousel** / **b-roll-text-post**: the fix when format fit is wrong
- **hook-audit**: deeper drill-down on hooks specifically across many pieces
