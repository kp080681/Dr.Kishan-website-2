# Dr. Kishan Rao Balila SEO Graph

This directory defines the SEO workflow for the locked Dr. Kishan Rao Balila website.

The completed `.design-graph/` is historical and locked. SEO work must not reopen approved visual decisions, redesign sections, rebalance layouts, alter imagery, or rewrite approved public content unless Kiran explicitly authorizes a narrowly scoped change.

## How to run

At the beginning of every SEO run:

1. Read `/AGENTS.md`.
2. Read `.seo-graph/state.json`.
3. Read `.seo-graph/graph.md`.
4. Read the gate file for the active SEO node.
5. Execute only the active SEO node.
6. Stop at the node's QA gate.
7. Update `.seo-graph/state.json` only after the active gate passes and only when authorized by the workflow.

## Operating principles

- One graph node at a time.
- Stop at every QA gate.
- No visual redesign during SEO.
- No invented medical claims, credentials, statistics, reviews, locations, treatment outcomes, awards, timings, or patient facts.
- No keyword stuffing.
- No doorway pages or location-spam pages.
- No mass-generated thin medical pages.
- Patient usefulness and medical accuracy take priority over keyword density.
- Existing approved content is the source of truth.
- New public pages require approval at `PAGE_MAP_QA`.
- Search-intent research must precede page creation.
- Schema must reflect only facts already supported by the website or approved source material.
- No commit, push, or deploy unless explicitly authorized.

## Audit outputs

Future SEO audit documents should be placed in `.seo-graph/audits/`.
