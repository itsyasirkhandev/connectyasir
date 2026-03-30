

# Detailed Structural Sitemap — Every Page, Every Section

---

## Global Elements (Present on All Pages)

```
NAVBAR
├── Logo (links to /)
├── Nav Links
│   ├── Home
│   ├── Projects
│   ├── Services & Pricing
│   └── About
├── Primary CTA Button → /contact
└── Mobile Hamburger Menu
    ├── Same nav links
    ├── CTA Button
    ├── WhatsApp Link
    └── LinkedIn Link

FLOATING WHATSAPP BUTTON
├── WhatsApp Icon
├── Tooltip on hover
└── Opens WhatsApp in new tab

FOOTER
├── Left Column
│   ├── Logo
│   ├── One-line description
│   └── Availability Status Indicator (green dot + text)
├── Middle Column
│   ├── Page Links
│   │   ├── Home
│   │   ├── Projects
│   │   ├── Services & Pricing
│   │   ├── About
│   │   └── Contact
│   └── Label above links
├── Right Column
│   ├── Social Links
│   │   ├── WhatsApp (icon + label)
│   │   ├── LinkedIn (icon + label)
│   │   └── Email (icon + label)
│   └── CTA Button → /contact
└── Bottom Bar
    ├── Copyright text
    └── "Made with [tech]" (optional subtle flex)
```

---

## Page 1: `/` — HOME

```
SECTION 1: HERO
├── Left Content
│   ├── Availability Badge (green dot + status text)
│   ├── Headline (H1)
│   ├── Subheadline (paragraph)
│   ├── CTA Group
│   │   ├── Primary Button → /contact (Book a Call)
│   │   └── Secondary Button → WhatsApp link
│   └── Trust Indicators Row
│       ├── Number of projects completed
│       ├── LinkedIn icon link
│       └── Quick social proof text
└── Right Content
    └── Professional Photo / Illustration / Abstract Visual

─────────────────────────────────────────────────────

SECTION 2: WHAT YOU GET (Services Overview)
├── Section Label (small tag/eyebrow text)
├── Section Heading (H2)
├── Section Subtext (paragraph)
└── Card Grid (2x2 or 4 columns)
    ├── Card 1: Branding & Logo
    │   ├── Icon
    │   ├── Card Title
    │   └── Card Description (1-2 lines)
    ├── Card 2: Design & Development
    │   ├── Icon
    │   ├── Card Title
    │   └── Card Description
    ├── Card 3: Domain, Hosting & Launch
    │   ├── Icon
    │   ├── Card Title
    │   └── Card Description
    └── Card 4: Maintenance & SEO
        ├── Icon
        ├── Card Title
        └── Card Description

─────────────────────────────────────────────────────

SECTION 3: FEATURED PROJECTS
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
├── Project Cards (2-3 cards)
│   └── Each Card
│       ├── Project Screenshot/Thumbnail (image)
│       ├── Project Type Tag (e.g. "Done-for-you")
│       ├── Project Title
│       ├── One-line Result/Description
│       └── Link → /projects/[slug]
└── View All Projects Link → /projects

─────────────────────────────────────────────────────

SECTION 4: HOW IT WORKS (Process)
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
└── Steps (4 steps — vertical or horizontal timeline)
    ├── Step 1
    │   ├── Step Number / Icon
    │   ├── Step Title
    │   └── Step Description (2-3 lines)
    ├── Step 2
    │   ├── Step Number / Icon
    │   ├── Step Title
    │   └── Step Description
    ├── Step 3
    │   ├── Step Number / Icon
    │   ├── Step Title
    │   └── Step Description
    └── Step 4
        ├── Step Number / Icon
        ├── Step Title
        └── Step Description

─────────────────────────────────────────────────────

SECTION 5: TESTIMONIALS
├── Section Label (eyebrow)
├── Section Heading (H2)
└── Testimonial Cards (3 cards — carousel or grid)
    └── Each Card
        ├── Quote Text
        ├── Client Name
        ├── Client Role / Business Name
        ├── Project Type Tag
        └── Source Icon (LinkedIn icon if from LI)

─────────────────────────────────────────────────────

SECTION 6: TECH STACK
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
└── Tech Icons Grid
    └── Each Item
        ├── Tech Logo/Icon
        └── Tech Name

─────────────────────────────────────────────────────

SECTION 7: FINAL CTA BLOCK
├── Heading (H2)
├── Supporting Text (paragraph)
├── CTA Group
│   ├── Primary Button → /contact
│   └── Secondary Button → WhatsApp
└── Availability Status (reinforcement)
```

---

## Page 2: `/projects` — PROJECTS LISTING

```
SECTION 1: PAGE HEADER
├── Section Label (eyebrow)
├── Page Heading (H1)
└── Page Subtext (paragraph)

─────────────────────────────────────────────────────

SECTION 2: PROJECT GRID
├── Filter Tags (optional — "All" / "Marketing Site" / "Full-Stack" / "Done-for-you")
└── Project Cards (3 cards)
    └── Each Card
        ├── Project Screenshot (large image)
        ├── Project Type Tag
        ├── Project Title
        ├── Short Description (1-2 lines)
        ├── Tech Tags (small pills: Next.js, Convex, etc.)
        └── CTA Link → /projects/[slug]

─────────────────────────────────────────────────────

SECTION 3: CTA BLOCK
├── Heading (H2)
├── Supporting Text
└── CTA Button → /contact
```

---

## Page 2a: `/projects/[slug]` — INDIVIDUAL CASE STUDY

```
SECTION 1: PROJECT HERO
├── Back Link → /projects
├── Project Title (H1)
├── Project Type Tag
├── Client Industry / Business Type
└── Hero Screenshot (full-width image)

─────────────────────────────────────────────────────

SECTION 2: PROJECT OVERVIEW
├── Overview Grid (2-3 columns of metadata)
│   ├── Client
│   │   └── Value
│   ├── Timeline
│   │   └── Value
│   ├── Services Provided
│   │   └── List of services (tags)
│   └── Live URL (if applicable)
│       └── External link

─────────────────────────────────────────────────────

SECTION 3: THE CHALLENGE
├── Section Heading (H2)
└── Description (1-2 paragraphs)

─────────────────────────────────────────────────────

SECTION 4: WHAT I DELIVERED (Scope)
├── Section Heading (H2)
├── Description (paragraph)
└── Deliverables List
    ├── Deliverable 1 (icon + text)
    ├── Deliverable 2
    ├── Deliverable 3
    └── ...

─────────────────────────────────────────────────────

SECTION 5: SOLUTION & APPROACH
├── Section Heading (H2)
└── Description (2-3 paragraphs or bullet points)

─────────────────────────────────────────────────────

SECTION 6: TECH STACK USED
├── Section Heading (H2)
└── Tech Icons Row
    └── Each Item
        ├── Icon
        └── Name

─────────────────────────────────────────────────────

SECTION 7: SCREENSHOTS / VISUALS
├── Section Heading (H2)
└── Image Gallery
    ├── Desktop Screenshots
    ├── Mobile Screenshots
    └── Detail Shots (logo, specific features)

─────────────────────────────────────────────────────

SECTION 8: RESULTS
├── Section Heading (H2)
├── Metrics Grid (if available)
│   └── Each Metric
│       ├── Number / Stat
│       └── Label
└── Results Description (paragraph)

─────────────────────────────────────────────────────

SECTION 9: CLIENT TESTIMONIAL
├── Large Quote Text
├── Client Name
├── Client Role / Business
└── Source indicator (LinkedIn icon if applicable)

─────────────────────────────────────────────────────

SECTION 10: CTA BLOCK
├── Heading (H2)
├── Supporting Text
├── CTA Group
│   ├── Primary Button → /contact
│   └── Secondary Button → WhatsApp
└── Other Project Links (prev/next navigation)
    ├── ← Previous Project
    └── Next Project →
```

---

## Page 3: `/services` — SERVICES & PRICING

```
SECTION 1: PAGE HEADER
├── Section Label (eyebrow)
├── Page Heading (H1)
└── Page Subtext (paragraph)

─────────────────────────────────────────────────────

SECTION 2: SERVICES BREAKDOWN
├── Section Label (eyebrow)
├── Section Heading (H2)
└── Services List (vertical — alternating layout or card grid)
    └── Each Service Block
        ├── Service Icon
        ├── Service Title
        ├── Service Description (2-3 lines)
        └── What's Included (bullet list)
    
    ├── Service 1: Branding & Logo Design
    ├── Service 2: UI/UX Design
    ├── Service 3: Full-Stack Development
    ├── Service 4: Domain + Hosting Setup
    ├── Service 5: Basic SEO
    └── Service 6: Ongoing Maintenance & Support

─────────────────────────────────────────────────────

SECTION 3: PRICING PACKAGES
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
└── Pricing Cards (3 cards side by side)

    ├── Card 1: STARTER
    │   ├── Package Name
    │   ├── Package Tagline (who it's for)
    │   ├── Price
    │   ├── Price Qualifier (e.g. "starting at" / "one-time")
    │   ├── Included Features List
    │   │   ├── ✓ Feature
    │   │   ├── ✓ Feature
    │   │   ├── ✓ Feature
    │   │   ├── ✗ Not included
    │   │   └── ✗ Not included
    │   └── CTA Button → /contact
    │
    ├── Card 2: COMPLETE (highlighted/recommended)
    │   ├── Recommended Badge
    │   ├── Package Name
    │   ├── Package Tagline
    │   ├── Price
    │   ├── Price Qualifier
    │   ├── Included Features List
    │   │   ├── ✓ Feature
    │   │   ├── ✓ Feature
    │   │   ├── ✓ Feature
    │   │   ├── ✓ Feature
    │   │   └── ✓ Feature
    │   └── CTA Button → /contact
    │
    └── Card 3: PREMIUM
        ├── Package Name
        ├── Package Tagline
        ├── Price (or "Custom")
        ├── Price Qualifier
        ├── Included Features List
        │   ├── ✓ Everything in Complete
        │   ├── ✓ Feature
        │   ├── ✓ Feature
        │   └── ✓ Feature
        └── CTA Button → /contact

─────────────────────────────────────────────────────

SECTION 4: WHAT EVERY PACKAGE INCLUDES
├── Section Heading (H2)
└── Feature Grid (icon + text pairs)
    ├── Item 1 (icon + title + description)
    ├── Item 2
    ├── Item 3
    ├── Item 4
    ├── Item 5
    └── Item 6

─────────────────────────────────────────────────────

SECTION 5: MY PROCESS
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
└── Process Steps (4-5 steps — timeline or numbered)
    ├── Step 1
    │   ├── Step Number
    │   ├── Step Title
    │   └── Step Description
    ├── Step 2
    │   ├── Step Number
    │   ├── Step Title
    │   └── Step Description
    ├── Step 3
    │   ├── Step Number
    │   ├── Step Title
    │   └── Step Description
    └── Step 4
        ├── Step Number
        ├── Step Title
        └── Step Description

─────────────────────────────────────────────────────

SECTION 6: FAQ
├── Section Label (eyebrow)
├── Section Heading (H2)
└── Accordion Items
    ├── Q1
    │   ├── Question (clickable)
    │   └── Answer (collapsible)
    ├── Q2
    │   ├── Question
    │   └── Answer
    ├── Q3
    │   ├── Question
    │   └── Answer
    ├── Q4
    │   ├── Question
    │   └── Answer
    ├── Q5
    │   ├── Question
    │   └── Answer
    └── Q6
        ├── Question
        └── Answer

─────────────────────────────────────────────────────

SECTION 7: CTA BLOCK
├── Heading (H2)
├── Supporting Text
└── CTA Group
    ├── Primary Button → /contact
    └── Secondary Button → WhatsApp
```

---

## Page 4: `/about` — ABOUT

```
SECTION 1: ABOUT HERO
├── Left Column
│   ├── Section Label (eyebrow)
│   ├── Heading (H1)
│   ├── Bio Paragraphs (2-3 paragraphs)
│   └── Social Links Row
│       ├── LinkedIn (icon + label)
│       └── WhatsApp (icon + label)
└── Right Column
    └── Professional Photo

─────────────────────────────────────────────────────

SECTION 2: MY VALUES / HOW I WORK
├── Section Label (eyebrow)
├── Section Heading (H2)
└── Values Grid (2x2 or 3 columns)
    └── Each Value Card
        ├── Icon
        ├── Value Title
        └── Value Description (2-3 lines)
    
    ├── Value 1 (e.g. Communication)
    ├── Value 2 (e.g. Transparency)
    ├── Value 3 (e.g. Quality)
    └── Value 4 (e.g. Ownership)

─────────────────────────────────────────────────────

SECTION 3: MY JOURNEY / EXPERIENCE TIMELINE
├── Section Label (eyebrow)
├── Section Heading (H2)
└── Timeline Items (vertical timeline)
    └── Each Item
        ├── Year / Period
        ├── Title (role or milestone)
        └── Description (1-2 lines)

─────────────────────────────────────────────────────

SECTION 4: TECH STACK
├── Section Label (eyebrow)
├── Section Heading (H2)
├── Section Subtext
└── Tech Categories
    ├── Frontend
    │   └── Tech Icons (React, Next.js, Tailwind)
    ├── Backend
    │   └── Tech Icons (Convex, Node.js, etc.)
    └── Tools
        └── Tech Icons (Git, Figma, VS Code, etc.)

─────────────────────────────────────────────────────

SECTION 5: TESTIMONIALS (reinforcement)
├── Section Heading (H2)
└── Testimonial Cards (same 3 from home — reused component)

─────────────────────────────────────────────────────

SECTION 6: CTA BLOCK
├── Heading (H2)
├── Supporting Text
└── CTA Group
    ├── Primary Button → /contact
    └── Secondary Button → WhatsApp
```

---

## Page 5: `/contact` — BOOK A CALL

```
SECTION 1: PAGE HEADER
├── Section Label (eyebrow)
├── Page Heading (H1)
├── Page Subtext (paragraph)
└── Availability Status (green dot + text)

─────────────────────────────────────────────────────

SECTION 2: CONTACT OPTIONS (Two Column Layout)
├── Left Column: BOOK A CALL
│   ├── Column Heading
│   ├── Column Subtext
│   └── Cal.com / Calendly Embed
│       └── Inline scheduling widget
│
└── Right Column: OTHER WAYS TO REACH ME
    ├── Column Heading
    ├── Contact Option 1: WhatsApp
    │   ├── Icon
    │   ├── Label
    │   ├── Description (e.g. "quick questions")
    │   └── Button/Link → WhatsApp
    ├── Contact Option 2: Email
    │   ├── Icon
    │   ├── Label
    │   ├── Email address (clickable)
    │   └── Description
    ├── Contact Option 3: LinkedIn
    │   ├── Icon
    │   ├── Label
    │   └── Button/Link → LinkedIn profile
    └── Response Time Indicator
        ├── Clock Icon
        └── Expected response time text

─────────────────────────────────────────────────────

SECTION 3: MINI FAQ
├── Section Heading (H2)
└── Accordion Items (3-4 items)
    ├── Q1
    │   ├── Question
    │   └── Answer
    ├── Q2
    │   ├── Question
    │   └── Answer
    ├── Q3
    │   ├── Question
    │   └── Answer
    └── Q4
        ├── Question
        └── Answer

─────────────────────────────────────────────────────

SECTION 4: MAP / LOCATION (optional)
├── Working Hours
├── Timezone
└── Location (city/country — no full address needed)
```

---

## 📐 Complete Structure Count

```
PAGE                    SECTIONS    
─────────────────────────────────
/  (Home)               7 sections  
/projects               3 sections  
/projects/[slug]        10 sections 
/services               7 sections  
/about                  6 sections  
/contact                4 sections  
─────────────────────────────────
TOTAL                   37 sections 
+ Navbar                           
+ Footer                           
+ Floating WhatsApp                
─────────────────────────────────
TOTAL PAGES             8 (5 + 3 case studies)
```

