"use client"

import { IconMenu2, IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

import { FacebookCTA } from "@/components/landing/facebook-cta"
import { Logo } from "@/components/landing/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Rapido Motorsiklo Garage — home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <FacebookCTA size="sm" label="Message us" />
        </div>

        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <IconMenu2 />
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-6 border-l border-border bg-background p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <IconX />
                </Button>
              </div>

              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-4 text-base font-medium text-foreground/90 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <FacebookCTA size="lg" className="w-full" />
                <p className="text-center text-xs text-muted-foreground">
                  Walk-ins welcome. Fast, honest service.
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
