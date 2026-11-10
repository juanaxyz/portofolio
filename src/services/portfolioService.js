/**
 * Service providing static metadata for Hero, Timeline, Education, and Contact.
 */

export const portfolioService = {
  getHeroData() {
    return {
      greeting: 'Hi, I’m Juana',
      subtitle: 'Undergraduate Information Technology Student @Udayana University',
      title: 'I build software around data, AI, and practical problems.',
      viewProjectUrl: '#projects',
      downloadCvUrl: '#contact',
    }
  },

  getMarqueeItems() {
    return [
  'Software Development',
  'Data Engineering',
  'Machine Learning',
  'Artificial Intelligence',
  'AI Automation',
  'Data Processing',
  'Web Scraping',
  'Backend Development',
];
  },

  getEducationData() {
    return {
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
          desc: 'Science (IPA).',
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
          desc: 'Participating in Dicoding × GoTo’s ASAH AI Engineer program, focusing on Python, machine learning, deep learning, generative AI, and NLP through structured learning and hands-on experiments.',
        },
      ],
    }
  },

  getContactData() {
    return {
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
          url: 'https://linkedin.com/in/juana-satya/',
          icon: 'linkedin',
        },
        {
          id: 'instagram',
          name: 'Instagram',
          detail: 'A glimpse into my life',
          url: 'https://instagram.com/juanasatyaa',
          icon: 'instagram',
        },
        {
          id: 'github',
          name: 'GitHub',
          detail: 'Explore my code',
          url: 'https://github.com/juanaxyz',
          icon: 'github',
        },
      ],
    }
  },
}
