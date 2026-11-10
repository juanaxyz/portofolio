import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function SVGPathAnimation({
  svgPath = 'M1 0 V100',
  bgColor = '#e5e5e5',
  animColor = '#171717',
  strokeWidth = 2,
  trigger = 'inView',
  playback = 'once',
  duration = 1.6,
  lineCap = 'butt',
  viewBox = '0 0 2 100',
  className = '',
}) {
  const containerRef = useRef(null)
  const measureRef = useRef(null)
  const pathRef = useRef(null)
  const isInView = useInView(containerRef, {
    once: trigger === 'appear' || playback === 'once',
    amount: 0.4,
  })
  const shouldReduceMotion = useReducedMotion()
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    const path = measureRef.current
    if (!path) return

    const updatePathLength = () => setPathLength(path.getTotalLength())
    updatePathLength()
  }, [svgPath, strokeWidth])

  const shouldAnimate = trigger === 'appear' || isInView || shouldReduceMotion
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration,
        ease: [0.45, 0, 0.55, 1],
        repeat: playback === 'loop' ? Infinity : 0,
        repeatType: 'loop',
      }

  return (
    <div ref={containerRef} className={`h-full w-full ${className}`} aria-hidden="true">
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          ref={measureRef}
          d={svgPath}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap={lineCap}
        />
        {pathLength > 0 && (
          <motion.path
            ref={pathRef}
            d={svgPath}
            stroke={animColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap={lineCap}
            strokeDasharray={pathLength}
            initial={{ strokeDashoffset: pathLength }}
            animate={{ strokeDashoffset: shouldAnimate ? 0 : pathLength }}
            transition={transition}
          />
        )}
      </svg>
    </div>
  )
}
