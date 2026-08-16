# Dr. Kishan Rao Website — Project Operating Contract

This repository is a client website. Treat the approved copy, medical facts, client corrections, and existing content inventory as immutable unless Kiran explicitly authorizes a content change.

## Current approved state
The existing `.design-graph/` is a completed and locked historical visual workflow. Its approved visual decisions, section compositions, responsive behavior, imagery, typography, colors, and interactions must not be reopened during SEO work unless Kiran explicitly authorizes a design change.

Directions links have been implemented and approved. They are part of the locked current website and must not be treated as pending.

## Mission
Build an award-level personal surgeon website for Dr. Kishan Rao. The website must feel expensive because of art direction, composition, typography, photography, spacing, motion, and execution — not because of decorative effects or UI density.

The approved visual north star is:
`.design-graph/references/premium-reference.png`

The visual reference controls ART DIRECTION only. It does not override approved website copy, statistics, medical claims, consultation details, treatment names, or real assets.

## Non-negotiable content rules
- Do not rewrite, shorten, paraphrase, relocate, invent, or remove approved content unless the active graph node explicitly permits layout-only relocation and the exact text remains unchanged.
- The full brand identity/logo is `Dr. Kishan Rao Balila`.
- Existing approved website copy that uses `Dr. Kishan Rao` must not be automatically rewritten.
- Do not introduce alternative spellings or shorten/expand the name unless the active task explicitly requires it.
- Do not invent medical claims, outcomes, awards, statistics, qualifications, timings, locations, reviews, or patient facts.
- Preserve all client-requested corrections already present in the working tree.
- Medical facts, qualifications, consultation data, testimonials, and approved client content remain immutable unless Kiran explicitly authorizes a content change.

## Visual laws
- Composition before components.
- Photography is structural, not decorative.
- Never fall back to a wall of cards, generic SaaS grids, pill-heavy layouts, dashboard styling, or template-like medical UI.
- No image may be repeated more than once on the website.
- No awkward crops, chopped heads, half faces, stretched photos, low-resolution images, or giant portraits floating inside empty white rectangles.
- Hero uses the authentic original Dr. Kishan image. Do not replace his face with generated imagery.
- Hero image must integrate into the canvas; no portrait-card treatment.
- Use deep clinical navy as the dominant visual world, restrained warm/gold accents, and selective light editorial relief sections.
- Aim for roughly 70% clinical precision / 30% human warmth.
- Oversized typography may be used selectively, professionally, and only where it strengthens hierarchy.
- Micro-interactions should be refined but restrained: image reveal, subtle parallax, count-up, hover depth, fine line motion, gentle fades/slides.
- Respect `prefers-reduced-motion`.
- Mobile is separately art-directed; it is not a squeezed desktop layout.

## Hero laws
- Original Dr. Kishan photo remains authentic.
- It may be masked, canvas-extended, background-edited, lit, graded, or integrated into a navy environment, but identity must remain untouched.
- Dr. Kishan should occupy about 45–50% of the desktop opening canvas.
- His image bleeds into the composition instead of sitting in a rectangle.
- Hero copy stays complete and exact.
- Credentials are typography, not pills/chips.
- `Book Consultation` is the primary Hero CTA.
- `WhatsApp` is secondary.
- Call remains available through the persistent CTA system, not as a competing Hero button.
- Hero must visually continue into the statistics band rather than ending as a hard isolated rectangle.

## Treatments laws
- Treatment content stays exact.
- `Treatments` is the visual chapter; avoid compressed card grids.
- LASER surgery must be visually dominant.
- Major treatment areas should feel like editorial chapters with photography, typography, medical iconography, and condition content integrated into one composition.
- Do not create invented benefit claims to make the design look richer.
- Varicose Veins / venous care must not revert to a broad `Vascular Surgery` presentation where the client correction has replaced it.

## About / philosophy laws
- Keep approved images in sections where Kiran has explicitly said to keep them.
- About should feel editorial, not portrait-left + card-grid-right.
- Preserve accomplishments and approved old-site content.
- Education must not reintroduce the four-box treatment removed by client request.
- Philosophy line `Precision in surgical practice. Compassion in every conversation.` must receive strong visual treatment without becoming flashy.

## Reviews / gallery / blogs
- Do not fabricate or rewrite reviews.
- Final review system must use readable text review cards rather than screenshots when the active node reaches that work.
- Gallery should feel like the journey of a surgeon, led by clinical/surgical material rather than felicitation scrapbook imagery.
- Blog visual direction is Dr. Kishan-led medical editorial covers; do not alter approved article content merely to fit a design.

## Engineering laws
- Do not deploy, promote production, push, merge, or commit unless Kiran explicitly authorizes it.
- Before modifying code, read `.design-graph/state.json` and `.design-graph/graph.md`.
- Execute ONLY the current node in `state.json`.
- Do not opportunistically edit later sections.
- After work, run the active node's gate in `.design-graph/gates/`.
- If the gate fails, remain on the same node and fix only that node.
- Advance state only when every mandatory gate item passes.
- Stop after completing or failing the current node. Do not automatically execute the next node in the same run unless `graph.md` explicitly marks it as an atomic paired node.
- Preserve lint, typecheck, build, accessibility, and Core Web Vitals quality.

## SEO workflow laws
- Do not begin SEO work unless Kiran explicitly asks for it.
- When `.seo-graph/` exists, SEO work must read `.seo-graph/state.json`, `.seo-graph/graph.md`, and the relevant SEO gate before modifying SEO-related code or content.
- Execute only the active SEO node.
- Stop at the active node's QA gate.
- SEO work must not redesign, visually rebalance, or alter approved sections.
- SEO work must not rewrite, shorten, remove, or invent approved medical/client content unless the active SEO node explicitly permits a narrowly scoped change and Kiran has authorized it.
- No invented medical claims, outcomes, awards, statistics, qualifications, timings, locations, reviews, or patient facts are permitted in SEO metadata, schema, page copy, or supporting documentation.

## Visual QA rule
A technically valid build is not a visual pass.
If a section is aligned, responsive, and bug-free but still looks like a generic component library, the gate FAILS.

The reference question is:
`Would a surgeon seeing this reasonably ask: Who built this?`

If the answer is no, do not advance.
