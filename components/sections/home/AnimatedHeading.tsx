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

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const text = texts[currentIndex] ?? texts[0] ?? ''
    const chars = text.split('')

    // Clear previous content
    container.innerHTML = ''

    // Create spans for each character
    const spans = chars.map((char) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.filter = 'blur(10px)'
      span.style.transform = 'translateY(20px)'
      container.appendChild(span)
      return span
    })

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out after a delay
        gsap.to(spans, {
          opacity: 0,
          y: -20,
          filter: 'blur(10px)',
          stagger: 0.02,
          delay: 2,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            setCurrentIndex((prev: number) => (prev + 1) % texts.length)
          },
        })
      },
    })

    tl.to(spans, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      stagger: 0.03,
      duration: 0.6,
      ease: 'power2.out',
    })

    return () => {
      tl.kill()
    }
  }, [currentIndex])

  return (
    <h1
      ref={containerRef}
      className={cn(
        'text-foreground min-h-[2.4em] w-full max-w-[20ch] text-5xl leading-tight font-semibold tracking-tighter',
        className
      )}
    >
      {/* Initial text for SEO and first paint */}
      {texts[0]}
    </h1>
  )
}
