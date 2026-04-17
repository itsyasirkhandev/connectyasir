import type { Metadata } from 'next'
import { FeedbackForm } from '@/components/sections/review/FeedbackForm'

export const metadata: Metadata = {
  title: 'Help Me Improve',
  description: 'Share your feedback so I can serve you better.',
  robots: { index: false, follow: false },
}

export default function ReviewImprovePage() {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center px-4 py-12">
      <FeedbackForm />
    </main>
  )
}
