import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { projectService } from '../services/projectService'

export default function CardStack3D({
  items,
  activeIndex,
  onCardClick,
  offset = 24,
  scaleStep = 0.05,
  dimStep = 0.14,
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-[540px] h-[440px] sm:h-[460px] lg:h-[380px] xl:h-[480px] flex items-center justify-center [perspective:1000px]">
      <div className="relative w-[320px] sm:w-[400px] lg:w-[320px] xl:w-[440px] h-[360px] sm:h-[380px] lg:h-[320px] xl:h-[400px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => {
            const distance = (idx - activeIndex + items.length) % items.length
            const isFront = distance === 0
            const brightness = Math.max(0.2, 1 - distance * dimStep)
            const zIndex = items.length - distance

            return (
              <motion.div
                key={item.id}
                layout={!shouldReduceMotion}
                className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden select-none cursor-pointer"
                style={{
                  zIndex,
                  transformOrigin: 'top right',
                }}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.85, y: shouldReduceMotion ? 0 : 30 }}
                animate={{
                  opacity: 1,
                  x: shouldReduceMotion ? 0 : distance * 18,
                  y: shouldReduceMotion ? 0 : distance * offset,
                  scale: shouldReduceMotion ? (isFront ? 1 : 0.96) : 1 - distance * scaleStep,
                  filter: `brightness(${brightness})`,
                  rotateZ: shouldReduceMotion ? 0 : distance * -1.5,
                }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8, y: shouldReduceMotion ? 0 : -40 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 24,
                }}
                whileHover={
                  isFront
                    ? {
                        scale: shouldReduceMotion ? 1 : 1.02,
                        y: shouldReduceMotion ? 0 : -6,
                      }
                    : { y: shouldReduceMotion ? 0 : distance * offset - 6 }
                }
                whileTap={isFront && !shouldReduceMotion ? { scale: 0.98 } : {}}
                onClick={() => onCardClick?.(idx)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 flex flex-col justify-between">
                  {/* Card Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-500 hover:scale-105"
                  />
                  {/* Solid dark scrim for contrast without gradient */}
                  <div className="absolute inset-0 bg-neutral-950/60" />

                  {/* Card Header Content */}
                  <div className="relative z-10 p-6 flex justify-between items-center">
                    <span className="text-sm font-semibold text-white px-3 py-1 rounded-full bg-neutral-800">
                      {projectService.getTechStack(item).map(({ name }) => name).join(' / ')}
                    </span>
                    <span className="text-sm font-medium text-neutral-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Card Footer Content */}
                  <div className="relative z-10 p-6">
                    <span className="text-sm font-normal text-neutral-300 block mb-1">
                      {item.tagline || 'Project Overview'}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-semibold leading-tight text-white m-0 line-clamp-2">
                      {item.title}
                    </h4>

                    {isFront && (
                      <div className="mt-3 text-xs text-neutral-400">
                        Click card or arrows to rotate
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
