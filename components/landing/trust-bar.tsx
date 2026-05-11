import {
  IconCalendarCheck,
  IconCash,
  IconMapPinFilled,
  IconUsers,
} from "@tabler/icons-react"

import { Reveal } from "@/components/landing/reveal"

const items = [
  {
    icon: IconUsers,
    label: "Built for daily riders",
    sub: "Commuters, riders, locals",
  },
  {
    icon: IconCash,
    label: "Free estimate",
    sub: "Know the cost before we start",
  },
  {
    icon: IconCalendarCheck,
    label: "Walk-ins welcome",
    sub: "No appointment needed",
  },
  {
    icon: IconMapPinFilled,
    label: "Based in Lubao",
    sub: "Pampanga, Philippines",
  },
]

export function TrustBar() {
  return (
    <section
      aria-label="Why locals choose us"
      className="relative border-y border-border/60 bg-card/40 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {items.map(({ icon: Icon, label, sub }, idx) => (
          <Reveal
            key={label}
            delay={idx * 0.06}
            className="group flex items-center gap-3 bg-background/60 p-5 sm:p-6"
          >
            <span className="grid size-10 place-items-center rounded-sm border border-border/70 bg-card text-primary transition-colors group-hover:border-primary/40 group-hover:text-accent">
              <Icon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-foreground">
                {label}
              </span>
              <span className="text-xs text-muted-foreground">{sub}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
