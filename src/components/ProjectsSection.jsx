import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import CardStack3D from './CardStack3D'
import { projectService } from '../services/projectService'

function ProjectDetails({ project }) {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight text-balance text-neutral-900 m-0 mb-6 break-words">
        {project.title}
      </h2>
      <p className="text-base sm:text-lg xl:text-xl leading-relaxed text-pretty text-neutral-700 m-0 mb-8 max-w-xl">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8">
        <span className="text-sm font-semibold text-neutral-900">{project.role}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
        <span className="text-sm font-semibold text-neutral-900">{project.year}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
        <span className="text-sm font-semibold text-neutral-900">
          {projectService.getTechStack(project).map(({ name }) => name).join(' / ')}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-40 sm:w-44 h-12 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-semibold text-sm transition-transform duration-200 hover:-translate-y-0.5"
        >
          View GitHub
        </a>
        <a
          href={`#/project/${project.id}`}
          className="inline-flex items-center justify-center h-12 px-6 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 text-neutral-900 hover:text-white rounded font-semibold text-sm transition-colors duration-200"
        >
          Case Study
        </a>
      </div>
    </>
  )
}

export default function ProjectsSection({
  projects,
  activeIndex,
  isPaused,
  onPrev,
  onNext,
  onTogglePause,
  onSelectProject,
}) {
  const activeProject = projects[activeIndex]
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full min-h-[100svh] bg-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 sm:py-24 lg:py-32 flex flex-col justify-center items-center" id="projects">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <motion.h3
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 m-0"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Projects
            </motion.h3>
            <p className="text-sm text-neutral-500 m-0 mt-2">
              Featured engineering & research work
            </p>
          </div>

          {/* Minimal cohesive navigation controls */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tabular-nums text-neutral-400 mr-3">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>

            <motion.button
              type="button"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              onClick={onPrev}
              aria-label="Previous project"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </motion.button>

            <motion.button
              type="button"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              onClick={onTogglePause}
              aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              style={{ opacity: isPaused ? 0.6 : 1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              {isPaused ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </motion.button>

            <motion.button
              type="button"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              onClick={onNext}
              aria-label="Next project"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile: card first (order-1), text second (order-2); Desktop: text first, card second */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1 flex-1 min-w-0 w-full max-w-xl xl:max-w-2xl">
            {/*
              Invisible copies of every project's details share one grid cell and
              reserve the height of the tallest one. The visible details are
              absolutely positioned on top, so switching projects never changes
              the section height.
            */}
            <div className="relative">
              <div className="grid" aria-hidden="true">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="invisible pointer-events-none"
                    style={{ gridArea: '1 / 1' }}
                    inert
                  >
                    <ProjectDetails project={project} />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectDetails project={activeProject} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="order-1 lg:order-2 shrink-0 flex justify-center items-start w-full lg:w-[380px] xl:w-[540px] lg:self-start">
            <CardStack3D
              items={projects}
              activeIndex={activeIndex}
              onCardClick={onSelectProject}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
