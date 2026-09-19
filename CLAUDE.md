# Interior Motives — Website Project Brief

This file exists so a fresh Claude Code session can pick up this project without
re-learning preferences from scratch. It was written after building two similar
local-service-business sites (a tile contractor and a construction company) and
carries over what worked well there — process, SEO approach, and hard-won lessons —
**without** carrying over anything specific to those businesses (their names, trades,
or brand systems). This business is different in kind from the other two: it's a
**design / design consultation business**, not a trade contractor, and that changes
more than you'd think — read the notes below before assuming anything transfers
directly.

**Read this whole file before writing any code.** Then follow "Getting started" at the
bottom — it tells you what to ask the client before building anything.

## What we know so far

- **Business name:** Interior Motives (corrected 2026-07-25 — an earlier draft of this
  file incorrectly had it as "Interior Renovations"; that name is not used anywhere).
- **Industry:** Interior design / design consultation, confirmed to also include
  renovation execution (see business_facts memory). Find out:
  - Do they only provide design services (space planning, material/color selection,
    design plans) and hand off execution to contractors/trades? Or do they also
    manage or perform the renovation work itself?
  - This single answer changes the schema type, the service-page structure, the CTAs
    ("book a design consultation" vs. "get a renovation estimate"), and probably the
    whole tone of the site — get it nailed down first.
- **Service area:** Southwest Florida — same region as the prior two projects
  (Charlotte, Sarasota, Manatee, and Lee Counties). Their core city lineup was
  Sarasota, Venice, North Port, Port Charlotte, Punta Gorda, Cape Coral, and
  Bradenton — confirm with the client whether this list applies here too. A design
  consultancy's real service radius may be narrower (e.g. clustered around
  Sarasota/Venice) or wider than a trade contractor's, so don't assume the exact same
  list without asking.
- **Everything else is unknown**: phone, email, tagline, years in business, portfolio
  size, design credentials/certifications (e.g. NCIDQ, ASID, or similar professional
  affiliations — these matter a lot as trust signals for a design business
  specifically), brand colors/fonts/logo, and exact service offerings. Don't guess or
  invent any of this — ask (see Getting Started).

## How this business differs from a trade contractor (read this before reusing patterns)

- **The portfolio is the product.** For a tile contractor or builder, photos support
  the sales pitch; for a design business, the photo portfolio *is* the sales pitch —
  it's the primary evidence of taste and skill. Budget more design/layout attention to
  the portfolio/gallery experience than you would on a typical contractor site (bigger
  images, better curation, possibly filterable by room type or style, before/after
  pairs if available).
- **Photo usage rights matter more here.** Design work photos are taken inside private
  homes, often after project completion, and a design business is more likely than a
  general contractor to have signed client agreements about photo usage. Don't assume
  the client can use every photo they hand you — ask if they have usage rights/model
  releases sorted before publishing project photos, especially any that show
  recognizable home interiors, addresses, or identifiable clients.
- **The CTA is probably a consultation, not an estimate.** "Get a Free Estimate" reads
  naturally for a contractor pricing a job; a design business more likely wants to lead
  with "Book a Design Consultation" or similar. Confirm the actual first step in their
  sales process before defaulting to contractor-style CTA language.
- **The website's own design quality is the first data point a visitor has about this
  business's taste.** A sloppy or generic-feeling site actively undermines a design
  business's credibility in a way it wouldn't for a plumber or tile installer. Hold
  the visual execution to a higher bar here — spacing, typography, and photo
  presentation deserve extra care and iteration.

## Site goals

- Primary goals are **local SEO visibility** and **lead generation** — likely
  consultation bookings or inquiry form submissions rather than phone-call-first, but
  confirm this with the client.
- Static HTML/CSS/vanilla JS, **no framework, no build step** — the prior projects
  deployed to Netlify via drag-and-drop. Confirm this is still the deployment target;
  if so, keep every file working as-is with no compilation/bundling step.
- Mobile-first responsiveness, but with disciplined scoping: mobile-only tweaks live
  inside their own media query block and should never touch base/desktop rules.
- Accessibility baseline: skip link, visible `:focus-visible` states, and
  `prefers-reduced-motion` respected globally.

## SEO approach (proven pattern — reuse this structure)

- One `<h1>` per page containing the primary keyword; phone numbers and CTAs are never
  headings.
- Every page needs a unique `<title>` (~60 char budget), unique meta description
  (~150–160 char, keyword + location + a trust signal), canonical URL, and Open Graph
  tags.
- JSON-LD schema: schema.org doesn't have a clean built-in type for "interior design
  business" the way it does for contractors (`HomeAndConstructionBusiness` and its
  subtypes like `GeneralContractor`). Research the best fit before building — likely
  candidates are `ProfessionalService` or `LocalBusiness` with a specific `name`/
  `description` doing the work of clarifying the niche — don't force-fit a
  construction-trade schema type onto a design business.
- **Two-tier keyword strategy** — don't blend these:
  - Homepage and service pages target broad regional phrasing ("interior design
    consultation in Southwest Florida" or similar — exact phrasing depends on their
    actual services).
  - Location pages target hyper-local, single-city phrasing ("interior designer in
    [city], FL") — that's their whole purpose.
- Location pages must have **genuinely differentiated content per city** — different
  local landmarks, neighborhood/home-style character (e.g. Sarasota's downtown condos
  vs. Venice's historic homes read very differently for a design business), or
  featured local projects — not the same paragraph with the city name swapped.
- Full internal linking: every page's footer links to every service and every
  location; services and locations should cross-link to each other in-content.
- Keep `sitemap.xml` and `robots.txt` in sync with the *actual* set of pages — audit
  this any time a new page is added; it's an easy thing to forget.

## Content and messaging discipline (read before writing any copy)

- **Never describe a broader (or narrower) scope of work than the client actually
  offers.** On a prior project, a customer called confused because a FAQ answer
  implied the business did small jobs it actually considers not worth taking. The
  lesson generalizes here: before writing service copy, get the exact scope confirmed
  (see the design-vs-execution question above) rather than writing what sounds good.
- **Never fabricate trust signals.** Don't invent "X years in business," a project
  count, client testimonials, or review/rating schema without the client confirming
  real figures. If they have real reviews or press features, use those; otherwise
  leave it out rather than guessing.
- **Don't claim credentials or affiliations unless confirmed.** Design-specific
  credentials (NCIDQ certification, ASID/IIDA membership, specific design awards) are
  valuable trust signals *if true* — verify before listing any of them.
- **Be precise about what a booking tool actually books.** If a scheduling widget is
  used, make sure the copy is accurate about what happens next (an initial phone
  consultation? an in-home visit? a virtual design session?) based on how the client
  actually works, not whatever reads smoothest.

## Design system

This is a blank slate — the prior projects' specific palettes, fonts, and signature
visual motifs belonged to those businesses and **should not be reused** here. Given
the note above about design quality being especially load-bearing for this client,
put real thought into this rather than defaulting to a generic template look:

- Define the entire color palette and font stack as CSS custom properties at the top
  of one shared stylesheet — never hardcode hex values or font names in page markup.
- Ask for brand colors/fonts/logo, or at minimum a style direction (modern minimalist,
  warm/traditional, coastal, transitional, etc.) and reference sites or Pinterest-style
  inspiration they like — don't invent a visual identity for a design business without
  their input.
- Photography treatment (crop consistency, whitespace, gallery layout) will do more
  work here than on a contractor site — plan the portfolio/gallery pattern early and
  get it right before replicating it across many pages.

## Workflow and tooling notes carried over from this machine

- No Node or Python available by default. A PowerShell-based static file server
  (`System.Net.HttpListener`) worked well for local preview on prior projects — set up
  the same pattern here if this machine still lacks Node/Python.
- If any source photos are `.webp`, note that `System.Drawing`/GDI+ (the usual
  PowerShell image path) **cannot decode WebP** — use WPF imaging
  (`System.Windows.Media.Imaging`, via `Add-Type -AssemblyName PresentationCore`)
  instead.
- This machine may have **Windows Controlled Folder Access** enabled, which can
  silently block `git.exe`/`bash.exe`/`powershell.exe` from writing to a
  Documents-folder project — it often surfaces as a misleading "file not found" error
  rather than "access denied." If git commands or file writes mysteriously fail, this
  is the first thing to check; the fix requires the user to add the *exact binary
  paths* (not just app names) as exceptions in Windows Security.
- Only commit or push to git when the user explicitly asks — don't commit proactively,
  and don't push without being asked even if a commit was just made.
- Verify every visual change in an actual browser preview — both mobile and desktop
  widths — before considering a UI change done. Don't rely on reading the code alone.

## Confirmed facts (from client collateral, 2026-09-19)

Pulled from the business card, brochure, and the studio's old Google Site saved in
`images/` — these override the "unknown" notes above:

- **Legal/brand name on the logo:** "Interior Motives Design" (monogram "iM" in a
  square, letter-spaced serif caps). Logo files: `images/brand/logo-navy.png` and
  `logo-white.png`, cropped from the client PNG.
- **Brand palette:** deep navy (#13223f) + white; black line-art logo. Accent colors
  pulled from the portfolio: brass, harbor teal, terracotta, sage (+ pale tints for
  section bands). Look is intentionally "artsy, not corporate": rounded cards (18px),
  pill buttons, soft layered shadows, generous spacing. Fonts kept from the prior
  design at the client's request: Fraunces (incl. 700 for the hero H1) / Work Sans / Jost.
- **Header:** logo · "Menu" dropdown (all nav links) · navy pill showing the full phone
  number. On the homepage only (`body.home`), the header is hidden until the user scrolls
  60px, then slides in (0.3s transform) — copied from clearvantwc.com's main.js.
- **Photos of Holly & Lori:** in the joint showroom photo, **Holly is on the left (navy
  shirt), Lori is on the right (tan cardigan)** — confirmed by the user 2026-09-19.
  Individual crops are `images/team/holly.jpg` and `images/team/lori.jpg`.
- **Calendly:** removed site-wide at the user's request (2026-09-19). CTAs now point to
  the phone number or `contact.html#consultation`.
- **Address:** 4288 Pinnacle St, Charlotte Harbor, FL 33980 (not Punta Gorda).
- **Email:** Info@InteriorMotives1.com. **Phones:** Lori (941) 456-4136 (primary),
  Holly (727) 638-2381. By appointment only.
- **Offer:** "Free initial consultation — $250 value" (printed on the brochure).
- **Team:** Holly (Tanner) & Lori (Brunderman) — designers & owners; Margaret —
  designer / design coordinator. Bios on `team.html` are taken verbatim in substance
  from the old Google Site's "Our Team" page. Lori's surname happens to be Brunderman;
  the *company* "Brunderman Building" has been removed from the site entirely.
- **Form handling:** consultation form mirrors clearvantwc.com — FormSubmit.co POST
  with honeypot, `_template=table`, redirect to `thank-you.html`. It's progressive:
  only name + phone/email show at first; each `.form-step` reveals as the previous one
  is answered (logic in `js/main.js`). Only `name` is `required`, so a quick lead can
  still submit from step 1.

## To-do list (as of 2026-09-19)

Things that still need client input or a follow-up pass. Don't invent any of these.

- [ ] **Real reviews.** Homepage `#reviews` has three clearly-marked placeholder cards.
      Get 3–6 real Google reviews (name + text) and swap them in; also add a
      "Read all reviews on Google" link once the Google Business Profile URL is known.
- [ ] **Team surnames / titles.** Cards use first names only. Confirm whether the client
      wants "Holly Tanner" / "Lori Brunderman" shown, and Margaret's surname + exact
      title ("Design Coordinator" per the old site).
- [ ] **Form inbox.** Both forms currently POST to `formsubmit.co/gobiggify@gmail.com`
      (same as Clearvant). Switch to the client's inbox when ready and complete the
      one-time FormSubmit activation email. `_next` redirect uses the placeholder
      domain — update when the real domain is known.
- [ ] **Domain.** Canonicals/OG/sitemap still use `www.interiormotivesswfl.com`
      (placeholder). Confirm the real domain (email suggests interiormotives1.com).
      Then remove the `TEMP-NOINDEX` meta line from every page.
- [ ] **Design Details pages scope.** Six informational SEO pages were added
      (`services-wallcoverings`, `-window-treatments`, `-furniture-selection`,
      `-lighting-selection`, `-rugs-fabrics`, `-art-accessories`). Copy says the studio
      selects/specifies and *coordinates* installation with installers/electricians —
      confirm that's accurate, and whether any should be dropped or added (e.g. flooring
      & tile, cabinetry, outdoor/lanai design).
- [ ] **Phone-or-email validation.** The form only requires a name; it doesn't block
      submission when both phone and email are blank. Add a check if leads come in
      unreachable.
- [ ] **Headshot quality.** `holly.jpg` / `lori.jpg` are crops of a group photo and a
      bit soft when enlarged — request proper individual headshots.
- [ ] **Partners page.** `partners.html` is intentionally generic with 8 placeholder logo
      tiles — client will supply partner names/logos/links. Old Google Site had an
      "Our Vendors" page; ask if that list still applies.
- [ ] **New Construction Design scope.** The old "Custom Home Building" page (which was
      built around Brunderman Building) was rewritten as design-only work alongside
      the client's builder. Confirm this matches what they actually offer.
- [ ] **Trust stats.** "20+ years" and "500+ projects" and "Licensed" carried over from
      the previous build — re-confirm with the client now that the team story
      (studio opened 2023, partners' individual experience longer) is known.
- [ ] **Photo quality.** Most portfolio JPEGs are 640px wide (phone exports). Request
      full-resolution originals, especially the 2023 photo-shoot set used in the hero
      and carousel. Confirm photo usage rights for client homes.
- [ ] **Candid team photos.** The two solo candids in `images/team/`
      (`designer-at-market.jpg`, `designer-showroom.jpg`) are uncaptioned on the team
      page's "In the Field" gallery because it's unclear who's pictured — ask.
- [ ] **Favicons.** `favicon.svg` was redrawn in navy; the PNG favicons and
      `apple-touch-icon.png` are still the old teal house icon — regenerate.
- [ ] **OG image.** Pages reference portfolio photos for `og:image`; consider a
      dedicated 1200×630 branded share image.
- [ ] **Repo hygiene.** `images/branding/`, `images/meet the team/`, `images/work
      pictures/`, and the saved "Interior Motives - Google Sites" HTML dumps are raw
      client uploads (some 8MB+). They're not referenced by the site — move them out of
      the deploy folder or add to `.gitignore` before publishing to Netlify.
- [ ] **New service-area pages (2026-09-19).** Added Englewood, Boca Grande, and Nokomis
      — all inside the existing Charlotte/Sarasota/Lee footprint, not a wider market.
      Confirm the client actually takes work in each (especially Boca Grande, which is
      island-only access via the causeway). Their local copy references Manasota Key,
      Lemon Bay, Dearborn Street, Gasparilla Island, Casey Key, and Dona/Roberts Bays.
- [ ] **Location page copy** still says "design and renovate" per city — fine, but
      each page could now feature a real local project photo if the client can say
      which city each portfolio photo came from.

## Getting started — do this first

1. Read this whole file.
2. **Ask the client the following before writing a single page of content.** Don't
   assume or invent answers:
   - Business name (confirm exact spelling/formatting), phone, email, and any tagline.
   - The scope question from above: design/consultation only, or also renovation
     execution/project management? This determines almost everything else.
   - What services they actually offer — full-room design, space planning, color
     consultation, kitchen/bath design, whole-home renovation design, virtual design
     services, etc.
   - Confirm the service area / city list (see "What we know so far" above).
   - Years in business, portfolio size, and any real credentials (NCIDQ, ASID/IIDA
     membership, awards, press features) or client testimonials — never invent these.
   - Brand direction: colors, fonts, existing logo, style references, or Pinterest-
     style inspiration.
   - Whether a real photo portfolio exists and photo usage rights are confirmed with
     past clients, or whether placeholders are needed for now.
   - Deployment target — still static/Netlify drag-and-drop? Any scheduling tool
     (e.g. Calendly) to integrate for consultations?
   - Primary conversion goal per page — consultation booking, contact form, phone
     call, something else?
3. Once the basics are answered, **propose a page structure** (homepage, service
   pages, location pages, portfolio/gallery) and get the client's sign-off before
   building everything.
4. Build the homepage + shared CSS/JS + **one** service page as a template first, and
   check in with the client before generating the rest. This let the client catch
   stylistic and content issues early on prior projects, rather than after all pages
   were already built.
