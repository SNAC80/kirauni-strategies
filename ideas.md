# Kirauni Strategies — Design Brainstorm

## Context
Kirauni means "Crown" in Swahili. The brand is a premium boutique AI and business strategy firm led by a Black woman founder with 20+ years of systems experience. The site must feel luxury boutique, editorial, structured, culturally grounded, modern, AI-forward, and crown-level.

---

<response>
<text>

## Idea 1 — "The Sovereign Editorial"

**Design Movement:** Luxury Editorial meets African Modernism (think Vogue Business meets Afrofuturist restraint)

**Core Principles:**
1. Asymmetric editorial layouts — text and image blocks offset, never perfectly mirrored
2. Geometric restraint — thin gold lines, angular crown-inspired dividers, structured white space
3. Authority through typography — large, decisive headlines with generous tracking
4. Cultural pride without cliché — crown geometry embedded in layout rhythm, not decoration

**Color Philosophy:**
Royal Purple (#6B3FA0) anchors every section as the authority color. Metallic Gold (#D4AF37) appears as a fine accent — thin rule lines, icon highlights, subtle borders. Charcoal (#1A1A1A) for body text. White (#FFFFFF) and Light Gray (#F5F5F5) dominate backgrounds for a calm, premium feel. The experience is light, never dark.

**Layout Paradigm:**
Full-bleed sections with internal asymmetry. Hero: 60/40 text-to-image split, text left-anchored. Sections alternate between left-heavy and right-heavy compositions. Cards use varied heights and staggered vertical rhythm. No uniform grid boxes.

**Signature Elements:**
1. Thin gold horizontal rule (1px) used as section dividers and eyebrow accents
2. Crown-geometry SVG motif used sparingly as a watermark or decorative element
3. Oversized section numbers (01, 02, 03) in light gray as structural anchors

**Interaction Philosophy:**
Subtle fade-in on scroll. CTA buttons have a refined hover state: purple fill slides in from left. No bouncing, no parallax gimmicks. Transitions are 200–300ms ease-out.

**Animation:**
- Hero text: staggered fade-up (each line 100ms apart)
- Section entrance: single fade-up with slight Y translate (20px → 0)
- CTA hover: background fill slides from left (clip-path or pseudo-element)
- Gold dividers: draw-in animation on first scroll

**Typography System:**
- Display/H1: Montserrat 700, 56–72px, tracking -0.02em
- H2: Montserrat 600, 36–44px
- H3: Montserrat 600, 24px
- Body: Open Sans 400, 16–18px, line-height 1.7
- Eyebrow labels: Montserrat 500, 11px, letter-spacing 0.15em, uppercase, gold color

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea 2 — "Structured Luxury"

**Design Movement:** Swiss Grid meets Contemporary Black Excellence (McKinsey meets Essence Magazine editorial)

**Core Principles:**
1. Disciplined grid with intentional breaks — 12-column base, but sections break out strategically
2. Typography as architecture — headlines are structural elements, not decoration
3. Whitespace as luxury signal — generous padding communicates premium positioning
4. Restrained color — purple and gold used with surgical precision

**Color Philosophy:**
Predominantly white and light gray backgrounds. Purple used for section backgrounds only when maximum authority is needed (e.g., CTA sections). Gold appears only as 1–2px lines, icon accents, and button borders. Never as fill.

**Layout Paradigm:**
Strict left-alignment for all body content. Headlines break the grid by extending slightly beyond the content column. Full-bleed purple sections for CTAs. Cards are clean rectangles with subtle shadow, no rounded corners.

**Signature Elements:**
1. Left-border accent bars in gold (4px) on pull quotes and key stats
2. Oversized Montserrat initials as section anchors
3. Thin-line geometric dividers inspired by crown geometry

**Interaction Philosophy:**
Hover states are minimal — underline grows, color shifts. No dramatic animations. The site communicates confidence through stillness.

**Animation:**
- Minimal: content fades in on scroll
- No entrance animations on desktop
- Mobile: subtle slide-up

**Typography System:**
- H1: Montserrat 700, 64px
- H2: Montserrat 600, 40px
- Body: Open Sans 400, 17px
- Captions: Open Sans 400, 13px, gray

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Idea 3 — "Crown Authority" (SELECTED)

**Design Movement:** Boutique Strategy Firm meets Afro-Editorial Luxury (Deloitte's structure, Vogue's editorial eye, African crown symbolism)

**Core Principles:**
1. Editorial asymmetry — every section has a dominant and subordinate zone, never equal halves
2. Crown geometry as spatial language — angular shapes, diagonal accents, and geometric rhythm echo the crown logo
3. Typographic authority — Montserrat headlines feel decisive and expensive; Open Sans body is highly legible
4. Purposeful restraint — gold is precious because it is rare; purple is powerful because it is consistent

**Color Philosophy:**
The main canvas is white (#FFFFFF) and light gray (#F5F5F5). Royal Purple (#6B3FA0) is the authority color — used for primary CTAs, key section backgrounds, and strategic emphasis. Metallic Gold (#D4AF37) is the prestige signal — used only for thin dividers, eyebrow text, icon accents, and micro-details. Charcoal (#1A1A1A) anchors all body text. The site reads light and premium, never dark or heavy.

**Layout Paradigm:**
Asymmetric editorial splits. Hero: 55% text left, 45% image right with slight overlap. Pillar section: three columns with varied heights (first column taller, creating visual rhythm). Method section: numbered vertical timeline with alternating left/right content. Client wins: masonry-style card layout. No uniform grid boxes anywhere.

**Signature Elements:**
1. Gold eyebrow lines: 40px wide, 2px tall, gold color, above every section headline
2. Angular crown-inspired section dividers: SVG diagonal cuts between major sections
3. Purple authority band: full-bleed purple section used exactly twice (hero CTA area and main CTA section)

**Interaction Philosophy:**
Every interaction communicates confidence. CTA buttons: solid purple fill, white text, hover state adds a subtle gold border. Links: underline grows from left. Cards: subtle lift (translateY -4px) on hover with shadow deepening. Scroll-triggered content reveals feel inevitable, not theatrical.

**Animation:**
- Hero: staggered text reveal (eyebrow → headline → subheadline → CTAs, each 120ms apart)
- Scroll sections: fade-up with 24px Y translate, 400ms ease-out, triggered at 20% viewport
- Method steps: sequential reveal as user scrolls through the timeline
- CTA buttons: pseudo-element background slides from left on hover (300ms)
- Gold divider lines: width animates from 0 to 40px on section enter

**Typography System:**
- H1: Montserrat 700, 52–68px, letter-spacing -0.02em, charcoal
- H2: Montserrat 600, 36–44px, charcoal
- H3: Montserrat 600, 22–26px, charcoal or purple
- Eyebrow: Montserrat 500, 11px, letter-spacing 0.18em, uppercase, gold (#D4AF37)
- Body: Open Sans 400, 16–18px, line-height 1.75, charcoal
- Support text: Open Sans 400, 14px, medium gray (#6B7280)
- CTA text: Montserrat 600, 15px, letter-spacing 0.05em

</text>
<probability>0.09</probability>
</response>

---

## Selected Design: "Crown Authority"

This approach best embodies the Kirauni brand — editorial, asymmetric, restrained, and culturally grounded. The crown geometry informs spatial decisions without becoming cliché. Purple leads, gold accents, white breathes.
