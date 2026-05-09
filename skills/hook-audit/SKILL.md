---
name: hook-audit
description: Use this skill whenever the user wants a deep, hook-specific audit across many pieces of content. Trigger on phrases like "audit my hooks", "score these hooks", "why aren't my hooks working", "skip rate diagnosis", "review my opening lines", "are my hooks pulling their weight", or whenever the user has a batch of existing hooks (10+ posts, an ad set, a feed) and wants to know which type is working, which isn't, and what to fix. This is the hook-only deep dive — different from content-audit, which scores many dimensions. Output is per-hook scores plus aggregate patterns showing which hook type, which symptom, and which structural moves are winning for this brand.
---

# Hook Audit

You audit hooks specifically and only. Different from content-audit, which scores six dimensions across whole pieces. This skill drills into the first 3 seconds — the part that controls skip rate, which is the algorithm's number-one ranking signal.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, performance baselines (which hook type is currently working). If missing, run `/brand-content-context`.

## When to use this skill vs content-audit

- **content-audit:** broader — scores hook strength as one of six dimensions across whole posts.
- **hook-audit:** narrower and deeper — only scores hooks. Use when the user has 10+ hooks to compare, or when content-audit flagged hook strength as the weakest dimension.

If the user has fewer than 5 hooks, use content-audit instead. The patterns only become visible across batches.

## What you score

For each hook, score on four sub-dimensions (1 to 5 each):

### 1. Hook type fit

Is the hook clearly one of the five types (question, list, story, negative, contrarian)? Is the chosen type the right fit for the topic?

- 5 = clear hook type, well-executed, fits the topic
- 3 = hook type is OK but a different type would suit the topic better
- 1 = no clear hook type, or the type is forced and doesn't work for this topic

### 2. Symptom-first

Does it speak to a customer feeling/situation, or is it expert-talk?

- 5 = customer would say "yes, that's me" within 3 seconds
- 3 = mixed
- 1 = expert-talk, terminology-heavy, customer can't see themselves

### 3. Curiosity gap

Does the hook make someone need to know what comes next?

- 5 = strong open loop, brain commits to finding the answer
- 3 = mild curiosity, viewer might stay
- 1 = no curiosity, or worse, the hook spoils the answer

### 4. Demographic call-out

Does the hook call out a specific demographic, identity, life stage, or scenario?

- 5 = explicit call-out (athletes, tradies, 30-something moms, etc.) or scenario specificity (a specific time of day, a specific context)
- 3 = general but specific enough
- 1 = totally generic, could apply to anyone

Total: 4 to 20 per hook.

## The audit report

For each hook, output:

```
HOOK: "[the original hook]"
Format: [DTC / carousel / B-roll / unknown]
Hook type: [Q / L / S / N / C]

SCORES:
- Hook type fit:        [1-5]
- Symptom-first:        [1-5]
- Curiosity gap:        [1-5]
- Demographic call-out: [1-5]
TOTAL: [4-20]

WHAT'S WORKING:
[1-2 lines, specific]

WHAT'S BROKEN:
[1-2 lines, specific]

REWRITE:
[Stronger version of the same hook, same type]
```

## The aggregate report

After the per-hook breakdowns, produce:

```
HOOK AUDIT SUMMARY: [n] hooks

DIMENSION AVERAGES:
- Hook type fit:        [avg]
- Symptom-first:        [avg]
- Curiosity gap:        [avg]
- Demographic call-out: [avg]

HOOK TYPE BREAKDOWN
| Type       | Count | Avg total |
|------------|-------|-----------|
| Question   | [n]   | [avg]     |
| List       | [n]   | [avg]     |
| Story      | [n]   | [avg]     |
| Negative   | [n]   | [avg]     |
| Contrarian | [n]   | [avg]     |

WINNING TYPE FOR THIS BRAND: [type] — avg [score]
LOSING TYPE FOR THIS BRAND: [type] — avg [score]

PATTERNS OBSERVED:
- [pattern 1, with examples]
- [pattern 2, with examples]
- [pattern 3, with examples]

TOP 3 PRIORITY FIXES:
1. [most leverage]
2. [second]
3. [third]

WHAT TO DO NEXT:
[Specific recommendation. Usually: "Lean into [winning type], rewrite [losing type] hooks, and update brand context performance baselines."]
```

## Patterns to look for in aggregate

These are the most common ones. Surface them when you see them:

### "Every hook is symptom-first but no demographic call-out"

The brand has internalised the doctor-patient principle but is leaving reach on the table. Adding "if you're a [identity]" or "by [specific time of day]" to existing hooks would lift performance without changing the substance.

### "Strong hook types but they're all the same type"

E.g. every hook is a question. Brand has found one type that works and is over-relying on it. The audience is going to fatigue. Diversify: keep the strongest type at 30-40% and add 1 to 2 others.

### "Hooks are good but the topic mix is narrow"

Hooks score high but they're all about the same 2-3 things. Run pillars-and-topics to widen the topic surface.

### "Expert-talk in product hooks, symptom-first in personal hooks"

Common for DTC brands where founders write the personal-brand content well but ad copy still sounds like a press release. Run symptom-first-messaging on the product-side hooks specifically.

### "Strong contrarian hooks but body doesn't deliver"

The hook is a 5/5 but the body doesn't pay it off. Brand is writing checks the post can't cash. Audit body content, not just hooks. Switch to content-audit.

## When you don't have enough info to score

If the user gives you a hook with no context (no topic, no format, no link), score it on the 4 dimensions you can see and flag the missing info. Don't refuse to audit — partial info still produces useful diagnoses.

If the user gives you screenshots, transcribe the hooks first, then audit.

## Updating the brand context after an audit

After a hook audit, ask the user if they want to update the brand context's performance baselines with the findings:
- Best-performing hook type → put in the baselines section
- Worst-performing hook type → useful for posting-grid weighting

Updating the baselines makes future hook-generator calls more accurate.

## Related skills

- **content-audit:** broader audit if hooks aren't the only issue
- **hook-generator:** the rewrite step after an audit
- **symptom-first-messaging:** focused fix for the symptom-first dimension
- **brand-content-context:** update baselines with the audit findings
