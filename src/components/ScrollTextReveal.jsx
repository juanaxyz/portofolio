import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function toTransparentColor(color, opacity) {
  const safeOpacity = Math.min(1, Math.max(0, opacity))
  const normalized = color.trim()
  const shortHexMatch = /^#([0-9a-fA-F]{3})$/.exec(normalized)
  const longHexMatch = /^#([0-9a-fA-F]{6})$/.exec(normalized)

  if (shortHexMatch) {
    const [r, g, b] = shortHexMatch[1].split('').map((value) => parseInt(value + value, 16))
    return `rgba(${r}, ${g}, ${b}, ${safeOpacity})`
  }

  if (longHexMatch) {
    const value = longHexMatch[1]
    const r = parseInt(value.slice(0, 2), 16)
    const g = parseInt(value.slice(2, 4), 16)
    const b = parseInt(value.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${safeOpacity})`
  }

  return `color-mix(in srgb, ${normalized} ${Math.round(safeOpacity * 100)}%, transparent)`
}

function RevealToken({ token, index, total, progress, activeColor, dimColor, isReducedMotion }) {
  const isWhitespace = /^\s+$/.test(token)
  const start = index / Math.max(total, 1)
  const end = (index + 1) / Math.max(total, 1)
  const localProgress = useTransform(progress, [start, end], [0, 1], { clamp: true })
  const color = useTransform(localProgress, [0, 1], [dimColor, activeColor])

  if (isWhitespace) {
    return (
      <span aria-hidden="true" style={{ whiteSpace: 'pre' }}>
        {token}
      </span>
    )
  }

  if (isReducedMotion) {
    return (
      <span aria-hidden="true" className="inline-block" style={{ color: activeColor }}>
        {token}
      </span>
    )
  }

  return (
    <motion.span
      aria-hidden="true"
      className="inline-block"
      style={{ color, whiteSpace: 'pre' }}
    >
      {token}
    </motion.span>
  )
}

export default function ScrollTextReveal({
  text,
  mode = 'word',
  activeColor = '#000000',
  dimColor = '#737373',
  dimOpacity = 0.28,
  scrollStart = 0.9,
  scrollEnd = 0.2,
  className = '',
}) {
  const rootRef = useRef(null)
  const isReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: [`start ${scrollStart}`, `start ${scrollEnd}`],
  })
  const tokens = useMemo(
    () => (mode === 'word' ? text.split(/(\s+)/) : Array.from(text)),
    [mode, text]
  )
  const transparentDimColor = useMemo(
    () => toTransparentColor(dimColor, dimOpacity),
    [dimColor, dimOpacity]
  )

  return (
    <p
      ref={rootRef}
      className={className}
      role="text"
      aria-label={text}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      <span aria-hidden="true">
        {tokens.map((token, index) => (
          <RevealToken
            key={`${token}-${index}`}
            token={token}
            index={index}
            total={tokens.length}
            progress={scrollYProgress}
            activeColor={activeColor}
            dimColor={transparentDimColor}
            isReducedMotion={isReducedMotion}
          />
        ))}
      </span>
    </p>
  )
}
