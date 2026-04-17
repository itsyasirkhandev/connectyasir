'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

const GOOGLE_REVIEW_URL = 'https://g.page/r/Cep7VDhRyzbBEAE/review'
const STAR_COUNT = 5
const REDIRECT_DELAY_MS = 500

export function StarRating() {
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const starsContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!starsContainerRef.current) return
    const stars = starsContainerRef.current.children

    gsap.fromTo(
      stars,
      { opacity: 0, scale: 0.5, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.5)',
      }
    )
  }, [])

  const handleStarClick = (rating: number) => {
    if (isLocked) return
    setIsLocked(true)
    setSelectedStar(rating)

    setTimeout(() => {
      if (rating >= 4) {
        window.location.href = GOOGLE_REVIEW_URL
      } else {
        router.push('/review/improve')
      }
    }, REDIRECT_DELAY_MS)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="space-y-2 text-center">
        <h1 className="font-heading text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          How was your experience?
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Tap a star to rate your experience
        </p>
      </div>

      <div
        ref={starsContainerRef}
        className="flex gap-1 sm:gap-2"
        role="radiogroup"
        aria-label="Star rating"
      >
        {Array.from({ length: STAR_COUNT }, (_, i) => {
          const value = i + 1
          const isFilled = value <= (hoveredStar || selectedStar)

          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={value === selectedStar}
              aria-label={`${String(value)} star${value > 1 ? 's' : ''}`}
              disabled={isLocked}
              className={cn(
                'cursor-pointer rounded-md p-1.5 transition-transform duration-150',
                'hover:scale-110 active:scale-95',
                'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2',
                'disabled:pointer-events-none disabled:opacity-60'
              )}
              onMouseEnter={() => {
                if (!isLocked) setHoveredStar(value)
              }}
              onMouseLeave={() => {
                if (!isLocked) setHoveredStar(0)
              }}
              onClick={() => {
                handleStarClick(value)
              }}
            >
              <Star
                size={40}
                strokeWidth={1.5}
                className={cn(
                  'transition-colors duration-200',
                  isFilled
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-muted-foreground/50 fill-transparent'
                )}
              />
            </button>
          )
        })}
      </div>

      {selectedStar > 0 && (
        <p className="animate-in fade-in text-muted-foreground text-sm">
          {selectedStar >= 4
            ? 'Thank you! Redirecting you...'
            : "We'd love to hear your feedback..."}
        </p>
      )}
    </div>
  )
}
