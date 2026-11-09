import { motion } from 'framer-motion'
import TimelineAnimatedPath from './TimelineAnimatedPath'
import udayanaLogo from '../assets/figma/udayana-logo.png'
import smanLogo from '../assets/figma/sman-logo.png'
import udayanaCampusImg from '../assets/images/udayana-rectorate-building.jpg'

const LOGO_MAP = {
  udayana: udayanaLogo,
  sman: smanLogo,
}

export default function EducationSection({ data }) {
  return (
    <section className="relative w-full bg-neutral-50 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 sm:py-24 lg:py-32 flex justify-center" id="education">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 max-w-2xl pt-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight text-balance text-neutral-900 m-0 mb-7">
              {data.headline}
            </h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-pretty tracking-normal text-neutral-700 m-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.subtext}
            </motion.p>
          </div>
          <figure className="w-full lg:w-[480px] xl:w-[540px] aspect-[1.4] bg-neutral-100 rounded-2xl overflow-hidden shrink-0 relative group m-0">
            <img
              src={udayanaCampusImg}
              alt="Udayana University Rectorate Building"
              className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-neutral-900/10" />
            <figcaption className="absolute bottom-0 inset-x-0 text-xs text-white/90 bg-neutral-900/70 px-4 py-3">
              Universitas Udayana · Kampus Bukit Jimbaran
            </figcaption>
          </figure>
        </motion.div>

        <div className="w-full h-px bg-neutral-200 my-16 sm:my-20 lg:my-24" />

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 lg:gap-24 relative">
          <motion.div
            className="lg:pr-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 m-0 mb-10">
              Education
            </h3>

            {data.formal.map((item) => (
              <div
                key={item.institution}
                className={`group rounded-2xl ${item.note ? 'bg-white px-4 -mx-4' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-4 sm:gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={LOGO_MAP[item.logo]}
                      alt={item.institution}
                      className="w-10 h-10 object-contain shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-balance text-neutral-900 m-0">
                        {item.institution}
                      </h4>
                      <p className="text-sm text-neutral-600 mt-1 mb-0">
                        {item.major}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right pl-14 sm:pl-0">
                    <p className="text-sm font-medium text-neutral-800 m-0">{item.period}</p>
                    {item.note && <p className="text-xs text-neutral-500 mt-1 mb-0">{item.note}</p>}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="lg:pl-8 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 m-0 mb-10">
              Timeline
            </h3>

            <TimelineAnimatedPath entries={data.timeline} />
          </motion.div>
        </div>
      </div>
    </section>
    )
}
