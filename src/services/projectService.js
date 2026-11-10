/**
 * Service to manage portfolio projects data and operations.
 * Allows easy modification, fetching, and integration with CMS or API in the future.
 */

import threadsImage from '../assets/images/threads.png'
import sentimentImage from '../assets/images/sentiment-shopee.png'
import umahKawanImage from '../assets/images/umahkawan.png'
import umahkawandetail from '../assets/images/umahkawan_cart.png'
import sistemInformasiPenyakitImage from '../assets/images/sistem-informasi-penyakit.png'
import sistemInformasiPenyakitDetail from '../assets/images/sistem-informasi-penyakit-result.png'
import {
  siBootstrap,
  siCss,
  siHtml5,
  siJavascript,
  siJquery,
  siLibreoffice,
  siMysql,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
} from 'simple-icons'

export const PROJECTS_CONFIG = {
  AUTO_PLAY_INTERVAL_MS: 5000,
}

const TECH_STACK_ICONS = {
  Bootstrap: siBootstrap,
  CSS: siCss,
  Excel: siLibreoffice,
  HTML: siHtml5,
  JavaScript: siJavascript,
  jQuery: siJquery,
  MySQL: siMysql,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  Python: siPython,
  React: siReact,
}



const PROJECTS_COLLECTION = [
  {
    id: 'threads-scraper',
    title: 'Threads Scraper',
    description: 'A web scraper for collecting data from Threads, a social media platform.',
    role: 'Full Stack Developer',
    year: '2026',
    tech: {'Python' : siPython},
    link: 'https://github.com/juanaxyz/Threads-Scraper',
    image: threadsImage,
    tagline: 'Collaborative Filtering Engine',
    caseStudy: {
      live_view : null,
      problem:
        'Threads holds a lot of honest, fast-moving public conversation, but the feed is built for reading, not analysis. I wanted a clean, repeatable way to collect threads and replies without copying them by hand.',
      approach: {
        summary:
          'A small, configurable crawler that discovers conversations, follows reply chains, and writes everything into one predictable schema.',
        steps: [
          {
            title: 'Map the data',
            description: 'Study thread, reply, and profile structures before writing a selector.',
          },
          {
            title: 'Build the crawler',
            description: 'Traverse threads and reply chains with retries and polite delays.',
          },
          {
            title: 'Normalise records',
            description: 'Flatten authors, timestamps, text, and engagement into one schema.',
          },
          {
            title: 'Automate runs',
            description: 'Export repeatable JSON and CSV snapshots for later analysis.',
          },
        ],
      },
      result:
        'A command-line scraper that turns public Threads conversations into tidy datasets. It became the data source for my later sentiment and NLP experiments.',
      learnings:
        'Most of the work was not scraping, but recovering gracefully. Selectors change, requests fail, and rate limits are real; backoff and clean logging mattered more than raw speed.',
      nextSteps:
        'Add incremental sync and a small dashboard for exploring collected threads without opening a notebook.',
    },
  },
  {
    id: 'umahkawan',
    title: 'UmahKawan',
    description:
      'A responsive web ordering system for a local Balinese culinary business, featuring authentic rujak, tipat cantok, plecing, and drinks.',
    role: 'Full Stack Developer',
    year: '2025',
    tech: 'PHP / HTML / CSS / JavaScript / jQuery / Bootstrap / MySQL',
    link: 'https://github.com/GeraldHizkia/UmahKawan-TA-PROGNET',
    image: umahKawanImage,
    resultImage: umahkawandetail,
    tagline: 'Authentic Balinese Food Ordering',
    caseStudy: {
      problem:
        'A local culinary business needed a simple way for customers to discover its menu, place orders, and find the warung without relying on informal messages alone.',
      approach: {
        summary:
          'A full-featured ordering website that brings the menu, cart, checkout, WhatsApp contact, and location into one accessible experience.',
        steps: [
          {
            title: 'Showcase the menu',
            description: 'Organise rujak, tipat cantok, plecing, and drinks with clear prices and imagery.',
          },
          {
            title: 'Build the cart',
            description: 'Let customers add items, adjust quantities, and review subtotals before ordering.',
          },
          {
            title: 'Handle checkout',
            description: 'Collect customer details and payment preferences for order processing.',
          },
          {
            title: 'Connect the business',
            description: 'Add WhatsApp ordering and a Google Maps location so customers can reach the warung quickly.',
          },
        ],
      },
      result:
        'A responsive e-commerce-style website for UmahKawan with menu browsing, dynamic cart calculations, checkout storage in MySQL, WhatsApp ordering, and map integration.',
      learnings:
        'A small business ordering flow needs to prioritise speed and clarity. Combining a familiar menu layout with direct WhatsApp communication keeps the digital experience close to the way the business already serves its customers.',
      nextSteps:
        'Add a dedicated order status view, improve inventory availability, and connect payment confirmation to the administration workflow.',
    },
  },
  {
    id: 'nlp-sentiment',
    title: 'Shopee Sentiment Analysis Pipeline',
    description: 'An end-to-end machine learning sentiment analysis application processing Indonesian social commentar, FastAPI inference endpoints, and automated data crawlers.',
    role: 'AI Engineer',
    year: '2025',
    tech: {
      'Python' : siPython,
      'Excel' : siLibreoffice,
    },
    link: 'https://github.com/juanaxyz/shopee-sentiment-analysis.git',
    image: sentimentImage,
    tagline: 'Indonesian LLM Fine-tuning',
    caseStudy: {
      problem:
        'Indonesian marketplace reviews are noisy: slang, code-switching, emoji, and sarcasm. Off-the-shelf sentiment models misread a large share of them, which makes review dashboards unreliable.',
      approach: {
        summary:
          'An end-to-end pipeline that treats data quality as the main engineering problem and keeps the model close to the people analysing the output.',
        steps: [
          {
            title: 'Collect reviews',
            description: 'Crawl product reviews and keep the raw text untouched.',
          },
          {
            title: 'Clean and label',
            description: 'Normalise slang, strip noise, and build a consistent label set.',
          },
          {
            title: 'Fine-tune the model',
            description: 'Train an Indonesian transformer on the curated dataset.',
          },
          {
            title: 'Serve predictions',
            description: 'Expose the model through a FastAPI inference endpoint.',
          },
        ],
      },
      result:
        'An end-to-end pipeline that goes from crawler to served predictions, with an evaluation report that shows where the model is reliable and where it still struggles.',
      learnings:
        'Label quality moved the metrics more than any architecture change. A smaller, carefully reviewed dataset beat a larger, noisy one.',
      nextSteps:
        'Move from document-level sentiment to aspect-based sentiment, then add drift monitoring for new review vocabulary.',
    },
  },
  {
    id: 'sistem-informasi-penyakit',
    title: 'Sistem Informasi Penyakit',
    description: 'Aplikasi web edukasi & bantuan deteksi penyakit berbasis paru-paru. Pengguna dapat menjelajahi peta tubuh interaktif untuk menemukan penyakit dan organ terkait, melihat detail penyakit (artikel edukasi, patogen penyebab, bagian tubuh), mencari penyakit berdasarkan kata kunci, serta melewati alur analisis foto X-ray yang menghasilkan riwayat + prediksi model AI. Panel admin dipakai untuk mengelola master penyakit, artikel edukasi, patogen, dan detail dashboard.',
    role: 'full-stack developer',
    year: '2026',
    tech: {
      'JavaScript' : siJavascript,
      'React' : siReact,
      'Python' : siPython,
      'PostgreSQL' : siPostgresql,
    },
    link: 'https://github.com/juanaxyz/Sistem-Informasi-Penyakit',
    image: sistemInformasiPenyakitImage,
    resultImage : sistemInformasiPenyakitDetail,
    tagline: 'chatbot, AI-assisted X-ray analysis, and interactive body map',
    caseStudy: {
      problem:
        'Health information is scattered across articles, PDFs, and search results. For non-experts it is hard to start from a symptom or an organ, and X-ray results are even harder to place in context.',
      approach: {
        summary:
          'One guided web app that connects diseases, organs, educational articles, and an AI-assisted X-ray flow behind a structure editors can maintain.',
        steps: [
          {
            title: 'Model the content',
            description: 'Structure diseases, pathogens, organs, and articles as related records.',
          },
          {
            title: 'Build the body map',
            description: 'Create an interactive map that filters diseases by organ.',
          },
          {
            title: 'Add the X-ray flow',
            description: 'Guide uploads into an AI-assisted analysis with saved history.',
          },
          {
            title: 'Ship an admin panel',
            description: 'Let editors manage diseases, articles, and dashboard data.',
          },
        ],
      },
      result:
        'One web app where people can explore diseases through a body map, read curated explanations, search by keyword, and run an AI-assisted X-ray analysis with a saved history.',
      learnings:
        'Health interfaces need plain language, visible disclaimers, and data structures a non-engineer editor can maintain. The admin panel mattered as much as the public site.',
      nextSteps:
        'Bring in clinician review for the content and validate the X-ray model against a broader, documented dataset.',
    },
  },
]

/**
 * Project Service API
 */
export const projectService = {
  /**
   * Get all portfolio projects
   * @returns {Array} List of project objects
   */
  getAllProjects() {
    return [...PROJECTS_COLLECTION]
  },

  /**
   * Get a project by its identifier
   * @param {string} id
   * @returns {Object|undefined}
   */
  getProjectById(id) {
    return PROJECTS_COLLECTION.find((project) => project.id === id)
  },

  /**
   * Split a project's tech label into individual stack items
   * @param {Object} project
   * @returns {Array<string>}
   */
  getTechStack(project) {
    if (!project?.tech) return []
    const stack = typeof project.tech === 'object'
      ? Object.entries(project.tech).map(([name, icon]) => ({ name, icon }))
      : project.tech
      .split('/')
      .map((item) => item.trim())
      .filter(Boolean)

    return stack.map((item) => {
      const tech = typeof item === 'string' ? { name: item } : item
      return {
        ...tech,
        icon: TECH_STACK_ICONS[tech.name] ?? tech.icon ?? null,
      }
    })
  },

  /**
   * Calculate next index cyclically
   * @param {number} currentIndex
   * @returns {number}
   */
  getNextIndex(currentIndex) {
    return (currentIndex + 1) % PROJECTS_COLLECTION.length
  },

  /**
   * Calculate previous index cyclically
   * @param {number} currentIndex
   * @returns {number}
   */
  getPrevIndex(currentIndex) {
    return (currentIndex - 1 + PROJECTS_COLLECTION.length) % PROJECTS_COLLECTION.length
  },
}
