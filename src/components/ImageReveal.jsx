import * as React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * ImageReveal component ported from Framer (https://framer.com/m/Img-Reveal-prHVRV.js@9Nsi9j7C1w3bVRpuMLeX)
 * Implements clipPath wipe reveal + image scale-down zoom-in effect.
 */
export default function ImageReveal({
  image = { src: '', alt: 'Image' },
  delay = 0.2,
  durationReveal = 1.4,
  durationScale = 1.7,
  speed = 1,
  scaleFrom = 1.25,
  direction = 'bottom',
  inViewAmount = 0.2,
  easeReveal = 'cinematic',
  easeScale = 'expo',
  placeholderBackground = '#f5f5f5',
  once = true,
  className = '',
  style = {},
}) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { amount: inViewAmount, once })
  const shouldReduceMotion = useReducedMotion()

  const safeSpeed = React.useMemo(
    () => (Number.isFinite(speed) && speed > 0 ? speed : 1),
    [speed]
  )
  const effectiveDelay = React.useMemo(() => delay / safeSpeed, [delay, safeSpeed])
  const effectiveDurationReveal = React.useMemo(
    () => durationReveal / safeSpeed,
    [durationReveal, safeSpeed]
  )
  const effectiveDurationScale = React.useMemo(
    () => durationScale / safeSpeed,
    [durationScale, safeSpeed]
  )

  const revealEase = React.useMemo(() => {
    if (easeReveal === 'expo') return [0.19, 1, 0.22, 1]
    return [0.77, 0, 0.175, 1]
  }, [easeReveal])

  const scaleEase = React.useMemo(() => {
    if (easeScale === 'expo') return [0.19, 1, 0.22, 1]
    return [0.77, 0, 0.175, 1]
  }, [easeScale])

  const initialClipPath = React.useMemo(() => {
    switch (direction) {
      case 'top':
        return 'inset(0% 0% 100% 0%)'
      case 'left':
        return 'inset(0% 100% 0% 0%)'
      case 'right':
        return 'inset(0% 0% 0% 100%)'
      case 'bottom':
      default:
        return 'inset(100% 0% 0% 0%)'
    }
  }, [direction])

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={`w-full h-full overflow-hidden relative ${className}`}
        style={{ backgroundColor: placeholderBackground, ...style }}
        aria-label={image?.alt || 'Revealed image'}
        role="img"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image?.src || ''})` }}
        />
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`w-full h-full overflow-hidden relative ${className}`}
      style={{ backgroundColor: placeholderBackground, ...style }}
      aria-label={image?.alt || 'Revealed image'}
      role="img"
    >
      <motion.div
        className="w-full h-full overflow-hidden"
        initial={{ clipPath: initialClipPath }}
        animate={inView ? { clipPath: 'inset(0% 0% 0% 0%)' } : { clipPath: initialClipPath }}
        transition={{
          duration: effectiveDurationReveal,
          ease: revealEase,
          delay: effectiveDelay,
        }}
      >
        <motion.div
          className="w-full h-full bg-cover bg-[center_20%]"
          style={{ backgroundImage: `url(${image?.src || ''})` }}
          initial={{ scale: scaleFrom }}
          animate={inView ? { scale: 1 } : { scale: scaleFrom }}
          transition={{
            duration: effectiveDurationScale,
            ease: scaleEase,
            delay: effectiveDelay,
          }}
        />
      </motion.div>
    </div>
  )
}
