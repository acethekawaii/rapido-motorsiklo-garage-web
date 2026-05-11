import {
  IconArrowRight,
  IconBuildingStore,
  IconCheck,
} from "@tabler/icons-react"

import { FacebookCTA } from "@/components/landing/facebook-cta"
import { Reveal } from "@/components/landing/reveal"
import { Section } from "@/components/landing/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const partsFeatures = [
  "Genuine OEM-quality parts for popular local models",
  "Tires, batteries, chains, sprockets, and brake pads",
  "Accessories: helmets, mirrors, lights, and upgrades",
  "Motor trade: pre-purchase checks and trade-in support",
]

export function PartsSection() {
  return (
    <Section id="parts">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Badge variant="accent" className="mb-5">
            <IconBuildingStore /> Parts & motor trade
          </Badge>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            More than a repair shop —{" "}
            <span className="text-primary">your local motor hub.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Need parts, accessories, or help choosing the right upgrade? Walk
            into our shop or message us — we'll guide you with honest advice and
            fair pricing, the same way we'd help a friend.
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {partsFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-sm bg-primary/15 text-primary">
                  <IconCheck className="size-3.5" aria-hidden />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FacebookCTA size="lg" label="Ask about parts" />
            <Button
              size="lg"
              variant="outline"
              render={<a href="#location" />}
              nativeButton={false}
            >
              Visit our shop
              <IconArrowRight />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-md bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-md border border-border/70 bg-card/70 p-1">
              <div className="bg-grid relative aspect-[4/5] overflow-hidden rounded-sm bg-background/60">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4">
                  {[
                    "Tires",
                    "Batteries",
                    "Chains",
                    "Brake pads",
                    "Oils",
                    "Accessories",
                  ].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-end rounded-sm border border-border/60 bg-card/60 p-3 text-xs font-medium text-foreground/80 backdrop-blur-sm"
                      style={{
                        backgroundImage:
                          idx % 2 === 0
                            ? "linear-gradient(135deg, oklch(0.65 0.24 25 / 0.12), transparent 60%)"
                            : "linear-gradient(135deg, oklch(0.88 0.18 95 / 0.1), transparent 60%)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-sm border border-border/70 bg-background/80 px-4 py-3 text-xs backdrop-blur">
                  <span className="font-semibold text-foreground">
                    In-stock parts
                  </span>
                  <span className="text-muted-foreground">
                    Ask before you ride
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
