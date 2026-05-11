import {
  IconBrandMessenger,
  IconClipboardCheck,
  IconTool,
} from "@tabler/icons-react"

import { FacebookCTA } from "@/components/landing/facebook-cta"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/section"

const steps = [
  {
    n: "01",
    icon: IconBrandMessenger,
    title: "Message us on Facebook",
    body: "Tell us your motor model and what's wrong. Send a photo or video if you can — it helps us prepare.",
  },
  {
    n: "02",
    icon: IconClipboardCheck,
    title: "Get a free estimate",
    body: "We'll give you an honest assessment and price range before you bring it in. No commitment.",
  },
  {
    n: "03",
    icon: IconTool,
    title: "We fix it fast",
    body: "Drop your motor at the shop — or walk in. Most routine jobs are finished the same day.",
  },
]

export function HowItWorksSection() {
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="How it works"
        title={
          <>
            From a quick message to a{" "}
            <span className="text-primary">fixed motor</span> — in 3 steps.
          </>
        }
        description="No forms. No back-and-forth. Just message us and we'll take it from there."
      />

      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
        <div
          aria-hidden
          className="pointer-events-none absolute left-8 right-8 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
        />
        {steps.map((step, idx) => (
          <Reveal key={step.n} delay={idx * 0.08}>
            <div className="relative flex h-full flex-col gap-4 rounded-md border border-border/70 bg-card/60 p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-sm border border-primary/30 bg-primary/10 text-primary">
                  <step.icon className="size-6" aria-hidden />
                </span>
                <span className="font-mono text-3xl font-black leading-none text-accent">
                  {step.n}
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 flex justify-center">
        <FacebookCTA size="lg" label="Start with a message" />
      </Reveal>
    </Section>
  )
}
