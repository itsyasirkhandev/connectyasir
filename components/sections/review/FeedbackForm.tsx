'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  feedback: z.string().min(1, 'Please share your feedback'),
})

type FeedbackValues = z.infer<typeof feedbackSchema>

const inputClasses = cn(
  'flex w-full rounded-lg border border-input bg-background px-4 py-2.5',
  'text-base text-foreground placeholder:text-muted-foreground/60',
  'transition-colors duration-150',
  'hover:border-muted-foreground/30',
  'focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30',
  'disabled:cursor-not-allowed disabled:opacity-50'
)

export function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema),
  })

  const onSubmit = (_data: FeedbackValues) => {
    // No-op for now — future: send to API
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Help me improve
        </h1>
        <p className="text-muted-foreground max-w-prose text-base leading-relaxed">
          Thank you for your honesty. Your feedback helps me deliver better
          results for every client.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          void handleSubmit(onSubmit)(e)
        }}
        className="space-y-6"
        noValidate
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-foreground block text-sm font-semibold"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className={cn(
              inputClasses,
              errors.name && 'border-destructive focus:ring-destructive/30'
            )}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="businessName"
            className="text-foreground block text-sm font-semibold"
          >
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            placeholder="Acme Corp"
            className={cn(
              inputClasses,
              errors.businessName &&
                'border-destructive focus:ring-destructive/30'
            )}
            {...register('businessName')}
          />
          {errors.businessName && (
            <p className="text-destructive text-sm">
              {errors.businessName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="feedback"
            className="text-foreground block text-sm font-semibold"
          >
            How can I improve?
          </label>
          <textarea
            id="feedback"
            rows={5}
            placeholder="Share what could have been better..."
            className={cn(
              inputClasses,
              'resize-y',
              errors.feedback && 'border-destructive focus:ring-destructive/30'
            )}
            {...register('feedback')}
          />
          {errors.feedback && (
            <p className="text-destructive text-sm">
              {errors.feedback.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full">
          Submit Feedback
        </Button>
      </form>
    </div>
  )
}
