export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  domains: string[];
  image: string;
  github: string | null;
  demo: string | null;
  lesson: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PriceWatch",
    tagline:
      "Capek ngecek harga manual tiap hari — jadi bikin bot yang otomatis.",
    description:
      "Bot Python yang scrape 5 e-commerce tiap 6 jam. Data masuk ke dashboard React dengan chart historis harga.",
    stack: ["Python", "Scrapy", "FastAPI", "React", "Chart.js"],
    domains: ["Automation", "Web"],
    image: "https://placehold.co/600x340/141414/6798ff?text=PriceWatch",
    github: "https://github.com/budisantoso/pricewatch",
    demo: null,
    lesson:
      "Belajar handle anti-bot, rate limiting, dan normalisasi data dari banyak source.",
  },
  {
    id: 2,
    title: "SmartDesk",
    tagline:
      "Penasaran berapa jam sebenernya duduk produktif — jadi pasang sensor.",
    description:
      "ESP32 + sensor gerak + cahaya yang kirim data ke dashboard realtime lewat MQTT.",
    stack: ["ESP32", "Arduino C++", "MQTT", "Node.js", "React"],
    domains: ["IoT", "Web"],
    image: "https://placehold.co/600x340/141414/6798ff?text=SmartDesk",
    github: "https://github.com/budisantoso/smartdesk",
    demo: null,
    lesson:
      "Debugging hardware itu beda level frustrasinya dibanding debugging software.",
  },
  {
    id: 3,
    title: "SentimenBali",
    tagline:
      "Ingin tahu persepsi turis soal Bali — dari ribuan review Google Maps.",
    description:
      "Scrape review → preprocessing → klasifikasi sentimen dengan IndoBERT fine-tuned, visualisasi di Streamlit.",
    stack: ["Python", "BeautifulSoup", "HuggingFace", "pandas", "Streamlit"],
    domains: ["ML", "Automation"],
    image: "https://placehold.co/600x340/141414/6798ff?text=SentimenBali",
    github: "https://github.com/budisantoso/sentimenbali",
    demo: "https://sentimenbali.streamlit.app",
    lesson: "Data bahasa Indonesia + bahasa gaul itu chaos — tapi justru seru.",
  },
  {
    id: 4,
    title: "KosKu",
    tagline: "Ibu kos tetangga masih catat pembayaran di buku tulis.",
    description:
      "Web app untuk kelola kamar, tenant, dan tagihan bulanan. MVP selesai, dipakai aktif.",
    stack: ["React", "Laravel", "MySQL"],
    domains: ["Web"],
    image: "https://placehold.co/600x340/141414/6798ff?text=KosKu",
    github: "https://github.com/budisantoso/kosku",
    demo: null,
    lesson:
      "Kebutuhan user nyata jauh lebih kompleks dari yang kamu bayangkan di awal.",
  },
];
