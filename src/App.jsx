import { useState, useCallback, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeBanner from './components/MarqueeBanner'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import ProjectDetailPage from './components/ProjectDetailPage'

import { projectService, PROJECTS_CONFIG } from './services/projectService'
import { portfolioService } from './services/portfolioService'

function readProjectIdFromHash() {
  const match = window.location.hash.match(/^#\/project\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

export default function App() {
  const [projects] = useState(() => projectService.getAllProjects())
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [projectId, setProjectId] = useState(readProjectIdFromHash)

  const heroData = portfolioService.getHeroData()
  const marqueeItems = portfolioService.getMarqueeItems()
  const educationData = portfolioService.getEducationData()
  const contactData = portfolioService.getContactData()

  const activeProject = projectId ? projectService.getProjectById(projectId) : null

  const handlePrev = useCallback(() => {
    setActiveProjectIndex((prev) => projectService.getPrevIndex(prev))
  }, [])

  const handleNext = useCallback(() => {
    setActiveProjectIndex((prev) => projectService.getNextIndex(prev))
  }, [])

  const handleTogglePause = useCallback(() => {
    setIsPaused((prev) => !prev)
  }, [])

  const handleSelectProject = useCallback((index) => {
    setActiveProjectIndex(index)
  }, [])

  // Hash routing for the project detail page (#/project/:id)
  useEffect(() => {
    const handleHashChange = () => {
      const nextProjectId = readProjectIdFromHash()
      setProjectId(nextProjectId)

      if (nextProjectId) {
        window.scrollTo({ top: 0, behavior: 'auto' })
      } else if (window.location.hash === '#projects') {
        requestAnimationFrame(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'auto', block: 'start' })
        })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Auto-play timer for project carousel (5s delay)
  useEffect(() => {
    if (isPaused || projectId) return
    const timer = setInterval(() => {
      handleNext()
    }, PROJECTS_CONFIG.AUTO_PLAY_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [isPaused, projectId, handleNext])

  if (projectId && activeProject) {
    return <ProjectDetailPage project={activeProject} />
  }

  return (
    <div className="w-full min-h-[100svh] overflow-x-hidden bg-white flex flex-col items-center">
      <main className="w-full relative bg-white flex flex-col items-center">
        <HeroSection data={heroData} />
        <MarqueeBanner items={marqueeItems} isPaused={isPaused} />
        <ProjectsSection
          projects={projects}
          activeIndex={activeProjectIndex}
          isPaused={isPaused}
          onPrev={handlePrev}
          onNext={handleNext}
          onTogglePause={handleTogglePause}
          onSelectProject={handleSelectProject}
        />
        <EducationSection data={educationData} />
        <ContactSection data={contactData} />
      </main>
    </div>
  )
}
