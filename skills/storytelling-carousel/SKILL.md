---
name: storytelling-carousel
description: Use this skill whenever the user wants to create or plan an Instagram carousel, slide post, or multi-slide format. Trigger on phrases like "make a carousel", "Instagram slides", "Canva slides", "swipe post", "5 to 10 slides", "slide deck for Instagram", "how should I structure these slides", or whenever the user has content that's text-heavy, list-shaped, or storytelling-shaped and wants to publish without filming. Carousels are best for people who write better than they talk and for content where the viewer benefits from controlling pace. This skill produces 5 to 10 slides with a hook slide, content slides (one title and one takeaway each), and a payoff slide, plus image direction.
---

# Storytelling Carousel

You design carousels that hold viewer attention across slides. The mechanic is different from video: the viewer controls pace, so retention is about whether they swipe to the next slide. Each slide must earn the swipe.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, format library example. If missing, run `/brand-content-context` first.

## Why carousels win

- **Cheap to make.** 10 to 15 minutes in Canva (free tier).
- **Forgiving.** No filming, no on-camera anxiety. Best format for people who write better than they talk.
- **Digestible.** Viewer reads at their own pace. Faster readers swipe quickly. Slower readers get to absorb.
- **High shareability.** Carousels save and share more than direct-to-camera videos.

## The structure

Default carousel: 5 to 10 slides. Sweet spot is 6 to 8.

1. **Slide 1 — Hook**. The whole post lives or dies here. If they don't swipe, nothing else matters.
2. **Slide 2 — Setup or first content beat**. Make the swipe feel rewarded.
3. **Slides 3 to N — Content slides**. One title, one takeaway each.
4. **Final slide — Payoff or CTA**. Either resolution of the story or the actionable takeaway.

## The slide rules

These rules come from the failure modes carousels usually have.

### One idea per slide

If a slide has more than one takeaway, split it. Bombarded slides cause swipe-away. Title plus one paragraph max.

### Title vs body, visually distinct

Each content slide should have a **title** (large, bold, short) and a **body** (smaller, 1 to 3 sentences). Visually separate them with size, weight, or colour. The viewer scans the title first, decides if they care, then reads the body. If title and body look the same, the viewer's eye has nowhere to land.

### Titles do most of the work

The title on every slide is a mini-hook for that slide. If the title is generic, the swipe rate on that slide drops. Specific titles, contrast pairs, numbered call-outs.

Bad title: "Tip 1: Be Consistent"
Good title: "Cash still matters in Europe (yes, even in 2026)"

### Numbered re-hooks

Numbering each content slide ("1.", "2.", "3.") gives the viewer a tracked progress bar. They know where they are and how much is left. This is one of the strongest re-hook moves in a carousel.

### Final slide is not "follow for more"

The last slide either:
- Resolves the story or argument set up by the hook
- Gives a clear, specific CTA ("save this for your next trip", "tag a friend who's about to do their first cut", "comment X for the full template")
- Asks a question that drives comments

Generic "follow for more" is wasted real estate.

## Image direction

Carousels are visual. Image direction matters as much as text.

For each slide, specify:
- Background colour or imagery
- Text colour
- Image or icon if any
- Brand asset notes (logo placement, brand fonts, etc.)

If the brand context has a carousel example with established design, follow that aesthetic. If not, suggest a clean default:
- Slide 1: high contrast (e.g. dark background, bold text)
- Content slides: consistent template with title on top, body below
- Final slide: visually distinct from content slides (different colour, bigger CTA)

## Output format

```
CAROUSEL: [topic]
Length: [n] slides
Hook type: [question / list / story / negative / contrarian]

---

SLIDE 1 — HOOK
On-slide text: [the hook, large]
Image direction: [description]

---

SLIDE 2 — [Title]
On-slide text:
[Title — large/bold]
[Body — 1 to 3 sentences]
Image direction: [description]

---

SLIDE 3 — [Title]
On-slide text:
[Title]
[Body]
Image direction: [description]

[... continue for all middle slides]

---

FINAL SLIDE — [Payoff or CTA]
On-slide text:
[text]
Image direction: [description]

---

CAPTION (Instagram)
[Caption text. 1 to 4 sentences. Reinforce the hook, drive comments, no spammy hashtag stack. 3 to 5 relevant hashtags max.]

WHY THIS HOOK
[1-2 lines: audience pain or desire pulled from, hook type, curiosity gap reasoning]

WHY THIS STRUCTURE
[1 line: why this number of slides, why this title sequence]
```

## Hook type matters less here

In direct-to-camera, hook type drives a lot of the script structure. In carousels, all five hook types work equally well, but each shapes the body differently:

- **Question hook** → final slide answers the question (or kicks it back to the viewer)
- **Numbered list** → slides become the list items, one per slide
- **Story hook** → slides are story beats, final slide is resolution
- **Negative hook** → each slide is a "don't do this" with the matching "do this" on the same slide
- **Contrarian hook** → slides are arguments and evidence, final slide is the takeaway flip

## Slide count guide

- 5 slides: tight story or quick numbered list (3 items + hook + payoff)
- 6-7 slides: most common, fits a 4-5 item list or a story with payoff
- 8-10 slides: long-form list or detailed story; only use if each slide has earned its place

If you're at 10+ slides, ask whether the content should be split into two carousels.

## When the user gives you raw content to convert

If they hand you a long-form draft, blog excerpt, or transcript and ask for a carousel:

1. Find the single strongest takeaway (the one that would be the post's hook)
2. Identify 4 to 6 supporting points
3. Cut everything else
4. Draft the carousel using the steps above

Do not try to fit the whole long-form into a carousel. The skill of carousels is reduction.

## Voice and word choice

- Carousels can use slightly more polished language than spoken-video, but not by much. Still customer language, still symptom-first.
- Title text especially: bold, definitive, short. Hedging language ("sometimes", "often", "in some cases") kills title energy.
- Brand banned words still apply.

## Related skills

- **brand-content-context**: voice and aesthetic source
- **hook-generator**: produces the slide-1 hook
- **symptom-first-messaging**: fixes any expert-talk in titles or bodies
- **rehook-engineering**: makes weak middle-slide titles re-engaging
- **direct-to-camera-script** and **b-roll-text-post**: alternate format options for the same content
- **repurpose-multiplier**: take the same content into all three formats
