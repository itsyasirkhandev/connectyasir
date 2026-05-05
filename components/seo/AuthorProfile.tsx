import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, PERSON_IMAGE_PATH, SITE_NAME } from '@/lib/site-config'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'


export function AuthorProfile() {
  return (
    <section className="bg-muted/30 py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            {/* Avatar with Badge */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square w-32 md:w-40 overflow-hidden rounded-full border-4 border-background shadow-xl">
                <Image
                  src={PERSON_IMAGE_PATH}
                  alt={SITE_NAME}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg border-2 border-background">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{SITE_NAME}</h2>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  <Award className="h-3 w-3" />
                  Verified Technical Expert
                </div>
              </div>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Specialist in high-performance Web Design and <strong>Generative Engine Optimization (GEO)</strong>. With over 5 years of experience building technical infrastructures for small businesses, I focus on creating digital assets that are not just beautiful, but machine-readable and highly citable by AI search engines.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <Link href={CONTACT.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://github.com/itsyasirkhan" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.upwork.com/freelancers/~01b6c7a7a5a8f6d6b5" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Upwork</span>
                  </Link>
                </div>
                
                <Link 
                  href="/about" 
                  className="text-sm font-semibold text-foreground hover:text-primary underline underline-offset-4 decoration-border/40 hover:decoration-primary transition-all"
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
