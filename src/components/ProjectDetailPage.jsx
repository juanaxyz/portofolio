import { Fragment, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import backArrow from '../assets/figma/back-arrow.svg'
import { projectService } from '../services/projectService'
import SVGPathAnimation from './SVGPathAnimation'


function ProjectImage({ src, alt }) {
  if (!src) {
    return <div className="h-full w-full bg-neutral-200" aria-hidden="true" />
  }

  return <img src={src} alt={alt} className="h-full w-full object-cover" />
}

export default function ProjectDetailPage({ project }) {
  const shouldReduceMotion = useReducedMotion()
  const caseStudy = project.caseStudy ?? {}
  const approach = caseStudy.approach ?? {}
  const techStack = projectService.getTechStack(project)
  const techStackRef = useRef(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project.title} — Juana`
    return () => {
      document.title = previousTitle
    }
  }, [project.title])

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1],
    },
  })

  const scrollTechStack = (direction) => {
    techStackRef.current?.scrollBy({
      left: direction * 180,
      behavior: 'smooth',
    })
  }

  const sections = [
    {
      number: '01',
      title: 'The Problem',
      caption: 'What problem was I trying to solve?',
      body: caseStudy.problem,
    },
    {
      number: '02',
      title: 'My Approach',
      caption: 'How did I solve it?',
      summary: approach.summary,
      steps: approach.steps,
    },
    {
      number: '03',
      title: 'The Result',
      caption: 'What was the outcome?',
      body: caseStudy.result,
      image: project.resultImage ?? project.image,
    },
    {
      number: '04',
      title: 'Key Learnings',
      caption: 'What did I learn?',
      body: caseStudy.learnings,
    },
    {
      number: '05',
      title: 'Next Steps',
      caption: 'What’s next?',
      body: caseStudy.nextSteps,
    },
  ]

  return (
    <main className="w-full min-h-svh bg-white">
      <div className="mx-auto w-full max-w-298 px-6 pt-10 pb-20 sm:px-10 lg:px-0 lg:pt-13.75 lg:pb-28">
        <a
          href="#projects"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 no-underline"
          aria-label="Back to projects"
        >
          <img
            src={backArrow}
            alt=""
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Back
        </a>

        {/* Project header */}
        <motion.div
          className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-[541px_596px] lg:justify-between lg:gap-0"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="min-w-0">
            <h1 className="m-0 text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] text-balance text-neutral-900 sm:text-[42px] lg:text-[48px] lg:leading-15">
              {project.title}
            </h1>
            <p className="mt-4 mb-0 max-w-135.25 text-base leading-6.5 text-neutral-700">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              
              {project.live_view && (
                <a
                  href={project.live_view}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9.5 w-36.25 items-center justify-center rounded bg-neutral-900 px-4 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-neutral-800"
                >
                Live View
              </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9.5 w-36.25 items-center justify-center rounded border border-neutral-500 bg-white px-4 text-sm font-semibold text-neutral-900 no-underline transition-colors duration-200 hover:bg-neutral-100"
              >
                Github
              </a>
            </div>
          </div>

          <div className="w-full lg:-mt-5 lg:w-149">
            <div className="aspect-596/418 w-full overflow-hidden rounded-[18px] bg-neutral-100 lg:h-104.5">
              <ProjectImage src={project.image} alt={`${project.title} preview`} />
            </div>
          </div>
        </motion.div>

        {/* Tech stack band */}
        <div className="mt-12 lg:mt-12.75">
          <SVGPathAnimation
            svgPath="M0 1 H100"
            viewBox="0 0 100 2"
            className="h-0.5 w-full"
            strokeWidth={0.5}
            bgColor="#E5E7EB"
            animColor="#111827"
            trigger="inView"
            playback="once"
            duration={1.6}
            lineCap="round"
          />

          <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5,
            ease : 'ease-in-out',
           }}
          
          className="flex flex-col gap-6 py-7 lg:min-h-41.5 lg:flex-row lg:items-center lg:gap-0 lg:py-0">
            <p className="m-0 shrink-0 text-lg leading-7.5 text-neutral-900">Tech Stack</p>
            <div aria-hidden="true" className="hidden h-15 w-px bg-neutral-900 lg:ml-10 lg:block" />
            <div
              ref={techStackRef}
              className="tech-stack-scroll min-w-0 overflow-x-auto lg:pl-25.75"
              tabIndex="0"
              aria-label="Technology stack"
            >
              <div
                className={`flex min-w-max items-center gap-x-8 gap-y-5 pr-6 py-3 lg:py-4 ${
                  techStack.length > 4 ? 'lg:gap-x-12' : 'lg:gap-x-23.25'
                }`}
              >
                {techStack.map((tech, index) => (
                  <Fragment key={`${tech.name}-${index}`}>
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-5.5 w-px shrink-0 bg-neutral-900 lg:block"
                      />
                    )}
                    <div className="flex shrink-0 items-center gap-3">
                      {tech.icon ? (
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label={`${tech.name} icon`}
                          className="h-8.5 w-8.5 fill-current text-neutral-900 lg:h-10.5 lg:w-10.5"
                        >
                          <path d={tech.icon.path} />
                        </svg>
                      ) : null}
                      <span className="text-xs text-neutral-900">{tech.name}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTechStack(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                aria-label="Scroll technology stack left"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTechStack(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                aria-label="Scroll technology stack right"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>

          <SVGPathAnimation
            svgPath="M100 0 H0"
            viewBox="0 0 100 2"
            className="h-0.5 w-full"
            strokeWidth={0.5}
            bgColor="#E5E7EB"
            animColor="#111827"
            trigger="inView"
            playback="once"
            duration={1.6}
            lineCap="round"
          />
        </div>

        {/* Case study sections */}
        <div className="mt-12 lg:mt-12.75">
          {sections.map((section, index) => (
            <motion.section
              key={section.number}
              className={index === 0 ? '' : 'border-t border-neutral-200'}
              {...reveal(0.05)}
            >
              <div
                className={`grid grid-cols-1 gap-8 py-10 md:grid-cols-[minmax(220px,0.78fr)_minmax(0,1.22fr)] md:gap-0 md:pb-13 ${
                  index === 0 ? 'lg:pt-0' : 'lg:pt-13'
                }`}
              >
                <div className="min-w-0 md:min-h-81.75">
                  <p className="m-0 text-[32px] font-semibold leading-11 tracking-[-0.015em] text-neutral-900">
                    {section.number}
                  </p>
                  <h2 className="mt-1 mb-0 text-[36px] font-semibold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-[42px] lg:text-[48px] lg:leading-15">
                    {section.title}
                  </h2>
                  <div aria-hidden="true" className="mt-5 h-px w-29 bg-neutral-900" />
                  <p className="mt-5 mb-0 max-w-92.5 text-lg leading-7.5 text-neutral-700">
                    {section.caption}
                  </p>
                </div>

                <div className="min-w-0 md:flex md:min-h-81.75 md:items-center md:border-l md:border-neutral-200 md:pl-9">
                  {section.steps ? (
                    <div>
                      {section.summary && (
                        <p className="m-0 mb-8 max-w-155 text-lg leading-7.5 text-neutral-700">
                          {section.summary}
                        </p>
                      )}
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4 xl:gap-x-0 xl:divide-x xl:divide-neutral-200">
                        {section.steps.map((step, stepIndex) => (
                          <div
                            key={`${step.title}-${stepIndex}`}
                            className="min-w-0 xl:px-4 xl:first:pl-0 xl:last:pr-0"
                          >
                            <p className="m-0 text-sm font-semibold leading-5 text-neutral-900">
                              {String(stepIndex + 1).padStart(2, '0')}
                            </p>
                            <p className="mt-0 mb-0 text-xl font-semibold leading-7.5 tracking-[-0.005em] text-neutral-900">
                              {step.title}
                            </p>
                            <p className="mt-2 mb-0 max-w-36.75 text-xs leading-4.5 text-neutral-600">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {section.image !== undefined && (
                        <div className="my-8 aspect-422/253 w-full overflow-hidden bg-neutral-200">
                          <ProjectImage
                            src={section.image}
                            alt={`${project.title} result preview`}
                            // iconClassName="w-full h-full"
                          />
                        </div>
                      )}
                      {section.body && (
                        <p className="m-0 w-full text-lg leading-7.5 text-neutral-700">
                          {section.body}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}
