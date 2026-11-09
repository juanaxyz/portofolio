import { motion } from 'framer-motion'
import iconMail from '../assets/figma/icon-mail.svg'
import iconArrowUpRight from '../assets/figma/icon-arrow-up-right.svg'
import iconLinkedin from '../assets/figma/icon-linkedin.svg'
import iconInstagram from '../assets/figma/icon-instagram.svg'
import iconGithub from '../assets/figma/icon-github.svg'

const ICON_MAP = {
  mail: { src: iconMail, width: 22, height: 18 },
  linkedin: { src: iconLinkedin, width: 24, height: 24 },
  instagram: { src: iconInstagram, width: 24, height: 24 },
  github: { src: iconGithub, width: 24, height: 24 },
}

export default function ContactSection({ data }) {
  return (
    <section className="relative w-full bg-neutral-900 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 sm:py-24 lg:py-32 flex justify-center" id="contact">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight text-balance text-neutral-100 m-0 mb-6">
            {data.headline}
          </h2>
          <div className="text-base sm:text-lg xl:text-xl leading-relaxed text-pretty text-neutral-400">
            {data.lines.map((line, idx) => (
              <p key={idx} className="m-0 mb-1">{line}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full sm:w-3xl bg-neutral-50 rounded-2xl p-6 sm:p-8 shrink-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h4 className="text-base font-semibold text-neutral-900 m-0 mb-4">
            Get In Touch
          </h4>
          <div className="flex flex-col">
            {data.channels.map((ch) => {
              const iconMeta = ICON_MAP[ch.icon]
              const isExternal = ch.url.startsWith('http')

              return (
                <div key={ch.id}>
                  <div className="w-full h-px bg-neutral-200" />
                  <motion.a
                    href={ch.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="flex items-center justify-between py-3.5 no-underline transition-opacity hover:opacity-75"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-7 h-7 flex items-center justify-center">
                        <img
                          src={iconMeta.src}
                          alt=""
                          width={iconMeta.width}
                          height={iconMeta.height}
                        />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-neutral-900">
                          {ch.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {ch.detail}
                        </span>
                      </div>
                    </div>
                    <img
                      src={iconArrowUpRight}
                      alt=""
                      className="w-5 h-5"
                    />
                  </motion.a>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
