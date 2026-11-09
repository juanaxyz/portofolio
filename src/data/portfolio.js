export const HERO_DATA = {
  greeting: 'Hi, I’m Juana',
  subtitle: 'Undergraduate Information Technology Student @Udayana University',
  title: 'I build software around data, AI, and practical problems.',
  viewProjectUrl: '#projects',
  downloadCvUrl: '#contact',
}

export const TICKER_ITEMS = [
  'Software Development',
  'Software Development',
  'Software Development',
  'Software Development',
  'Software Development',
  'Software Development',
  'Software Development',
  'Software Development',
]

export const PROJECTS_DATA = [
  {
    id: 'steam-rec',
    title: 'Steam Reccomendation System',
    description: 'A recommendation system that utilizes machine learning and collaborative filtering algorithms to analyze user play patterns and suggest personalized Steam gaming titles based on activity history and tags.',
    role: 'Full Stack Developer',
    year: '2024',
    tech: 'Python',
    link: 'https://github.com',
    themeColor: '#0a0a0a',
    accentColor: '#3b82f6',
    tagline: 'Collaborative Filtering Engine',
  },
  {
    id: 'nlp-sentiment',
    title: 'NLP Sentiment Analysis Pipeline',
    description: 'An end-to-end deep learning sentiment analysis application processing Indonesian social discussions using transformer-based models, FastAPI inference endpoints, and automated data crawlers.',
    role: 'AI Engineer',
    year: '2025',
    tech: 'PyTorch / FastAPI',
    link: 'https://github.com',
    themeColor: '#171717',
    accentColor: '#10b981',
    tagline: 'Indonesian LLM Fine-tuning',
  },
  {
    id: 'net-diagnostic',
    title: 'Campus Network Diagnostic Suite',
    description: 'A network monitoring and subnet diagnostic dashboard built for university laboratory infrastructure, streamlining LAN performance monitoring, ping metrics, and student assignments.',
    role: 'Network Engineer',
    year: '2026',
    tech: 'TypeScript / Linux',
    link: 'https://github.com',
    themeColor: '#262626',
    accentColor: '#f59e0b',
    tagline: 'Subnet & Packet Analytics',
  },
]

export const EDUCATION_DATA = {
  headline: 'Education & Learning',
  subtext: "Still a student, always a learner. I'm currently in my 5th semester at Udayana University, majoring in Information Technology. Alongside campus, I keep learning through online programs, self-study, and real-world projects to build the skills I need for the future.",
  formal: [
    {
      institution: 'Udayana University',
      major: 'Information Technology',
      period: '2024 - presents',
      note: 'semester 5',
      logo: 'udayana',
    },
    {
      institution: 'SMAN 1 Tampaksiring',
      major: 'Science (IPA)',
      period: '2021 - 2024',
      logo: 'sman',
    },
  ],
  timeline: [
    {
      period: '2021 - 2024',
      title: 'SMAN 1 Tampaksiring',
      desc: 'Science (IPA). Built the foundation for my curiosity in technology and problem solving.',
    },
    {
      period: '2024 - Present',
      title: 'Udayana University',
      desc: 'Information Technology. Pursuing core computing, algorithms, systems, and engineering principles.',
    },
    {
      period: 'Aug 2025',
      title: 'AWS Educate Machine Learning Foundations',
      desc: 'Completed foundational training in machine learning through AWS Educate, developing an understanding of core machine learning concepts and their practical applications.',
    },
    {
      period: '2026',
      title: 'Computer Networking Laboratory Assistant',
      desc: 'Assisted students with laboratory assignments, troubleshooting network configurations, evaluating practical work, conducting practical tests, guiding LAN cable crimping exercises, and preparing laboratory reports.',
    },
    {
      period: '2026 - 2027',
      title: 'ASAH by DICODING LED by GOTO',
      desc: 'Participating in Dicoding × GoTo’s ASAH AI Engineer program, focusing on Python, machine learning, deep learning, generative AI, and NLP through structured learning and hands-on sentiment analysis experiments.',
    },
  ],
}

export const CONTACT_DATA = {
  headline: 'Tell Me About Your Next Project',
  lines: [
    'Have an idea in mind? Let’s turn it into something meaningful.',
    'I’m open to collaborations, freelance projects, and more opportunities.',
  ],
  channels: [
    {
      id: 'email',
      name: 'Email',
      detail: 'inijuana@gmail.com',
      url: 'mailto:inijuana@gmail.com',
      icon: 'mail',
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      detail: 'Connect professionally',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      detail: 'A glimpse into my life',
      url: 'https://instagram.com',
      icon: 'instagram',
    },
    {
      id: 'github',
      name: 'GitHub',
      detail: 'Explore my code',
      url: 'https://github.com',
      icon: 'github',
    },
  ],
}
