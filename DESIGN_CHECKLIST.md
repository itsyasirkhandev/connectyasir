# DESIGN_CHECKLIST.md

Use this checklist before shipping any UI.

## Purpose

- [ ] The page has a clear user goal
- [ ] The page has one primary action
- [ ] The screen has one obvious focal point
- [ ] The design does not feel generic or AI-generated

## Typography

- [ ] No more than 4 text sizes
- [ ] No more than 2 font weights
- [ ] Large headings use tight tracking and tight leading
- [ ] Body text uses `text-base`
- [ ] Body text uses `leading-relaxed`
- [ ] Long text uses `max-w-prose`
- [ ] Paragraphs longer than 2 lines are not centered

## Spacing

- [ ] Spacing follows a 4pt / 8pt rhythm
- [ ] Spacing within groups is smaller than spacing between groups
- [ ] Vertical rhythm is strong
- [ ] There are no arbitrary spacing values

## Color

- [ ] Semantic tokens are used
- [ ] No hardcoded hex/rgb/hsl values in components
- [ ] No raw Tailwind palette classes in product UI
- [ ] No pure black or pure white as main text/background
- [ ] Accent color usage is restrained
- [ ] Color is not the only indicator of state

## Layout

- [ ] Layout is primarily left-aligned
- [ ] Body copy width is constrained
- [ ] Composition feels intentional, not symmetrical by default
- [ ] Borders are sparse
- [ ] Shadows are sparse
- [ ] Repeated identical cards are not overused
- [ ] Dividers are not used as a substitute for spacing

## Hierarchy

- [ ] One element clearly stands out first
- [ ] Secondary information recedes
- [ ] The screen passes the squint test
- [ ] Not everything is emphasized equally

## Interaction

- [ ] Interactive elements have hover state
- [ ] Interactive elements have focus-visible state
- [ ] Interactive elements have active state
- [ ] Interactive elements have disabled state where relevant
- [ ] Focus styling is visible and accessible
- [ ] Motion is subtle and fast
- [ ] No gimmicky animation
- [ ] No broad `transition-all` on complex components

## States

- [ ] Empty state exists
- [ ] Loading state exists
- [ ] Error state exists
- [ ] Validation/success state exists where relevant
- [ ] Error states explain the issue clearly
- [ ] Error states offer recovery
- [ ] Loading states resemble final layout where possible

## Components

- [ ] Reusable primitives are used consistently
- [ ] Controls are visually consistent across the app
- [ ] Variants and sizes are consistent
- [ ] One notification pattern is used consistently
- [ ] No one-off style hacks

## Accessibility

- [ ] Contrast meets minimums
- [ ] Touch targets are >= 44x44 on mobile
- [ ] Semantic HTML is used
- [ ] Icon-only buttons have `aria-label`
- [ ] State is not conveyed by color alone
- [ ] Focus indication is preserved
- [ ] Heading order is logical

## Tailwind

- [ ] Tokens are defined via `@theme`
- [ ] Semantic utilities are used
- [ ] Reusable values are tokenized
- [ ] Inline styles are avoided when utilities/tokens should exist

## Final Gate

- [ ] This does not look like a generic SaaS template
- [ ] This does not look AI-generated
- [ ] This feels intentional
- [ ] This is ready for human design review
