---
name: b-roll-text-post
description: Use this skill whenever the user wants to make a single-clip video with text overlay and value in the caption. Trigger on phrases like "B-roll post", "single clip with text", "read caption video", "read more in caption", "post with one B-roll", "I just have one clip", "lazy post", "quickest format to make", or whenever the user has a short video clip and wants to publish it without a full script or filming. This is the fastest format to make (~10 minutes) and the highest retention hack of the three formats: the caption takes longer to read than the clip is long, so the clip loops while the viewer reads, spiking average watch time.
---

# B-Roll Plus Text Post

You design the format that hides retention engineering inside laziness. One clip, one on-screen hook, value in the caption. Looks effortless. Performs because the viewer reads the caption while the clip loops, which inflates watch time and pushes the algorithm.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, format library example. If missing, run `/brand-content-context` first.

## Why this format wins

- **Fastest to make.** ~10 minutes from clip to publish.
- **Retention hack.** A 7-second clip with a caption that takes 25 seconds to read loops 3+ times. Watch time goes up. Algorithm pushes.
- **No filming setup needed.** Use existing B-roll, casual phone footage, or even unrelated visual moments.
- **Best for visual products.** Cult of Sauna, Volt Dropper, anything where the product naturally creates a clip.

## The structure

Three components:

1. **B-roll clip** — 5 to 12 seconds, loops cleanly. Visual interest matters more than narrative.
2. **On-screen hook** — one line of text overlaid on the clip. 8 to 15 words.
3. **Caption** — the value lives here. Listed structure, scannable.

## The mechanic

The reason this format works is mechanical. The viewer:

1. Sees the clip with the on-screen hook.
2. Hook makes them curious enough to want more.
3. They read the caption.
4. Reading the caption takes longer than the clip's runtime.
5. The clip loops in the background while they read.
6. Average watch time = time to read the caption ÷ clip length.
7. If caption takes 25 seconds to read and clip is 7 seconds, watch time inflates 3.5x.
8. Algorithm interprets this as a strong post and pushes it further.

This means: **make the caption long enough to take 20 to 40 seconds to read.** Too short and the hack doesn't fire.

## On-screen hook rules

- 8 to 15 words. Skim-readable.
- Position: top third or middle. Not bottom (Instagram UI overlaps).
- Big enough to read on a phone screen. White text on a slight dark gradient is reliable.
- Speaks to the audience symptom directly. Same rules as hook-generator.

## B-roll selection

The clip doesn't need to literally illustrate the topic. It needs to:

- Be visually interesting enough to not be ignored
- Loop without a hard cut (or with a cut that feels intentional)
- Be on-brand aesthetically (not random stock footage that breaks the brand vibe)

Common strong B-rolls for different brand types:
- DTC product brands → product in use, hand-held shot, casual environment
- Personal brand → POV shot of the creator's environment, working, hands moving
- Service brand → behind-the-scenes of the work being done
- Outdoor or lifestyle → environmental shot, moving water, fire, scenery

The clip can also be unrelated to the topic if the on-screen hook is strong enough. The "person eating food while talking about money" pattern works because the visual incongruity is its own re-hook.

## Caption rules

The caption does the heavy lifting. Structure:

1. **Repeat or extend the hook** as line 1. The viewer just read the on-screen hook; reinforcing it commits them to the caption.
2. **Listed value**. Numbered or bulleted. Each item one to two sentences. Line breaks between items so it reads cleanly on phone.
3. **Soft payoff or CTA** at the end. Specific, on-brand. No "follow for more".

Word count target: 100 to 250 words. Reads in 25 to 40 seconds.

## Output format

```
B-ROLL PLUS TEXT POST: [topic]
Hook type: [question / list / story / negative / contrarian]

---

ON-SCREEN HOOK
[line, 8-15 words]

---

B-ROLL DIRECTION
- Clip length: [5-12 seconds]
- What's in the clip: [description]
- Mood/aesthetic: [notes]
- Loop point: [where the clip can cut to itself cleanly]

---

CAPTION (Instagram)

[Line 1: hook restated or extended]

[Numbered or bulleted value, 4-7 items]
1. [Item — one to two sentences]
2. [Item — one to two sentences]
3. [Item — one to two sentences]
[...]

[Soft payoff line]

[Optional: 3-5 hashtags, on-brand]

---

WHY THIS HOOK
[1-2 lines: audience pain or desire, hook type, curiosity gap reasoning]

PRODUCTION NOTES
- Total time to make: ~10 minutes
- Caption reading time target: 25-40 seconds
- Clip should loop cleanly. If it can't, cut to a freeze frame at the end.
- On-screen text font and colour: [match brand or use clean sans-serif white on subtle dark gradient]
```

## When the topic is text-heavy

If the user gives you a topic that needs detailed explanation (a tutorial, a complex argument, a narrative with stakes), this format may not be the right choice. Consider:

- Tutorial → suggest carousel via storytelling-carousel
- Complex argument → suggest direct-to-camera via direct-to-camera-script
- Narrative with stakes → suggest direct-to-camera

But B-roll plus text can work for tutorials if the steps fit in 4 to 6 numbered caption points. Quick wins, not deep teach.

## Common failures

| Failure | Fix |
|---|---|
| Caption too short, no loop benefit | Expand to 100+ words, structure as a numbered list |
| On-screen hook fails the curiosity test | Run hook-generator on the topic, replace the hook |
| B-roll is generic stock footage | Find brand-aesthetic footage. If you have to use stock, pick something with strong colour or motion |
| Caption restates the on-screen hook word for word with nothing added | Either extend the hook in line 1 (give a new angle) or jump straight to the listed value |
| No CTA or payoff | Add a specific final line — "save this for your next trip", "tag a friend who would" |

## When the user has a clip but no topic

If they hand you B-roll and ask "what should I post with this?":

1. Look at the brand context's pillars. Pick one that matches the visual mood of the clip.
2. Pick a topic under that pillar.
3. Draft a hook for the topic via the hook-generator logic.
4. Build the caption around that hook.

The clip becomes a vehicle for the post you'd make anyway, not the other way around.

## Voice and word choice

- Captions are written, not spoken, so slightly more polish is OK.
- Still pull symptom-first language from the brand context's audience symptoms.
- Brand banned words still apply.
- Avoid wall-of-text formatting. Line breaks between every numbered point. Phone-readability matters.

## Related skills

- **brand-content-context**: voice and aesthetic source
- **hook-generator**: produces the on-screen hook
- **symptom-first-messaging**: fixes any expert-talk in the hook or caption
- **direct-to-camera-script** and **storytelling-carousel**: alternate format options for the same content
- **repurpose-multiplier**: take the same content into all three formats
