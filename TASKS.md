# TASKS.md — Portfolio Build Checklist

> OpenCode: baca PLANNING.md dan AGENTS.md sebelum mengerjakan task apapun.
> Setiap task selesai, tandai dengan [x] dan catat hasil atau keputusan penting di bawahnya.

---

## Phase 1 — Foundation

### Setup Project

- [ ] Init Vite + React + TypeScript: `npm create vite@latest portfolio -- --template react-ts`
- [ ] Install dependencies:
  ```
  npm install tailwindcss @tailwindcss/vite
  npm install framer-motion
  npm install react-intersection-observer
  npm install lucide-react
  npm install @anthropic-ai/sdk
  npm install react-markdown
  ```
- [ ] Install fonts:
  ```
  npm install @fontsource/inter @fontsource/jetbrains-mono
  ```
- [ ] Setup Tailwind v4 di `vite.config.ts` dan `src/styles/index.css`
- [ ] Import fonts di `src/main.tsx`:
  ```ts
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/500.css";
  import "@fontsource/inter/600.css";
  import "@fontsource/jetbrains-mono/400.css";
  ```

### Design Tokens

- [ ] Buat `src/styles/tokens.css` — salin semua CSS custom properties dari PLANNING.md
- [ ] Buat grid background pattern di `tokens.css`:
  ```css
  .grid-bg {
    background-image:
      linear-gradient(#1e1e1e 1px, transparent 1px),
      linear-gradient(90deg, #1e1e1e 1px, transparent 1px);
    background-size: 48px 48px;
    opacity: 0.08;
  }
  ```
- [ ] Set global styles: font-family Inter, bg `#0a0a0a`, color `#ffffff`, antialiased

### Data Files

- [ ] Buat `src/data/owner.ts` — nama, tagline, role, kontak, sosial media (data dummy)
- [ ] Buat `src/data/projects.ts` — 4 project dummy sesuai PLANNING.md
- [ ] Buat `src/data/skills.ts` — list skill per domain (Web, Automation, ML, IoT)

---

## Phase 2 — UI Components

### Komponen Dasar (`src/components/ui/`)

- [ ] **Button.tsx** — variant: `filled` dan `ghost`, size: `sm` dan `md`
- [ ] **Tag.tsx** — variant: `default` dan `active` (untuk filter project)
- [ ] **Card.tsx** — wrapper dengan surface `#141414`, border `#1e1e1e`, radius 8px
- [ ] **SectionEyebrow.tsx** — JetBrains Mono 12px uppercase ash, komponen reusable

### Layout (`src/components/layout/`)

- [ ] **Navbar.tsx**
  - Logo/nama kiri: Inter 16px/500 white
  - Nav links tengah: pill shape radius 9999px, Inter 14px/500
  - CTA kanan: `Log in` text link + `Contact` filled button
  - Sticky, bg `#0a0a0a`, border-bottom `#1e1e1e`

- [ ] **Footer.tsx**
  - 3 kolom: branding, navigasi, ask JARVIS
  - Label kolom JetBrains Mono 12px uppercase
  - Copyright row border-top `#1e1e1e`

---

## Phase 3 — Sections

> Untuk setiap section: ikuti layout detail di PLANNING.md.
> Gunakan data dari `src/data/` — jangan hardcode konten di JSX.

### Hero

- [ ] **Hero.tsx** — layout 2 kolom
  - [ ] Eyebrow + Headline + Subtext + CTA row (kolom kiri)
  - [ ] Terminal Card dengan blinking cursor (kolom kanan)
  - [ ] Grid background aktif di section ini
  - [ ] Blinking cursor: CSS animation `opacity 0→1`, interval 700ms

### Philosophy

- [ ] **Philosophy.tsx** — center layout, 3 kartu
  - [ ] Eyebrow + Heading center
  - [ ] 3 Card dengan icon lucide-react, judul, deskripsi
  - [ ] Icon warna `#6798ff`, 24px

### Projects

- [ ] **Projects.tsx** — filter + grid 2 kolom
  - [ ] Filter tag row: `Semua`, `Web`, `Automation`, `ML`, `IoT`
  - [ ] Filter logic: useState untuk domain aktif, filter array projects
  - [ ] Project Card: image placeholder, tags, judul, tagline, stack, ghost button
  - [ ] Animasi: card masuk dengan framer-motion saat filter berubah

### Stats

- [ ] **Stats.tsx** — 3 kolom center
  - [ ] 3 stat block: icon indigo, angka besar, label, caption
  - [ ] Gunakan lucide-react untuk icon

### JARVIS Chat

- [ ] **JarvisChat.tsx** — chat UI
  - [ ] Header bar: nama JARVIS indigo + dot online
  - [ ] Message list: scroll otomatis ke bawah saat ada pesan baru
  - [ ] Suggested prompt chips: 3 chip, klik langsung kirim
  - [ ] Input + send button
  - [ ] Loading state: "JARVIS sedang mengetik..." dengan animasi titik

### Contact

- [ ] **Contact.tsx** — 2 kolom
  - [ ] Eyebrow + Heading + Subtext (kolom kiri)
  - [ ] 3 Link Card: GitHub, LinkedIn, Email (kolom kanan)
  - [ ] Hover: border transition ke `#6798ff`, 200ms ease

---

## Phase 4 — AI Agent

### Setup Anthropic

- [ ] Buat `.env`:
  ```
  VITE_ANTHROPIC_API_KEY=sk-ant-xxxxx
  ```
- [ ] **`src/agent/context.ts`** — build system prompt:
  - Baca persona dari AGENTS.md (hardcode sebagai string atau import)
  - Inject data dari `src/data/projects.ts` dan `src/data/owner.ts`
  - Return string system prompt lengkap

- [ ] **`src/agent/prompts.ts`** — export suggested prompts:

  ```ts
  export const suggestedPrompts = [
    "Ceritain project IoT kamu",
    "Tech stack apa yang kamu kuasai?",
    "Available untuk internship?",
    "Project mana yang paling challenging?",
  ];
  ```

- [ ] **`src/agent/agent.ts`** — fungsi `sendMessage`:
  - Terima array message history
  - Kirim ke Anthropic API dengan system prompt dari `context.ts`
  - Return response text

### Hook

- [ ] **`src/hooks/useAgent.ts`**
  - State: `messages`, `isLoading`, `error`
  - Function: `sendMessage(text: string)`
  - Auto-scroll ref untuk chat container
  - Handle error gracefully: tampilkan pesan fallback dari JARVIS

### Integrasi

- [ ] Connect `useAgent` ke `JarvisChat.tsx`
- [ ] Test semua 4 suggested prompts
- [ ] Test pertanyaan di luar konteks → pastikan JARVIS redirect ke kontak
- [ ] Test bahasa Indonesia dan Inggris

---

## Phase 5 — Polish

### Animasi (Framer Motion)

- [ ] Hero: headline fade-up saat mount, delay stagger per elemen
- [ ] Section masuk: fade + translateY(20px) saat scroll ke viewport
- [ ] Project card: layout animation saat filter berubah
- [ ] Chat bubble: slide-up saat pesan baru muncul

### Responsive

- [ ] Hero: 2 kolom → 1 kolom di mobile (terminal card pindah ke bawah)
- [ ] Philosophy: 3 kolom → 1 kolom di mobile
- [ ] Projects: 2 kolom → 1 kolom di mobile
- [ ] Stats: 3 kolom → 1 kolom di mobile
- [ ] Contact: 2 kolom → 1 kolom di mobile
- [ ] Navbar: hamburger menu di mobile

### SEO & Meta

- [ ] Update `index.html`: title, description, og:image, og:title
- [ ] Favicon: buat dari initial "B" atau terminal icon

### Deploy

- [ ] Push ke GitHub
- [ ] Connect ke Vercel
- [ ] Set environment variable `VITE_ANTHROPIC_API_KEY` di Vercel dashboard
- [ ] Test production build: `npm run build && npm run preview`
- [ ] Verifikasi JARVIS chat berjalan di production

---

## Catatan OpenCode

Saat mengerjakan task, gunakan konvensi ini:

```
// Warna — selalu pakai CSS variable, bukan hardcode hex
className="bg-[var(--color-graphite)]"

// Font — Inter untuk semua teks, JetBrains Mono hanya untuk:
// eyebrow, tag, terminal card, stack label

// Spacing — gunakan kelipatan 8px konsisten

// Jangan pakai shadow — elevation dari border + bg stepping saja

// Icon — lucide-react, stroke-width 1.5, size 16-24px
```

Referensi desain lengkap ada di PLANNING.md.
Data dummy ada di src/data/\*.ts.
Persona JARVIS ada di AGENTS.md.

```

```
