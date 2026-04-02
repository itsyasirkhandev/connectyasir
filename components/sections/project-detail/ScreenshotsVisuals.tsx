import Image from 'next/image'

type Screenshot = {
  src: string
  alt: string
  label: string
  width: number
  height: number
}

const screenshots: [Screenshot, Screenshot, Screenshot, Screenshot] = [
  {
    src: '/images/projects/apnaqarz/apna-qarz-homepage.webp',
    alt: 'Apna Qarz desktop homepage — full hero section with loan application entry',
    label: 'Desktop · Homepage',
    width: 1280,
    height: 800,
  },
  {
    src: '/images/projects/apnaqarz/apnaqarz application form desktop.webp',
    alt: 'Apna Qarz desktop application form — multi-step loan application flow',
    label: 'Desktop · Application Form',
    width: 1280,
    height: 800,
  },
  {
    src: '/images/projects/apnaqarz/apnaqarz mobile hero.webp',
    alt: 'Apna Qarz mobile view — hero and primary call-to-action on small screen',
    label: 'Mobile · Hero',
    width: 390,
    height: 844,
  },
  {
    src: '/images/projects/apnaqarz/apnaqarz admin dashboard.webp',
    alt: 'Apna Qarz admin dashboard — analytics, lead trends and loan type distribution',
    label: 'Admin · Dashboard & Analytics',
    width: 1280,
    height: 800,
  },
]

export default function ScreenshotsVisuals() {
  const hero = screenshots[0]
  const appForm = screenshots[1]
  const mobile = screenshots[2]
  const admin = screenshots[3]

  return (
    <section className="py-16">
      <h2 className="text-foreground mb-2 text-2xl font-semibold tracking-tight lg:text-3xl">
        The Finished Product
      </h2>
      <p className="text-muted-foreground mb-10 text-base leading-relaxed">
        From hero to admin — every screen, intentionally built.
      </p>

      <div className="flex flex-col gap-3">
        {/* Row 1 — Full-width homepage hero */}
        <ScreenshotFigure
          screenshot={hero}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="w-full"
          imageClassName="h-auto w-full object-cover object-top"
          aspectClassName="aspect-[16/9]"
        />

        {/* Row 2 — Asymmetric: desktop app form (wide) + mobile (portrait) */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2.2fr_1fr]">
          <ScreenshotFigure
            screenshot={appForm}
            sizes="(max-width: 1024px) 100vw, 55vw"
            imageClassName="h-full w-full object-cover object-top"
            aspectClassName="aspect-[16/9] lg:aspect-auto lg:min-h-[340px]"
          />
          <ScreenshotFigure
            screenshot={mobile}
            sizes="(max-width: 1024px) 50vw, 22vw"
            imageClassName="h-full w-full object-cover object-top"
            aspectClassName="aspect-[9/19.5] lg:aspect-auto"
          />
        </div>

        {/* Row 3 — Full-width admin dashboard */}
        <ScreenshotFigure
          screenshot={admin}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="w-full"
          imageClassName="h-auto w-full object-cover object-top"
          aspectClassName="aspect-[16/9]"
        />
      </div>
    </section>
  )
}

type FigureProps = {
  screenshot: Screenshot
  sizes: string
  className?: string
  imageClassName: string
  aspectClassName: string
}

function ScreenshotFigure({
  screenshot,
  sizes,
  className = '',
  imageClassName,
  aspectClassName,
}: FigureProps) {
  return (
    <figure
      className={`group border-border bg-surface relative overflow-hidden rounded-xl border ${className}`}
    >
      <div className={`relative ${aspectClassName}`}>
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          className={`${imageClassName} transition-transform duration-500 group-hover:scale-[1.015]`}
          sizes={sizes}
        />
      </div>
      <figcaption className="absolute right-3 bottom-3">
        <span className="bg-background/90 text-foreground border-border/50 inline-block rounded-md border px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {screenshot.label}
        </span>
      </figcaption>
    </figure>
  )
}
