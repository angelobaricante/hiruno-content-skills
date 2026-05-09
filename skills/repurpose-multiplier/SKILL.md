---
name: repurpose-multiplier
description: Use this skill whenever the user wants to take one piece of content and multiply it into many. Trigger on phrases like "repurpose this", "make 15 posts from one topic", "turn this into more content", "give me variations", "I have one good idea, help me get more out of it", "stretch this into a week of content", or whenever the user has a single strong post (existing or planned) and wants to extract maximum mileage from it. This skill runs the 1×5×3 multiplication: take one topic, generate 5 hook variations (one per type), then express each across the 3 formats. Output is up to 15 distinct posts from one starting input. The best creators don't start from scratch every time — they multiply.
---

# Repurpose Multiplier

You take one piece of content and produce up to 15 variations of it. The system: 1 topic × 5 hooks × 3 formats. The same idea, expressed five ways and packaged three ways.

This is what the best creators actually do. Heather (management coach) takes "what makes a good manager" and posts it as a direct-to-camera, a carousel, and a B-roll plus text in the same week with three different hooks. Same idea, three packages. Three reach surfaces.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, format library. If missing, run `/brand-content-context`.

## Two starting modes

The user gives you one of two inputs:

### Mode A: starting from a topic

The user names a topic (from a pillar) and wants 15 posts from it.

You run:
1. hook-generator logic on the topic → 5 hooks (one per type)
2. For each hook, generate the post in all 3 formats → 15 posts

### Mode B: starting from an existing post

The user has an existing post (carousel, video, ad, blog) and wants to multiply it.

You run:
1. Identify the underlying topic and the current hook type and format
2. Generate the other 4 hook types for the same topic
3. Express each of the 5 hooks across all 3 formats → 15 posts (one of which is approximately the original)

## The core math, restated

```
TOPIC
  ├─ Hook 1 (Question)    → DTC, Carousel, B-roll
  ├─ Hook 2 (List)        → DTC, Carousel, B-roll
  ├─ Hook 3 (Story)       → DTC, Carousel, B-roll
  ├─ Hook 4 (Negative)    → DTC, Carousel, B-roll
  └─ Hook 5 (Contrarian)  → DTC, Carousel, B-roll

= 15 posts
```

## Process

1. **Lock the topic.** Confirm the single topic with the user. If they gave you something fuzzy, narrow it together.
2. **Generate the 5 hooks.** Use hook-generator logic. Each hook must pass symptom-first and curiosity gap tests.
3. **Generate format treatments.** For each of the 5 hooks, produce a brief treatment in each of the 3 formats. Don't write the full final scripts and carousels here — produce the *blueprint* for each so the user can pick the strongest 5 to 8 to actually produce.
4. **Recommend a top 5 to 8.** Not all 15 are equally strong. Highlight the strongest combinations to ship first.
5. **Suggest a posting cadence.** Hand off to posting-grid if the user wants a calendar.

## Output format

```
REPURPOSE MULTIPLIER: [topic]
Mode: [A: from topic / B: from existing post]
[If Mode B: ORIGINAL POST = brief description]

---

5 HOOKS

1. QUESTION HOOK
[hook line]
→ pulls from: [audience pain or desire]

2. NUMBERED LIST HOOK
[hook line]
→ pulls from: [audience pain or desire]

3. STORY HOOK
[hook line]
→ pulls from: [audience pain or desire]

4. NEGATIVE HOOK
[hook line]
→ pulls from: [audience pain or desire]

5. CONTRARIAN HOOK
[hook line]
→ pulls from: [audience pain or desire]

---

15-POST GRID

| # | Hook | Format | Treatment summary |
|---|------|--------|-------------------|
| 1 | Q | DTC | [3-5 word description: e.g. "ask question, walk through 3 angles, end with payoff"] |
| 2 | Q | CAR | [...] |
| 3 | Q | BR | [...] |
| 4 | L | DTC | [...]
[...continue through all 15 combinations]

---

SHIP THESE FIRST (top 5-8)

1. [Hook + Format combo]
   Why: [1 line]

2. [Hook + Format combo]
   Why: [1 line]

[...]

---

NEXT STEPS

To produce the actual content for any of these:
- Run /hook-generator if you want to refine the hook
- Run /direct-to-camera-script for DTC posts
- Run /storytelling-carousel for carousel posts
- Run /b-roll-text-post for B-roll posts

To plan when each goes live:
- Run /posting-grid with these as the inputs
```

## Treatment summaries (what goes in the table)

Each treatment summary is short — 3 to 8 words. The point is to show how the format will *handle* the hook, not to write the post.

Examples:

| Hook | Format | Good treatment summary | Bad treatment summary |
|---|---|---|---|
| Story | DTC | "open in scene, two beats, payoff" | "talk about a story for 60 seconds" |
| Negative | Carousel | "5 don'ts, each on own slide" | "carousel about negative things" |
| Contrarian | B-roll | "single line on screen, 6-bullet caption" | "post the take with B-roll" |

The summary should give the user enough to decide if they like the angle, without writing the whole thing.

## Why not all 15 are equal

Some hook+format combinations are stronger than others depending on the topic and the brand. Patterns:

- **Story + DTC** is almost always strong. Talking-head storytelling converts.
- **Negative + B-roll** is strong for actionable content with a visual product.
- **Contrarian + Carousel** is strong for argument-heavy content where the body needs evidence.
- **Question + B-roll** can be weak if the question doesn't get answered visually.
- **List + DTC** can be weak if the list runs long and the script gets repetitive.

Use this as a starting heuristic. Override based on the brand's performance baselines.

## When the user wants the full posts, not just blueprints

Confirm. Producing all 15 fully is heavy. Default behaviour is the blueprint table plus the recommended top 5 to 8 fully written.

If they want all 15 fully written, chain through:
1. hook-generator (produces the 5 hooks)
2. For each hook chosen, the matching format skill

This is a 15-step generation. Stage it across multiple turns if it's long.

## When Mode B (existing post) starts with a weak post

If the original post is fundamentally broken (bad hook, no value, off-voice), don't multiply it. The 15 multiplications will inherit the brokenness. Run content-audit first, fix the root issue, then multiply.

## Related skills

- **brand-content-context**: voice, audience, format library
- **hook-generator**: produces the 5 hook variations
- **symptom-first-messaging**: ensures hooks aren't expert-talk
- **direct-to-camera-script** / **storytelling-carousel** / **b-roll-text-post**: produce the actual posts for each cell
- **posting-grid**: lays the multiplied posts across a calendar
- **content-audit**: pre-flight check on the source post in Mode B
