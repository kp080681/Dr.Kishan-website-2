# SEARCH_INTENT - Dr. Kishan Rao Balila Website

Date: 2026-08-16
Node: `SEARCH_INTENT`
Status: Completed, pending `SEARCH_INTENT_QA`

Scope followed:
- Read `AGENTS.md`, `.seo-graph/state.json`, `.seo-graph/graph.md`, and `.seo-graph/gates/search-intent.md`.
- Recorded `SEO_AUDIT_QA` as approved by user instruction.
- Researched and mapped search intent only.
- Did not create pages.
- Did not modify website source/content.
- Did not modify `.design-graph/`.
- Did not commit, push, or deploy.

## Research Notes

The local search landscape around Mangaluru/Mangalore shows a mix of:
- appointment-led directory searches for doctors and hospitals;
- procedure-led pages for varicose veins, piles, fistula, hernia, gallbladder, appendix, laparoscopic surgery, and laser treatments;
- informational patient queries around symptoms, meaning, suitability, procedure types, cost, recovery, and warning signs.

Observed SERP/reference patterns:
- Competitor/service pages group proctology, laparoscopy, hernia, gallstones, appendix, varicose veins, piles, fissure, fistula, and pilonidal sinus together under general/laparoscopic/laser surgical care.
- Mangalore/Mangaluru spelling variation appears important.
- Puttur, Sullia, and Dakshina Kannada are local modifiers, but should not be turned into near-identical doorway pages.
- Directory-style results often use appointment language, but the Dr. Kishan site should avoid unsupported claims such as "best surgeon" unless independently source-backed and approved.

Sources checked:
- Pristyn Care Mangalore surgical care result: https://www.pristyncare.com/mangalore/
- Manipal Hospitals Mangalore laparoscopic surgery page: https://www.manipalhospitals.com/mangalore/specialities/laparoscopic-surgery/
- Medfin varicose veins laser treatment in Mangalore: https://www.medfin.in/mangalore/laser-treatment-for-varicose-veins/
- Practo laser piles doctors in Mangalore result: https://www.practo.com/mangalore/doctors-for-laser-piles-treatment
- Mangala Hospital surgeon page showing overlapping services: https://mangalahospital.in/doctors/dr-keerthiraj/
- Indiana Hospital general and laparoscopic surgery page: https://indianahospital.in/department/general-%26-laparoscopic-surgery
- Current old/public Dr. Kishan site result: https://surgeonkishan.com/
- Dakshina Kannada geographic context: https://en.wikipedia.org/wiki/Dakshina_Kannada
- Puttur geographic context: https://en.wikipedia.org/wiki/Puttur%2C_Karnataka

## Intent Classification Key

- `Transactional / appointment intent`: user is looking to book, contact, compare doctors, find availability, or choose a surgeon.
- `Treatment / service intent`: user is looking for a treatment/procedure/service page.
- `Informational / patient education`: user wants meaning, symptoms, risks, suitability, process, prevention, or recovery education.
- `Branded`: user searches for Dr. Kishan, Surgeon Kishan, White Army, or known publications.
- `Local / navigation`: user searches by hospital, city, directions, or clinic access.

## Geographic Modifiers

Use as modifiers across relevant approved topics:

- Mangaluru
- Mangalore
- Puttur
- Sullia
- Ayyanakatte
- Bellare
- Dakshina Kannada
- AJ Hospital
- Bhat's Nursing Home
- Namma Arogyadhama
- Adarsha Hospital
- SCS Hospital
- Colaco Hospital
- Yenepoya Specialty Hospital

Guidance:
- Mangaluru and Mangalore should both be considered because users use both spellings.
- Puttur and Sullia are legitimate service-area/location modifiers because approved consultation data supports them.
- Do not create separate near-identical pages for every town/hospital. If local pages are ever proposed, they must be materially useful and approved at `PAGE_MAP_QA`.

## Intent Map By Topic

| Service/topic | Primary keyword/topic | Meaningful synonyms | Location modifiers | Likely intent | Best existing page | New page eventually justified? |
| --- | --- | --- | --- | --- | --- | --- |
| General Surgeon | general surgeon | general surgery doctor, surgeon, surgical consultation, general surgery specialist | Mangalore, Mangaluru, Puttur, Sullia, Dakshina Kannada, AJ Hospital | Transactional / appointment; local/navigation | `/` and `/#consultation`; condition pages for specific concerns | Possibly a dedicated `/general-surgeon-mangalore` or `/general-surgery` page only if PAGE_MAP approves a non-doorway, comprehensive service page. |
| Laparoscopic Surgeon / Laparoscopic Surgery | laparoscopic surgeon | laparoscopic surgery, keyhole surgery, minimally invasive surgery, laparoscopy surgeon | Mangalore, Mangaluru, Puttur, Dakshina Kannada | Treatment/service; transactional | `/#services`, `/conditions/gallbladder-stones`, `/conditions/appendix`, `/conditions/hernia`, relevant blogs | Possibly a dedicated laparoscopic surgery service page, if expanded with approved content and not just keyword landing copy. |
| LASER Surgery | laser surgery | laser surgeon, laser proctology, laser piles surgery, laser fissure treatment, laser fistula treatment, pilonidal sinus laser | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; transactional | `/#services`, `/conditions/piles-hemorrhoids`, `/conditions/fissure`, `/conditions/fistula`, `/conditions/pilonidal-sinus` | Possibly a dedicated LASER/proctology service page after approval. Avoid claims of superiority or guaranteed recovery. |
| Varicose Veins / EVLA | varicose veins treatment | EVLA, endovenous laser ablation, laser varicose vein treatment, varicose vein surgery, leg veins, venous ulcer | Mangalore, Mangaluru, Puttur, Sullia, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/varicose-veins`, `/conditions/varicose-veins-evla`, `/blogs/laser-treatment-varicose-veins` | Yes, likely. PAGE_MAP must resolve whether EVLA and general varicose veins remain separate or canonicalized. |
| Piles / Hemorrhoids | piles treatment | hemorrhoids, haemorrhoids, laser piles, piles surgeon, bleeding piles, piles doctor | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; informational; transactional | `/conditions/piles-hemorrhoids`, `/blogs/how-to-prevent-hemorrhoids` | Possibly a full piles/hemorrhoids guide page if approved. Current condition page is thin. |
| Fissure | fissure treatment | anal fissure, fissure surgery, laser fissure treatment, painful bowel movement, anal pain | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; informational; transactional | `/conditions/fissure` | Possibly a fuller patient-education/service page if approved. Avoid surgical recommendation language unless source-backed. |
| Fistula | fistula treatment | anal fistula, fistula surgery, laser fistula, fistula surgeon, perianal fistula | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; informational; transactional | `/conditions/fistula` | Possibly a fuller patient-education/service page if approved. Keep medically neutral. |
| Pilonidal Sinus | pilonidal sinus treatment | pilonidal cyst, pilonidal sinus surgery, laser pilonidal sinus, sinus near tailbone | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; informational | `/conditions/pilonidal-sinus` | Possibly justified if search demand is meaningful; should not be mass-generated. |
| Hernia | hernia treatment | hernia surgery, laparoscopic hernia surgery, inguinal hernia, umbilical hernia, abdominal wall hernia | Mangalore, Mangaluru, Puttur, Sullia, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/hernia`, `/conditions/hernia-surgery`, `/blogs/how-to-manage-a-hernia` | Yes, likely. PAGE_MAP must resolve overlap between `/conditions/hernia` and `/conditions/hernia-surgery`. |
| Gallbladder Stones | gallbladder stones treatment | gallstones, gallbladder surgery, laparoscopic cholecystectomy, gallstone surgery | Mangalore, Mangaluru, Puttur, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/gallbladder-stones` | Possibly a dedicated gallstones/laparoscopic cholecystectomy page if approved and supported. |
| Appendix / Appendicitis | appendix surgery | appendicitis, appendectomy, laparoscopic appendectomy, appendix pain | Mangalore, Mangaluru, Puttur, Dakshina Kannada | Informational; urgent/transactional; treatment/service | `/conditions/appendix` | Likely PAGE_MAP review needed. A route/title aligned to appendicitis may better match intent, but no change now. |
| Breast Surgery | breast surgery | breast lump surgery, breast abscess surgery, breast surgeon, breast condition surgery | Mangalore, Mangaluru, Puttur, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/breast-surgery` | Possibly justified only if approved content clearly supports scope. Avoid oncology claims unless approved. |
| Thyroid Surgery | thyroid surgery | thyroid surgeon, thyroid gland surgery, thyroid lump surgery, thyroidectomy | Mangalore, Mangaluru, Puttur, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/thyroid-surgery` | Possibly justified only with approved content and medical review. |
| Circumcision | circumcision | circumcision surgery, adult circumcision, phimosis surgery | Mangalore, Mangaluru, Puttur, Sullia | Treatment/service; informational; transactional | `/conditions/circumcision` | Possibly, but must be handled sensitively with medically neutral educational content. |
| Diabetic Foot / Ulcer Care | diabetic foot ulcer care | diabetic ulcer, foot wound, non-healing wound, diabetic foot surgeon, wound care | Mangalore, Mangaluru, Puttur, Sullia, Dakshina Kannada | Treatment/service; informational; transactional | `/conditions/diabetic-foot-ulcer-care` | Possibly justified if approved content exists; avoid promising healing or outcomes. |

## Branded Intent Map

| Branded query/topic | Synonyms/variations | Likely intent | Best existing page | Notes |
| --- | --- | --- | --- | --- |
| Dr. Kishan Rao | Dr Kishan Rao, Surgeon Kishan, Dr Kishan Rao Balila | Branded; appointment; navigation | `/` | Preserve approved copy using `Dr. Kishan Rao`; do not automatically rewrite to full brand everywhere. |
| Dr. Kishan Rao Balila | Kishan Rao Balila, Dr Kishan Balila | Branded; identity validation | `/` | Full brand identity/logo supports this. ON_PAGE may consider metadata alignment later. |
| Surgeon Kishan | surgeonkishan, Surgeon Kishan Mangalore | Branded/navigation | `/` | Existing social handle supports this term. |
| The White Army Dr Kishan | White Army surgeon Kishan, The White Army publication | Branded/publication/social initiative | `/#about`, `/#books` | Could support schema later; do not over-promote ahead of surgeon identity. |
| Language of Healthcare Dr Kishan | Articulate to Treat, English Kannada phrase book | Publication/informational | `/#books`, PDF link | Book schema may be possible later. |
| Surgery Simplified for Students | Dr Kishan Rao book | Publication/informational | `/#books` | No PDF yet; preserve current action. |
| All in 1 Case Proformas | All in 1 Clinical Case Proformas, Kishan Rao | Publication/informational | `/#books`, PDF link | Book schema may be possible later. |

## Existing Page Fit

### Strong existing fits

- Homepage for branded, general surgeon, laparoscopic surgeon, LASER surgeon, consultation, and location overview intent.
- `/conditions/{slug}` pages for direct term explanation and light service intent.
- `/blogs/how-to-manage-a-hernia` for hernia patient education.
- `/blogs/how-to-prevent-hemorrhoids` for piles/hemorrhoids prevention education.
- `/blogs/laser-treatment-varicose-veins` for EVLA/varicose vein education.
- `/blogs/day-care-surgery` for same-day/day-care surgery education.
- `/blogs/choosing-a-trustworthy-doctor` for trust/doctor-selection intent.

### Weak or partial fits

- Laparoscopic surgery as an umbrella topic is currently served by homepage services plus individual condition pages, not a dedicated page.
- LASER/proctology as an umbrella topic is currently served by homepage services plus individual condition pages, not a dedicated page.
- General surgery as an umbrella topic is currently served by homepage services plus condition pages, not a dedicated page.
- Appendix/appendicitis intent is served by `/conditions/appendix`, but common search language is more likely appendicitis or appendix surgery.
- Breast, thyroid, circumcision, diabetic foot and pilonidal sinus currently have only definition-level condition pages and no deeper educational article.

## Candidate Future Pages For PAGE_MAP Review

These are not approved for creation yet. They are only candidates for later `PAGE_MAP_QA`.

1. Comprehensive General Surgeon / General Surgery page
   - Possible route: `/general-surgery` or `/general-surgeon-mangalore`
   - Rationale: captures broad appointment intent.
   - Risk: can become generic/keyword-stuffed unless built from approved services and consultation facts.

2. Laparoscopic Surgery service page
   - Possible route: `/laparoscopic-surgery`
   - Rationale: umbrella intent across hernia, gallbladder, appendix, minimally invasive surgery.
   - Risk: must not claim universal faster recovery or superiority.

3. LASER Surgery / Proctology page
   - Possible route: `/laser-surgery` or `/proctology-laser-care`
   - Rationale: clusters piles, fissure, fistula, pilonidal sinus and laser intent.
   - Risk: must avoid promotional claims and unsupported outcome language.

4. Varicose Veins / EVLA page consolidation decision
   - Possible route: keep `/conditions/varicose-veins` as canonical and treat EVLA as procedure subsection, or keep both with clear separation.
   - Rationale: strong local treatment intent.
   - Risk: duplicate/overlap if not handled with canonical and content purpose.

5. Hernia page consolidation decision
   - Possible route: keep `/conditions/hernia` as condition and `/conditions/hernia-surgery` as procedure, or consolidate.
   - Rationale: strong condition and treatment intent.
   - Risk: duplicate/thin pages.

6. Gallbladder Stones / Laparoscopic Cholecystectomy guide
   - Rationale: common patient search topic.
   - Risk: needs approved medical content.

7. Appendicitis / Appendix Surgery guide
   - Rationale: patient search likely uses appendicitis/appendix surgery more than just appendix.
   - Risk: urgent-care wording must be cautious and medically reviewed.

8. Diabetic Foot / Ulcer Care guide
   - Rationale: meaningful patient education/service topic.
   - Risk: outcome claims must be avoided.

Do not create location-specific duplicates such as separate near-identical pages for Mangalore, Puttur, Sullia, and Dakshina Kannada. If local landing coverage is later considered, the preferred approach should be one strong consultation/location section or one legitimately useful location-aware page grounded in approved hospital data.

## Query Cluster Matrix

| Cluster | Example queries to satisfy naturally | Intent type | Best current route |
| --- | --- | --- | --- |
| Broad surgeon appointment | general surgeon in Mangalore, laparoscopic surgeon Mangalore, surgeon near me, surgical consultation Mangalore | Transactional / local | `/`, `/#consultation` |
| Local appointment by town | general surgeon Puttur, surgeon Sullia, laparoscopic surgeon Dakshina Kannada | Transactional / local | `/`, `/#consultation` |
| Proctology symptoms | bleeding while passing stool, piles doctor Mangalore, fissure pain, fistula treatment Mangalore | Informational + treatment | `/conditions/piles-hemorrhoids`, `/conditions/fissure`, `/conditions/fistula`, `/blogs/how-to-prevent-hemorrhoids` |
| LASER proctology | laser piles surgery Mangalore, laser fistula treatment, laser fissure treatment | Treatment/service | `/#services`, relevant `/conditions/*` pages |
| Varicose veins | varicose veins treatment Mangalore, EVLA Mangalore, laser treatment for varicose veins, leg vein doctor | Treatment/service + informational | `/conditions/varicose-veins`, `/conditions/varicose-veins-evla`, `/blogs/laser-treatment-varicose-veins` |
| Laparoscopy | laparoscopic surgery Mangalore, keyhole surgery Mangalore, minimally invasive surgery Mangalore | Treatment/service | `/#services`, related condition pages |
| Hernia | hernia surgery Mangalore, laparoscopic hernia repair, hernia symptoms, hernia doctor Puttur | Treatment/service + informational | `/conditions/hernia`, `/conditions/hernia-surgery`, `/blogs/how-to-manage-a-hernia` |
| Gallbladder | gallbladder stones surgery Mangalore, gallstones treatment, laparoscopic cholecystectomy | Treatment/service + informational | `/conditions/gallbladder-stones` |
| Appendix | appendicitis symptoms, appendix surgery Mangalore, laparoscopic appendectomy | Informational + urgent/treatment | `/conditions/appendix` |
| General surgery conditions | breast surgery, thyroid surgery, circumcision, minor surgery, emergency surgery | Treatment/service | Relevant `/conditions/*` pages |
| Trust/doctor selection | trustworthy doctor, how to choose a surgeon, Dr Kishan Rao reviews | Informational + branded | `/blogs/choosing-a-trustworthy-doctor`, `/#testimonials`, `/` |
| Publications/education | Language of Healthcare, Surgery Simplified for Students, White Army Dr Kishan | Branded/informational | `/#books`, `/#about` |

## SEO Guardrails For Later Nodes

- Do not use unsupported "best surgeon" language.
- Do not imply guaranteed pain-free outcomes, faster recovery, or superior results unless the approved content already includes cautious, medically reviewed wording.
- Do not create separate pages for each city/hospital unless the page has unique patient value and is approved.
- Do not turn definitions into aggressive treatment recommendations.
- Do not publish legacy migrated blog posts unless medical/content approval is obtained.
- Do not change approved website copy during SEARCH_INTENT or SEARCH_INTENT_QA.
- Use patient language, but keep medical accuracy ahead of search volume.

## SEARCH_INTENT_QA Checklist Status

- [x] Search-intent research was completed before any page creation.
- [x] Patient usefulness and medical accuracy are prioritized over keyword density.
- [x] Intent clusters are mapped to existing approved routes where possible.
- [x] Proposed gaps are documented for approval rather than implemented directly.
- [x] No keyword stuffing.
- [x] No doorway/location-spam strategy.
- [x] No mass-generated thin medical page strategy.
- [x] No approved content was rewritten.
- [x] No commit, push, or deploy.
