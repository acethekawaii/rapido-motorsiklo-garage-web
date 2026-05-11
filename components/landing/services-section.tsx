import {
  IconBatteryCharging,
  IconChevronRight,
  IconDroplet,
  IconEngine,
  IconHammer,
  IconSettings,
  IconShoppingBag,
} from "@tabler/icons-react"
import type { ComponentType, SVGProps } from "react"

import { FacebookCTA } from "@/components/landing/facebook-cta"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/section"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ServiceItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  highlights: string[]
}

const services: ServiceItem[] = [
  {
    icon: IconEngine,
    title: "Motorcycle repair",
    description:
      "From sudden breakdowns to long-running issues — we diagnose the real problem and fix it right the first time.",
    highlights: [
      "Engine & transmission",
      "Electrical & wiring",
      "Brakes & suspension",
    ],
  },
  {
    icon: IconDroplet,
    title: "Routine maintenance",
    description:
      "Keep your motor running smooth and safe. Preventive service that saves you money down the road.",
    highlights: ["Oil & filter change", "Tune-up & cleaning", "Tire & chain check"],
  },
  {
    icon: IconShoppingBag,
    title: "Motorcycle parts shop",
    description:
      "Genuine and reliable parts and accessories for popular local motor models. Hindi panakot ang presyo.",
    highlights: ["OEM-quality parts", "Tires, batteries, chains", "Accessories & upgrades"],
  },
  {
    icon: IconBatteryCharging,
    title: "Electrical & battery",
    description:
      "Hard-starting? Lights acting up? We troubleshoot electrical issues and replace batteries on the spot.",
    highlights: ["Battery testing", "Wiring repair", "Starter & alternator"],
  },
  {
    icon: IconHammer,
    title: "Motor trade services",
    description:
      "Buying, selling, or upgrading? We offer trade-related help so you make the right move with confidence.",
    highlights: ["Pre-purchase check", "Upgrade consultation", "Trade-in support"],
  },
  {
    icon: IconSettings,
    title: "Tune-up & overhaul",
    description:
      "Restore lost power and performance. Full tune-up and overhaul service done by hands that know motorcycles.",
    highlights: ["Carb & injector clean", "Top & bottom overhaul", "Performance check"],
  },
]

export function ServicesSection() {
  return (
    <Section id="services" className="pt-24 sm:pt-28 md:pt-32">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Everything your motor needs,{" "}
            <span className="text-primary">under one roof.</span>
          </>
        }
        description="Repair, maintenance, parts, and motor trade — from a shop that locals already trust."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Reveal key={service.title} delay={idx * 0.05}>
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-22px_oklch(0.65_0.24_25/0.6)]">
              <CardHeader>
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-sm border border-border/70 bg-background/60 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                  <service.icon className="size-5" aria-hidden />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                  {service.highlights.map((item) => (
                    <li key={item} className="inline-flex items-center gap-2">
                      <IconChevronRight
                        className="size-4 text-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col items-center gap-3 text-center" delay={0.1}>
        <p className="text-sm text-muted-foreground">
          Hindi sigurado kung anong serbisyo ang kailangan? Sabihin mo lang sa amin.
        </p>
        <FacebookCTA size="lg" label="Ask for a free estimate" />
      </Reveal>
    </Section>
  )
}
