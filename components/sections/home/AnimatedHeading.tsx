'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

type AnimatedHeadingProps = {
  className?: string
}

const texts = [
  'Stop losing customers to a slow website.',
  'Build instant trust with premium design.',
  'Turn cold visitors into daily leads.',
]

export function AnimatedHeading({ className }: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Split text into characters for React rendering to avoid innerHTML clearing
  const chars = useMemo(() => {
    const text = texts[currentIndex] ?? texts[0] ?? ''
    return text.split('')
  }, [currentIndex])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !containerRef.current) return

    const spans = containerRef.current.querySelectorAll('.char-span')
    if (spans.length === 0) return

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out after a delay
        gsap.to(spans, {
          opacity: 0,
          y: -20,
          filter: 'blur(10px)',
          stagger: 0.01,
          delay: 4, // Increased delay for better readability and LCP
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          },
        })
      },
    })

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

    return () => {
      tl.kill()
    }
  }, [currentIndex, isMounted])

  return (
    <h1
      ref={containerRef}
      className={cn(
        'text-foreground min-h-[3.3em] w-full max-w-[15ch] text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:max-w-[20ch] md:min-h-[2.4em] md:text-5xl lg:text-6xl',
        className
      )}
    >
      {!isMounted
        ? // Initial SSR content - this is what the browser sees first for LCP
          texts[0]
        : // Client-side spans for animation
          chars.map((char, i) => (
            <span
              key={`${currentIndex.toString()}-${i.toString()}`}
              className="char-span inline-block"
              style={{
                opacity: 0,
                filter: 'blur(10px)',
                transform: 'translateY(20px)',
                willChange: 'transform, opacity, filter',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
    </h1>
  )
}
