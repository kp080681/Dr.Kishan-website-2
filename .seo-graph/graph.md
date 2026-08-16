# Dr. Kishan Rao Balila SEO Execution Graph

## Required sequence

`SEO_AUDIT -> SEO_AUDIT_QA -> SEARCH_INTENT -> SEARCH_INTENT_QA -> LOCAL_SEO -> LOCAL_SEO_QA -> PAGE_MAP -> PAGE_MAP_QA -> ON_PAGE -> ON_PAGE_QA -> SCHEMA -> SCHEMA_QA -> INTERNAL_LINKING -> INTERNAL_LINKING_QA -> TECH_SEO_QA -> CONTENT_QA -> READY_FOR_INDEXING`

Failure edge for every QA node:

`FAIL -> previous implementation node`

No node may skip its QA gate.

## Global rules

- The website design is locked.
- The completed `.design-graph/` is historical and must not be modified.
- SEO work must not redesign, visually rebalance, restyle, or restructure approved sections.
- Existing approved website content is the source of truth.
- Medical facts, qualifications, consultation data, testimonials, reviews, awards, statistics, locations, timings, and treatment outcomes are immutable unless Kiran explicitly authorizes a content change.
- Do not invent medical/client facts in metadata, schema, content, alt text, internal links, or documentation.
- Do not create keyword-stuffed, doorway, location-spam, or thin mass-generated medical pages.
- Patient usefulness and medical accuracy take priority over keyword density.
- New public pages require approval at `PAGE_MAP_QA`.
- Search-intent research must precede page creation.
- Schema must reflect only facts already supported by the website or approved source material.
- No commit, push, or deploy unless explicitly authorized.

## NODE: SEO_AUDIT

Purpose: inventory the current SEO implementation and identify issues without changing website source/content.

Allowed:
- read-only repository inspection
- route, metadata, sitemap, robots, schema, internal-link, heading, image-alt, and indexability audit
- creation of audit documentation under `.seo-graph/audits/`

Forbidden:
- website source/content changes
- metadata/schema implementation
- public copy edits
- page creation
- commit/push/deploy

PASS -> `SEO_AUDIT_QA`.

## NODE: SEO_AUDIT_QA

Run gate: `.seo-graph/gates/seo-audit.md`.

PASS -> `SEARCH_INTENT`
FAIL -> `SEO_AUDIT`

## NODE: SEARCH_INTENT

Purpose: map patient and local search intent to the current approved site architecture before recommending any page/content changes.

Allowed:
- research and document search-intent clusters
- classify intent by homepage, consultation, condition, blog, local, and trust/credential needs
- identify intent gaps for later approval

Forbidden:
- creating pages
- rewriting approved content
- keyword stuffing
- doorway/location-spam planning
- commit/push/deploy

PASS -> `SEARCH_INTENT_QA`.

## NODE: SEARCH_INTENT_QA

Run gate: `.seo-graph/gates/search-intent.md`.

PASS -> `LOCAL_SEO`
FAIL -> `SEARCH_INTENT`

## NODE: LOCAL_SEO

Purpose: audit and plan local SEO improvements using approved consultation/location data only.

Allowed:
- review local signals, directions links, location consistency, NAP-style data, and local schema opportunities
- document required clarifications or approvals

Forbidden:
- invented addresses, timings, phone numbers, coordinates, service areas, or clinic claims
- creating location-spam pages
- public content changes without approval
- commit/push/deploy

PASS -> `LOCAL_SEO_QA`.

## NODE: LOCAL_SEO_QA

Run gate: `.seo-graph/gates/local-seo.md`.

PASS -> `PAGE_MAP`
FAIL -> `LOCAL_SEO`

## NODE: PAGE_MAP

Purpose: define the approved indexable and non-indexable page map before implementation.

Allowed:
- inventory current routes
- classify canonical, indexable, redirect, utility, condition, blog, and future candidate pages
- propose new pages only for approval

Forbidden:
- creating new public pages before `PAGE_MAP_QA` approval
- mass-generated thin medical pages
- doorway/location-spam pages
- content rewrites
- commit/push/deploy

PASS -> `PAGE_MAP_QA`.

## NODE: PAGE_MAP_QA

Run gate: `.seo-graph/gates/page-map.md`.

PASS -> `ON_PAGE`
FAIL -> `PAGE_MAP`

## NODE: ON_PAGE

Purpose: implement approved on-page SEO fixes only after audit, intent, local SEO, and page map gates pass.

Allowed:
- approved metadata, title, description, canonical, Open Graph, Twitter, heading, alt-text, and robots improvements
- narrowly scoped edits supported by approved content/source material

Forbidden:
- visual redesign
- unapproved public content rewrites
- invented facts
- keyword stuffing
- commit/push/deploy

PASS -> `ON_PAGE_QA`.

## NODE: ON_PAGE_QA

Run gate: `.seo-graph/gates/on-page.md`.

PASS -> `SCHEMA`
FAIL -> `ON_PAGE`

## NODE: SCHEMA

Purpose: implement structured data only for facts supported by the approved website/source material.

Allowed:
- supported Physician/Person/MedicalBusiness/LocalBusiness/Article/WebSite/Breadcrumb schema where appropriate
- validation against source-backed facts

Forbidden:
- invented claims, ratings, reviews, coordinates, awards, sameAs URLs, or medical outcomes
- schema that contradicts public content
- commit/push/deploy

PASS -> `SCHEMA_QA`.

## NODE: SCHEMA_QA

Run gate: `.seo-graph/gates/schema.md`.

PASS -> `INTERNAL_LINKING`
FAIL -> `SCHEMA`

## NODE: INTERNAL_LINKING

Purpose: improve approved internal discoverability without changing visual design or approved content meaning.

Allowed:
- approved internal link additions/refinements
- breadcrumb or related-link improvements if previously approved by page map/schema gates

Forbidden:
- spammy anchor text
- creating visual clutter
- rewriting approved content
- commit/push/deploy

PASS -> `INTERNAL_LINKING_QA`.

## NODE: INTERNAL_LINKING_QA

Run gate: `.seo-graph/gates/internal-linking.md`.

PASS -> `TECH_SEO_QA`
FAIL -> `INTERNAL_LINKING`

## NODE: TECH_SEO_QA

Purpose: verify SEO technical health after approved implementation work.

Required:
- lint
- typecheck
- production build
- route/indexability checks
- robots/sitemap checks
- canonical/metadata checks
- schema validation where feasible
- broken-link and broken-image checks
- mobile and Core Web Vitals risk review

PASS -> `CONTENT_QA`
FAIL -> earliest relevant implementation node

## NODE: CONTENT_QA

Purpose: verify that all SEO work preserved approved medical/client content and introduced no unsupported claims.

Required:
- no invented medical claims
- no invented credentials/statistics/awards/timings/locations/reviews
- no keyword stuffing
- no thin doorway/location-spam pages
- approved public content remains intact

PASS -> `READY_FOR_INDEXING`
FAIL -> earliest relevant implementation node

## NODE: READY_FOR_INDEXING

Stop. Do not commit, push, deploy, submit sitemap, or request indexing unless explicitly authorized.
