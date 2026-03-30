# Design System Guide

> **Stack:** Tailwind CSS v4.2 · shadcn/ui v4 · Next.js 16 · March 2026

This document is the design authority for AI agents working on this codebase. Follow it strictly. Its purpose is to prevent generic, predictable, "AI-generated" looking UI and to produce world-class, intentional design.

---

## The Prime Directive: Don't Look Like AI Made It

Most AI-generated UI is immediately recognizable — it's safe, symmetric, and bland. Avoid:

- **Generic sans-serif headings at 3xl with font-bold.** That's the default. Use optical sizes, tracking, and weight contrast intentionally.
- **Card grids with equal padding and rounded-lg everywhere.** Sameness is boring.
- **Accent color on every interactive element.** Reserve it. Scarcity creates emphasis.
- **Symmetrical, centered layouts with equal whitespace on all sides.** Real design has tension and intentional asymmetry.
- **Stock gradients (from-blue-500 to-purple-600).** These are the cargo shorts of web design.
- **Shadows on everything.** Use shadow to elevate — one focal point per view, not every card.
- **Pure black (`#000000`) for text.** Never. It creates harsh, low-quality contrast. Use near-black (`oklch(0.13 0 0)`).

Design with _intent_. Every spacing, every font size choice, every color usage must have a reason.

### Layout Clichés — Never Default To These

These are AI's comfort zone. If you're about to use one of these, stop and reconsider:

| Cliché                                              | Why It Looks AI-Generated          | Better Alternative                                              |
| --------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| Centered hero with H1 + subtitle + two buttons      | Every SaaS landing page since 2018 | Left-aligned hero, single CTA, strong typographic contrast      |
| 3-column feature card grid with icon + title + body | Template section, zero personality | Numbered list, editorial layout, or alternating media+text rows |
| Full-width image with gradient overlay + text       | Stock photography desperation      | No image at all, strong typographic layout instead              |
| FAQ accordion at the bottom                         | Copy-paste from any docs site      | Integrated inline answers, linked context                       |
| Stats row (3-4 numbers with labels, centered)       | Feels like placeholder content     | Weave data into narrative prose, or use a single standout stat  |
| Pricing table: 3 columns, middle one "highlighted"  | Converts to generic immediately    | Compact single comparison, or progressive disclosure            |

---

## Psychology of Perception (Gestalt Laws)

These are not optional theory — they explain _why_ well-designed UI looks right. Violate them and the design will feel off without users knowing why.

### Law of Proximity

Elements close together are perceived as related. Elements far apart are perceived as unrelated.

- **Use:** Group a label and its input tightly (`gap-1`). Separate form sections with large gaps (`mt-8`).
- **Rule:** The spacing _between_ groups must be at least 2× the spacing _within_ a group.
- ❌ Don't spread related elements apart to "give them breathing room" — it breaks their relationship.

### Law of Similarity

Elements that look alike (same color, size, shape) are perceived as the same type of thing.

- **Use:** All secondary actions share the same muted style. All destructive actions share `text-destructive`. All disabled items share `opacity-50`.
- **Rule:** If two things serve different purposes, they must look visually different. If they serve the same purpose, they must look the same.
- ❌ Don't style a link and a button identically.

### Law of Prägnanz (Simplicity)

The brain defaults to perceiving the simplest possible interpretation of any visual.

- **Use:** Favor simple, clean shapes. An icon that works at 16px is better than one that requires 32px to be understood.
- **Rule:** If a layout looks complex, it IS complex. Simplify the layout, not just the content.
- ❌ Don't add decorative elements that require visual decoding effort.

### Law of Common Region

Elements inside a shared container (card, panel, border) are perceived as belonging together.

- **Use:** Cards are powerful grouping tools. A `bg-card border rounded-lg p-6` immediately says "these things are one unit."
- **Rule:** Avoid adding borders around things that _don't_ need to be grouped. It fragments the layout.
- ❌ Don't put a border on every section of a page.

### Hick's Law

The time it takes to make a decision increases with the number of options.

- **Rule:** Reduce choices at every decision point. A navigation with 7 items is harder to use than one with 4.
- ❌ Don't show all options at once. Use progressive disclosure — show the most important first, reveal the rest on demand.
- ❌ Don't offer three button variants in the same view. Pick one primary action.

### Fitts's Law

The time to click a target is a function of its size and distance. Bigger and closer = easier.

- **Rule:** Primary CTAs must be large enough to click comfortably. `h-10 px-6` minimum for primary buttons.
- **Rule:** Related actions should be physically close to their context (e.g., delete button next to the item, not at the bottom of the page).
- ❌ Don't make small touch targets for frequent actions on mobile.

---

## Typography

### The Type Scale — Use Mathematical Ratios

Don't choose sizes arbitrarily. Use a **modular scale (Perfect Fourth — 1.333 ratio)** as the base:

| Level           | Role                | Size     | Tailwind                 |
| --------------- | ------------------- | -------- | ------------------------ |
| Display         | Hero, marketing     | ~48–60px | `text-5xl` or `text-6xl` |
| Headline (H1)   | Page title          | ~36–40px | `text-4xl`               |
| Title (H2)      | Section heading     | ~24–28px | `text-2xl` or `text-3xl` |
| Body            | Default text        | 16px     | `text-base`              |
| Label / Caption | UI labels, metadata | 12–14px  | `text-sm` or `text-xs`   |

- **Always use `rem`**, never `px` for font sizes. `text-base` = `1rem` = respects user browser settings.
- **Minimum body text:** 16px (`text-base`). Never below 14px (`text-sm`) for readable content.
- **Mobile:** Body stays at 16px. Headlines reduce by one step (e.g., `text-4xl` → `text-3xl`).

### Rules (Non-Negotiable)

- **4 sizes max.** Pick 4 of the 5 scale levels above and stick to them. Don't add a 6th size.
- **2 weights only.** Semibold (`font-semibold`) for emphasis, Regular (`font-normal`) for body. Never Bold (`font-bold`) or Light (`font-light`) unless a design token requires it.
- **Tight tracking on large headings.** Use `tracking-tight` or `tracking-tighter` on `text-3xl` and above. Loose tracking at large sizes looks amateurish.
- **Line height is critical.** Headlines get `leading-none` or `leading-tight` (1.0–1.2). Body text gets `leading-relaxed` (1.6–1.75). Never default line-height on headlines.
- **Monospace for numbers.** Tabular numerals prevent layout jank in data UIs. Use `font-mono` or `font-features-*: "tnum"`.
- **Limit to 2 font families max.** One for display/headings, one for body. Weight variation within a family creates hierarchy — more fonts create chaos.

### What Good Looks Like

```html
<!-- Designed. Not generated. -->
<h1 class="text-4xl font-semibold tracking-tight leading-tight text-foreground">
  The thing you're building
</h1>
<p class="mt-3 text-base text-muted-foreground leading-relaxed max-w-prose">
  A supporting sentence that gives context without competing for attention.
</p>
```

### Anti-patterns

- ❌ `text-4xl font-bold` with no tracking — looks like a browser default
- ❌ Using 5+ different text sizes across a single page
- ❌ All-caps labels without `tracking-widest` (they'll look terrible)
- ❌ `font-medium` everywhere — it conveys nothing
- ❌ Long lines of text without `max-w-prose` — 65ch is the maximum readable width
- ❌ Centered paragraphs longer than 2 lines

---

## Spacing — 8pt Grid

All spacing must be divisible by **4** (loose) or **8** (preferred).

| Tailwind | px   | Use Case                                     |
| -------- | ---- | -------------------------------------------- |
| `p-1`    | 4px  | ❌ Only for tiny internal nudges             |
| `p-2`    | 8px  | Tight/compact elements (icon padding, badge) |
| `p-3`    | 12px | ✅ Acceptable                                |
| `p-4`    | 16px | Default component padding                    |
| `p-6`    | 24px | Card padding                                 |
| `p-8`    | 32px | Section padding                              |
| `p-12`   | 48px | Large section gaps                           |
| `p-16`   | 64px | Page-level vertical space                    |
| `gap-7`  | 28px | ❌ Avoid (not a clean value)                 |

### Spacing Principles

- **More space between groups, less between related items.** Proximity signals relationship.
- **Whitespace is not wasted space.** It is the contrast that makes content readable. Premium products have _more_ whitespace than you think is needed.
- **Vertical rhythm matters more than horizontal.** Users scroll down. Generous vertical spacing between sections creates the feeling of polish.
- **Avoid uniform padding.** A layout where every side has equal padding feels static. Vary it intentionally (e.g., more padding on the sides than top/bottom for cards).

---

## Color

### 60 / 30 / 10 Distribution

| Role               | %   | Token                                                |
| ------------------ | --- | ---------------------------------------------------- |
| Background/Surface | 60% | `bg-background`, `bg-card`                           |
| Text/Borders/Muted | 30% | `text-foreground`, `border`, `text-muted-foreground` |
| Accent/Brand       | 10% | `text-primary`, `bg-primary`                         |

The accent color must feel _earned_. If it appears everywhere, it disappears. Reserve it for the single most important action on a screen.

### Never Use Pure Black or Pure White

> "Black backgrounds are harsh. Pure white feels clinical. The sweet spots are near-black and off-white." — Refactoring UI

```css
/* ✅ Use these */
--foreground: oklch(0.13 0 0); /* Near-black text */
--background: oklch(0.985 0 0); /* Soft white surface */

/* ✅ Dark mode */
--background: oklch(0.14 0 0); /* Not pure black */
--foreground: oklch(0.97 0 0); /* Not pure white */
```

### Semantic Color Roles (All Required)

Every production UI needs these 8 slots. Missing any forces ad-hoc decisions that compound into inconsistency:

| Role              | Token                | Use                        |
| ----------------- | -------------------- | -------------------------- |
| Page background   | `--background`       | Root surface               |
| Card/Panel        | `--card`             | Elevated surface           |
| Primary text      | `--foreground`       | Main readable content      |
| Secondary text    | `--muted-foreground` | Supporting, metadata       |
| Brand/Interactive | `--primary`          | CTAs, key actions          |
| Danger/Error      | `--destructive`      | Errors, delete actions     |
| Border/Divider    | `--border`           | Separators, inputs         |
| Muted fill        | `--muted`            | Disabled, background chips |

### OKLCH Color System (v4.2)

Always use OKLCH variables. Never hardcode hex or HSL in components.

```css
:root {
  --background: oklch(0.985 0 0);
  --foreground: oklch(0.13 0 0);
  --card: oklch(1 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --border: oklch(0.922 0 0);
  --destructive: oklch(0.577 0.245 27.325);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.97 0 0);
  --card: oklch(0.185 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(0.269 0 0);
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-destructive: var(--destructive);
  --color-muted: var(--muted);
  --color-border: var(--border);
}
```

### Neutral Palette Options (v4.2)

Pick **one** and use it as your surface palette. Don't mix.

| Palette        | Feel                                 | Best For                      |
| -------------- | ------------------------------------ | ----------------------------- |
| `mauve-*`      | Violet-gray, creative, editorial     | Design tools, creative apps   |
| `olive-*`      | Yellow-green, earthy, organic        | Nature, sustainability, food  |
| `mist-*`       | Cool blue-gray, technical, calm      | Dev tools, analytics, B2B     |
| `taupe-*`      | Warm brownish-gray, premium, classic | Finance, luxury, professional |
| `zinc/neutral` | True neutral                         | When unsure — safe default    |

### Color Anti-patterns

- ❌ `bg-blue-500` hardcoded in any component
- ❌ `text-gray-500` — use `text-muted-foreground`
- ❌ Gradient text on headings (always looks AI-generated)
- ❌ Using more than one brand accent color
- ❌ Dark mode as just inverted colors — reduce saturation, adjust chroma

---

## Visual Hierarchy

Hierarchy is the most important design principle. Without it, a user doesn't know where to look.

> "If everything is bold, nothing is bold. If everything is big, nothing is big." — Visual hierarchy 101

### The 5 Tools of Visual Hierarchy

Use these **in combination**, never rely on just one:

| Tool               | How to use it                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Size**           | Biggest = most important. One dominant element per screen — make it at least 2× larger than the next level.                                        |
| **Weight**         | `font-semibold` draws the eye before `font-normal`. Use weight contrast, not size alone, for secondary emphasis.                                   |
| **Color contrast** | High contrast = foreground. Low contrast = recedes. `text-foreground` vs `text-muted-foreground` creates a two-tier hierarchy with no size change. |
| **Space**          | More space = more important. A heading with 32px above it feels more significant than one with 8px.                                                |
| **Position**       | Top-left gets attention first (F-pattern scan). Place the most critical element there, not centered.                                               |

### One Focal Point Per Screen

Every view must have **one** dominant element — the thing the user should look at first. Everything else should visually recede from it.

- **Test:** Squint at the screen. The first thing you can still make out should be the focal point.
- If two things compete equally, you have a hierarchy problem — reduce one.

### Reading Patterns

- **F-pattern:** Used for content-heavy pages. Users read the first line fully, then scan down the left edge. Left-align important content.
- **Z-pattern:** Used for simple landing pages. Eyes move across the top, diagonally to bottom-left, then across the bottom. Place CTA at end of the Z.
- **Visual weight:** Large, dark, high-contrast elements feel "heavier." Place heavy elements top-left and light elements bottom-right to feel natural.

---

## Elevation & Depth

Elevation signals clickability and layering. Three tools: **shadow**, **border**, **background fill**. Use them consistently.

| Layer              | Background      | Border   | Shadow                 | Use For                |
| ------------------ | --------------- | -------- | ---------------------- | ---------------------- |
| Page               | `bg-background` | none     | none                   | Root surface           |
| Card / Panel       | `bg-card`       | `border` | `shadow-xs` (optional) | Contained sections     |
| Popover / Dropdown | `bg-popover`    | `border` | `shadow-md`            | Floating above content |
| Modal / Dialog     | `bg-background` | none     | `shadow-xl`            | Blocking layer         |
| Tooltip            | inverted colors | none     | `shadow-sm`            | Ephemeral hint         |

**Rules:**

- Don't mix more than 2 elevation signals on one element (e.g., shadow + border is fine, not shadow + border + bright background).
- In dark mode, prefer `border` over `shadow` — shadows disappear on dark backgrounds.
- `shadow-lg` or larger on page-level cards makes them float unnaturally.

---

## Layout & Structure

### Do This

- **Intentional asymmetry.** A 30/70 split feels more designed than 50/50. Try `grid grid-cols-[1fr_2fr]`.
- **Left-align body content.** Centered text works only for ≤2 lines of hero copy.
- **`max-w-prose` on all body text.** 65ch is the ceiling for readability. Never full-width paragraphs.
- **Align to a strong vertical left edge.** Everything hanging off the same invisible line creates a sense of order.
- **More space than you think between sections.** The gap between `h2` sections should be `gap-16` or `py-16`, not `gap-8`.

### Container Queries Over Viewport Queries

```html
<div class="@container">
  <div class="@md:grid-cols-2 grid grid-cols-1 gap-6">...</div>
</div>
```

### Border / Divider Philosophy

Borders are a crutch. Most things don't need them.

- **Whitespace first.** A gap of 48px makes a border redundant.
- **Use a border** only when whitespace alone isn't enough (table rows, input fields, explicit card boundaries).
- **Never `border-t` between every section** — it signals the designer ran out of ideas.

### Do Not Do This

- ❌ Full-width sections with no max-width constraint
- ❌ Centering everything on the page
- ❌ Uniform `border-radius` — vary it: `rounded-sm` on inputs, `rounded-xl` on modals
- ❌ Drop shadows on everything
- ❌ A divider line between every section
- ❌ Equal spacing between completely unrelated items and tightly related items

---

## Animation & Interaction

Interaction should be snappy and purposeful. The goal is responsiveness, not spectacle.

### Timing Rules

| Interaction             | Duration  | Easing                                 |
| ----------------------- | --------- | -------------------------------------- |
| Hover state             | 100–150ms | `ease-out`                             |
| Button press / feedback | 100ms     | `ease-out`                             |
| Dropdown / Popover open | 150–200ms | `ease-out`                             |
| Modal enter             | 200–250ms | `ease-out`                             |
| Modal exit              | 150ms     | `ease-in` (faster exit feels snappier) |
| Page transitions        | 250–350ms | `ease-in-out`                          |

Never exceed 400ms for any micro-interaction.

### `@starting-style` for Enter Animations (No JS Needed)

```css
.panel {
  transition:
    opacity 200ms ease-out,
    transform 200ms ease-out;
}
@starting-style {
  .panel {
    opacity: 0;
    transform: translateY(8px);
  }
}
```

Or with Tailwind:

```html
<div class="starting:opacity-0 starting:translate-y-2 transition-all duration-200 ease-out">
  ...
</div>
```

### Interaction States (Required on Every Interactive Element)

| State    | Implementation                                                                 |
| -------- | ------------------------------------------------------------------------------ |
| Default  | Base styles                                                                    |
| Hover    | `hover:bg-accent` or `hover:text-foreground` — subtle                          |
| Focus    | `focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`   |
| Disabled | `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none` |
| Active   | `active:scale-[0.98]` — brief, tactile                                         |

**Focus rings are not optional.** Use `focus-visible:` so they only show for keyboard users.

### Anti-patterns

- ❌ `transition-all` on complex components (too broad, causes jank)
- ❌ Bounce or spring easing on UI elements (playful ≠ professional)
- ❌ Hover animations that shift layout (causes reflow)
- ❌ Fade-in on every element at page load
- ❌ `outline-none` without a `focus-visible:ring-*` replacement

---

## Component States (Always Design These)

AI skips these. Real products require them.

**Empty State** — Use the shadcn `Empty` component. Never leave a blank container.

```tsx
<Empty>
  <Empty.Icon>{/* Relevant icon */}</Empty.Icon>
  <Empty.Title>No items yet</Empty.Title>
  <Empty.Description>Add your first item to get started.</Empty.Description>
  <Button size="sm">Add item</Button>
</Empty>
```

**Loading State** — Use skeleton loaders that match the real content layout. Centered spinner only for button/form actions.

**Error State** — Always message + recovery action. Phrase from the user's POV: `"We couldn't load your data — try refreshing."` Not `"Error: 500"`.

**Validation / Form Feedback**

- Inline errors appear **below** the field, in `text-destructive text-sm`.
- Success: inline checkmark in the field, not a toast.
- ❌ Never use `text-red-500` directly — use `text-destructive`.

---

## shadcn/ui Component Rules

### Architecture

- **Style:** `new-york` only. The `default` style is deprecated.
- **Primitives:** Base UI by default (smaller bundle). Radix UI for proven stability when needed.
- **No `forwardRef`:** Components use direct refs. Don't add it back.
- **`data-slot` attribute:** Target component internals from the parent with this, not custom class overrides.
- **CVA for variants:** Use `class-variance-authority` for any component with multiple states/sizes.

### Available Components

`Button` · `Input` · `Select` · `Dialog` · `Popover` · `Tooltip` · `Card` · `Badge` · `Accordion` · `Tabs` · `Table` · `Form` · `Checkbox` · `Radio` · `Slider` · `Switch` · `Avatar` · `Spinner` · `Kbd` · `Empty` · `Item` · `Field` · `Input Group` · `Button Group`

**Toasts:** Use **Sonner**. The shadcn `Toast` component is deprecated.

```bash
pnpm dlx shadcn@latest add <component-name>
```

---

## Accessibility Minimums

Not optional. These are what separate amateur from professional.

- **Contrast ratio:** Normal text (< 18px) ≥ **4.5:1** (WCAG AA). Large text ≥ 3:1. UI components (borders, icons) ≥ 3:1.
- **`text-muted-foreground` on white:** Verify it passes — it often fails at low luminance. Check with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- **Touch targets:** Minimum **44×44px** on mobile. Small icon buttons must have invisible padding.
- **Semantic HTML:** `<button>` not `<div onClick>`, `<nav>`, `<main>`, `<h1>` → `<h2>` in order.
- **`aria-label`:** Required on icon-only buttons and inputs without visible labels.
- **Color is not the only indicator:** Every state (error, success, disabled) must have a non-color signal (icon, text, pattern).
- **Never `outline-none`** without a `focus-visible:ring` fallback.

---

## CSS Structure (Tailwind v4)

```css
/* globals.css */
@import 'tailwindcss';

@source not "../../../node_modules";

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-destructive: var(--destructive);
  --color-muted: var(--muted);
  --color-border: var(--border);
}
```

- **No `tailwind.config.js`** — configure everything in CSS via `@theme`.
- **No `@tailwind base/components/utilities`** — use `@import "tailwindcss"`.
- All custom tokens must be in `@theme` to generate utility classes.

---

## Code Review Checklist

Before shipping any UI:

**Typography**

- [ ] Max 4 font sizes used (following the modular scale)
- [ ] Max 2 font weights (semibold, regular)
- [ ] Large headings use `tracking-tight` or tighter + `leading-tight`
- [ ] Body text uses `leading-relaxed` and `max-w-prose`
- [ ] Font sizes in `rem`, not `px`
- [ ] Minimum body text is `text-base` (16px)

**Spacing**

- [ ] All spacing values divisible by 4 (preferably 8)
- [ ] More space between sections than within sections (proximity law)
- [ ] No magic-number spacing values

**Color & Contrast**

- [ ] Accent at ≤10% surface area
- [ ] No hardcoded hex/HSL — all via CSS tokens
- [ ] No pure black (`#000`) or pure white (`#fff`) as text/background
- [ ] Body text contrast ≥ 4.5:1 on its background
- [ ] All 8 semantic color roles defined
- [ ] Dark mode verified (not just inverted)

**Hierarchy & Layout**

- [ ] One dominant focal point per screen (passes squint test)
- [ ] No cliché layout patterns without deliberate reason
- [ ] Content left-aligned (not centered) beyond 2 lines
- [ ] Borders used sparingly — whitespace preferred for separation
- [ ] Spacing within groups < spacing between groups (Gestalt proximity)
- [ ] Similar elements styled identically (Gestalt similarity)

**Interaction & States**

- [ ] All interactive elements: hover, focus-visible, disabled, active
- [ ] Focus rings present — never removed
- [ ] Empty, loading, and error states designed
- [ ] Form errors below field in `text-destructive`
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Animation durations ≤ 400ms, ease-out for entering elements

**Accessibility**

- [ ] Semantic HTML (`button`, `nav`, `h1-h6` in order)
- [ ] Icon-only buttons have `aria-label`
- [ ] Color is not the sole indicator of any state
- [ ] No `outline-none` without `focus-visible:ring-*`

**Components & Code**

- [ ] Uses `new-york` shadcn style
- [ ] Uses Sonner for toasts
- [ ] Transitions scoped to state changes only
- [ ] No inline `style={{}}` when a Tailwind utility exists
