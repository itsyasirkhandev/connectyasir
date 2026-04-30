# Design Plan: Client Review Flow

Technical specification for implementing a smart star-rating review flow with conditional
routing using Next.js 16, React 19, and Tailwind CSS v4.

---

## Versions & Sources

| Technology      | Version | Source                                         |
| --------------- | ------- | ---------------------------------------------- |
| Next.js         | 16.2.1  | `package.json`, `node_modules/next/dist/docs/` |
| React           | 19.2.4  | `package.json`                                 |
| Tailwind CSS    | v4      | `package.json`, `globals.css` (`@theme`)       |
| shadcn/ui       | 4.1.1   | `package.json`, `components/ui/`               |
| React Hook Form | 7.72.1  | `package.json`                                 |
| Zod             | 4.3.6   | `package.json`                                 |
| Lucide React    | 1.7.0   | `package.json`                                 |
| GSAP            | 3.14.2  | `package.json`                                 |

Design rules enforced by: `DESIGN_RULES.md`, verified via `DESIGN_CHECKLIST.md`

---

## 1. Objective

Implement a two-page client review flow that:

- Presents a star-rating interface on `/review`
- Routes satisfied clients (4–5 stars) → Google Business review page
- Routes unsatisfied clients (1–3 stars) → `/review/improve` for private feedback
- Collects structured improvement feedback via a form (UI only, no backend)
- Matches the existing portfolio design system (Outfit + Lora fonts, oklch tokens, shadcn primitives)

---

## 2. Tech Stack

| Layer      | Technology                                 |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router)                    |
| UI         | React 19 + Tailwind CSS v4                 |
| Components | shadcn/ui primitives (Button, Input, Card) |
| Icons      | Lucide React (`Star` icon)                 |
| Animation  | GSAP (star entrance) + CSS transitions     |
| Forms      | React Hook Form + Zod (for `/improve`)     |
| Routing    | Next.js `useRouter` (client-side redirect) |

**Why this stack?**

- Next.js App Router provides clean file-based routing for `/review` and `/review/improve`
- The star rating requires client-side interactivity (`'use client'`) — React 19 handles this cleanly
- shadcn/ui provides existing Input/Button primitives that match the design system
- Lucide React already has a `Star` icon used for filled/outlined states
- React Hook Form + Zod provides type-safe form validation for the feedback form (ready for future backend integration)
- GSAP is already in the project — used for subtle star entrance animation

---

## 3. High-Level Architecture

The feature is entirely frontend. No backend or database needed at this stage.

```
┌─────────────────────────────────────────────────────┐
│                    /review                           │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │           StarRating Component               │   │
│  │  ☆  ☆  ☆  ☆  ☆  (interactive 1–5)          │   │
│  └──────────────────────────────────────────────┘   │
│                      │                               │
│           ┌──────────┴──────────┐                    │
│           │                     │                    │
│     Rating 1–3            Rating 4–5                │
│           │                     │                    │
│           ▼                     ▼                    │
│   /review/improve     Google Business Review        │
│   (internal page)     (external redirect)           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│               /review/improve                        │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │          FeedbackForm Component              │   │
│  │                                               │   │
│  │  Name:          [________________]            │   │
│  │  Business Name: [________________]            │   │
│  │  How to improve: ┌──────────────┐            │   │
│  │                   │              │            │   │
│  │                   └──────────────┘            │   │
│  │                  [ Submit Feedback ]           │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## 4. File Structure

```
app/
├── review/
│   ├── page.tsx                  # Star rating page (Server Component wrapper)
│   └── improve/
│       └── page.tsx              # Feedback form page (Server Component wrapper)
components/
├── sections/
│   └── review/
│       ├── StarRating.tsx        # Interactive star rating ('use client')
│       └── FeedbackForm.tsx      # Improvement form ('use client')
```

**Why this structure?**

- Follows existing project conventions (sections are under `components/sections/<feature>/`)
- `page.tsx` files stay as Server Components for metadata export — client interactivity is in child components
- Clean separation: routing in `app/`, UI in `components/`

---

## 5. Core Design Decisions

### Decision 1: Client Components only where needed

**Why:** The `page.tsx` files export metadata (SEO). Only the interactive `StarRating` and
`FeedbackForm` components need `'use client'`. This follows Next.js 16 App Router conventions —
push client boundaries down as far as possible.

### Decision 2: No submit button on `/review` — rating triggers redirect

**Why:** The spec requires that clicking a star immediately triggers the routing logic. A submit
button adds unnecessary friction. The star click is the primary action, and the interaction
should feel instant and decisive.

### Decision 3: Use a lock ref to prevent double-processing

**Why:** Users may click multiple stars rapidly. A `useRef` boolean lock prevents re-triggering
the redirect while one is already in progress. This is simpler and more reliable than disabling
the component via state (which causes a re-render and visual flash).

### Decision 4: Use `window.location.href` for external redirect, `router.push` for internal

**Why:** Next.js `router.push` is for internal App Router navigation.
The Google Business review URL is an external page — `window.location.href` is the correct
approach for external redirects in client components.

### Decision 5: Use Lucide `Star` icon with fill control

**Why:** Lucide React is already in the project. The `Star` icon supports both outlined and
filled states via the `fill` prop, avoiding the need for custom SVGs or a separate icon library.

### Decision 6: Minimal, centered layout — intentional exception to left-align rule

**Why:** `DESIGN_RULES.md` defaults to left-aligned layouts. However, the review page has a
single focal point (the star rating) and a single user goal ("rate your experience"). A
vertically and horizontally centered layout is intentional here — it focuses attention and feels
like a deliberate interaction moment, not a content page. This is consistent with how review
prompts appear in real-world products (Google, Apple, etc.).

---

## 6. Core Functional Flows

### A. Star Rating — `/review/page.tsx`

The page is a Server Component that exports metadata and renders the client `StarRating` component.

```tsx
// app/review/page.tsx
import type { Metadata } from 'next'
import { StarRating } from '@/components/sections/review/StarRating'

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Rate your experience working with Yasir Khan.',
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4">
      <StarRating />
    </main>
  )
}
```

**Key detail:** `robots: { index: false }` — this page is for clients via direct link, not for
search engines. No Navbar/Footer needed — clean, focused interaction.

### B. StarRating Component

```tsx
// components/sections/review/StarRating.tsx
'use client'

import { useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

const GOOGLE_REVIEW_URL = 'https://g.page/r/Cep7VDhRyzbBEAE/review'
const STAR_COUNT = 5
const REDIRECT_DELAY = 500

export function StarRating() {
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(0)
  const isProcessing = useRef(false)
  const router = useRouter()

  const handleStarClick = (rating: number) => {
    if (isProcessing.current) return
    isProcessing.current = true
    setSelectedStar(rating)

    setTimeout(() => {
      if (rating >= 4) {
        window.location.href = GOOGLE_REVIEW_URL
      } else {
        router.push('/review/improve')
      }
    }, REDIRECT_DELAY)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        How was your experience?
      </h1>
      <p className="text-muted-foreground">
        Tap a star to rate your experience
      </p>

      <div className="flex gap-2" role="radiogroup" aria-label="Star rating">
        {Array.from({ length: STAR_COUNT }, (_, i) => {
          const value = i + 1
          const isFilled = value <= (hoveredStar || selectedStar)

          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={value === selectedStar}
              aria-label={`${value} star${value > 1 ? 's' : ''}`}
              disabled={isProcessing.current && selectedStar > 0}
              className="group cursor-pointer rounded-sm p-1 transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95 disabled:pointer-events-none disabled:opacity-60"
              onMouseEnter={() => setHoveredStar(value)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => handleStarClick(value)}
            >
              <Star
                size={40}
                className={cn(
                  'transition-colors duration-150',
                  isFilled
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-transparent text-muted-foreground'
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
```

**State management:**

| State          | Type           | Purpose                                       |
| -------------- | -------------- | --------------------------------------------- |
| `hoveredStar`  | `number`       | Tracks which star is hovered (0 = none)       |
| `selectedStar` | `number`       | Tracks the clicked rating (0 = none)          |
| `isProcessing` | `Ref<boolean>` | Lock to prevent double-clicks during redirect |

**Accessibility:**

- `role="radiogroup"` on the container, `role="radio"` on each star
- `aria-checked` and `aria-label` for screen readers
- `focus-visible` outline for keyboard navigation
- `disabled` state during redirect processing
- Touch targets: 40px icon + 4px padding = 48px (exceeds 44px minimum)

### C. Feedback Form — `/review/improve/page.tsx`

```tsx
// app/review/improve/page.tsx
import type { Metadata } from 'next'
import { FeedbackForm } from '@/components/sections/review/FeedbackForm'

export const metadata: Metadata = {
  title: 'Help Me Improve',
  description: 'Share your feedback so I can serve you better.',
  robots: { index: false, follow: false },
}

export default function ReviewImprovePage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4">
      <FeedbackForm />
    </main>
  )
}
```

### D. FeedbackForm Component

```tsx
// components/sections/review/FeedbackForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  feedback: z.string().min(1, 'Please share your feedback'),
})

type FeedbackValues = z.infer<typeof feedbackSchema>

export function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema),
  })

  const onSubmit = (_data: FeedbackValues) => {
    // No-op for now — future: send to API
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Help me improve
        </h1>
        <p className="leading-relaxed text-muted-foreground">
          Thank you for your honesty. Your feedback helps me deliver better
          results for every client.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className="(uses semantic tokens: bg-background, border-input, etc.) ..."
            {...register('name')}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Business Name field */}
        <div className="space-y-2">
          <label htmlFor="businessName" className="text-sm font-semibold">
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            placeholder="Acme Corp"
            className="..."
            {...register('businessName')}
          />
          {errors.businessName && (
            <p className="text-sm text-destructive">
              {errors.businessName.message}
            </p>
          )}
        </div>

        {/* Feedback textarea */}
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-sm font-semibold">
            How can I improve?
          </label>
          <textarea
            id="feedback"
            rows={5}
            placeholder="Share what could have been better..."
            className="..."
            {...register('feedback')}
          />
          {errors.feedback && (
            <p className="text-sm text-destructive">
              {errors.feedback.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:bg-primary/80"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}
```

**Form validation is wired but submission is a no-op.** This means:

- Schema is ready for future API integration (just replace `onSubmit`)
- Client-side validation gives immediate feedback (UX polish)
- No network requests are made

---

## 7. Design System Compliance

These decisions ensure both pages pass the `DESIGN_CHECKLIST.md`:

| Rule                     | Implementation                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Focal point**          | `/review`: star cluster. `/improve`: form heading                                                                                        |
| **Max 4 text sizes**     | `text-3xl` (h1), `text-base` (body), `text-sm` (labels/errors) = 3 sizes                                                                 |
| **Max 2 font weights**   | `font-semibold` (headings, labels), normal (body) = 2 weights                                                                            |
| **Semantic tokens only** | `bg-background`, `text-foreground`, `text-muted-foreground`, `border-input`, `bg-primary`, `text-primary-foreground`, `text-destructive` |
| **No hardcoded colors**  | Exception: `amber-400` for star fill (standard gold, not brand color)                                                                    |
| **Accent restrained**    | Primary color used only on the submit button                                                                                             |
| **Spacing 8pt rhythm**   | `gap-2`, `gap-6`, `space-y-2`, `space-y-6`, `space-y-8`, `p-4`, `py-3`                                                                   |
| **Interaction states**   | hover, focus-visible, active, disabled on all interactive elements                                                                       |
| **Accessibility**        | ARIA roles, semantic HTML, contrast ratios, 44px+ touch targets                                                                          |
| **Not templated**        | No cards, no hero, no feature grids — purpose-built layout                                                                               |

---

## 8. Development Plan

| Step | Task                             | Details                                                                                                   |
| ---- | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1    | **Create route files**           | `app/review/page.tsx` and `app/review/improve/page.tsx` with metadata                                     |
| 2    | **Build StarRating component**   | `components/sections/review/StarRating.tsx` — interactive stars, hover/click, routing logic, lock ref     |
| 3    | **Build FeedbackForm component** | `components/sections/review/FeedbackForm.tsx` — React Hook Form + Zod schema, styled inputs, no-op submit |
| 4    | **Polish & animate**             | GSAP stagger animation on star entrance, smooth transitions                                               |
| 5    | **Verify design compliance**     | Run through `DESIGN_CHECKLIST.md` for both pages                                                          |
| 6    | **Lint & format**                | `pnpm lint`, `pnpm format`, `pnpm check`                                                                  |
