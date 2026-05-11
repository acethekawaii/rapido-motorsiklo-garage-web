"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
}

export function Reveal({
  children,
  delay = 0,
  y = 16,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
