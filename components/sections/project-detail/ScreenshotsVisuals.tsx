import Image from 'next/image'

export type Screenshot = {
  src: string
  alt: string
  label: string
  width: number
  height: number
}

type ScreenshotsVisualsProps = {
  screenshots: Screenshot[]
}

export default function ScreenshotsVisuals({
  screenshots,
}: ScreenshotsVisualsProps) {
  if (screenshots.length === 0) return null

  // We'll use a dynamic layout based on the number of screenshots
  // For now, let's keep it simple or try to match the previous layout pattern if 4 are provided
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
        Visual evidence of the final results.
      </p>

      <div className="flex flex-col gap-3">
        {/* Row 1 — Full-width */}
        {hero && (
          <ScreenshotFigure
            screenshot={hero}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="w-full"
            imageClassName="h-auto w-full object-cover object-top"
            aspectClassName="aspect-[16/9]"
          />
        )}

        {/* Row 2 — Mixed */}
        {(appForm ?? mobile) && (
          <div
            className={`grid grid-cols-1 gap-3 ${appForm && mobile ? 'lg:grid-cols-[2.2fr_1fr]' : ''}`}
          >
            {appForm && (
              <ScreenshotFigure
                screenshot={appForm}
                sizes="(max-width: 1024px) 100vw, 55vw"
                imageClassName="h-full w-full object-cover object-top"
                aspectClassName="aspect-[16/9] lg:aspect-auto lg:min-h-[340px]"
              />
            )}
            {mobile && (
              <ScreenshotFigure
                screenshot={mobile}
                sizes="(max-width: 1024px) 50vw, 22vw"
                imageClassName="h-full w-full object-cover object-top"
                aspectClassName="aspect-[9/19.5] lg:aspect-auto"
              />
            )}
          </div>
        )}

        {/* Row 3 — Full-width */}
        {admin && (
          <ScreenshotFigure
            screenshot={admin}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="w-full"
            imageClassName="h-auto w-full object-cover object-top"
            aspectClassName="aspect-[16/9]"
          />
        )}
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
