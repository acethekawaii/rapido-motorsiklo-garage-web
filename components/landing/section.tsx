import type * as React from "react"

import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "footer"
  eyebrow?: string
  containerClassName?: string
}

export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("relative w-full py-20 sm:py-24 md:py-28", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "center" | "left"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex max-w-3xl flex-col gap-4 md:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
