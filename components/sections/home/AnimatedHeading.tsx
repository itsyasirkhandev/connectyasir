'use client'

import { useEffect, useRef, useState } from 'react'
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
        'text-foreground min-h-[3.3em] w-full text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:min-h-[2.4em] md:text-5xl lg:text-6xl',
        className
      )}
    >
      {!isMounted
        ? // Initial SSR content - this is what the browser sees first for LCP
          texts[0]
        : // Client-side spans for animation - wrapped in word spans to prevent character-level breaking
          (texts[currentIndex] ?? texts[0] ?? '')
            .split(' ')
            .map((word, wordIndex, words) => (
              <span
                key={`${currentIndex.toString()}-${wordIndex.toString()}`}
                className="inline-block"
              >
                <span className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={`${currentIndex.toString()}-${wordIndex.toString()}-${charIndex.toString()}`}
                      className="char-span inline-block"
                      style={{
                        opacity: 0,
                        filter: 'blur(10px)',
                        transform: 'translateY(20px)',
                        willChange: 'transform, opacity, filter',
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
                      opacity: 0,
                      filter: 'blur(10px)',
                      transform: 'translateY(20px)',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    &nbsp;
                  </span>
                )}
              </span>
            ))}
    </h1>
  )
}
