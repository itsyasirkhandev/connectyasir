'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

type AnimatedHeadingProps = {
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
}

const texts = [
  'Stop losing customers to a slow website.',
  'Build instant trust with premium design.',
  'Turn cold visitors into daily leads.',
]

export function AnimatedHeading({
  className,
  as: Tag = 'h1',
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement | HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const words = useMemo(() => {
    const currentText = texts[currentIndex] ?? texts[0] ?? ''
    return currentText.split(' ').map((word) => ({
      text: word,
      chars: word.split(''),
    }))
  }, [currentIndex])

  const isFirstRender = useRef(true)
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !hasHydrated) return

    const spans = containerRef.current.querySelectorAll('.char-span')
    if (spans.length === 0) return

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(spans, {
          opacity: 0,
          y: -20,
          filter: 'blur(10px)',
          stagger: 0.01,
          delay: 4,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          },
        })
      },
    })

    // If it's the first render of the first slide, don't do the "in" animation
    // as it's already visible from SSR. Just start the timeline.
    if (isFirstRender.current) {
      isFirstRender.current = false
      // Trigger the onComplete logic after a delay manually or just let it run
      tl.play()
    } else {
      tl.fromTo(
        spans,
        {
          opacity: 0,
          y: 20,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.02,
          duration: 0.5,
          ease: 'power2.out',
        }
      )
    }

    return () => {
      tl.kill()
    }
  }, [currentIndex, hasHydrated])

  return (
    <Tag
      ref={containerRef}
      className={cn(
        'text-foreground min-h-[3.3em] w-full text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:min-h-[2.4em] md:text-5xl lg:text-6xl',
        className
      )}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`${String(currentIndex)}-${String(wordIndex)}`}
          className="inline-block"
        >
          <span className="inline-block whitespace-nowrap">
            {word.chars.map((char, charIndex) => (
              <span
                key={`${String(currentIndex)}-${String(wordIndex)}-${String(charIndex)}`}
                className="char-span inline-block"
                style={{
                  // Start visible in SSR, only animate later
                  opacity: 1,
                  transform: 'translateY(0px)',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            ))}
          </span>
          {wordIndex < words.length - 1 && (
            <span
              className="char-span inline-block"
              style={{
                opacity: 1,
                transform: 'translateY(0px)',
                willChange: 'transform, opacity',
              }}
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  )
}
