import { useEffect, useId, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const clamp = (value) => Math.min(1, Math.max(0, value))

export default function MorphingText({ text, className = '' }) {
  const reducedMotion = useReducedMotion()
  const previousText = useRef(text)
  const [frame, setFrame] = useState({ from: text, to: text, progress: 1 })
  const filterId = `morph-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  useEffect(() => {
    if (text === previousText.current) return undefined

    const from = previousText.current
    previousText.current = text

    if (reducedMotion) {
      return undefined
    }

    let animationFrame
    const startedAt = performance.now()
    const duration = 700

    const animate = (now) => {
      const progress = clamp((now - startedAt) / duration)
      setFrame({ from, to: text, progress })

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [reducedMotion, text])

  const { from, to, progress } = reducedMotion
    ? { from: text, to: text, progress: 1 }
    : frame
  const isMorphing = progress > 0 && progress < 1
  const incomingBlur = isMorphing ? Math.min(8 / progress - 8, 100) : 0
  const outgoingBlur = isMorphing ? Math.min(8 / (1 - progress) - 8, 100) : 0

  return (
    <span className={`relative grid ${className}`} aria-label={text} role="text">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {to}
      </span>
      <span
        className="col-start-1 row-start-1"
        aria-hidden="true"
        style={{
          opacity: 1 - progress,
          filter: isMorphing ? `url(#${filterId}) blur(${outgoingBlur}px)` : 'none',
          transform: `scale(${1 + progress * 0.015})`,
        }}
      >
        {from}
      </span>
      <span
        className="col-start-1 row-start-1"
        aria-hidden="true"
        style={{
          opacity: progress,
          filter: isMorphing ? `url(#${filterId}) blur(${incomingBlur}px)` : 'none',
          transform: `scale(${1.015 - progress * 0.015})`,
        }}
      >
        {to}
      </span>
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </span>
  )
}
