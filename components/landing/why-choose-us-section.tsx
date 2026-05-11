import {
  IconClipboardCheck,
  IconClock,
  IconHeartHandshake,
  IconReceipt,
  IconRoad,
  IconTool,
} from "@tabler/icons-react"

import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/section"

const reasons = [
  {
    icon: IconClock,
    title: "Fast turnaround",
    body: "We respect your time. Most routine jobs are finished the same day so you're back on the road quickly.",
  },
  {
    icon: IconReceipt,
    title: "Transparent pricing",
    body: "You hear the price before we touch your motor. No upsells, no panakot, no surprises at pickup.",
  },
  {
    icon: IconTool,
    title: "Hands-on expertise",
    body: "Real mechanics with real motorcycle experience — not just a quick guess. We explain what we find.",
  },
  {
    icon: IconHeartHandshake,
    title: "Friendly local service",
    body: "We treat every customer like a neighbor — because most of them are. Pakikipag-kapwa, hindi corporate.",
  },
  {
    icon: IconRoad,
    title: "Built for daily riders",
    body: "Commuters and delivery riders trust us. We know how important it is when your motor is your livelihood.",
  },
  {
    icon: IconClipboardCheck,
    title: "We stand by our work",
    body: "If something isn't right after we fix it, bring it back. We'll make it right — that's our promise.",
  },
]

export function WhyChooseUsSection() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why Rapido"
        title={
          <>
            A motor shop that earns your trust{" "}
            <span className="text-primary">on every visit.</span>
          </>
        }
        description="The small details daily riders care about — done right, every time."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, idx) => (
          <Reveal
            key={reason.title}
            delay={idx * 0.05}
            className="group relative flex flex-col gap-3 bg-card/60 p-7 transition-colors duration-300 hover:bg-card/90"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-sm border border-border/70 bg-background/60 text-accent">
              <reason.icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold leading-snug">{reason.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {reason.body}
            </p>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
