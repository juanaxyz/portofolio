import { Fragment, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import backArrow from '../assets/figma/back-arrow.svg'
import techIcon from '../assets/figma/tech-icon.png'
import { projectService } from '../services/projectService'

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
      image: project.image,
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
    <main className="w-full min-h-[100svh] bg-white">
      <div className="mx-auto w-full max-w-[1192px] px-6 pt-10 pb-20 sm:px-10 lg:px-0 lg:pt-[55px] lg:pb-28">
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
            <h1 className="m-0 text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] text-balance text-neutral-900 sm:text-[42px] lg:text-[48px] lg:leading-[60px]">
              {project.title}
            </h1>
            <p className="mt-4 mb-0 max-w-[541px] text-base leading-[26px] text-neutral-700">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[38px] w-[145px] items-center justify-center rounded bg-neutral-900 px-4 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-neutral-800"
              >
                Live View
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[38px] w-[145px] items-center justify-center rounded border border-neutral-500 bg-white px-4 text-sm font-semibold text-neutral-900 no-underline transition-colors duration-200 hover:bg-neutral-100"
              >
                Github
              </a>
            </div>
          </div>

          <div className="w-full lg:-mt-5 lg:w-[596px]">
            <div className="aspect-[596/418] w-full overflow-hidden rounded-[18px] bg-neutral-100 lg:h-[418px]">
              <ProjectImage src={project.image} alt={`${project.title} preview`} />
            </div>
          </div>
        </motion.div>

        {/* Tech stack band */}
        <div className="mt-12 border-y-2 border-neutral-900 lg:mt-[51px]">
          <div className="flex flex-col gap-6 py-7 lg:min-h-[166px] lg:flex-row lg:items-center lg:gap-0 lg:py-0">
            <p className="m-0 shrink-0 text-lg leading-[30px] text-neutral-900">Tech Stack</p>
            <div aria-hidden="true" className="hidden h-[60px] w-px bg-neutral-900 lg:ml-10 lg:block" />
            <div
              className={`flex flex-wrap items-center gap-x-8 gap-y-5 lg:pl-[103px] ${
                techStack.length > 4 ? 'lg:gap-x-12' : 'lg:gap-x-[93px]'
              }`}
            >
              {techStack.map((tech, index) => (
                <Fragment key={`${tech}-${index}`}>
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-[22px] w-px shrink-0 bg-neutral-900 lg:block"
                    />
                  )}
                  <div className="flex shrink-0 items-center gap-3">
                    <img
                      src={techIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-[34px] w-[34px] object-contain lg:h-[42px] lg:w-[42px]"
                    />
                    <span className="text-xs text-neutral-900">{tech}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Case study sections */}
        <div className="mt-12 lg:mt-[51px]">
          {sections.map((section, index) => (
            <motion.section
              key={section.number}
              className={index === 0 ? '' : 'border-t border-neutral-200'}
              {...reveal(0.05)}
            >
              <div
                className={`grid grid-cols-1 gap-8 py-10 lg:grid-cols-[373px_1fr] lg:gap-0 lg:pb-[52px] ${
                  index === 0 ? 'lg:pt-0' : 'lg:pt-[52px]'
                }`}
              >
                <div className="min-w-0 lg:min-h-[327px]">
                  <p className="m-0 text-[32px] font-semibold leading-[44px] tracking-[-0.015em] text-neutral-900">
                    {section.number}
                  </p>
                  <h2 className="mt-1 mb-0 text-[36px] font-semibold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[42px] lg:text-[48px] lg:leading-[60px]">
                    {section.title}
                  </h2>
                  <div aria-hidden="true" className="mt-5 h-px w-[116px] bg-neutral-900" />
                  <p className="mt-5 mb-0 max-w-[370px] text-lg leading-[30px] text-neutral-700">
                    {section.caption}
                  </p>
                </div>

                <div className="min-w-0 lg:border-l lg:border-neutral-200 lg:pl-9 lg:pt-[148px]">
                  {section.steps ? (
                    <div>
                      {section.summary && (
                        <p className="m-0 mb-8 max-w-[620px] text-lg leading-[30px] text-neutral-700">
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
                            <p className="mt-0 mb-0 text-xl font-semibold leading-[30px] tracking-[-0.005em] text-neutral-900">
                              {step.title}
                            </p>
                            <p className="mt-2 mb-0 max-w-[147px] text-xs leading-[18px] text-neutral-600">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {section.body && (
                        <p className="m-0 max-w-[560px] text-lg leading-[30px] text-neutral-700">
                          {section.body}
                        </p>
                      )}
                      {section.image !== undefined && (
                        <div className="mt-8 aspect-[422/253] w-full max-w-[422px] overflow-hidden bg-neutral-200 lg:ml-[187px]">
                          <ProjectImage
                            src={section.image}
                            alt={`${project.title} result`}
                            iconClassName="h-12 w-12 opacity-20"
                          />
                        </div>
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
