# DESIGN_RULES.md

> Mandatory UI rules for all generated interface work.

If UI output conflicts with this file, this file wins.

## 1. Core Rule

Do not generate generic, template-like, or obviously AI-generated UI.

Avoid:

- centered hero + subtitle + two buttons
- 3-column feature card grids
- repeated identical cards
- accent color everywhere
- decorative gradients
- shadows on everything
- symmetrical layouts by default
- generic stats rows
- FAQ accordion by default
- 3-tier pricing table by default

Use design decisions that feel intentional, restrained, and specific to the page’s purpose.

---

## 2. Required Design Process

Before building any screen, determine:

1. primary user goal
2. primary action
3. focal point
4. content density
5. layout pattern

Do not start by adding cards, badges, gradients, or multiple buttons.

Start with hierarchy.

---

## 3. Hard Constraints

### Typography

- Max 4 text sizes per page
- Max 2 font weights per page:
  - `font-normal`
  - `font-semibold`
- No `font-bold` or `font-light` unless explicitly required
- Large headings: `tracking-tight` + `leading-tight` or `leading-none`
- Body text: `text-base` + `leading-relaxed`
- Long text: `max-w-prose`
- Do not center paragraphs longer than 2 lines

### Spacing

- Use 4pt grid, prefer 8pt rhythm
- Prefer: `p-4`, `p-6`, `p-8`, `gap-4`, `gap-6`, `gap-8`, `py-12`, `py-16`
- Spacing between groups must be larger than spacing within groups
- Prefer stronger vertical rhythm than horizontal rhythm

### Color

- Semantic tokens only
- No hardcoded hex, rgb, hsl, or raw Tailwind palette classes in components
- No pure black or pure white for primary text/background
- Accent color must be rare and restrained
- One brand accent only unless explicitly instructed otherwise
- No gradient text on headings

### Layout

- Default to left-aligned layouts and text
- Avoid full-width body copy
- Prefer asymmetry when it improves hierarchy
- Use borders sparingly
- Use cards only when grouping is necessary
- Do not rely on repeated card grids as the default structure

### Interaction

Every interactive element must have:

- default
- hover
- focus-visible
- active
- disabled

### States

Every production screen must include:

- empty state
- loading state
- error state
- validation/success state where relevant

---

## 4. Hierarchy Rules

Every screen must have one clear focal point.

Use hierarchy through:

- size
- contrast
- spacing
- position
- weight

If two things compete equally, reduce one.

The screen must pass the squint test:

- primary element remains obvious
- secondary content recedes
- supporting UI does not compete with the main task

---

## 5. Layout Rules

Prefer:

- left-aligned content
- constrained widths
- strong vertical rhythm
- weighted splits like `grid-cols-[1fr_2fr]`
- composition over repetition

Avoid:

- center-everything layouts
- 50/50 splits without reason
- divider lines between every section
- identical cards repeated across the page
- uniform border radius on everything

---

## 6. Component Rules

Use reusable primitives consistently.

Minimum expected primitives:

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Dialog
- Popover
- Tooltip
- Tabs
- Table
- Badge
- Card / Panel
- Spinner
- Empty state
- Form field wrapper

Use one notification pattern consistently across the app.

---

## 7. Accessibility Rules

Required:

- normal text contrast >= 4.5:1
- large text contrast >= 3:1
- UI elements/icons >= 3:1 where required
- touch targets >= 44x44 on mobile
- semantic HTML
- `aria-label` on icon-only controls
- color cannot be the only indicator of state
- never remove focus indication without replacement

Use:

- `<button>` for actions
- `<a>` for navigation
- proper heading order
- proper landmarks (`nav`, `main`, `section`, etc.)

---

## 8. Tailwind Rules

- Use semantic tokens via CSS `@theme`
- Tokenize reusable visual values
- Prefer semantic utilities:
  - `bg-background`
  - `bg-surface`
  - `text-foreground`
  - `text-muted-foreground`
  - `bg-primary`
  - `border-border`
  - `text-destructive`

Do not use raw palette utilities in product UI unless explicitly allowed.

---

## 9. Final Quality Rule

Before finishing, ask:

1. Does this look templated?
2. Is there one obvious focal point?
3. Is the accent restrained?
4. Are related items grouped tightly?
5. Are there too many cards, borders, badges, or shadows?
6. Is the typography disciplined?
7. Does this feel chosen rather than defaulted?
8. Are all required states handled?
9. Is it accessible?
10. Would a strong human designer approve it?

If not, revise.
