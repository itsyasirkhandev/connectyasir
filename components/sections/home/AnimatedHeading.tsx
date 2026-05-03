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

  useEffect(() => {
    if (!containerRef.current) return

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
          delay: 4,
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
  }, [currentIndex])

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
    </Tag>
  )
}
