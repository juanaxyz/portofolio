import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function TimelineAnimatedPath({ entries }) {
  const listRef = useRef(null)
  const isInView = useInView(listRef, { once: true, amount: 0.4 })
  const shouldReduceMotion = useReducedMotion()
  const isComplete = isInView || shouldReduceMotion

  return (
    <ol
      ref={listRef}
      aria-label="Education and experience timeline"
      className="relative list-none m-0 p-0 pl-6 sm:pl-7"
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1.5 bottom-1.5 w-px origin-top bg-neutral-200 sm:left-1.5"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isComplete ? 1 : 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 1.6, delay: 0.2, ease: [0.45, 0, 0.55, 1] }
        }
      >
        <span className="absolute inset-0 bg-neutral-900" />
      </motion.span>

      {entries.map((entry, index) => {
        const isLast = index === entries.length - 1

        return (
          <li
            key={entry.title + entry.period}
            className="relative grid grid-cols-1 gap-1 sm:grid-cols-[104px_1fr] sm:gap-5 mb-8 sm:mb-9 last:mb-0"
          >
            <motion.span
              aria-hidden="true"
              className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full border border-neutral-900 z-10 bg-white sm:-left-7"
              initial={{ backgroundColor: '#ffffff', scale: 1 }}
              animate={{
                backgroundColor: isComplete ? '#171717' : '#ffffff',
                scale: isComplete && !shouldReduceMotion ? [1, 1.25, 1] : 1,
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.45,
                      delay: 0.2 + (isLast ? 1.6 : (index / Math.max(entries.length - 1, 1)) * 1.6),
                      ease: 'easeOut',
                    }
              }
            />
            <p className="text-xs sm:text-sm leading-relaxed tabular-nums text-neutral-500 m-0">{entry.period}</p>
            <div>
              <h5 className="text-base font-semibold leading-snug text-neutral-900 m-0 mb-1">
                {entry.title}
              </h5>
              <p className="text-sm sm:text-base leading-relaxed text-pretty text-neutral-600 m-0 max-w-xl">
                {entry.desc}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
