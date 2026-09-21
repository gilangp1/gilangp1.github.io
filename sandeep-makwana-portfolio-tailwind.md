# Portfolio Sandeep Makwana — Analisis & Implementasi Tailwind CSS

## 1. Tujuan

Dokumen ini menjadi blueprint untuk membuat ulang portfolio **Sandeep Makwana** dengan pendekatan utility-first menggunakan **Tailwind CSS**.

Referensi utama:
- Website: `https://sandeepmakwana.vercel.app/`
- Repository yang disebut pada publikasi portfolio: `https://github.com/isandeepMakwana/Portfolio`

Website memperkenalkan Sandeep Makwana sebagai **Software Engineer** dengan fokus full-stack development dan cloud architecture. Publikasi portfolio juga menyebutkan bahwa situs tersebut menampilkan perjalanan/skill, value yang dapat diberikan kepada tim, dan project-project yang pernah dikerjakan.

> Catatan analisis: halaman Vercel tidak menyediakan struktur HTML yang dapat diekstrak secara lengkap oleh crawler, sehingga dokumen ini memprioritaskan karakter visual/UX yang dapat diverifikasi dari referensi publik dan menyusun implementasi Tailwind yang maintainable.

---

# 2. Konsep Visual

## Karakter desain

Portfolio sebaiknya mempertahankan karakter:

- Developer / engineering portfolio
- Modern dan minimal
- Dark-first
- Terminal / code-editor inspired
- Banyak whitespace
- Typography yang kuat
- Accent color untuk elemen interaktif
- Animasi ringan, bukan animasi berlebihan
- Responsive dari mobile sampai desktop

Publikasi portfolio mendapat komentar positif mengenai **terminal style**, sehingga elemen terminal dapat dijadikan identitas visual utama.

## Design direction

```text
Background       : #0a0a0a / #09090b
Surface          : #111111 / #18181b
Border           : #27272a
Primary text     : #f4f4f5
Secondary text   : #a1a1aa
Muted text       : #71717a
Accent           : Emerald / Green
Code text        : Emerald / Cyan
```

Warna di atas adalah rekomendasi implementasi ulang, bukan klaim bahwa semua nilai tersebut merupakan nilai asli dari website.

---

# 3. Struktur Halaman

Gunakan struktur single-page portfolio:

```text
App
├── Navbar
├── Hero
├── About
├── Experience
├── Skills
├── Projects
├── Architecture / Expertise
├── Contact
└── Footer
```

Jika project menggunakan Angular:

```text
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── footer/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   └── app.component.*
├── assets/
│   ├── images/
│   └── icons/
└── styles.css
```

---

# 4. Tailwind Setup

Untuk Tailwind CSS v3:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },

      colors: {
        portfolio: {
          bg: "#09090b",
          surface: "#111113",
          elevated: "#18181b",
          border: "#27272a",
          text: "#f4f4f5",
          muted: "#a1a1aa",
          dim: "#71717a",
          accent: "#22c55e",
        },
      },

      boxShadow: {
        terminal: "0 20px 80px rgba(0, 0, 0, 0.35)",
      },

      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.035) 1px, transparent 1px)",
      },

      animation: {
        "blink-cursor": "blinkCursor 1s step-end infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },

      keyframes: {
        blinkCursor: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },

  plugins: [],
};
```

---

# 5. Global CSS

Gunakan Tailwind `@layer` untuk CSS yang memang tidak nyaman ditulis sebagai utility class.

## styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-portfolio-bg text-portfolio-text antialiased;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  }

  ::selection {
    @apply bg-green-500/30 text-white;
  }
}

@layer components {
  .container-portfolio {
    @apply mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10;
  }

  .section {
    @apply py-20 sm:py-24 lg:py-32;
  }

  .section-title {
    @apply text-3xl font-bold tracking-tight sm:text-4xl;
  }

  .section-description {
    @apply mt-4 max-w-2xl text-base leading-7 text-portfolio-muted;
  }

  .terminal {
    @apply overflow-hidden rounded-xl border border-portfolio-border
      bg-portfolio-surface shadow-terminal;
  }

  .terminal-header {
    @apply flex items-center gap-2 border-b border-portfolio-border
      bg-portfolio-elevated px-4 py-3;
  }

  .terminal-dot {
    @apply h-3 w-3 rounded-full;
  }

  .glass {
    @apply border border-white/10 bg-white/[0.03] backdrop-blur-xl;
  }

  .interactive {
    @apply transition duration-300 ease-out;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

# 6. Navbar

## Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ Sandeep                  About Experience Projects   Contact │
└──────────────────────────────────────────────────────────────┘
```

Tailwind:

```html
<nav
  class="
    fixed inset-x-0 top-0 z-50
    border-b border-white/5
    bg-black/70
    backdrop-blur-xl
  "
>
  <div
    class="
      container-portfolio
      flex h-16 items-center justify-between
    "
  >
    <a
      href="#home"
      class="font-mono text-sm font-semibold text-green-400"
    >
      ~/sandeep
    </a>

    <div class="hidden items-center gap-8 md:flex">
      <a href="#about" class="text-sm text-zinc-400 transition hover:text-white">
        About
      </a>

      <a href="#experience" class="text-sm text-zinc-400 transition hover:text-white">
        Experience
      </a>

      <a href="#projects" class="text-sm text-zinc-400 transition hover:text-white">
        Projects
      </a>

      <a href="#contact" class="text-sm text-zinc-400 transition hover:text-white">
        Contact
      </a>
    </div>
  </div>
</nav>
```

---

# 7. Hero Section

Hero adalah bagian paling penting.

## Struktur

```text
                    Hi, I'm Sandeep Makwana

              Software Engineer / Full Stack Developer

       I build scalable applications, cloud-native systems,
               and elegant software solutions.

        [ View Projects ]       [ Contact Me ]

             ┌─────────────────────────────────┐
             │ $ whoami                         │
             │ sandeep@portfolio:~$            │
             │ Software Engineer                │
             │ Full Stack + Cloud               │
             │                                  │
             │ > Building scalable systems_    │
             └─────────────────────────────────┘
```

## Tailwind

```html
<section
  id="home"
  class="
    relative flex min-h-screen items-center
    overflow-hidden
    bg-portfolio-bg
  "
>
  <div class="absolute inset-0 bg-grid-dark bg-[size:48px_48px]"></div>

  <div class="container-portfolio relative z-10">
    <div class="max-w-4xl">
      <p class="font-mono text-sm text-green-400">
        &gt; Hello, I'm
      </p>

      <h1
        class="
          mt-4 text-5xl font-bold tracking-tight
          sm:text-6xl
          lg:text-8xl
        "
      >
        Sandeep Makwana
      </h1>

      <h2
        class="
          mt-5 font-mono text-xl text-zinc-400
          sm:text-2xl
        "
      >
        Software Engineer
      </h2>

      <p
        class="
          mt-6 max-w-2xl
          text-base leading-8 text-zinc-400
          sm:text-lg
        "
      >
        I build scalable applications, cloud-native systems,
        and elegant software solutions.
      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="
            rounded-lg bg-green-500 px-5 py-3
            text-sm font-semibold text-black
            transition hover:bg-green-400
          "
        >
          View Projects
        </a>

        <a
          href="#contact"
          class="
            rounded-lg border border-zinc-700
            px-5 py-3 text-sm font-semibold
            text-white transition
            hover:border-zinc-500
          "
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>
```

---

# 8. Terminal Component

Terminal adalah salah satu elemen visual yang paling cocok untuk identitas portfolio ini.

```html
<div class="terminal mt-12 max-w-3xl">
  <div class="terminal-header">
    <span class="terminal-dot bg-red-500"></span>
    <span class="terminal-dot bg-yellow-500"></span>
    <span class="terminal-dot bg-green-500"></span>

    <span class="ml-3 font-mono text-xs text-zinc-500">
      terminal
    </span>
  </div>

  <div class="p-5 font-mono text-sm leading-8">
    <p class="text-zinc-500">
      $ whoami
    </p>

    <p class="text-green-400">
      Sandeep Makwana
    </p>

    <p class="mt-3 text-zinc-500">
      $ role
    </p>

    <p class="text-white">
      Software Engineer
    </p>

    <p class="mt-3 text-zinc-500">
      $ focus
    </p>

    <p class="text-cyan-400">
      Full Stack · Cloud · AI/ML
    </p>

    <p class="mt-3 text-zinc-500">
      $ status
    </p>

    <p class="text-green-400">
      Available for opportunities_
    </p>
  </div>
</div>
```

---

# 9. About Section

Gunakan dua kolom pada desktop.

```html
<section id="about" class="section">
  <div class="container-portfolio">
    <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="font-mono text-sm text-green-400">
          01 / about
        </p>

        <h2 class="section-title mt-3">
          About Me
        </h2>
      </div>

      <div class="space-y-5 text-zinc-400 leading-8">
        <p>
          I am a Software Engineer focused on building reliable,
          scalable and maintainable software systems.
        </p>

        <p>
          My interests cover backend engineering, cloud architecture,
          APIs, distributed systems, automation and modern web
          application development.
        </p>

        <p>
          I enjoy turning complex technical requirements into
          simple and maintainable solutions.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

# 10. Experience

Gunakan timeline sederhana.

```html
<section id="experience" class="section">
  <div class="container-portfolio">
    <p class="font-mono text-sm text-green-400">
      02 / experience
    </p>

    <h2 class="section-title mt-3">
      Experience
    </h2>

    <div class="mt-12 border-l border-zinc-800 pl-6">
      <article class="relative pb-12">
        <span
          class="
            absolute -left-[31px] top-1
            h-3 w-3 rounded-full
            border-2 border-green-400
            bg-portfolio-bg
          "
        ></span>

        <p class="font-mono text-sm text-green-400">
          202X — Present
        </p>

        <h3 class="mt-2 text-xl font-semibold">
          Software Engineer
        </h3>

        <p class="mt-1 text-zinc-500">
          Company Name
        </p>

        <p class="mt-4 max-w-2xl leading-7 text-zinc-400">
          Describe responsibilities, architecture decisions,
          systems developed and measurable impact.
        </p>
      </article>
    </div>
  </div>
</section>
```

---

# 11. Skills

Jangan menggunakan progress bar untuk semua skill karena portfolio engineering lebih baik menampilkan technology grouping.

## Categories

```text
Frontend
Backend
Cloud
Database
DevOps
AI / ML
Tools
```

## Tailwind

```html
<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  <article
    class="
      rounded-xl border border-zinc-800
      bg-zinc-950/50 p-6
      transition hover:-translate-y-1
      hover:border-green-500/40
    "
  >
    <h3 class="font-mono text-sm text-green-400">
      Backend
    </h3>

    <div class="mt-5 flex flex-wrap gap-2">
      <span class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
        Python
      </span>

      <span class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
        Django
      </span>

      <span class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
        FastAPI
      </span>
    </div>
  </article>
</div>
```

---

# 12. Projects

Project card harus menjadi bagian utama portfolio.

## Struktur card

```text
┌─────────────────────────────────────────┐
│ PROJECT                                 │
│                                         │
│ Project Name                            │
│ Short project description               │
│                                         │
│ Python  Django  AWS  PostgreSQL         │
│                                         │
│ GitHub →       Live Demo →              │
└─────────────────────────────────────────┘
```

## Tailwind

```html
<article
  class="
    group rounded-2xl
    border border-zinc-800
    bg-zinc-950/60 p-6
    transition duration-300
    hover:-translate-y-1
    hover:border-green-500/30
    hover:bg-zinc-900/70
  "
>
  <div class="flex items-start justify-between gap-4">
    <span class="font-mono text-xs text-green-400">
      PROJECT / 01
    </span>

    <a
      href="#"
      class="text-zinc-500 transition hover:text-white"
      aria-label="Open project"
    >
      ↗
    </a>
  </div>

  <h3
    class="
      mt-8 text-xl font-semibold
      transition group-hover:text-green-400
    "
  >
    Project Name
  </h3>

  <p class="mt-3 leading-7 text-zinc-400">
    Project description explaining the problem,
    solution and technical impact.
  </p>

  <div class="mt-6 flex flex-wrap gap-2">
    <span class="rounded-md bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
      Python
    </span>

    <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400">
      AWS
    </span>

    <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400">
      PostgreSQL
    </span>
  </div>

  <div class="mt-8 flex gap-5 text-sm">
    <a href="#" class="text-zinc-300 hover:text-white">
      GitHub →
    </a>

    <a href="#" class="text-green-400 hover:text-green-300">
      Live Demo →
    </a>
  </div>
</article>
```

---

# 13. Project Grid

```html
<div
  class="
    mt-12 grid gap-6
    md:grid-cols-2
    lg:grid-cols-3
  "
>
  <!-- project cards -->
</div>
```

Mobile:

```text
1 column
```

Tablet:

```text
2 columns
```

Desktop:

```text
3 columns
```

---

# 14. Contact

Contact harus sederhana.

```html
<section id="contact" class="section">
  <div class="container-portfolio">
    <div
      class="
        mx-auto max-w-3xl text-center
        rounded-2xl border border-zinc-800
        bg-zinc-950/60 p-8
        sm:p-12
      "
    >
      <p class="font-mono text-sm text-green-400">
        06 / contact
      </p>

      <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
        Let's build something.
      </h2>

      <p class="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
        Have a project, opportunity or idea?
        Feel free to reach out.
      </p>

      <div class="mt-8">
        <a
          href="mailto:your-email@example.com"
          class="
            inline-flex rounded-lg
            bg-green-500 px-6 py-3
            text-sm font-semibold text-black
            transition hover:bg-green-400
          "
        >
          Say Hello
        </a>
      </div>
    </div>
  </div>
</section>
```

---

# 15. Footer

```html
<footer class="border-t border-zinc-900">
  <div
    class="
      container-portfolio
      flex flex-col gap-4
      py-8 text-sm text-zinc-500
      sm:flex-row sm:items-center
      sm:justify-between
    "
  >
    <p>
      © 2026 Sandeep Makwana
    </p>

    <p class="font-mono">
      Built with Tailwind CSS
    </p>
  </div>
</footer>
```

---

# 16. Responsive Breakpoint

Gunakan breakpoint Tailwind default.

| Device | Tailwind | Layout |
|---|---|---|
| Mobile | default | 1 column |
| Small | `sm:` | spacing lebih besar |
| Tablet | `md:` | 2 columns |
| Desktop | `lg:` | 2–3 columns |
| Large | `xl:` | max-width 1280px |

Contoh:

```html
<div
  class="
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
    lg:grid-cols-3
  "
>
```

---

# 17. Animasi

Gunakan animasi secukupnya.

Direkomendasikan:

- fade-in saat section muncul
- translate-y kecil
- hover project card
- cursor blink pada terminal
- navbar backdrop blur

Hindari:

- animasi berkedip terus-menerus
- parallax berlebihan
- transition yang terlalu lambat
- animasi pada setiap elemen ketika scroll

Hal ini penting karena publikasi portfolio mendapat feedback komunitas mengenai flickering/scroll-trigger yang cukup mengganggu. Karena itu implementasi baru sebaiknya mengutamakan `opacity` dan `transform` yang ringan serta menghormati `prefers-reduced-motion`.

CSS:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 18. SEO

Tambahkan metadata:

```html
<title>Sandeep Makwana — Software Engineer</title>

<meta
  name="description"
  content="Sandeep Makwana — Software Engineer specializing in full-stack development, cloud architecture and scalable software systems."
/>

<meta
  name="keywords"
  content="Sandeep Makwana, Software Engineer, Full Stack Developer, Python, AWS, Cloud, AI"
/>
```

Open Graph:

```html
<meta
  property="og:title"
  content="Sandeep Makwana — Software Engineer"
/>

<meta
  property="og:description"
  content="Software Engineer portfolio"
/>

<meta
  property="og:type"
  content="website"
/>
```

---

# 19. Accessibility

Pastikan:

- semua gambar memiliki `alt`
- link mempunyai label yang jelas
- keyboard navigation tetap bekerja
- contrast text mencukupi
- tidak bergantung pada warna saja
- button memiliki state hover/focus
- gunakan semantic HTML

Contoh:

```html
<a
  href="#projects"
  class="
    rounded-lg px-5 py-3
    focus:outline-none
    focus:ring-2
    focus:ring-green-400
    focus:ring-offset-2
    focus:ring-offset-black
  "
>
  View Projects
</a>
```

---

# 20. Data Project Angular

Jika menggunakan Angular, jangan hardcode semua project di HTML.

## projects.ts

```ts
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Project One',
    description:
      'Description of the project and the problem solved.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'AWS',
    ],
    github: '#',
    demo: '#',
  },

  {
    title: 'Project Two',
    description:
      'Another project demonstrating engineering and cloud expertise.',
    technologies: [
      'Python',
      'Django',
      'Docker',
      'AWS',
    ],
    github: '#',
  },
];
```

HTML:

```html
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  @for (project of projects; track project.title) {
    <article class="...">
      <h3>{{ project.title }}</h3>

      <p>{{ project.description }}</p>

      <div class="flex flex-wrap gap-2">
        @for (tech of project.technologies; track tech) {
          <span>
            {{ tech }}
          </span>
        }
      </div>
    </article>
  }
</div>
```

Jika Angular yang digunakan belum mendukung control flow `@for`, gunakan:

```html
<div *ngFor="let project of projects">
  ...
</div>
```

---

# 21. Struktur Komponen Angular

Rekomendasi:

```text
app/
├── components/
│   ├── navbar/
│   │   ├── navbar.component.ts
│   │   ├── navbar.component.html
│   │   └── navbar.component.css
│   │
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── skills/
│   ├── projects/
│   ├── contact/
│   └── footer/
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── app.component.ts
├── app.component.html
└── app.component.css
```

Untuk Tailwind, file component CSS sebaiknya hampir kosong. Utility class ditempatkan langsung di HTML.

---

# 22. Prinsip Migrasi CSS ke Tailwind

Jangan melakukan:

```css
.card {
  background: #111;
  padding: 24px;
  border-radius: 16px;
}
```

Jika hanya digunakan sekali, ubah menjadi:

```html
<div class="rounded-2xl bg-zinc-900 p-6">
```

Untuk CSS yang reusable:

```css
@layer components {
  .portfolio-card {
    @apply rounded-2xl border border-zinc-800
      bg-zinc-950/60 p-6 transition;
  }
}
```

Gunakan CSS custom hanya untuk:

- keyframes
- scrollbar
- efek yang sulit dibuat dengan utility
- third-party library
- global reset
- accessibility/reduced-motion

---

# 23. Utility Class yang Sering Digunakan

## Background

```text
bg-zinc-950
bg-zinc-900
bg-black/70
bg-white/[0.03]
```

## Border

```text
border-zinc-800
border-white/10
border-green-500/30
```

## Text

```text
text-white
text-zinc-300
text-zinc-400
text-zinc-500
text-green-400
```

## Spacing

```text
p-6
p-8
py-20
gap-6
gap-8
mt-8
```

## Responsive

```text
sm:
md:
lg:
xl:
```

## Interaction

```text
transition
duration-300
hover:-translate-y-1
hover:border-green-500/30
hover:text-green-400
```

---

# 24. Final UI Target

Target akhir:

```text
┌───────────────────────────────────────────────────────────────┐
│ ~/sandeep                     About Projects Experience Contact│
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   > Hello, I'm                                                │
│                                                               │
│   Sandeep Makwana                                             │
│   Software Engineer                                           │
│                                                               │
│   I build scalable applications, cloud-native systems,        │
│   and elegant software solutions.                             │
│                                                               │
│   [ View Projects ] [ Contact Me ]                            │
│                                                               │
│   ┌───────────────────────────────────────────────────────┐   │
│   │ $ whoami                                              │   │
│   │ Sandeep Makwana                                       │   │
│   │                                                       │   │
│   │ $ focus                                               │   │
│   │ Full Stack · Cloud · AI/ML                            │   │
│   └───────────────────────────────────────────────────────┘   │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ ABOUT                                                         │
├───────────────────────────────────────────────────────────────┤
│ EXPERIENCE                                                    │
├───────────────────────────────────────────────────────────────┤
│ SKILLS                                                        │
│                                                               │
│ [ Backend ] [ Cloud ] [ Database ]                            │
│ [ DevOps  ] [ AI/ML ] [ Tools ]                              │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ PROJECTS                                                      │
│                                                               │
│ [ Project ] [ Project ] [ Project ]                           │
│ [ Project ] [ Project ] [ Project ]                           │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ CONTACT                                                       │
│                                                               │
│              Let's build something.                           │
│                    [ Say Hello ]                              │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

# 25. Kesimpulan

Portfolio ini paling cocok direkonstruksi dengan pendekatan **dark developer portfolio + terminal aesthetic**.

Prioritas implementasi:

1. Hero kuat dengan terminal identity.
2. Dark background dan subtle grid.
3. Typography menggunakan Inter + JetBrains Mono/Fira Code.
4. Section About, Experience, Skills, Projects dan Contact.
5. Project card menggunakan Tailwind utilities.
6. Responsive mobile-first.
7. Animasi minimal dan performant.
8. `prefers-reduced-motion`.
9. Data project dipisahkan dari template.
10. CSS custom diminimalkan dan digantikan Tailwind utilities.

Dengan pendekatan ini, hasilnya bukan sekadar memindahkan CSS lama ke Tailwind, tetapi membuat design system yang lebih konsisten dan mudah dikembangkan.

## Referensi

- Website portfolio: https://sandeepmakwana.vercel.app/
- Publikasi portfolio Sandeep Makwana di daily.dev: https://daily.dev/posts/new-professional-portfolio--uqkje37kf
- LinkedIn Sandeep Makwana: https://www.linkedin.com/in/sandeepmakwana
- Repository portfolio yang disebut pada publikasi: https://github.com/isandeepMakwana/Portfolio
