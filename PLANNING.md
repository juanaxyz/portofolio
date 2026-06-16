# PLANNING.md — Portfolio Budi Santoso

> Design system: Dovetail (dark, midnight command-center)
> Stack: Vite + React + TypeScript + Tailwind v4
> Tone: Minimalis, tenang, curious — bukan flashy

---

## Design Tokens (Dovetail)

```css
--color-soft-indigo: #6798ff; /* accent — icon, marker, border aktif */
--color-carbon: #0a0a0a; /* canvas / page background */
--color-graphite: #141414; /* card surface */
--color-iron: #1e1e1e; /* border, elevated surface */
--color-slate-edge: #313131; /* hairline border */
--color-smoke: #454545; /* ghost button border */
--color-ash: #a7a7a7; /* secondary text, caption */
--color-bone: #ffffff; /* primary text, filled CTA */

--font-inter: "Inter", sans-serif;
--font-mono: "JetBrains Mono", monospace;

--radius-tag: 4px;
--radius-card: 8px;
--radius-button: 8px;
--radius-pill: 9999px;
```

Grid background: `background-image` dengan linear-gradient `#1e1e1e` 1px,
spacing 48px, opacity ~8% — dekoratif, tidak bersaing dengan konten.

---

## Komponen Dasar (src/components/ui/)

### Button

- **Filled:** bg `#ffffff`, text `#0a0a0a`, radius 8px, padding `8px 16px`, Inter 14px/500
- **Ghost:** bg transparent, border 1px `#454545`, text `#ffffff`, radius 8px, padding `8px 16px`

### Tag

- bg `#1e1e1e`, text `#a7a7a7`, JetBrains Mono 12px uppercase, radius 4px, padding `4px 8px`
- Saat aktif (filter): border 1px `#6798ff`, text `#6798ff`

### SectionEyebrow

- JetBrains Mono 12px, uppercase, color `#a7a7a7`, letter-spacing `0.85px`
- Selalu di atas heading section, gap 24px ke heading

### Card

- bg `#141414`, border 1px `#1e1e1e`, radius 8px, padding 24px

---

## Section 1 — Hero

**File:** `src/components/sections/Hero.tsx`

**Layout:** 2 kolom (60/40), min-height 100vh, grid background aktif

### Kolom Kiri

```
[Eyebrow]   TEKNIK INFORMATIKA · UDAYANA · 2024
            JetBrains Mono 12px, #a7a7a7

[Headline]  Curious by nature.
            Builder by habit.
            Inter 64px/500, #ffffff, letter-spacing -2.3px
            max 2 baris

[Subtext]   Dari scraping ribuan data, ngerakit sensor IoT,
            sampai bikin web app buat ibu kos —
            aku explore dulu, baru ngerti.
            Inter 16px/400, #a7a7a7, max-width 480px

[CTA Row]   [Lihat Project]        [Ngobrol sama JARVIS]
            filled white            ghost
```

### Kolom Kanan — Terminal Card

```
Card: bg #141414, border #1e1e1e, radius 8px, padding 24px
Font: JetBrains Mono 14px, #a7a7a7

> whoami
  budi santoso — tech explorer

> skills --list
  web · automation · ml · iot

> current_status
  available for collab & internship

> last_build
  SmartDesk v0.2 — 2 days ago
  ▊  ← blinking cursor (CSS animation)
```

Baris `>` warna `#6798ff`, output warna `#a7a7a7`, cursor blink `#6798ff`.

---

## Section 2 — Philosophy ("Cara Aku Berpikir")

**File:** `src/components/sections/Philosophy.tsx`

**Layout:** Center, max-width 960px

```
[Eyebrow]   PHILOSOPHY

[Heading]   Aku bukan tipe yang tunggu
            ngerti dulu baru mulai.
            Inter 40px/500, #ffffff

[3 Cards]   grid 3 kolom, gap 24px
```

### Card 1 — Mulai dari pertanyaan

- Icon: `?` lingkaran, warna `#6798ff`, 24px
- Judul: "Mulai dari pertanyaan" — Inter 16px/500, #ffffff
- Deskripsi: "Setiap project lahir dari rasa penasaran, bukan dari keinginan nambah portofolio." — Inter 14px/400, #a7a7a7

### Card 2 — Coba dulu

- Icon: `⚡` bolt, warna `#6798ff`, 24px
- Judul: "Coba dulu"
- Deskripsi: "Dokumentasi bisa belakangan. Yang penting jalan dulu, paham dulu."

### Card 3 — Otomasi segalanya

- Icon: `⚙` gear, warna `#6798ff`, 24px
- Judul: "Otomasi segalanya"
- Deskripsi: "Kalau sesuatu bisa dikerjakan kode, itu bukan males — itu efisien."

---

## Section 3 — Projects

**File:** `src/components/sections/Projects.tsx`
**Data:** `src/data/projects.ts`

**Layout:** Filter tags → grid 2 kolom cards

### Filter Tags

```
[Semua] [Web] [Automation] [ML] [IoT]
```

State aktif: border `#6798ff`, text `#6798ff`
State default: border `#313131`, text `#a7a7a7`

### Project Card Anatomy

```
┌─────────────────────────────────────────┐
│  [placeholder: https://placehold.co/    │
│   600x340/141414/6798ff?text=PROJECT]   │
│                               radius 8px │
├─────────────────────────────────────────┤
│  [Web] [Automation]    ← tags           │
│                                         │
│  PriceWatch                             │  Inter 20px/500 #fff
│                                         │
│  "Capek ngecek harga manual tiap hari   │  Inter 14px/400 #a7a7a7
│   — jadi bikin bot yang otomatis."      │
│                                         │
│  Python · FastAPI · React · Chart.js    │  JetBrains Mono 12px #a7a7a7
│                                         │
│  [Lihat Detail →]                       │  ghost button
└─────────────────────────────────────────┘
```

### Data Dummy Projects (`src/data/projects.ts`)

```ts
export const projects = [
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
```

---

## Section 4 — Stats

**File:** `src/components/sections/Stats.tsx`

**Layout:** 3 kolom center, max-width 800px, gap 32px

```
[⬡ indigo]          [↗ indigo]          [? indigo]
    4                  dari nol              1
domain dijelajahi    semua project         rule
Web, Python, ML,     Tidak ada yang       Kalau belum pernah
dan IoT — karena     dimulai dari         coba, itu alasan
kenapa harus         template.            untuk mulai.
pilih satu?
```

- Angka: Inter 40px/500, `#ffffff`
- Label: Inter 16px/500, `#ffffff`
- Caption: Inter 14px/400, `#a7a7a7`
- Icon: 24px, `#6798ff`

---

## Section 5 — JARVIS Chat

**File:** `src/components/sections/JarvisChat.tsx`
**Hook:** `src/hooks/useAgent.ts`
**Logic:** `src/agent/agent.ts`

**Layout:** Center, max-width 720px

```
[Eyebrow]   AI ASSISTANT

[Heading]   Ada yang mau kamu tanyakan?

[Subtext]   JARVIS tahu semua tentang project dan cara kerja aku.
            Tanya apapun.
```

### Chat UI

```
┌──────────────────────────────────────────────┐
│ ◈ JARVIS                             online  │  header: bg #1e1e1e
├──────────────────────────────────────────────┤
│                                              │
│  Halo. Saya JARVIS — asisten personal Budi. │  bubble: bg #1e1e1e
│  Tanya apapun tentang project, skill,        │  text: #a7a7a7
│  atau cara kerjanya.          [◈ JARVIS]    │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Ceritain project IoT kamu            │   │  suggested prompt chips
│  └──────────────────────────────────────┘   │  border #313131
│  ┌──────────────────────────────────────┐   │  hover border #6798ff
│  │ Tech stack apa yang kamu kuasai?     │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │ Available untuk internship?          │   │
│  └──────────────────────────────────────┘   │
│                                              │
├──────────────────────────────────────────────┤
│  Ketik pertanyaan kamu...            [→]    │  input: bg #0a0a0a
└──────────────────────────────────────────────┘
```

- Container: bg `#141414`, border `#313131`, radius 8px
- Header: bg `#1e1e1e`, nama JARVIS `#6798ff`, dot online `#6798ff`
- User bubble: bg `#1e1e1e`, align kanan
- JARVIS bubble: bg `#141414`, border `#313131`, align kiri
- Input: bg `#0a0a0a`, border top `#313131`, placeholder `#454545`
- Send button: icon `→`, color `#6798ff`

### Agent Setup

```ts
// src/agent/agent.ts
// Baca AGENTS.md sebagai system prompt
// Kirim ke Anthropic API (claude-sonnet-4-6)
// Stream response ke chat UI
```

---

## Section 6 — Contact

**File:** `src/components/sections/Contact.tsx`

**Layout:** 2 kolom (50/50)

### Kolom Kiri

```
[Eyebrow]   KONTAK

[Heading]   Mau ngobrol, kolaborasi,
            atau rekrut?
            Inter 40px/500

[Subtext]   Aku terbuka untuk project freelance,
            internship, atau sekedar diskusi tech.
            JARVIS juga bisa jadi perantara
            kalau mau ngobrol dulu.
            Inter 16px/400, #a7a7a7
```

### Kolom Kanan — 3 Link Cards

```
┌────────────────────────────┐
│ [GitHub icon #6798ff]      │
│ GitHub                     │  Inter 16px/500 #fff
│ Lihat semua kode           │  Inter 14px/400 #a7a7a7
│                    [→]     │
└────────────────────────────┘
┌────────────────────────────┐
│ [LinkedIn icon #6798ff]    │
│ LinkedIn                   │
│ Background lengkap         │
└────────────────────────────┘
┌────────────────────────────┐
│ [Mail icon #6798ff]        │
│ Email                      │
│ budi@example.com           │
└────────────────────────────┘
```

Card hover: border berubah dari `#1e1e1e` ke `#6798ff`, transisi 200ms.

---

## Footer

**File:** `src/components/layout/Footer.tsx`

**Layout:** 3 kolom + copyright row

```
Budi Santoso          Navigasi              Ask JARVIS
Tech Explorer         Hero                  Punya pertanyaan
Curious by nature.    Projects              sebelum kontak?
Builder by habit.     Philosophy            [Mulai Chat →]
                      Contact

─────────────────────────────────────────────────────────
© 2025 Budi Santoso · TI Udayana · Made with curiosity
```

- Label kolom: JetBrains Mono 12px uppercase, `#a7a7a7`
- Link: Inter 14px/400, `#ffffff`, hover `#6798ff`
- Copyright: Inter 14px/400, `#454545`

---

## Struktur Folder Final

```
portfolio/
├── AGENTS.md
├── PLANNING.md          ← file ini
├── TASKS.md
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   ├── tokens.css       ← semua CSS custom properties Dovetail
    │   └── index.css        ← import tokens + Tailwind
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Tag.tsx
    │   │   ├── Card.tsx
    │   │   └── SectionEyebrow.tsx
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── Philosophy.tsx
    │       ├── Projects.tsx
    │       ├── Stats.tsx
    │       ├── JarvisChat.tsx
    │       └── Contact.tsx
    ├── data/
    │   ├── projects.ts
    │   ├── skills.ts
    │   └── owner.ts

```
