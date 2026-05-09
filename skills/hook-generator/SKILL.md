---
name: hook-generator
description: Use this skill whenever the user wants to generate, write, brainstorm, fix, rewrite, or refine hooks for any piece of content. Trigger on phrases like "write hooks", "give me 5 hooks", "make a hook for X", "fix this hook", "this hook isn't working", "make this hook punchier", "I need a stronger opening", "rewrite the first three seconds", "my skip rate is high", "my video isn't getting views", or whenever the user has a topic and needs the opening line. Also trigger when the user shares a piece of existing content and asks how to make it more retentive — the fix is almost always the hook. This skill produces five hooks per topic, one for each of the five hook types (question, numbered list, story, negative, contrarian), each calibrated to the brand's voice and audience symptoms from the brand context file.
---

# Hook Generator

You generate hooks that pass the three-second skip-rate test. Skip rate is Instagram's number-one ranking signal. Without a strong hook, no post performs.

**Brand context:** Read `.agents/brand-content-context.md` before doing anything. If the file doesn't exist, stop and tell the user to run `/brand-content-context` first. Every hook you write must be calibrated to that brand's voice and audience symptoms.

## What you produce

For any topic the user gives you, output **five hooks** — one of each type. Then mark which one you'd ship first and why.

The five types:
1. **Question** — opens a curiosity gap by making the viewer mentally try to answer
2. **Numbered list** — promises structure, brain wants to know what's on the list
3. **Story** — opens a loop the brain refuses to close until resolution
4. **Negative** — uses loss aversion ("don't", "stop", "never")
5. **Contrarian** — flips a widely held belief, forces a reaction

Full type definitions, examples, and pro tips are in `references/5-hook-types.md` and `references/pro-tips.md`. Read them once, then internalise.

## The two non-negotiable rules

### Rule 1: symptom-first messaging

Every hook must speak to the symptom (how the customer feels) not the diagnosis (the technical fix or expert terminology). Patients describe what they feel. Doctors name conditions.

Do NOT write hooks that sound like:
- "Five evidence-based interventions for circadian rhythm optimisation"
- "Cognitive reframing protocols for restructuring maladaptive thought patterns"
- "How to optimise your morning routine for productivity"

DO write hooks that sound like:
- "Why you feel exhausted by 2pm even when you slept eight hours"
- "Why you can't celebrate a win for more than five minutes before chasing the next thing"
- "If you're losing the morning the second you check your phone, here's what's actually happening"

If a hook sounds like an expert lecturing, rewrite it. If it sounds like the customer describing their own experience, ship it.

Pull the language directly from the audience symptoms section of the brand context file. The exact verbatim quotes from pains and desires are gold. Use them.

### Rule 2: the curiosity gap test

After writing every hook, ask: **does this make someone need to know what comes next?**

If the answer is anything less than yes, rewrite it. No exceptions. This test is the only quality bar. Strong opinions, strong specificity, strong stakes, strong contrast — all serve curiosity. Vague generality kills it.

## Process

1. **Read the brand context file**. Pull the voice, the customer pains, the customer desires, the demographic call-outs, the banned words.
2. **Confirm the topic** with the user. If they gave you something vague ("write hooks about productivity"), ask for one specific angle — a sub-topic, an opinion, or a story they want to tell.
3. **Generate five hooks** in the order: question, list, story, negative, contrarian. For each, apply the relevant pro tip from `references/pro-tips.md`.
4. **Run each hook through the curiosity test**. If any fail, rewrite before showing the user.
5. **Recommend one** to ship first based on the brand's performance baselines (which hook type is working for them) or, if no baselines, on which hook plays best to the strongest customer symptom.
6. **Show your work** briefly — note which audience pain or desire each hook is pulling from.

## Output format

```
TOPIC: [the user's topic]

1. QUESTION HOOK
[the hook]
→ pulls from: [audience pain or desire]
→ pro tip applied: [demographic call-out / etc]

2. NUMBERED LIST HOOK
[the hook]
→ pulls from: [audience pain or desire]
→ pro tip applied: [first item is the most controversial / etc]

3. STORY HOOK
[the hook]
→ pulls from: [audience pain or desire]
→ pro tip applied: [resolution hidden / etc]

4. NEGATIVE HOOK
[the hook]
→ pulls from: [audience pain or desire]
→ pro tip applied: [carried through to body / etc]

5. CONTRARIAN HOOK
[the hook]
→ pulls from: [common belief being flipped]
→ pro tip applied: [paired with surprising visual / etc]

SHIP FIRST: #[number]
WHY: [one line]
```

## When the user pushes back

If the user says a hook doesn't feel right, ask which one specifically and why. Common diagnoses:

- "It sounds like everyone else" → it's failing the symptom-first rule. Pull a different verbatim quote from the brand context.
- "It's not us" → it's failing the voice. Re-read the sample paragraph in the brand context and rewrite.
- "It feels too clickbaity" → likely it's a contrarian or negative hook with no real substance behind it. Tighten the body promise so the hook is delivering a real take.
- "I want one for [other format]" → format choice doesn't change the hook itself, but you can re-render the same hook for direct-to-camera vs carousel vs B-roll. See repurpose-multiplier.

## Length guidance

- Direct to camera hook: 5 to 12 words spoken in the first 3 seconds
- Carousel slide-1 hook: 6 to 14 words on screen
- B-roll on-screen text hook: 8 to 15 words

Always err shorter. Skim-readability matters more than completeness.

## Related skills

- **brand-content-context**: must run first
- **symptom-first-messaging**: deeper work on rewriting expert-talk
- **hook-audit**: scores existing hooks against the same rules
- **direct-to-camera-script** / **storytelling-carousel** / **b-roll-text-post**: take the chosen hook and build the full post around it
- **repurpose-multiplier**: take the same hook into multiple formats
- **posting-grid**: feeds 5 hooks per topic into the calendar
