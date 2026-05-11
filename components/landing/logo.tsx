import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-tight",
        className
      )}
    >
      <span
        aria-hidden
        className="relative grid size-9 place-items-center rounded-sm bg-primary text-primary-foreground shadow-[0_8px_22px_-10px_oklch(0.65_0.24_25/0.8)]"
      >
        <span className="text-base font-black leading-none">R</span>
        <span className="absolute -bottom-0.5 left-1.5 right-1.5 h-[2px] bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold">
          Rapido<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Motorsiklo Garage
        </span>
      </span>
    </span>
  )
}
