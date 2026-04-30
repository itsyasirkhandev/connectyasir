# Review Page Feature Specification

## 1. Problem Statement

As a freelancer/agency, collecting client feedback is essential for building trust and improving services. However, there is currently no streamlined way to:

- Collect client reviews after project completion
- Route satisfied clients to leave a public Google Business review
- Gather constructive feedback privately from less satisfied clients

**Solution:** This feature introduces a `/review` page with a smart star-rating flow that automatically routes clients based on their satisfaction level — positive reviews go to Google, while lower ratings are captured privately for improvement.

---

## 2. Functional Requirements

The system should:

### `/review` Page (Star Rating)

- Display a clean, branded star-rating interface (1–5 stars)
- Stars should be interactive (hover and click effects)
- On selecting **4 or 5 stars** → redirect the user to the Google Business review page:
  `https://g.page/r/Cep7VDhRyzbBEAE/review`
- On selecting **1, 2, or 3 stars** → redirect the user to `/review/improve`
- No submit button needed — the rating action itself triggers the redirect
- Show a brief prompt/heading asking the client to rate their experience

### `/review/improve` Page (Feedback Form)

- Display a feedback form with the following fields:
  - **Reviewer Name** (text input, required)
  - **Business Name** (text input, required)
  - **"How can I improve?"** (textarea, required)
- Include a submit button (non-functional for now — UI only)
- Show a friendly message thanking them for their honesty and willingness to help improve
- No backend/API integration needed at this stage

---

## 3. Inputs and Outputs

### Star Rating Behavior (`/review`)

| User Action (Input)      | Expected System Behavior (Output)                                  |
| ------------------------ | ------------------------------------------------------------------ |
| User hovers over a star  | Stars up to the hovered star highlight with a visual effect        |
| User clicks a star (1–3) | Short delay (~500ms), then redirect to `/review/improve`           |
| User clicks a star (4–5) | Short delay (~500ms), then redirect to Google Business review page |
| User lands on the page   | See a heading, subtext, and 5 empty/outlined stars                 |

### Feedback Form Behavior (`/review/improve`)

| User Action (Input)       | Expected System Behavior (Output)             |
| ------------------------- | --------------------------------------------- |
| User fills in form fields | Standard form input behavior                  |
| User clicks submit button | No action (UI-only, no form submission logic) |
| User lands on the page    | See a thank-you message and the feedback form |

---

## 4. Constraints

- The review page should load quickly (within 1 second)
- The star rating must be mobile-friendly and touch-responsive
- The redirect delay should be subtle (~500ms) to give visual feedback before navigating
- Both pages should be consistent with the existing portfolio design system
- The `/review` page should be shareable as a direct link to clients
- The Google Business redirect URL must open in the **same tab** (or new tab, based on UX preference)

---

## 5. Edge Cases and Error Handling

| Scenario                                                    | Handling                                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| User clicks same star twice                                 | Treat as a single selection, trigger redirect once                           |
| User rapidly clicks different stars                         | Only process the first valid click, ignore subsequent clicks during redirect |
| Google Business review URL is unreachable                   | Not handled (external dependency — out of scope)                             |
| User navigates directly to `/review/improve` without rating | Allow access — form should still be usable independently                     |
| User submits the form on `/review/improve`                  | No action — show no error, button is non-functional (future implementation)  |
| Page is accessed on a very small screen                     | Layout should remain usable and responsive                                   |

---

## 6. Acceptance Criteria

This feature is considered complete if:

- [ ] Users see a star-rating interface on `/review`
- [ ] Stars are interactive with hover and click effects
- [ ] Clicking 4 or 5 stars redirects to the Google Business review page
- [ ] Clicking 1, 2, or 3 stars redirects to `/review/improve`
- [ ] A brief delay provides visual feedback before redirect
- [ ] The `/review/improve` page displays a form with: name, business name, and improvement textarea
- [ ] The form submit button exists but is non-functional
- [ ] Both pages are responsive and mobile-friendly
- [ ] Both pages follow the existing portfolio design system
- [ ] The `/review` URL is shareable and works as a direct link
