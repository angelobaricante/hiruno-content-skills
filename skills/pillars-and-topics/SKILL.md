---
name: pillars-and-topics
description: Use this skill whenever the user wants to find their content pillars or generate the topics that fill out each pillar. Trigger on phrases like "find my content pillars", "what should I post about", "I don't know what to post", "becoming the niche", "find my voice", "what are my topics", "I'm pivoting my content", "help me niche down without niching down", or whenever the brand context file has empty or thin pillars. This skill operationalises Jun Yuh's "becoming the niche" philosophy: instead of fitting into one narrow vertical, it pulls 3 pillars out of the brand's specific voice, audience symptoms, and identity, and populates each with 10 to 30 topics. Output writes back into the brand context file.
---

# Pillars and Topics

You find content pillars and the topics that fill them. The philosophy is Jun Yuh's "becoming the niche": instead of squeezing into one narrow category, the brand owns three intersecting pillars that, together, make the brand the niche.

**Brand context:** Read `.agents/brand-content-context.md` first. Voice, audience symptoms, why anchor. Pillars must come from these inputs, not from a generic content-strategy template. If the context file doesn't exist, run `/brand-content-context` first.

## What pillars are (and aren't)

Pillars are NOT:
- Generic categories ("educational, inspirational, behind-the-scenes")
- Vertical topics ("fitness, nutrition, mindset")
- Marketing buckets ("brand awareness, lead gen, conversion")

Pillars ARE:
- Specific intersections of what the brand knows + what the audience needs + what the brand has a strong point of view on
- Limited to three. Three is plenty. Four splits the brand's identity.
- Each pillar should pull a specific archetype of viewer, even if the audience overlaps

## Examples of strong pillars

**Cult of Sauna (sauna accessories):**
- Pillar 1: Sauna performance and protocol (the deep-end of "how to actually use a sauna well")
- Pillar 2: Why most saunas suck (problems people don't know they have)
- Pillar 3: Building the home sauna (DIY, equipment, design)

Each pulls a different person. P1 pulls the optimiser. P2 pulls the public-gym sauna user. P3 pulls the home-builder. Together they own the niche.

**Volt Dropper (camping power adapter):**
- Pillar 1: Off-grid power problems (symptoms-first, "your phone dies on day one")
- Pillar 2: Tradie load-out (tools, kit, gear for working in the field)
- Pillar 3: Multi-day camping logistics (everything else camping that compounds with power)

**A solo software engineer / content strategist (you, hypothetically):**
- Pillar 1: Content systems that ship (frameworks, repos, skills)
- Pillar 2: How small operators win on Meta (DTC playbook, Hiruno style)
- Pillar 3: Building tools as a one-person company (engineering for leverage)

## Process

### Step 1: Pull from brand context

From `.agents/brand-content-context.md` extract:
- The brand one-liner
- The why anchor
- The audience symptoms (pains and desires)
- The transformation offered

These are the inputs. Pillars must be derivable from them. If they're not, the brand context is too thin and needs to be filled out more before continuing.

### Step 2: Find the three intersections

Look for three distinct intersections of:
- What the brand knows deeply (their expertise or product)
- What the audience repeatedly says is broken (top pains)
- What no one else is saying clearly

Each pillar should sit at one of those intersections. Often the structure is:

- **Pillar 1:** the brand's strongest expertise applied to the audience's biggest pain
- **Pillar 2:** the brand's contrarian opinion on the category
- **Pillar 3:** the lifestyle, identity, or context surrounding the audience (so content goes beyond the product)

This is a heuristic, not a template. Adjust per brand.

### Step 3: Stress-test each pillar

For each pillar candidate, ask:
- Can I name the type of person this pillar pulls?
- Can I think of 10 specific topics that fit cleanly inside it?
- Is it different enough from the other two pillars that they don't bleed?
- Does this pillar have a strong point of view, or is it just a topic area?

If any answer is no, the pillar is too vague or duplicative. Reshape it.

### Step 4: Generate topics under each pillar

For each finalised pillar, produce 10 to 30 topics. A topic is specific enough that:
- You could write a single hook for it without further narrowing
- It's a real symptom, situation, or moment the audience experiences (not a category)
- Two topics in the same pillar shouldn't yield the same content

Examples of good topics under a "sauna performance and protocol" pillar:
- ✓ "Why your scalp burns 90 seconds in while everyone else is fine"
- ✓ "How long should you actually be staying in"
- ✓ "Cold plunge after vs cold shower after vs nothing"
- ✗ "Sauna basics" (too broad)
- ✗ "Sauna tips" (too generic)
- ✗ "Sauna protocol" (could mean anything)

### Step 5: Write back to brand context

Update the brand context file's pillars section with the three pillars and their topics. Confirm with the user before writing.

## Output format

```
PROPOSED PILLARS

PILLAR 1: [name]
Pulls: [the type of person this attracts]
Strong opinion: [the brand's POV inside this pillar]

Topics (15):
- [topic]
- [topic]
- [topic]
[...]

PILLAR 2: [name]
Pulls: [...]
Strong opinion: [...]

Topics (15):
- [...]

PILLAR 3: [name]
Pulls: [...]
Strong opinion: [...]

Topics (15):
- [...]

---

WHY THESE THREE
[2-4 sentences: how each pillar pulls a distinct cohort, how they're different enough not to overlap, how together they make the brand the niche]

WEIGHTING SUGGESTION
- Pillar 1: [%] of content
- Pillar 2: [%] of content
- Pillar 3: [%] of content

NEXT STEPS
- Want me to write these back into your brand context? (yes/no)
- After that: run /posting-grid to lay the topics across a calendar, or /hook-generator on any specific topic to produce hooks.
```

## When the user has too many ideas

Common: the user wants 5+ pillars because every direction feels important. Push back. Three is the cap.

The fix: ask which pillar would be the most painful to lose. Force them to defend each. The two weakest fold into the strongest three or get cut.

## When the user has too few ideas

Common: the user can only describe what their product does and freezes when asked about pillars beyond the product.

The fix: pull from the audience symptoms section. The audience's life around the product is the source of the surrounding pillars. Volt Dropper isn't just power. It's camping logistics, tradie life, and off-grid problems. Those become pillars 2 and 3.

## When the brand has been posting and wants to pivot

If the brand has an existing feed and wants to pivot to new pillars:

1. Audit the existing feed (run content-audit) to find what already works
2. Map the working content to the new pillars where possible
3. Identify the gap — content that no longer fits any pillar (will phase out) and pillars with no existing content (will need to ramp up)
4. Output a transition plan: 70% existing pillars in month 1, 50/50 in month 2, 100% new pillars in month 3

This is gentler than an overnight pivot and keeps the existing audience.

## Related skills

- **brand-content-context**: source of voice, audience, why
- **posting-grid**: takes pillars + topics and lays them across a calendar
- **hook-generator**: takes a topic and produces hooks
- **content-audit**: useful pre-step if pivoting from existing content
