import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, PERSON_IMAGE_PATH, SITE_NAME } from '@/lib/site-config'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'

export function AuthorProfile() {
  return (
    <section className="bg-muted/30 border-border border-t py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            {/* Avatar with Badge */}
            <div className="group relative shrink-0">
              <div className="from-primary/50 to-primary absolute -inset-1 rounded-full bg-gradient-to-r opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
              <div className="border-background relative aspect-square w-32 overflow-hidden rounded-full border-4 shadow-xl md:w-40">
                <Image
                  src={PERSON_IMAGE_PATH}
                  alt={SITE_NAME}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-primary text-primary-foreground border-background absolute right-1 bottom-1 rounded-full border-2 p-1.5 shadow-lg">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h2 className="text-foreground text-2xl font-bold tracking-tight md:text-3xl">
                  {SITE_NAME}
                </h2>
                <div className="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                  <Award className="h-3 w-3" />
                  Verified Technical Expert
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                Specialist in high-performance Web Design and{' '}
                <strong>Generative Engine Optimization (GEO)</strong>. With over
                5 years of experience building technical infrastructures for
                small businesses, I focus on creating digital assets that are
                not just beautiful, but machine-readable and highly citable by
                AI search engines.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <Link
                    href={CONTACT.linkedin}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/itsyasirkhandev"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.upwork.com/freelancers/~01b6c7a7a5a8f6d6b5"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Upwork</span>
                  </Link>
                </div>

                <Link
                  href="/about"
                  className="text-foreground hover:text-primary decoration-border/40 hover:decoration-primary text-sm font-semibold underline underline-offset-4 transition-all"
                >
                  View Full Professional Background
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
