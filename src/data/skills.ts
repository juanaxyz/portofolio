export interface Skill {
  domain: string;
  icon: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    domain: "Frontend",
    icon: "monitor",
    items: ["React", "HTML/CSS", "Tailwind"],
  },
  {
    domain: "Backend",
    icon: "server",
    items: ["Node.js", "Python (Flask / FastAPI)"],
  },
  {
    domain: "Automation",
    icon: "bot",
    items: ["Selenium", "BeautifulSoup", "Scrapy"],
  },
  {
    domain: "ML",
    icon: "brain",
    items: ["scikit-learn", "pandas", "numpy", "TensorFlow"],
  },
  {
    domain: "IoT",
    icon: "microchip",
    items: ["Arduino", "ESP32", "sensor dasar"],
  },
  {
    domain: "Tools",
    icon: "wrench",
    items: ["Git", "Vite", "VS Code", "Postman"],
  },
];
