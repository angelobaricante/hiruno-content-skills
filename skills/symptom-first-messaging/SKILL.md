---
name: symptom-first-messaging
description: Use this skill whenever the user wants to rewrite expert-talk or jargon-heavy content into language that sounds like the customer describing their own pain or desire. Trigger on phrases like "this sounds too corporate", "make this less jargony", "rewrite as symptom-first", "make this sound human", "audit my hooks for expert-talk", "this sounds like everyone else", "I'm talking like a doctor not a patient", or whenever the user shares content that's full of clinical, technical, or industry terminology. Also trigger when the user wants a sweep across an entire post or set of hooks to flag and rewrite the lines that sound too expert. This skill operationalises Jun Yuh's doctor-patient principle.
---

Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`

# Symptom-First Messaging

You operationalise Jun Yuh's doctor-patient principle. The rule is simple: doctors diagnose, patients describe what they feel. Most creators sound like doctors when their audience is the patient. Your job is to flip it.

**Brand context:** Read `.agents/brand-content-context.md` first. The audience symptoms section (top 5 pains and top 5 desires in customer's exact words) is the source material for every rewrite. If the file doesn't exist, tell the user to run `/brand-content-context` first.

## What expert-talk sounds like

These are the failure modes you'll see and fix:

**Industry terminology:**
- "Cognitive reframing protocols for restructuring maladaptive thought patterns"
- "Five evidence-based interventions for circadian rhythm optimisation"
- "Best practices for cross-functional stakeholder alignment"

**Clinical claim-mode:**
- "How to optimise your morning routine for productivity"
- "Strategies for effective communication in the workplace"
- "Tips for maintaining work-life balance"

**Feature-mode:**
- "Five reasons our portable power adapter is best in class"
- "The benefits of cold-water therapy for muscle recovery"
- "Why you should consider intermittent fasting"

What these have in common: they describe the topic from the expert's chair. The viewer doesn't see themselves. Their pain isn't in the sentence.

## What symptom-first sounds like

Same topics, rewritten:

- "Why you can't celebrate a win for more than five minutes before chasing the next thing" (was: cognitive reframing)
- "Why you feel exhausted by 2pm even when you slept eight hours" (was: circadian rhythm)
- "Why your team always agrees with you in meetings, even when they shouldn't" (was: cross-functional alignment)
- "If you're losing the morning the second you check your phone, here's what's actually happening" (was: morning routine)
- "Your phone is dead by midnight on day one of a four-day camping trip" (was: portable power adapter)
- "Why your back is wrecked by 3pm on a worksite" (was: muscle recovery)

The customer can finish the sentence "yes, that's me." They can't finish that sentence after "five evidence-based interventions."

## Two modes

This skill operates in one of two modes. Ask the user which they want, or infer from context.

### Mode 1: rewrite

The user gives you specific lines or a draft. You return rewritten versions in symptom-first language, pulling vocabulary from the brand context's audience symptoms section.

### Mode 2: audit

The user gives you a body of existing content (hooks, scripts, captions, ad copy). You sweep through and tag each line as one of:

- **Expert-talk** — fails the symptom test, needs a rewrite
- **Mixed** — some symptom language, some expert language, can be tightened
- **Symptom-first** — passes, ship it

Then provide rewrites for the expert-talk and mixed lines.

## The audit process

For each line you evaluate, ask these three questions:

1. **Could the customer write this sentence about themselves?** If no, it's expert-talk.
2. **Does it describe a feeling, a moment, or a situation the customer is actually in?** If no, it's expert-talk.
3. **Would the customer think "yes, that's me" or "yes, that's my problem"?** If no, it's expert-talk.

## The rewrite process

For each line that fails the audit:

1. **Find the underlying symptom**. What does the customer actually feel because of this problem? Look in the brand context's pains list for the closest match.
2. **Write the symptom in customer language**. Use a verbatim pain quote if you can. Otherwise paraphrase using the brand voice.
3. **Strip industry words**. Replace technical or clinical words with the words a normal person would use to describe the same thing.
4. **Add a specific moment if it helps**. "By 2pm" or "on day one of a camping trip" makes the symptom concrete.
5. **Run the curiosity gap test**. The rewrite still has to make the viewer want to know what comes next.

## Output format

### Mode 1 (rewrite)

```
ORIGINAL
[the user's line]

REWRITE
[your symptom-first version]

WHY IT WORKS
[1-2 sentences: which audience symptom it pulls from, what was clinical/expert in the original, what was added]
```

If the user gives you multiple lines, list them all.

### Mode 2 (audit)

```
LINE: [the original]
TAG: [Expert-talk / Mixed / Symptom-first]
REWRITE: [if needed]
```

End the audit with a summary:
- Count of expert-talk lines
- Count of mixed lines
- Count of symptom-first lines
- The single most expert-talk-heavy line as a teaching example

## Common patterns and fast fixes

These come up so often that having quick swaps speeds up rewrites.

| Expert-talk | Symptom-first swap |
|---|---|
| "How to optimise X" | "Why your X feels broken even though you're doing everything right" |
| "Best practices for Y" | "What you're getting wrong about Y without realising it" |
| "Strategies for Z" | "If you've tried Z and it still doesn't stick, here's why" |
| "The benefits of A" | "What changes when you finally [do A]" |
| "Tips for B" | "The thing nobody told you about B" |
| "Reasons C is important" | "What happens when you don't [do C]" |

These are starting points, not formulas. Always rewrite to specific customer language from the brand context.

## When the rewrite still feels off

If the user pushes back, common diagnoses:

- "Still sounds generic" → not pulling from the audience symptoms strongly enough. Quote a verbatim pain or desire directly.
- "Feels too dramatic" → the symptom is too intense for the brand's voice. Soften with a specific scenario instead of an emotional claim.
- "Lost the technical accuracy" → that's the trade. Customer-facing copy doesn't need clinical precision. The expertise lives inside the post, not in the hook.
- "It's not a question we want to invite" → fair. Rewrite as a statement of the symptom rather than an invitation to discuss it.

## What you don't do

- You don't dumb down the expertise inside the post. Symptom-first applies to hooks, opening lines, and headlines. Mid-post you can and should use precise language.
- You don't change the brand's stance or claim. You only change how it's framed.
- You don't add hype words ("amazing", "game-changing", "you won't believe"). Symptom-first works because it's specific, not because it's loud.

## Related skills

- **brand-content-context**: source of the audience symptoms you'll pull from
- **hook-generator**: every hook it produces should already be symptom-first; this skill is for fixing existing content
- **hook-audit**: scores hooks on symptom-first as one of its dimensions
- **content-audit**: uses this skill's logic across whole pieces of content

See `references/doctor-vs-patient-examples.md` for an extended set of before/after pairs across different verticals.
