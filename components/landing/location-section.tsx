import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRoute,
} from "@tabler/icons-react"
import type { ComponentType, SVGProps } from "react"

import { FacebookCTA } from "@/components/landing/facebook-cta"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/section"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

type DetailItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href?: string
}

const details: DetailItem[] = [
  {
    icon: IconMapPin,
    label: "Address",
    value: siteConfig.location.full,
  },
  {
    icon: IconClock,
    label: "Opening hours",
    value: siteConfig.contact.hours,
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: IconMail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
]

export function LocationSection() {
  return (
    <Section id="location">
      <SectionHeader
        eyebrow="Find us"
        title={
          <>
            Drop by the shop in{" "}
            <span className="text-primary">Lubao, Pampanga.</span>
          </>
        }
        description="Walk-ins welcome. Or message us first so we can prepare the parts and tools you need."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="flex h-full flex-col gap-5 rounded-md border border-border/70 bg-card/60 p-7">
            <ul className="flex flex-col gap-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-sm border border-border/70 bg-background/60 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium leading-relaxed text-foreground/90">
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 border-t border-border/60 pt-5">
              <FacebookCTA size="lg" className="w-full" />
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                nativeButton={false}
                render={
                  <a
                    href={siteConfig.contact.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <IconRoute />
                Get directions
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-md border border-border/70 bg-card/40">
            <div className="bg-grid absolute inset-0" />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10"
            />
            <div className="relative flex h-full flex-col justify-end gap-4 p-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-sm border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur">
                <IconMapPin className="size-3.5 text-primary" aria-hidden />
                Map preview
              </div>
              <div className="rounded-sm border border-border/70 bg-background/80 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Rapido Motorsiklo Garage
                </p>
                <p className="mt-1 text-base font-semibold leading-snug">
                  {siteConfig.location.street}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.location.city}, {siteConfig.location.region} ·{" "}
                  {siteConfig.location.postal}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Embed a Google Maps iframe here once the live map is ready.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
