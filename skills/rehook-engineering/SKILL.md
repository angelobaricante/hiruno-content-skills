---
name: rehook-engineering
description: Use this skill whenever the user wants to add structural turns inside a piece of content to keep retention high. Trigger on phrases like "make this more retentive", "watch time drops mid-video", "people swipe away halfway through", "add re-hooks", "engineer the retention", "viewers aren't finishing", "audience falls off", or whenever a content-audit flagged re-hooks as the weakest dimension. The hook gets people to start watching. Re-hooks keep them watching. This skill audits an existing piece for retention-critical beats and inserts structural turns at each: numbered titles inside carousels, on-screen text changes mid-video, contrast pairs in talking-head, slide titles that earn the swipe.
---

# Re-hook Engineering

You engineer retention inside a piece of content. The hook stops the scroll. Re-hooks keep them watching past the first slow beat. Without re-hooks, even strong-hook posts lose watch time mid-way and the algorithm drops them.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms. Re-hooks have to stay on-brand. If missing, run `/brand-content-context`.

## What a re-hook is

A re-hook is any structural element inside the post that re-engages the viewer at a moment they were about to drop off. It's not new content. It's a turn — a number, a contrast, a question, a callback — that makes the viewer commit to one more beat.

Re-hook examples:

- "And the second thing is..." (numbering re-hook)
- "But here's what nobody talks about..." (curiosity re-hook)
- "Most people get this part wrong..." (contrast re-hook)
- "Ready for the kicker?" (anticipation re-hook)
- A new full-screen text change at second 4 of a B-roll
- A slide title that contrasts with the previous slide ("That was the wrong way. Here's the right way.")

## Where re-hooks go

The retention-critical beats vary by format.

### Direct to camera (30 to 90 seconds)

- **Around 4 seconds:** confirm the curiosity gap is still alive
- **Between value beats** (e.g. around 15s, 30s, 45s): number the beats out loud or use contrast turns
- **Just before payoff** (~5 seconds before the end): set up the resolution

### Carousel (5 to 10 slides)

- **Slide 2 title:** must earn the swipe from slide 1 (the hook). If slide 2 is generic, viewer bails.
- **Every content slide title:** treat each as a mini-hook for that slide
- **Penultimate slide:** set up the payoff so the final slide lands

### B-roll plus text (5 to 12 second clip + caption)

- **Around second 3 to 4 of the clip:** on-screen text change so viewers who paused on the first text get a second hit
- **Caption opening line:** restate or extend the hook to commit them to the caption
- **Each numbered caption point:** treat each item's first phrase as a mini-hook

## Process

1. **Get the source content.** The user gives you a script, a carousel draft, a caption, or a description.
2. **Identify the retention-critical beats** based on format. Different formats have different drop-off points.
3. **Diagnose where re-hooks are missing.** Mark each weak beat.
4. **Insert re-hooks.** Use the move that fits the brand voice — numbering, contrast, curiosity, anticipation, callback.
5. **Output the revised version with re-hooks marked**, so the user can see what changed and why.

## Output format

```
RE-HOOK AUDIT
Format: [DTC / carousel / B-roll]
Length: [seconds or slide count]

---

RETENTION-CRITICAL BEATS

Beat 1 — [position, e.g. "around 4s in DTC video"]
Status: [Strong re-hook present / Weak / Missing]
Current line: "[what's there now]"
Issue: [what's wrong]
Insert: "[the re-hook to add]"

Beat 2 — [position]
[same structure]

Beat 3 — [position]
[same structure]

[...]

---

REVISED CONTENT WITH RE-HOOKS MARKED

[The full revised piece, with re-hook insertions clearly marked, e.g. with **bold** or [RE-HOOK] tags so the user can see what changed]

---

EXPECTED LIFT
[1-2 lines: which retention beat will improve, why this re-hook works for this brand]
```

## The five re-hook moves

These cover most situations. Pick based on what fits the brand voice and the beat.

### 1. Numbering / list pacing

Strong for content with multiple takeaways. Number the items out loud or visually.

- "Number one." "Now the second one." "And here's the third."
- Slide titles: "1.", "2.", "3."

### 2. Contrast pair

Strong for any format. Set up "X but Y" or "X versus Y" turns that force the viewer to track the comparison.

- "Most people think it's about A. It's actually about B."
- Slide flip: "Wrong way" → "Right way"

### 3. Curiosity nudge

Verbal turn that opens a new mini-loop mid-content.

- "Here's where it gets interesting"
- "But the thing nobody talks about is..."
- "And this is the part most people miss"

### 4. Anticipation

Tells the viewer something is coming, so they commit to staying for it.

- "I'll tell you the biggest one in a second, but first..."
- "The kicker is at the end"
- Slide: "Save this slide — it's the one that matters"

### 5. Callback

Late in the post, refer back to the hook. Closes the loop and signals the payoff is coming.

- "Remember the question I asked at the start?"
- "Coming back to the [topic from the hook]..."
- Final slide that visually echoes the hook slide

## What re-hooks aren't

- **Filler.** "Stay with me" or "this is important" without specificity is empty. The re-hook must add information or contrast, not just stall.
- **Hype.** "You're not going to believe this" doesn't re-engage anyone past the first time. Specificity beats hype.
- **Recaps.** Repeating what was just said isn't a re-hook. The viewer doesn't need a recap of 3 seconds ago.
- **Genuine new content.** A re-hook is a *turn* into new content, not the new content itself. The new content lives between re-hooks.

## When the source content is too thin to re-hook

Sometimes the content itself isn't good enough to deserve re-hooks. If the script has no real value beats, no contrast, no story arc, re-hooks won't save it. Flag this honestly:

> "This script doesn't have enough internal structure for re-hooks to make a meaningful difference. The deeper issue is [missing value / no contrast / no story arc]. I'd recommend running [hook-generator / direct-to-camera-script] to rebuild from the angle up rather than patch this version."

Better to redirect the user than insert re-hooks into a hollow post.

## When there are too many re-hooks

This is rarer than too few, but it happens. Symptoms:
- Every line in the script starts with "but here's the thing..."
- Every slide is a contrast pair so contrast loses meaning
- The post feels frantic, like the creator is trying too hard

Fix: cut the weakest re-hooks. Keep one strong move per beat, not three.

## Format-specific tips

### DTC videos
- Re-hooks should be spoken naturally, not forced. They have to fit the brand voice or they sound like creator-influencer-speak.
- Aim for 2 to 3 re-hooks total in a 45 to 60 second script. More than that feels jittery.

### Carousels
- The slide title is the re-hook 90% of the time. Generic titles = no re-hook = swipe-away.
- A blank "transition slide" between sections can act as a re-hook in long carousels.

### B-roll plus text
- The caption's structure does most of the work. Numbered points = built-in re-hooks.
- An on-screen text change at second 3-4 is the strongest visual re-hook for this format.

## Related skills

- **brand-content-context:** voice fit
- **direct-to-camera-script:** primary skill that produces DTC content; re-hooks are baked in but this skill can sharpen them
- **storytelling-carousel:** primary skill for carousel content
- **b-roll-text-post:** primary skill for B-roll content
- **content-audit:** flags when re-hooks are weak across a body of work
