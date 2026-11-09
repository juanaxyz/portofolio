import { motion, useReducedMotion } from 'framer-motion'
import portraitImg from '../assets/figma/profile-bw.png'
import ImageReveal from './ImageReveal'

export default function HeroSection({ data }) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const greetingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

const subtitleVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      },
    },
  }

const titleVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.3,
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
      },
    },
  }

  const titleCharacterVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative w-full min-h-[calc(100svh-120px)] bg-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-20 lg:py-28 flex items-center justify-center" id="home">
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex-1 max-w-2xl xl:max-w-3xl">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black m-0" 
          variants={greetingVariants}>
            {data.greeting}
          </motion.h2>
          <motion.p className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed tracking-normal text-neutral-600 mt-3 mb-0" variants={subtitleVariants}>
            {data.subtitle}
          </motion.p>
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.08] tracking-tight text-black mt-8 sm:mt-10 mb-0" variants={titleVariants} aria-label={data.title}>
            {data.title.split(' ').map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}`}
                className="inline-block whitespace-nowrap"
              >
                {word.split('').map((character, characterIndex) => (
                  <motion.span
                    key={`${character}-${characterIndex}`}
                    className="inline-block"
                    variants={titleCharacterVariants}
                    aria-hidden="true"
                  >
                    {character}
                  </motion.span>
                ))}
                {wordIndex < data.title.split(' ').length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div className="flex items-center gap-6 sm:gap-8 mt-10 sm:mt-14" variants={titleVariants}>
            <a
              href={data.viewProjectUrl}
              className="inline-flex items-center justify-center w-40 sm:w-44 h-12 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded font-semibold text-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Project
            </a>
            <a
              href={data.downloadCvUrl}
              className="inline-flex items-center justify-center w-40 sm:w-44 h-12 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-semibold text-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="w-[320px] sm:w-95 lg:w-110 xl:w-120 h-105 sm:h-120 lg:h-[540px] xl:h-[580px] relative shrink-0 flex items-center justify-center bg-neutral-100 rounded-2xl overflow-hidden shadow-sm"
          variants={greetingVariants}
          whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageReveal
            image={{
              src: portraitImg,
              alt: 'Juana portrait',
            }}
            direction="top"
            durationReveal={2.0}
            durationScale={1.8}
            scaleFrom={1.2}
            easeReveal="cinematic"
            easeScale="expo"
            placeholderBackground="#f5f5f5"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
