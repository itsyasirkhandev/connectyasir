import Image from 'next/image'

export default function ScreenshotsVisuals() {
  return (
    <section className="py-16">
      <h2 className="text-foreground mb-2 text-2xl font-semibold tracking-tight lg:text-3xl">
        The Finished Product
      </h2>
      <p className="text-muted-foreground mb-10 text-base leading-relaxed">
        From hero to admin — every screen, intentionally built.
      </p>

      <div className="flex flex-col gap-4">
        {/* Row 1 — Full-width hero */}
        <figure className="group border-border bg-surface relative w-full overflow-hidden rounded-xl border">
          <Image
            src="/images/projects/apnaqarz/apnaqarz_hero.webp"
            alt="Apna Qarz desktop homepage — hero section with loan application form"
            width={1280}
            height={905}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <figcaption className="text-muted-foreground bg-surface/80 absolute right-3 bottom-3 rounded-md px-3 py-1 text-xs font-medium backdrop-blur-sm">
            Desktop · Homepage
          </figcaption>
        </figure>

        {/* Row 2 — Asymmetric split: desktop app form (wide) + mobile pair (portrait) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          {/* Desktop application form — landscape dominant */}
          <figure className="group border-border bg-surface relative overflow-hidden rounded-xl border">
            <Image
              src="/images/projects/apnaqarz/apnaqarz-applicationform.webp"
              alt="Apna Qarz desktop application form — multi-step loan application"
              width={456}
              height={614}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <figcaption className="text-muted-foreground bg-surface/80 absolute right-3 bottom-3 rounded-md px-3 py-1 text-xs font-medium backdrop-blur-sm">
              Desktop · Application Form
            </figcaption>
          </figure>

          {/* Mobile screenshots — portrait stacked */}
          <div className="flex flex-col gap-4">
            <figure className="group border-border bg-surface relative overflow-hidden rounded-xl border">
              <Image
                src="/images/projects/apnaqarz/apnaqarz mobile homepage.webp"
                alt="Apna Qarz mobile homepage — hero and CTA on small screen"
                width={362}
                height={700}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="text-muted-foreground bg-surface/80 absolute right-3 bottom-3 rounded-md px-3 py-1 text-xs font-medium backdrop-blur-sm">
                Mobile · Homepage
              </figcaption>
            </figure>

            <figure className="group border-border bg-surface relative overflow-hidden rounded-xl border">
              <Image
                src="/images/projects/apnaqarz/application form mobile.webp"
                alt="Apna Qarz mobile application form — accessible loan form on small screen"
                width={375}
                height={812}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="text-muted-foreground bg-surface/80 absolute right-3 bottom-3 rounded-md px-3 py-1 text-xs font-medium backdrop-blur-sm">
                Mobile · Application Form
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Row 3 — Full-width admin dashboard */}
        <figure className="group border-border bg-surface relative w-full overflow-hidden rounded-xl border">
          <Image
            src="/images/projects/apnaqarz/apnaqarz admin dashboard.webp"
            alt="Apna Qarz admin dashboard — analytics, application trends and loan type distribution"
            width={1280}
            height={898}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <figcaption className="text-muted-foreground bg-surface/80 absolute right-3 bottom-3 rounded-md px-3 py-1 text-xs font-medium backdrop-blur-sm">
            Admin · Dashboard &amp; Analytics
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
