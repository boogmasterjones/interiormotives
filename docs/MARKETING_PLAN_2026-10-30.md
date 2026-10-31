# Interior Motives Design: website marketing plan, 2026-10-30

Owner's brief (2026-10-30): reconfigure the site for marketing, no cosmetic work; list everything, then do it all.

Branch: `marketing/2026-10-30` (from `main` at 70fbca4, the gtag fix, which is kept). Nothing is pushed, merged or deployed.

Status labels: **DONE** (in the branch), **NEEDS OWNER** (Wyatt / the agency accounts), **NEEDS CLIENT** (Holly or Lori must confirm or supply something), **NOT DONE** (deliberately left, with the reason).

## 1. What the data says (pulled from Hubert 2026-10-30, computed in code)

| Source | Finding |
|---|---|
| Search Console, 2026-10-05 to 10-27 (23 days, all there is) | 4 clicks, 137 impressions, impression-weighted average position 58.7. 3 of the 4 clicks are the homepage at position ~4 (brand searches). |
| Search Console pages | `/contact` 51 impressions at position 118.5; `/team` 35 at 11.6; `/` 24 at 4.1 (3 clicks); `/services/wallcoverings` 12 at 34.6; `/portfolio` 10 at 36.3; `/locations/venice` 6 at 15.2; `/services/color-consultation` 1 click at 3. |
| Search Console queries (18 rows) | Out-of-area: 5 Fort Lauderdale wallcovering queries ("grasscloth wallpaper ft. lauderdale fl" ...), 2 Boca Raton, "interior commercial lighting aberdeen fl". Local and relevant: "interior design studio venice fl" (position 6.5), "southwest florida home design" (17), "bedroom design punta gorda" (54.5). **No "interior designer punta gorda / port charlotte / charlotte harbor" row at all.** |
| Indexing (Hubert `page_indexing`, checked 10-27 to 10-30) | 22 of 33 URLs indexed. Not indexed: `/services/interior-design`, `/locations/punta-gorda`, `/locations/port-charlotte`, `/services`, `/services/window-treatments`, `/services/space-planning` (unknown to Google), `/locations/englewood`, `/locations/sarasota`, `/locations/nokomis`, `/locations/cape-coral`, `/blog`. The two money pages for the home market are among them. |
| Google Business Profile metrics | Since 10-01: 51 direction requests, 3 website clicks, 0 call taps (71 / 3 / 0 since 08-31). Listing (gbp_profile_audits 10-14): "4288 Pinnacle St, Punta Gorda, FL 33980", primary category Interior designer, open 24 hours. |
| Leads | `client_leads`: 0. The form posted to formsubmit, so no inquiry has ever reached Hubert. |
| Phone taps | No `tel:` link on the site fired `call_click` (only an unused component had it; header, footer and all content links were plain). GA4 itself was broken until 70fbca4. |
| Reviews | 2 Google reviews, both 5 stars: William Barringer (10-24) and Rosi Brown (10-25). |
| Site audit (before) | 0 errors, 149 warnings; 9 location pages (playbook max 7) at ~290 words each (target 800); service pages 290-640 words (target 1,000); "licensed" in 11 descriptions and on About although no licence is confirmed. |

Reading: the site is invisible for the searches that matter, Google is not even indexing the two pages built for the home market, and nothing that does happen (calls, forms) can be counted. The work below goes after exactly those three things.

## 2. Local SEO targeting: titles, descriptions, H1s

| Item | Why | What | Status |
|---|---|---|---|
| 2.1 Homepage title and H1 name the town | No Punta Gorda / Port Charlotte query appears; the homepage is the Google listing's landing page | Title `Interior Motives Design \| Interior Designer in Punta Gorda, FL` (brand kept first because brand searches are the only clicks); H1 `Punta Gorda Interior Design. Inspired by You.` | DONE |
| 2.2 Every service page title and H1 names Punta Gorda (and Port Charlotte for the four main services) | Service pages rank for nothing local; wallcoverings draws Fort Lauderdale | e.g. `Interior Design Services in Punta Gorda & Port Charlotte, FL`, `Residential Lighting Design & Selection in Punta Gorda, FL`, `Wallpaper & Grasscloth Design in Punta Gorda & Port Charlotte` | DONE |
| 2.3 Contact, team, services, portfolio, about, service-area titles | `/contact` has 51 impressions at position 118: it is matched to "interior motives" searches for unrelated businesses elsewhere; adding the town and "design" disambiguates | `Contact Interior Motives Design, Punta Gorda Interior Designers`; `Meet Holly & Lori, Interior Designers in Punta Gorda, FL`; etc. | DONE |
| 2.4 Descriptions 120-160 characters, keyword + town + one honest trust signal | SITE_RULES 5.2 | All rewritten; "licensed" removed | DONE |
| 2.5 Blog titles fit 70 characters | Two blog titles were 84 and 90 characters with the brand suffix | Suffix only when it fits in 65 (SITE_RULES 5.1); one title shortened | DONE |
| 2.6 Address form | Site said "Charlotte Harbor, FL 33980"; Google says "Punta Gorda, FL 33980" (33980 is a Punta Gorda postal code; Charlotte Harbor is a community inside it) | NAP is now `4288 Pinnacle St, Punta Gorda, FL 33980`, character for character as on Google. Copy says "our studio in Charlotte Harbor, Punta Gorda" so both names stay on the page | DONE |

Before / after of the main titles and H1s:

| Page | Title before | Title after | H1 before | H1 after |
|---|---|---|---|---|
| `/` | Interior Motives Design \| Interior Design & Renovation in SWFL | Interior Motives Design \| Interior Designer in Punta Gorda, FL | Beautiful Spaces. Inspired by You. | Punta Gorda Interior Design. Inspired by You. |
| `/services/interior-design` | Interior Design Services in SWFL \| Interior Motives | Interior Design Services in Punta Gorda & Port Charlotte, FL | Interior Design | Interior Design in Punta Gorda & Port Charlotte |
| `/contact` | Contact Interior Motives Design \| Charlotte Harbor, FL | Contact Interior Motives Design, Punta Gorda Interior Designers | Contact Interior Motives Design | Contact Our Punta Gorda Interior Design Studio |
| `/team` | Meet the Team \| Interior Motives Design, Charlotte Harbor FL | Meet Holly & Lori, Interior Designers in Punta Gorda, FL | (unchanged) | (unchanged) |
| `/services` | Interior Design & Renovation Services \| Interior Motives | Interior Design & Renovation Services in Punta Gorda, FL | Design and Renovation, Under One Roof | Interior Design & Renovation, Under One Roof |
| `/locations` | Service Area \| Interior Motives Southwest Florida | Interior Design Service Area: Charlotte, Sarasota & Lee County | Serving Southwest Florida | Interior Design Across Charlotte, Sarasota & Lee Counties |
| `/services/wallcoverings` | Wall Designs: Paper & Textures in SWFL \| Interior Motives | Wallpaper & Grasscloth Design in Punta Gorda & Port Charlotte | Wall Designs: Paper & Textures | Wallpaper & Wall Textures in Punta Gorda & Port Charlotte |
| `/services/lighting-selection` | Lighting & Accessories Selection in SWFL \| Interior Motives | Residential Lighting Design & Selection in Punta Gorda, FL | Lighting & Accessories | Residential Lighting & Accessories in Punta Gorda |
| `/locations/venice` | Interior Designer in Venice, FL \| Interior Motives | Interior Designer in Venice & Nokomis, FL \| Interior Motives | Interior Designer in Venice, FL | Interior Designer in Venice & Nokomis, FL |

## 3. Page-to-query map

| Target searches | Page |
|---|---|
| interior designer punta gorda, interior design punta gorda, interior designer near me (Punta Gorda) | `/` (with the Google listing) and `/locations/punta-gorda` |
| interior designer port charlotte | `/locations/port-charlotte`, `/services/interior-design` |
| interior designer charlotte harbor | `/`, `/contact`, `/services/interior-design` |
| interior design services punta gorda / port charlotte | `/services/interior-design` |
| kitchen / bathroom design punta gorda, port charlotte | `/services/kitchen-bath-design` |
| new construction interior design, builder selections help | `/services/new-construction-design` + blog |
| interior design studio venice fl (already position 6.5) | `/locations/venice` (now Venice & Nokomis) |
| interior designer north port / englewood / boca grande / sarasota | the matching location page |
| grasscloth / wallpaper punta gorda | `/services/wallcoverings` (now says Charlotte, Sarasota and Lee Counties only) |
| Holly / Lori / Interior Motives team | `/team` |

Cannibalisation note: the homepage and `/locations/punta-gorda` both name Punta Gorda. That is intended (the listing's landing page plus a deeper city page); watch Search Console and, if Google alternates between them for the same query, make the city page the deeper one (it already is).

## 4. New and expanded pages

| Item | Why | What | Status |
|---|---|---|---|
| 4.1 `/services/interior-design` to 1,000+ words | Main money page, not indexed, 345 words | Local context (light, humidity, tile and open great rooms, seasonal homes), why-us list of confirmed facts, 5 visible FAQs, keyword section, links to every service and town | DONE |
| 4.2 `/locations/punta-gorda` and `/locations/port-charlotte` deeper | Not indexed, ~290 words, templated | Neighborhoods (downtown and the post-Charley rebuild, Punta Gorda Isles, Burnt Store Isles, Burnt Store Road; Port Charlotte's 1950s canal grid and ranch homes), a verbatim Google review, local FAQs, near-you section. ~740 and ~710 words | DONE |
| 4.3 Location pages cut from 9 to 7 | Playbook maximum is 7 (SITE_RULES 5.11); Nokomis and Cape Coral had no impressions and were not indexed | Nokomis folded into Venice (`/locations/venice` is now Venice & Nokomis); Cape Coral named on the service-area page and in the schema. Both old URLs (and their .html and pre-migration forms) 301. Order now starts at home: Punta Gorda, Port Charlotte, North Port, Englewood, Boca Grande, Venice, Sarasota | DONE (owner may swap Cape Coral back in for Sarasota; see 13.7) |
| 4.4 Near-you sections on the other four location pages | ~290 words, thin | Distinct local paragraphs, service list with links, nearby towns | DONE (still under 800 words; see 12.3) |
| 4.5 Local section on every service page and `/services` | H1 words must recur; pages had no town at all | A distinct H2, two paragraphs, a variations list and a towns paragraph per page | DONE |
| 4.6 Homepage local section | Homepage had 398 words and no internal links into towns | "Interior Designers for Punta Gorda, Port Charlotte & Charlotte Harbor", linking every location and the main services | DONE |
| 4.7 Contact page | Ranked at 118; thin; nothing about what happens next | "What happens when you get in touch" and four FAQs | DONE |
| 4.8 A renovation service page ("home renovation punta gorda") | "Renovation" is in the business profile and on the site, but there is no page for it | Needs the scope first: who does the construction, which trades, what the studio manages | NEEDS CLIENT |
| 4.9 Local project write-ups (case studies by town) | Strongest local proof; the portfolio has no towns | Needs the client to say which photos are from which town and that the homeowner agrees (SITE_RULES 4.5) | NEEDS CLIENT |

## 5. Internal linking

| Item | Status |
|---|---|
| Every location page links to its services and to 2-3 neighboring towns in the copy | DONE |
| Every service page links to the towns (and related services) in its local section | DONE |
| `/services/interior-design` links to all 12 other services, all 7 towns, both blog posts, portfolio, reviews and team | DONE |
| Homepage local section links all 7 towns and 4 core services | DONE |
| Footer service-area list generated from the location pages (same order everywhere, SITE_RULES 5.13) | DONE |
| 44 grid links to the two retired location pages removed | DONE |
| In-copy links underlined (SITE_RULES 8.2), scoped to `.prose` only | DONE |

## 6. Structured data

| Item | Why | Status |
|---|---|---|
| 6.1 One business node on every page (was homepage only) | SITE_RULES 5.10 | DONE |
| 6.2 Location pages: a Service node pointing at the business (they emitted a second ProfessionalService node) | Two business nodes on a page confuse Google | DONE |
| 6.3 Service pages: areaServed lists every town served, as "City, FL" (was the single studio city) | | DONE |
| 6.4 `sameAs` to the real Facebook and Instagram, `hasMap` to the Google listing, `logo` | Was empty | DONE |
| 6.5 Address in schema = Google's exact form | NAP | DONE |
| 6.6 FAQPage on interior design, Punta Gorda, Port Charlotte, kitchen & bath and contact (all visible on the page) | | DONE |
| 6.7 Type | schema.org has no InteriorDesigner type; `ProfessionalService` (a LocalBusiness) kept | NOT DONE (no better valid type) |
| 6.8 Review / AggregateRating markup | Google treats a business's own reviews on its own site as self-serving and SITE_RULES 3.2 forbids it. Reviews are shown as text only | NOT DONE (deliberately) |
| 6.9 Validate in the Rich Results Test after deploy (homepage, a service page, a location page) | | NEEDS OWNER |

## 7. NAP consistency

| Item | Status |
|---|---|
| Site address = Google: 4288 Pinnacle St, Punta Gorda, FL 33980; phone (941) 456-4136 | DONE |
| Header and footer read name, phone, email and address from `data/site.json` (they were hard-coded) | DONE |
| Hubert task "Fix NAP consistency" (onboarding audit 2026-10-30, still open) can be closed once this deploys | NEEDS OWNER |
| Nextdoor listing name / address / phone fix (open since the 10-27 audit) | NEEDS OWNER |
| Citations and directories use the same string; never "Charlotte Harbor, FL 33980" as the city | NEEDS OWNER |
| Holly's own line (727) 638-2381 is still listed beside the main number on home, contact and team. Fine for people, but the listing and citations should only ever carry (941) 456-4136 | NEEDS CLIENT (keep or drop) |

## 8. Conversion

| Item | Why | What | Status |
|---|---|---|---|
| 8.1 Forms to Netlify Forms | formsubmit is forbidden (SITE_RULES 2.9) and is why Hubert has 0 leads | `data-netlify`, honeypot, `form-name`, `/thank-you` | DONE, **but see 13.1 before deploying** |
| 8.2 "How did you hear about us?" | No lead source is recorded anywhere | Optional select: Google search, Google Maps / our Google listing, Facebook, Instagram, friend / family / past client, builder / realtor / trade partner, saw our work, other | DONE |
| 8.3 Hidden attribution fields | | `page` (with utm tags), `first_page` (landing page this visit), `referrer` | DONE |
| 8.4 No empty submissions | The form had `novalidate` and no check, so a blank form could be sent | Name plus a phone or an email required, with a plain message | DONE |
| 8.5 Consultation offer clarity | | "Free initial consultation, a $250 value", in your home, real samples in the studio, stated on home, contact, interior design and every location page; FAQ "Is the first consultation really free?" | DONE |
| 8.6 CTA label | SITE_RULES appendix for this client | `cta.label` = "Book a Design Consultation" | DONE |
| 8.7 Click-to-call | Header and every page already had tap-to-call; now all tracked | | DONE |
| 8.8 Review-request path | | Homepage "Leave a Google review" link; short links `/review` and `/reviews` 302 to the Google review form (for cards, emails, texts) | DONE |
| 8.9 Point the printed review cards' QR at `/review` (optional; the current QR goes straight to Google and works) | | | NEEDS OWNER (optional) |
| 8.10 CTA row after every other section, sticky phone call bar, form field `<label>`s | Newer template features (SITE_RULES 2.1, 2.5, 2.12); they change the look | | NOT DONE (cosmetic / template migration, out of this brief) |

## 9. Trust

| Item | Status |
|---|---|
| Two real Google reviews on the homepage directly after the form (SITE_RULES 1.1), word for word, credited "William B., Google review, October 2026" / "Rosi B." | DONE |
| William's review (it names a Punta Gorda home) on the Punta Gorda page; Rosi's on Port Charlotte | DONE |
| Confirmed facts used consistently: owner-led by Holly and Lori, 20+ years, 500+ projects, one team for design and renovation, in-home consultation, real samples, to-the-trade lines, ordering / receiving / delivery / placement | DONE |
| Copy speaks as the business ("we", SITE_RULES 3.20) | DONE for all new copy |
| Show a star rating | `business.rating` stays null: 2 reviews is too few to headline and this repo has no `asOf` guard. Revisit at 10+ reviews | NOT DONE (deliberately) |
| "Licensed" removed (11 descriptions, About copy, About stat card now "Owner-Led / Holly & Lori") | DONE. To restore: NEEDS CLIENT (which licence, number, DBPR check) |
| "Custom home building" removed from the services description; new-construction copy no longer says the studio installs drapery or window treatments | DONE |
| More reviews (bot running; 10+ beats all but two local rivals) | NEEDS OWNER (keep the bot going; clear William's pending reply) |

## 10. Indexing

| Item | Status |
|---|---|
| Thin templated pages deepened (4.1-4.5) and two weakest location pages retired with 301s | DONE |
| Sitemap `lastmod` on the homepage, every page and the blog index (pages accept `updatedAt`); `updatedAt` set on every changed page | DONE |
| Service, location and blog `.html` twins 301 to the clean address (only top-level pages did) | DONE |
| Canonicals, noindex on thank-you and 404, both out of the sitemap | already correct, checked |
| After deploy: resubmit the sitemap and request indexing for `/services/interior-design`, `/locations/punta-gorda`, `/locations/port-charlotte`, `/services`, `/services/space-planning`, `/` | NEEDS OWNER (Search Console URL inspection) |
| Re-run Hubert's indexing check two weeks after deploy | NEEDS OWNER |

## 11. Out-of-area page handling

| Item | Status |
|---|---|
| Wallcoverings page names Punta Gorda and Port Charlotte in title / H1 and says the work is for Charlotte, Sarasota and Lee Counties | DONE |
| Lighting page says residential, not commercial (it drew "interior commercial lighting aberdeen fl"; commercial design is not offered) | DONE |
| Do not noindex or remove the wallcoverings page: it is the only page Google shows widely, and local intent is now stated | decided |

## 12. Analytics and lead attribution

| Item | Status |
|---|---|
| `call_click` on every `tel:` link (header, footer, every content page) with a page + placement label, e.g. `contact_header`, `punta_gorda_cta_band`; Holly's line adds `_second_line` | DONE (verified with a stub gtag in a GA-free local build) |
| `email_click` on mailto links | DONE |
| `quote_form_submit` only after a valid submission, with `lead_source` = the "how did you hear" answer | DONE |
| Mark `call_click` and `quote_form_submit` as key events in GA4 once they first fire | NEEDS OWNER |
| GA4 access: the client audit (10-16) found GA under the wrong Google account | NEEDS OWNER |
| Google listing website link with UTM tags (`https://interiormotivesfl.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`) so listing visits and leads are separable | NEEDS OWNER |
| A call-tracking number (one-line change in `data/site.json`) | NEEDS OWNER (decision) |
| Lori and Holly log every phone inquiry and ask how they heard about the studio | NEEDS CLIENT |

### 12.3 Content still below the playbook word targets

Service pages are now 480-640 words (target ~1,000) except interior design; North Port, Englewood, Boca Grande, Sarasota and Venice are 360-510 (target ~800). Padding is banned, and the honest next words need client facts (real local projects, materials they favor, how renovation is run). NEEDS CLIENT, then a content round.

## 13. Before this branch can go live (blocking)

1. **Netlify form setup** (NEEDS OWNER): in the Netlify app, confirm form detection is on, add a form-submission email notification to Info@InteriorMotives1.com, and add Hubert's webhook `https://biggify-dashboard.netlify.app/api/webhooks/netlify-forms?client=115282b1-ec39-443d-9208-9ac9f7e693b0` with the JWS secret (docs/CLEAR_CLUB_AND_LEADS.md in biggify-platform). Without the email notification, form leads would stop reaching the client's inbox. Check that interiormotives1.com has MX records (SITE_RULES 2.14), then send a test submission and see it arrive in the inbox and in Hubert.
2. Deploy is a push to `main` (about 15 Netlify credits). Interior Motives is in the batched client deploy; the owner decides when (SITE_RULES 11.2, 11.3).
3. After deploy: `window.gtag` is a function, a test tap shows `call_click` in GA4 Realtime (block analytics in any automated test, SITE_RULES 11.14), `/locations/nokomis` and `/locations/cape-coral` 301, `/review` opens the Google review form, Rich Results Test clean.
4. Hubert holds a record of the blog post "New Construction Home Design in Southwest Florida: What to Decide Early"; its title in the repo is now "New Construction Design in Southwest Florida: What to Decide Early". Make sure Hubert does not rewrite it back.
5. 13.7: the 7 location pages were chosen by data (indexed / impressions) and closeness. If the owner would rather keep Cape Coral (bigger, Lee County) than Sarasota (bigger market, 45+ miles, competitive), swap them: restore `content/locations/cape-coral.md` from git history and retire Sarasota the same way.

## 14. Google Business Profile (all NEEDS OWNER; the site cannot do these)

- Website link with UTM tags (12).
- Services list on the listing matching the site's services; business description naming Punta Gorda, Port Charlotte and Charlotte Harbor.
- Keep adding real job photos (audit 10-14 counted 6; target 10+ and a steady trickle).
- Reply to every review the same day (William's routine 5-star reply was still pending on 10-26).
- Keep posting weekly (Hubert's calendar).
- Primary category stays "Interior designer". Add a secondary category only for a service the client confirms (for example a renovation category once 4.8 is answered).
- Hours: left at 24 hours as on the listing and the site (agency norm; no data says otherwise).

## 15. Off-site (NEEDS OWNER / CLIENT)

- Houzz profile with 10+ real projects (overdue since 10-13; the strategy treats Houzz as a top channel for designers).
- Nextdoor fix (7).
- Directory citations with the exact NAP.
- No Bing or Apple work (owner preference: Google only).

## 16. Content plan (next 3 months, through Hubert's blog workflow and monthly cap; only topics the data supports, SITE_RULES 5.18)

| Topic | Data behind it | Links to |
|---|---|---|
| Grasscloth and textured wallpaper in a humid Florida home | Wallcoverings is the page Google shows most widely | `/services/wallcoverings` |
| Designing a Punta Gorda Isles canal home around the view | Money term absent; Punta Gorda page needs support | `/locations/punta-gorda` |
| Opening up a Port Charlotte ranch-style kitchen | Port Charlotte page not indexed | `/locations/port-charlotte`, `/services/kitchen-bath-design` |
| Window treatments for west-facing glass | Window treatments not indexed | `/services/window-treatments` |
| Venice Island homes: designing with Mediterranean architecture | "interior design studio venice fl" at position 6.5 | `/locations/venice` |

Status: NEEDS OWNER (approve topics in Hubert). Each post must link only to pages that exist and use client-confirmed facts.

## 17. Measure (review on 2026-12-06, the strategy's own date)

Baseline today: 4 clicks / 137 impressions / position 58.7 in 23 days; 0 local money queries; 22 of 33 URLs indexed; 0 leads; 0 tracked calls; 2 reviews.
Check: impressions and position for Punta Gorda / Port Charlotte / Charlotte Harbor queries; the 11 unindexed URLs; form leads in Hubert by "how did you hear"; `call_click` counts by label; review count. Judge on logged inquiries, not rankings.

## Checks run on the branch

`npm run check`: 0 errors, 0 warnings (1 pre-existing hint). `npm run build`: 33 pages. `npm run audit`: 0 errors, 138 warnings (was 149): the rest are image width/height (adding them could distort photos because the stylesheet has no `height: auto`; a design task), word-count targets (12.3) and four H1-recurrence warnings on 404, blog index, partners and thank-you.
