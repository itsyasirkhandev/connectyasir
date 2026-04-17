import type { Metadata } from 'next'
import { StarRating } from '@/components/sections/review/StarRating'

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Rate your experience working with Yasir Khan.',
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center px-4">
      <StarRating />
    </main>
  )
}
