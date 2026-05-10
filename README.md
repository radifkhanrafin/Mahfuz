# 🚀 Developer Portfolio — Next.js 15

A premium personal developer portfolio built with **Next.js 15 App Router**, **Framer Motion**, **Tailwind CSS**, and **TypeScript**.

## ✨ Features

- Dark cinematic UI with glassmorphism
- Smooth Framer Motion animations throughout
- Typing effect hero with floating tech badges
- Animated skills marquee
- Filterable projects grid
- Vertical timeline for experience
- Auto-sliding testimonials
- Animated contact form
- Responsive across all devices
- Custom cursor glow effect

## 🛠️ Getting Started

### Prerequisites
- **Node.js 18+** — [Download here](https://nodejs.org)
- **npm** (comes with Node.js)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Personalisation

All content lives in **`lib/data.ts`** — edit this single file to update:

- Your name, bio, email, social links
- Stats (years experience, projects, etc.)
- Services
- Skills / tech stack
- Work experience
- Education
- Projects (add live URLs and GitHub links)
- Testimonials

### Replacing the profile photo

In `components/sections/About.tsx`, replace the placeholder `<div>` with:

```tsx
import Image from 'next/image';
<Image src="/your-photo.jpg" alt="Your Name" fill className="object-cover rounded-3xl" />
```

Place your photo in the `public/` folder.

### Adding your resume

Drop your `resume.pdf` into the `public/` folder. The download button is already wired up.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main page (composes all sections)
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── shared/
│       ├── SectionWrapper.tsx
│       ├── SectionHeading.tsx
│       ├── GlowCard.tsx
│       └── CursorGlow.tsx
├── lib/
│   ├── data.ts             # ← Edit this for your content
│   └── utils.ts
└── public/
    └── resume.pdf          # ← Drop your CV here
```

---

## 🔧 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.1.0 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Lucide React | 0.469 |

---

Built with ❤️ using Next.js & Framer Motion
