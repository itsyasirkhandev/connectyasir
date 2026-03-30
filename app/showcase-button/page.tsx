'use client'

import { useState } from 'react'
import { PrimaryButton } from '@/components/ui/primary-button'

export default function ShowcaseButtonPage() {
  const [isSent, setIsSent] = useState(false)

  const handleSend = () => {
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
    }, 5000)
  }

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-10 font-sans">
      <h1 className="text-foreground mb-10 text-4xl font-semibold tracking-tight">
        Primary Button Animation
      </h1>

      <div className="space-y-12 text-center">
        <div>
          <p className="text-muted-foreground mb-4">
            Interactive State (Hover & Click)
          </p>
          <PrimaryButton
            text="SendMessage"
            sentText="Sent!"
            isSent={isSent}
            onClick={handleSend}
          />
        </div>

        <div className="flex gap-10">
          <div>
            <p className="text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase">
              Default State
            </p>
            <PrimaryButton text="Hover Me" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase">
              Sent State
            </p>
            <PrimaryButton isSent={true} sentText="Success" />
          </div>
        </div>

        <div className="text-muted-foreground mx-auto max-w-md pt-10 text-sm leading-relaxed">
          <p>
            This button adapts to your theme&apos;s{' '}
            <span className="text-primary font-semibold">
              primary gold color
            </span>{' '}
            and uses <span className="text-primary font-semibold">OKLCH</span>{' '}
            color tokens for depth. It includes enter animations (land), hover
            animations (wave), and success state animations (takeoff + appear).
          </p>
        </div>
      </div>
    </div>
  )
}
