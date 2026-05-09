---
name: direct-to-camera-script
description: Use this skill whenever the user wants to write, plan, or refine a script for a talking-head video. Trigger on phrases like "write a talking-head script", "DTC video", "write a reel script", "script for me to film", "write what I should say", "talking head", "selfie video script", "I want to record myself talking", or whenever the user is producing a video where they (or a UGC creator) speak to camera. Direct-to-camera is the highest-converting format for new followers because the viewer is buying personality, not just information. This skill produces a 30 to 90 second script with hook, value beats, re-hooks, and CTA, formatted for one-line-at-a-time recording.
---

# Direct-to-Camera Script

You write talking-head scripts that hit on the three format parameters: strong hook, real value, re-hooks. You also format the script for the production reality, which is that nobody actually memorises lines. Creators record one line at a time and cut the dead space.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, banned words. Without context the script will sound like a generic creator. Tell the user to run `/brand-content-context` first if missing.

## Why this format wins

Direct-to-camera is the highest-converting format for new followers. The viewer hears personality and energy, not just words. They follow the person, not the topic. That's why this format gets the most follows per video even though it doesn't always get the most views.

It's also the format that punishes weak content most. There's nothing to hide behind — no B-roll, no slide design. The script and the delivery have to carry the post.

## The structure

Every direct-to-camera script has four sections:

1. **Hook** (first 3 seconds, 5 to 12 spoken words)
2. **Setup** (next 5 to 8 seconds, what's at stake or what's about to be revealed)
3. **Value beats** (2 to 3 takeaway moments, each 8 to 15 seconds)
4. **Payoff or CTA** (last 3 to 8 seconds)

Total length: 30 to 90 seconds. Default to 45 to 60 unless the user specifies.

## Re-hooks inside the script

Direct-to-camera lives or dies by re-hooks. Without them, the viewer drifts at the first slow beat. Use these re-hook moves at retention-critical points:

- **Around 4 seconds** — confirm the curiosity gap is still active. "Here's where it gets interesting" or "and the thing nobody talks about is".
- **Around the value beat transitions** — number the beats out loud. "Number one." "But here's the second thing." "And the last one is the most important."
- **Just before payoff** — set up the resolution. "So if you've been doing X this whole time, this is what you actually need to know."

Re-hooks are not filler. Each one should also be specific. "Here's the part most people miss" is filler. "Here's why every product person you've worked with quit by month four" is a re-hook.

## The one-line-at-a-time format

Most creators don't memorise scripts. They read one line, look at the camera, deliver it, then move to the next. Format the script accordingly:

- Each spoken line on its own line, max 12 to 15 words
- Stage direction in parentheses if needed
- Cuts marked with `---` between lines
- No paragraphs, no flowing prose

This is what the creator will actually look at while filming. Make it usable.

## Output format

```
DIRECT-TO-CAMERA SCRIPT
Length: [estimated seconds]
Hook type: [question / list / story / negative / contrarian]

---
HOOK (0-3s)
[line]

---
SETUP (3-10s)
[line]
[line]

---
VALUE BEAT 1 (10-25s)
[re-hook line if applicable]
[line]
[line]

---
VALUE BEAT 2 (25-40s)
[re-hook line if applicable]
[line]
[line]

---
VALUE BEAT 3 (optional, 40-55s)
[re-hook line if applicable]
[line]
[line]

---
PAYOFF / CTA (last 5-8s)
[line]

---

PRODUCTION NOTES
- Frame: [phone vertical, head-and-shoulders / hands visible / etc.]
- Energy: [match the brand voice — calm, hyped, dry, etc.]
- Camera trick: record one line at a time. Read line, look up, deliver, cut.
- Editing: cut all dead space between lines. Add captions. Music low if any.
- Caption suggestion (Instagram): [1-2 sentence caption with relevant hashtags or none]

WHY THIS HOOK
[1-2 lines: which audience pain or desire it pulls from, which hook type, why it should pass the curiosity gap test]
```

## Choosing the hook

If the user already has a hook (e.g. from hook-generator), use it. Build the rest of the script around it.

If they don't, ask which hook type they want, or pick based on:
- Story hook works best for personal authority and relatability
- Negative hook works best for actionable "fix this now" content
- Contrarian hook works best when the brand has a real opinion to defend
- Question hook works best when the audience is wrestling with the question already
- Numbered list works best for "give me the answers" content

If unsure, lean story or contrarian for personal-brand creators, negative or numbered list for product-led brands.

## Voice and word choice

- Use words from the brand context's vocabulary list.
- Strip out anything in the banned words list.
- Match the sample paragraph's energy. If the brand is dry and direct, don't write hyped energy. If hyped, don't write dry.
- Default to short sentences. Spoken video punishes long sentences. 8 to 14 words per spoken line is the sweet spot.
- Cut filler. "I think", "kind of", "really", "just" — usually all removable.

## When the user is filming for a client (UGC)

If the script is for a UGC creator filming for a brand (Cult of Sauna, Volt Dropper, etc.), add:

- A line at the top noting which UGC creator persona fits (e.g. "younger tradie energy", "outdoorsy 30-something dad")
- Pronoun guidance — "I" if it's a first-person testimonial, "you" if it's an explainer
- A note on whether this should sound rehearsed (announcement-style) or organic (caught-on-camera-style). Most DTC UGC works better organic.

## Common script weaknesses to fix on the fly

If the user gives you a draft and asks for fixes, look for these:

| Weakness | Fix |
|---|---|
| Hook is buried 5+ seconds in | Move the hook to line 1, cut the warm-up |
| Generic opening ("hey guys", "today I want to talk about") | Delete and replace with hook |
| No re-hook between beats | Add a numbered call-out or contrast pair |
| Long sentences (15+ words spoken) | Break into 2 lines, max 12 words each |
| Vague payoff ("hope this helps", "follow for more") | Replace with specific takeaway or specific CTA |
| Voice slips | Re-read brand sample paragraph, rewrite the off-voice lines |

## Related skills

- **brand-content-context**: voice, audience, banned words
- **hook-generator**: produces the hook this script will be built around
- **symptom-first-messaging**: rewrites if the hook or opening is expert-talk
- **rehook-engineering**: deeper work on re-hooks if scripts keep losing watch time mid-way
- **storytelling-carousel** and **b-roll-text-post**: alternate format options for the same content
- **repurpose-multiplier**: take the same idea and produce all three format versions
