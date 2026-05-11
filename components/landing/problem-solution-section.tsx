import {
  IconAlertTriangle,
  IconCheck,
  IconMoodConfuzed,
  IconMoodHappy,
  IconQuestionMark,
} from "@tabler/icons-react"

import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/section"

const problems = [
  {
    icon: IconAlertTriangle,
    text: "Shops that take days for simple repairs.",
  },
  {
    icon: IconQuestionMark,
    text: "Surprise charges and unclear billing after pickup.",
  },
  {
    icon: IconMoodConfuzed,
    text: "No clear explanation of what's actually wrong.",
  },
]

const solutions = [
  {
    icon: IconCheck,
    text: "Quick turnaround so your daily ride is back on the road fast.",
  },
  {
    icon: IconCheck,
    text: "Upfront pricing — you approve the cost before any work starts.",
  },
  {
    icon: IconMoodHappy,
    text: "Plain-language diagnosis so you actually understand the fix.",
  },
]

export function ProblemSolutionSection() {
  return (
    <Section id="problem-solution" className="bg-background/0">
      <SectionHeader
        eyebrow="Why this matters"
        title={
          <>
            Tired of motor shops that make repair{" "}
            <span className="text-primary">stressful?</span>
          </>
        }
        description="Daily riders deserve straight answers and quick work. Here's how we're different."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-md border border-border/60 bg-card/40 p-7 sm:p-8">
            <div className="bg-stripe pointer-events-none absolute inset-x-0 top-0 h-1.5" />
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The usual problem
            </h3>
            <p className="mb-6 text-xl font-semibold leading-tight">
              Slow service. Hidden costs. Guesswork.
            </p>
            <ul className="flex flex-col gap-4">
              {problems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-sm border border-border/60 bg-background/60">
                    <Icon className="size-4 text-foreground/60" aria-hidden />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-md border border-primary/30 bg-card/60 p-7 ring-1 ring-primary/10 sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              The Rapido way
            </h3>
            <p className="mb-6 text-xl font-semibold leading-tight">
              Fast. Transparent. Trusted by locals.
            </p>
            <ul className="flex flex-col gap-4">
              {solutions.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-sm border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
