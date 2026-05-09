---
name: posting-grid
description: Use this skill whenever the user wants to plan, build, or organise a content calendar, posting schedule, or content grid for a brand. Trigger on phrases like "build a content calendar", "30 day plan", "content grid", "weekly posting schedule", "what should I post when", "give me a month of content", "plan my next 30 posts", "calendar for [client]", "lay out a schedule", or whenever the user is moving from individual post ideas to systematic planning. This skill applies the 1×5×3 math: one topic × 5 hooks × 3 formats = 15 posts. One topic gets you ~3 weeks at 5x/week. Two topics gets you daily for a month. Output is a slot-filled calendar laid across days, ready to hand to a producer or auto-pilot through the format skills.
---

# Posting Grid

You build content calendars using the 1×5×3 math. The whole point is that the user never starts from scratch on any single post — every slot in the grid pulls from a topic plus a hook plus a format that's already been chosen.

**Brand context:** Read `.agents/brand-content-context.md` first. Pillars and topics, posting cadence target, current best-performing hook type and format. If missing, run `/brand-content-context`. If pillars are empty, run pillars-and-topics first.

## The math

- **1 topic × 5 hooks × 3 formats = 15 posts.**
- One topic at 5 posts per week = 3 weeks of content.
- Two topics at 7 posts per week (daily) = ~4 weeks.
- Three topics at 7 posts per week = ~6 weeks.

The grid is populated by mixing hook type and format combinations across days. Same topic, different angle and packaging.

## How to think about a grid

A grid is a 2D layout: rows are weeks, columns are days, each cell is a post. Each cell holds three pieces of info:

- **Topic** (one of the brand's pillars)
- **Hook type** (one of the 5)
- **Format** (one of the 3)

You do NOT need to write the actual hook or script in the grid. The grid's job is to allocate the *combinations*, then downstream skills (hook-generator, format skills) fill in the actual content when each post comes up to be made.

## The default 4-week grid (1 topic, 5x/week)

```
        Mon         Tue         Wed         Thu         Fri         Sat   Sun
Week 1  Q+DTC       N+BR        L+CAR       S+DTC       C+BR        -     -
Week 2  L+CAR       Q+BR        N+DTC       C+CAR       S+DTC       -     -
Week 3  S+CAR       L+DTC       C+BR        N+CAR       Q+DTC       -     -
```

Legend:
- Q = question hook
- L = numbered list hook
- S = story hook
- N = negative hook
- C = contrarian hook
- DTC = direct to camera
- CAR = carousel
- BR = B-roll plus text

15 cells, 15 unique combinations across 3 weeks of weekday posting.

## The 4-week daily grid (2 topics, 7x/week)

Topic 1 (T1) and Topic 2 (T2). 28 days, 28 posts. 15 combinations per topic = 30 slots, drop 2.

```
        Mon         Tue         Wed         Thu         Fri         Sat         Sun
Wk 1    T1 Q+DTC    T2 L+CAR    T1 N+BR     T2 S+DTC    T1 L+CAR    T2 C+BR     T1 S+CAR
Wk 2    T2 N+DTC    T1 C+BR     T2 Q+BR     T1 L+DTC    T2 S+CAR    T1 N+CAR    T2 L+DTC
Wk 3    T1 C+CAR    T2 Q+DTC    T1 S+DTC    T2 N+CAR    T1 Q+CAR    T2 L+BR     T1 C+DTC
Wk 4    T2 C+DTC    T1 N+DTC    T2 S+BR     T1 Q+BR     T2 N+BR     T1 L+BR     T2 C+CAR
```

## How to vary the rotation

Don't repeat the same hook+format combo back-to-back. The viewer's algorithm cohort is small — they see your posts in clusters.

Rotation rules:

1. Don't repeat hook type two days in a row
2. Don't repeat format three days in a row
3. Distribute the strong-hook types (story and contrarian) across the week, not stacked on Monday
4. Match best-performing hook+format pairs (from brand context) more frequently if known

## Weighting by performance baselines

If the brand context has baselines:

- **Best-performing hook type** appears 30 to 40% of the time (5 to 6 of 15 combinations)
- **Best-performing format** appears 40 to 50% of the time
- Weakest hook type still appears once or twice — for variety and to find new audiences

If no baselines, distribute evenly. Reweight after 4 weeks of data.

## Process

1. **Read the brand context.** Pillars, topics, posting cadence, performance baselines.
2. **Confirm with the user** how many topics they want in the grid (1 to 3) and over how many weeks.
3. **Pick the topics together.** Default to "the strongest topic from each pillar" if the user has no preference. Pull topic names from the brand context, not invented ones.
4. **Build the grid.** Lay out the calendar with topic + hook + format per slot.
5. **Show your work.** Note which posts pull which audience symptoms or pillars.
6. **Stage the next steps.** Don't generate all 15 posts in this skill. The grid is the plan. Each cell becomes a job for hook-generator + a format skill when it's time to ship.

## Output format

```
POSTING GRID: [Brand]
Period: [Week of MM/DD - MM/DD]
Cadence: [posts/week]
Topics: [list]

---

GRID

        Mon          Tue          Wed          Thu          Fri          [Sat]        [Sun]
Week 1  [code]       [code]       [code]       [code]       [code]       [-]          [-]
Week 2  [code]       [code]       [code]       [code]       [code]       [-]          [-]
Week 3  [code]       [code]       [code]       [code]       [code]       [-]          [-]
[etc.]

LEGEND
Topics: T1 = [topic name], T2 = [topic name]
Hooks: Q = question, L = list, S = story, N = negative, C = contrarian
Formats: DTC = direct to camera, CAR = carousel, BR = B-roll plus text

---

DISTRIBUTION CHECK
- Hook type counts: Q=[n], L=[n], S=[n], N=[n], C=[n]
- Format counts: DTC=[n], CAR=[n], BR=[n]
- Topic split: T1=[%], T2=[%]
- Weighted toward best performer: [yes/no, what was weighted]

---

NEXT STEPS

To make Monday's post:
- Topic: [...]
- Run /hook-generator on [topic] and pick the [hook type] hook
- Then run /[format-skill] with the chosen hook to produce the actual post

I can also batch-generate all 15 hooks across the topics now if you want. Say "generate all hooks" and I'll run hook-generator across the whole grid and return a master list.
```

## When the user wants the whole grid pre-generated

If the user says "just give me everything", chain into hook-generator for each unique topic-hook combination, then chain into the appropriate format skill for each cell. This produces a fully populated grid with actual posts ready to ship.

This is heavy. Confirm the user wants the full output before doing it. Default to outputting the grid structure first and offer the full generation as a follow-up.

## When the user has unusual cadence

- **3x/week:** use 1 topic across 5 weeks (15 posts ÷ 3 = 5 weeks of MWF)
- **2x/week:** use 1 topic across 7-8 weeks
- **Daily plus weekends:** use 2 topics across 4 weeks (the default daily grid)

## Adjustments after week 1

After the first week, ask the user which posts performed best. Reweight the next three weeks toward the winning hook+format combos. The grid is a hypothesis, not a contract.

## Related skills

- **brand-content-context**: pillars, topics, baselines
- **pillars-and-topics**: run first if pillars are empty
- **hook-generator**: fills in the hook for each cell
- **direct-to-camera-script** / **storytelling-carousel** / **b-roll-text-post**: fill in the post for each cell
- **repurpose-multiplier**: alternative way to populate a grid from one strong post
- **content-audit**: run after 4 weeks to evaluate which combinations worked
