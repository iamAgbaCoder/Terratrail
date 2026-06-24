import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/* Hand-drawn marker circle around a vital word — animates the stroke on scroll
 * into view to draw the eye, the way founders annotate a pitch deck. */
export function CircledText({
  children,
  color = '#60a5fa',
  delay = 0.25,
  className = '',
}: {
  children: ReactNode
  color?: string
  delay?: number
  className?: string
}) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.svg
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[118%] h-[150%] overflow-visible"
      >
        <motion.path
          d="M152 8C95 6 30 18 20 50 12 78 90 92 158 91 230 90 290 74 285 44 281 20 215 7 140 10"
          fill="none"
          stroke={color}
          strokeWidth={3.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.85, ease: 'easeInOut', delay }}
        />
      </motion.svg>
    </span>
  )
}
