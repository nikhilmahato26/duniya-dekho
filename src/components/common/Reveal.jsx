import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const offsets = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
}

/** Scroll-triggered entrance wrapper used across every section. */
export function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  ...props
}) {
  const reduce = useReducedMotion()
  const from = reduce ? offsets.none : offsets[direction]
  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reduce ? 0.01 : duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

/** Staggers direct children of a list/grid. */
export function RevealGroup({ children, className, stagger = 0.09, amount = 0.15, ...props }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : stagger } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const revealItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function RevealItem({ children, className, ...props }) {
  return (
    <motion.div variants={revealItem} className={className} {...props}>
      {children}
    </motion.div>
  )
}
