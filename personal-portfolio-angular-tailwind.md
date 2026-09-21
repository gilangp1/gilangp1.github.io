# Personal Portfolio — Angular & Tailwind CSS

## 1. Project Overview

Buat sebuah website **Personal Portfolio / Professional Profile** menggunakan:

- Angular
- TypeScript
- Tailwind CSS
- Responsive Design
- Standalone Components
- Data-driven UI
- Dark Mode
- Smooth Scrolling

Website terinspirasi dari struktur portfolio:

https://qivaijar.github.io/

Implementasi harus menggunakan kode dan desain sendiri, bukan menyalin source code website referensi.

Tujuan website adalah menampilkan:

- Profil profesional
- About
- Skills & Technologies
- Products / Projects
- Experience
- Education
- Resume
- Contact

---

# 2. Recommended Technology Stack

- Angular 20 atau versi Angular yang digunakan project
- TypeScript
- Tailwind CSS
- RxJS
- Angular Router
- Standalone Components
- Signals jika diperlukan
- Lucide Angular atau icon library lain

Untuk project baru:

```bash
ng new personal-portfolio --routing --style=css
cd personal-portfolio
npm install tailwindcss @tailwindcss/postcss postcss
npm install lucide-angular
```

Jalankan:

```bash
ng serve
```

Production build:

```bash
ng build
```

> Jika project menggunakan Angular 17/18/19, sesuaikan versi package Tailwind dan Angular dengan versi project. Jangan mencampur major version Angular.

---

# 3. Project Structure

```text
personal-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   │   ├── ai-platform.jpg
│   │   │   ├── speech-ai.jpg
│   │   │   └── data-platform.jpg
│   │   └── skills/
│   │       ├── python.svg
│   │       ├── pytorch.svg
│   │       ├── docker.svg
│   │       └── angular.svg
│   │
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   ├── profile.data.ts
│   │   │   │   ├── skills.data.ts
│   │   │   │   ├── projects.data.ts
│   │   │   │   ├── experience.data.ts
│   │   │   │   └── education.data.ts
│   │   │   │
│   │   │   ├── models/
│   │   │   │   ├── profile.model.ts
│   │   │   │   ├── skill.model.ts
│   │   │   │   ├── project.model.ts
│   │   │   │   ├── experience.model.ts
│   │   │   │   └── education.model.ts
│   │   │   │
│   │   │   └── services/
│   │   │       └── theme.service.ts
│   │   │
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── navbar/
│   │   │       │   ├── navbar.component.ts
│   │   │       │   └── navbar.component.html
│   │   │       ├── footer/
│   │   │       ├── section-title/
│   │   │       ├── social-links/
│   │   │       └── theme-toggle/
│   │   │
│   │   ├── features/
│   │   │   └── portfolio/
│   │   │       ├── home/
│   │   │       │   ├── home.component.ts
│   │   │       │   └── home.component.html
│   │   │       ├── skills/
│   │   │       │   ├── skills.component.ts
│   │   │       │   └── skills.component.html
│   │   │       ├── projects/
│   │   │       │   ├── projects.component.ts
│   │   │       │   └── projects.component.html
│   │   │       ├── experience/
│   │   │       │   ├── experience.component.ts
│   │   │       │   └── experience.component.html
│   │   │       ├── education/
│   │   │       │   ├── education.component.ts
│   │   │       │   └── education.component.html
│   │   │       ├── resume/
│   │   │       │   ├── resume.component.ts
│   │   │       │   └── resume.component.html
│   │   │       └── contact/
│   │   │           ├── contact.component.ts
│   │   │           └── contact.component.html
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts
│   │
│   ├── styles.css
│   └── main.ts
│
├── angular.json
├── package.json
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
└── README.md
```

---

# 4. Tailwind Configuration

## `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
};
```

## `src/styles.css`

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
  background: #ffffff;
  color: #0f172a;
}

.dark body {
  background: #020617;
  color: #f8fafc;
}

::selection {
  background: #6366f1;
  color: white;
}

section {
  scroll-margin-top: 80px;
}

.container-custom {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

---

# 5. Data Models

## `profile.model.ts`

```typescript
export interface Profile {
  name: string;
  role: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  image: string;
}
```

## `skill.model.ts`

```typescript
export interface Skill {
  name: string;
  category: string;
  icon?: string;
}
```

## `project.model.ts`

```typescript
export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}
```

## `experience.model.ts`

```typescript
export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}
```

## `education.model.ts`

```typescript
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}
```

---

# 6. Portfolio Data

## `profile.data.ts`

```typescript
import { Profile } from '../models/profile.model';

export const profile: Profile = {
  name: 'Gilang Prakoso',
  role: 'Software Engineer & Technical Product Builder',
  description:
    'I build modern web applications, scalable frontend architectures, and digital products using Angular, TypeScript, and modern web technologies.',
  location: 'Indonesia',
  email: 'hello@example.com',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  resume: '/resume.pdf',
  image: '/images/profile.jpg'
};
```

## `skills.data.ts`

```typescript
import { Skill } from '../models/skill.model';

export const skills: Skill[] = [
  {
    name: 'Angular',
    category: 'Frontend',
    icon: '/images/skills/angular.svg'
  },
  {
    name: 'TypeScript',
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    category: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend'
  },
  {
    name: 'HTML',
    category: 'Frontend'
  },
  {
    name: 'CSS',
    category: 'Frontend'
  },
  {
    name: 'RxJS',
    category: 'Frontend'
  },
  {
    name: 'Nx',
    category: 'Architecture'
  },
  {
    name: 'Module Federation',
    category: 'Architecture'
  },
  {
    name: 'Python',
    category: 'Backend'
  },
  {
    name: 'Node.js',
    category: 'Backend'
  },
  {
    name: 'REST API',
    category: 'Backend'
  },
  {
    name: 'Git',
    category: 'DevOps'
  },
  {
    name: 'Docker',
    category: 'DevOps'
  },
  {
    name: 'GitLab CI/CD',
    category: 'DevOps'
  },
  {
    name: 'PostgreSQL',
    category: 'Database'
  }
];
```

## `projects.data.ts`

```typescript
import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'Enterprise CRM Platform',
    description:
      'A scalable enterprise CRM platform designed to manage customer operations and business workflows.',
    image: '/images/projects/ai-platform.jpg',
    category: 'Enterprise',
    technologies: [
      'Angular',
      'TypeScript',
      'Nx',
      'Tailwind CSS',
      'Module Federation'
    ],
    featured: true
  },
  {
    title: 'AI Voice Platform',
    description:
      'An AI-powered voice solution for converting text into natural speech.',
    image: '/images/projects/speech-ai.jpg',
    category: 'Artificial Intelligence',
    technologies: [
      'Python',
      'Machine Learning',
      'Docker',
      'Cloud'
    ],
    featured: true
  },
  {
    title: 'Data Analytics Platform',
    description:
      'A data visualization platform for monitoring business metrics and operational performance.',
    image: '/images/projects/data-platform.jpg',
    category: 'Data',
    technologies: [
      'Angular',
      'TypeScript',
      'REST API',
      'PostgreSQL'
    ]
  }
];
```

## `experience.data.ts`

```typescript
import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
  {
    company: 'Technology Company',
    position: 'Senior Software Engineer',
    startDate: '2024',
    location: 'Indonesia',
    description:
      'Building enterprise applications and scalable frontend architecture.',
    responsibilities: [
      'Develop enterprise applications using Angular',
      'Design scalable frontend architecture',
      'Implement microfrontend architecture',
      'Collaborate with backend and product teams'
    ],
    technologies: [
      'Angular',
      'Nx',
      'TypeScript',
      'Module Federation'
    ]
  },
  {
    company: 'Software Company',
    position: 'Frontend Engineer',
    startDate: '2022',
    endDate: '2024',
    location: 'Indonesia',
    description:
      'Developed modern web applications and reusable UI components.',
    responsibilities: [
      'Develop responsive web applications',
      'Create reusable Angular components',
      'Integrate REST APIs',
      'Improve application performance'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Bootstrap'
    ]
  }
];
```

## `education.data.ts`

```typescript
import { Education } from '../models/education.model';

export const education: Education[] = [
  {
    institution: 'University Name',
    degree: 'Bachelor Degree',
    field: 'Computer Science',
    startDate: '2017',
    endDate: '2021',
    description:
      'Focused on software engineering, information systems, and computer science.'
  }
];
```

---

# 7. Dark Mode

## `src/app/core/services/theme.service.ts`

```typescript
import {
  Injectable,
  signal
} from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = signal<Theme>('light');

  constructor() {
    this.initializeTheme();
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem(
      'portfolio-theme'
    ) as Theme | null;

    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const theme: Theme =
      savedTheme ??
      (systemDark ? 'dark' : 'light');

    this.setTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(
      this.theme() === 'light'
        ? 'dark'
        : 'light'
    );
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);

    localStorage.setItem(
      'portfolio-theme',
      theme
    );

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );
  }
}
```

Theme disimpan di:

```text
localStorage
```

Key:

```text
portfolio-theme
```

Value:

```text
light
dark
```

---

# 8. Navbar

## `navbar.component.ts`

```typescript
import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  ThemeService
} from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  private themeService =
    inject(ThemeService);

  mobileMenuOpen =
    signal(false);

  menuItems = [
    {
      label: 'Home',
      target: 'home'
    },
    {
      label: 'Skills',
      target: 'skills'
    },
    {
      label: 'Projects',
      target: 'projects'
    },
    {
      label: 'Experience',
      target: 'experience'
    },
    {
      label: 'Education',
      target: 'education'
    },
    {
      label: 'Resume',
      target: 'resume'
    }
  ];

  toggleMenu(): void {
    this.mobileMenuOpen.update(
      value => !value
    );
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
```

## `navbar.component.html`

```html
<header
  class="fixed inset-x-0 top-0 z-50
         border-b border-slate-200/70
         bg-white/80 backdrop-blur-xl
         dark:border-slate-800
         dark:bg-slate-950/80">

  <nav class="container-custom">

    <div
      class="flex h-16 items-center
             justify-between">

      <a
        href="#home"
        class="text-lg font-bold
               tracking-tight
               text-slate-900
               dark:text-white">

        Gilang<span class="text-indigo-500">.</span>

      </a>

      <div
        class="hidden items-center gap-6 md:flex">

        @for (
          item of menuItems;
          track item.target
        ) {

          <a
            [href]="'#' + item.target"
            class="text-sm font-medium
                   text-slate-600
                   transition
                   hover:text-indigo-500
                   dark:text-slate-300
                   dark:hover:text-indigo-400">

            {{ item.label }}

          </a>

        }

        <button
          type="button"
          (click)="toggleTheme()"
          class="rounded-lg
                 border border-slate-200
                 p-2
                 hover:bg-slate-100
                 dark:border-slate-700
                 dark:hover:bg-slate-800">

          ◐

        </button>

      </div>

      <button
        type="button"
        class="md:hidden"
        (click)="toggleMenu()">

        ☰

      </button>

    </div>

    @if (mobileMenuOpen()) {

      <div
        class="border-t
               border-slate-200
               py-4
               dark:border-slate-800
               md:hidden">

        <div class="flex flex-col gap-4">

          @for (
            item of menuItems;
            track item.target
          ) {

            <a
              [href]="'#' + item.target"
              (click)="closeMenu()"
              class="text-sm font-medium">

              {{ item.label }}

            </a>

          }

          <button
            type="button"
            (click)="toggleTheme()"
            class="text-left">

            Toggle Theme

          </button>

        </div>

      </div>

    }

  </nav>

</header>
```

---

# 9. Home / Hero

## `home.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {

  profile = profile;

}
```

## `home.component.html`

```html
<section
  id="home"
  class="relative
         flex min-h-screen
         items-center
         overflow-hidden
         pt-16">

  <div
    class="absolute -left-40 top-20
           h-96 w-96 rounded-full
           bg-indigo-500/10 blur-3xl">
  </div>

  <div
    class="absolute -right-40 bottom-20
           h-96 w-96 rounded-full
           bg-purple-500/10 blur-3xl">
  </div>

  <div
    class="container-custom relative
           grid gap-12
           lg:grid-cols-2
           lg:items-center">

    <div>

      <span
        class="mb-5 inline-block
               rounded-full
               border border-indigo-200
               bg-indigo-50
               px-4 py-2
               text-sm font-medium
               text-indigo-600
               dark:border-indigo-900
               dark:bg-indigo-950
               dark:text-indigo-300">

        Hello, I'm

      </span>

      <h1
        class="max-w-3xl
               text-5xl font-bold
               tracking-tight
               text-slate-900
               sm:text-6xl
               lg:text-7xl
               dark:text-white">

        {{ profile.name }}

      </h1>

      <h2
        class="mt-6
               text-2xl font-semibold
               text-indigo-500
               sm:text-3xl">

        {{ profile.role }}

      </h2>

      <p
        class="mt-6 max-w-2xl
               text-lg leading-8
               text-slate-600
               dark:text-slate-400">

        {{ profile.description }}

      </p>

      <div
        class="mt-8 flex flex-wrap gap-4">

        <a
          href="#projects"
          class="rounded-xl
                 bg-indigo-600
                 px-6 py-3
                 font-semibold text-white
                 transition
                 hover:-translate-y-1
                 hover:bg-indigo-700">

          View Projects

        </a>

        <a
          [href]="profile.resume"
          download
          class="rounded-xl
                 border border-slate-300
                 px-6 py-3
                 font-semibold
                 transition
                 hover:bg-slate-100
                 dark:border-slate-700
                 dark:hover:bg-slate-800">

          Download Resume

        </a>

      </div>

    </div>

    <div
      class="flex justify-center
             lg:justify-end">

      <div class="relative">

        <div
          class="absolute inset-0
                 rounded-3xl
                 bg-indigo-500/20
                 blur-2xl">
        </div>

        <img
          [src]="profile.image"
          [alt]="profile.name"
          class="relative
                 h-80 w-80
                 rounded-3xl
                 object-cover
                 shadow-2xl
                 sm:h-96 sm:w-96">

      </div>

    </div>

  </div>

</section>
```

---

# 10. Skills

## `skills.component.ts`

```typescript
import {
  Component,
  computed,
  signal
} from '@angular/core';

import {
  skills
} from '../../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html'
})
export class SkillsComponent {

  skills = skills;

  selectedCategory =
    signal('All');

  categories = [
    'All',
    'Frontend',
    'Backend',
    'Architecture',
    'DevOps',
    'Database'
  ];

  filteredSkills =
    computed(() => {

      const category =
        this.selectedCategory();

      if (category === 'All') {
        return this.skills;
      }

      return this.skills.filter(
        skill =>
          skill.category === category
      );

    });

  selectCategory(
    category: string
  ): void {

    this.selectedCategory.set(
      category
    );

  }

}
```

## `skills.component.html`

```html
<section
  id="skills"
  class="bg-slate-50 py-24
         dark:bg-slate-900/40">

  <div class="container-custom">

    <div class="max-w-2xl">

      <p
        class="font-semibold text-indigo-500">

        Skills

      </p>

      <h2
        class="mt-2
               text-4xl font-bold
               tracking-tight">

        Technologies I Work With

      </h2>

      <p
        class="mt-4
               text-slate-600
               dark:text-slate-400">

        A collection of technologies
        and tools I use to build
        modern digital products.

      </p>

    </div>

    <div
      class="mt-10 flex flex-wrap gap-3">

      @for (
        category of categories;
        track category
      ) {

        <button
          type="button"
          (click)="selectCategory(category)"
          [class.bg-indigo-600]="
            selectedCategory() === category
          "
          [class.text-white]="
            selectedCategory() === category
          "
          class="rounded-full
                 border border-slate-300
                 px-5 py-2
                 text-sm font-medium
                 transition
                 hover:border-indigo-500
                 dark:border-slate-700">

          {{ category }}

        </button>

      }

    </div>

    <div
      class="mt-10 grid gap-4
             sm:grid-cols-2
             lg:grid-cols-4">

      @for (
        skill of filteredSkills();
        track skill.name
      ) {

        <div
          class="rounded-2xl
                 border border-slate-200
                 bg-white p-6
                 transition
                 hover:-translate-y-1
                 hover:shadow-lg
                 dark:border-slate-800
                 dark:bg-slate-950">

          <div
            class="mb-4 flex h-12 w-12
                   items-center justify-center
                   rounded-xl
                   bg-indigo-50
                   font-bold
                   text-indigo-600
                   dark:bg-indigo-950
                   dark:text-indigo-300">

            {{ skill.name.charAt(0) }}

          </div>

          <h3 class="font-semibold">

            {{ skill.name }}

          </h3>

          <p
            class="mt-1
                   text-sm
                   text-slate-500">

            {{ skill.category }}

          </p>

        </div>

      }

    </div>

  </div>

</section>
```

---

# 11. Projects

## `projects.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  projects
} from '../../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  projects = projects;

}
```

## `projects.component.html`

```html
<section
  id="projects"
  class="py-24">

  <div class="container-custom">

    <div class="max-w-2xl">

      <p
        class="font-semibold
               text-indigo-500">

        Products & Projects

      </p>

      <h2
        class="mt-2 text-4xl font-bold">

        Selected Work

      </h2>

    </div>

    <div
      class="mt-12 grid gap-8
             lg:grid-cols-3">

      @for (
        project of projects;
        track project.title
      ) {

        <article
          class="group overflow-hidden
                 rounded-3xl
                 border border-slate-200
                 bg-white
                 transition
                 hover:-translate-y-2
                 hover:shadow-xl
                 dark:border-slate-800
                 dark:bg-slate-950">

          <div
            class="aspect-video
                   overflow-hidden">

            <img
              [src]="project.image"
              [alt]="project.title"
              class="h-full w-full
                     object-cover
                     transition duration-500
                     group-hover:scale-105">

          </div>

          <div class="p-6">

            <span
              class="text-sm font-medium
                     text-indigo-500">

              {{ project.category }}

            </span>

            <h3
              class="mt-2 text-xl font-bold">

              {{ project.title }}

            </h3>

            <p
              class="mt-3 text-sm
                     leading-6
                     text-slate-600
                     dark:text-slate-400">

              {{ project.description }}

            </p>

            <div
              class="mt-5 flex flex-wrap gap-2">

              @for (
                tech of project.technologies;
                track tech
              ) {

                <span
                  class="rounded-full
                         bg-slate-100
                         px-3 py-1
                         text-xs
                         dark:bg-slate-800">

                  {{ tech }}

                </span>

              }

            </div>

          </div>

        </article>

      }

    </div>

  </div>

</section>
```

---

# 12. Experience

## `experience.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  experiences
} from '../../../core/data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  experiences = experiences;

}
```

## `experience.component.html`

```html
<section
  id="experience"
  class="bg-slate-50 py-24
         dark:bg-slate-900/40">

  <div class="container-custom">

    <p
      class="font-semibold
             text-indigo-500">

      Experience

    </p>

    <h2
      class="mt-2 text-4xl font-bold">

      Professional Journey

    </h2>

    <div
      class="mt-12 max-w-4xl">

      @for (
        experience of experiences;
        track experience.company
      ) {

        <div
          class="relative
                 border-l
                 border-slate-300
                 pb-12 pl-8
                 last:pb-0
                 dark:border-slate-700">

          <div
            class="absolute -left-2
                   top-0 h-4 w-4
                   rounded-full
                   bg-indigo-600
                   ring-4
                   ring-slate-50
                   dark:ring-slate-900">
          </div>

          <span
            class="text-sm font-medium
                   text-indigo-500">

            {{ experience.startDate }}

            @if (experience.endDate) {
              - {{ experience.endDate }}
            } @else {
              - Present
            }

          </span>

          <h3
            class="mt-2 text-xl font-bold">

            {{ experience.position }}

          </h3>

          <p class="mt-1 font-medium">

            {{ experience.company }}

          </p>

          <p
            class="mt-4
                   text-slate-600
                   dark:text-slate-400">

            {{ experience.description }}

          </p>

          <ul
            class="mt-5 space-y-2">

            @for (
              responsibility of experience.responsibilities;
              track responsibility
            ) {

              <li
                class="flex gap-2
                       text-sm
                       text-slate-600
                       dark:text-slate-400">

                <span
                  class="text-indigo-500">

                  ✓

                </span>

                {{ responsibility }}

              </li>

            }

          </ul>

        </div>

      }

    </div>

  </div>

</section>
```

---

# 13. Education

## `education.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  education
} from '../../../core/data/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html'
})
export class EducationComponent {

  education = education;

}
```

## `education.component.html`

```html
<section
  id="education"
  class="py-24">

  <div class="container-custom">

    <p
      class="font-semibold
             text-indigo-500">

      Education

    </p>

    <h2
      class="mt-2 text-4xl font-bold">

      Academic Background

    </h2>

    <div
      class="mt-10 grid gap-6
             md:grid-cols-2">

      @for (
        item of education;
        track item.institution
      ) {

        <div
          class="rounded-3xl
                 border border-slate-200
                 p-8
                 dark:border-slate-800">

          <span
            class="text-sm
                   text-indigo-500">

            {{ item.startDate }}
            -
            {{ item.endDate }}

          </span>

          <h3
            class="mt-3
                   text-xl font-bold">

            {{ item.degree }}

          </h3>

          <p class="mt-2 font-medium">

            {{ item.field }}

          </p>

          <p
            class="mt-1
                   text-slate-500">

            {{ item.institution }}

          </p>

          <p
            class="mt-4
                   text-sm leading-6
                   text-slate-600
                   dark:text-slate-400">

            {{ item.description }}

          </p>

        </div>

      }

    </div>

  </div>

</section>
```

---

# 14. Resume

## `resume.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html'
})
export class ResumeComponent {

  profile = profile;

}
```

## `resume.component.html`

```html
<section
  id="resume"
  class="py-24">

  <div class="container-custom">

    <div
      class="rounded-3xl
             bg-indigo-600
             p-8 text-white
             sm:p-12
             lg:p-16">

      <div class="max-w-3xl">

        <h2
          class="text-3xl font-bold
                 sm:text-4xl">

          Interested in working together?

        </h2>

        <p
          class="mt-4 text-indigo-100">

          Download my resume to learn
          more about my professional
          experience, skills, and background.

        </p>

        <a
          [href]="profile.resume"
          download
          class="mt-8 inline-flex
                 rounded-xl bg-white
                 px-6 py-3
                 font-semibold
                 text-indigo-600
                 transition
                 hover:-translate-y-1">

          Download Resume

        </a>

      </div>

    </div>

  </div>

</section>
```

---

# 15. Contact

## `contact.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  profile = profile;

}
```

## `contact.component.html`

```html
<section
  id="contact"
  class="bg-slate-50 py-24
         dark:bg-slate-900/40">

  <div
    class="container-custom text-center">

    <p
      class="font-semibold
             text-indigo-500">

      Contact

    </p>

    <h2
      class="mt-2 text-4xl font-bold">

      Let's Connect

    </h2>

    <p
      class="mx-auto mt-4 max-w-xl
             text-slate-600
             dark:text-slate-400">

      Have a project, collaboration,
      or opportunity in mind?
      Feel free to reach out.

    </p>

    <a
      [href]="'mailto:' + profile.email"
      class="mt-8 inline-flex
             rounded-xl
             bg-indigo-600
             px-6 py-3
             font-semibold text-white
             transition
             hover:bg-indigo-700">

      Email Me

    </a>

  </div>

</section>
```

---

# 16. App Component

## `app.component.ts`

```typescript
import { Component } from '@angular/core';

import {
  NavbarComponent
} from './shared/components/navbar/navbar.component';

import {
  HomeComponent
} from './features/portfolio/home/home.component';

import {
  SkillsComponent
} from './features/portfolio/skills/skills.component';

import {
  ProjectsComponent
} from './features/portfolio/projects/projects.component';

import {
  ExperienceComponent
} from './features/portfolio/experience/experience.component';

import {
  EducationComponent
} from './features/portfolio/education/education.component';

import {
  ResumeComponent
} from './features/portfolio/resume/resume.component';

import {
  ContactComponent
} from './features/portfolio/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

## `app.component.html`

```html
<app-navbar />

<main>

  <app-home />

  <app-skills />

  <app-projects />

  <app-experience />

  <app-education />

  <app-resume />

  <app-contact />

</main>

<footer
  class="border-t
         border-slate-200
         py-8
         dark:border-slate-800">

  <div
    class="container-custom
           text-center
           text-sm
           text-slate-500">

    © 2026 Gilang Prakoso.
    Built with Angular & Tailwind CSS.

  </div>

</footer>
```

---

# 17. Routing

Untuk versi Single Page Portfolio:

## `app.routes.ts`

```typescript
import {
  Routes
} from '@angular/router';

export const routes: Routes = [];
```

Jika nanti dibuat halaman detail project:

```text
/projects
/projects/:slug
/resume
/contact
```

Gunakan lazy-loaded routes:

```typescript
import {
  Routes
} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/portfolio/home/home.component'
      ).then(
        m => m.HomeComponent
      )
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import(
        './features/portfolio/project-detail/project-detail.component'
      ).then(
        m => m.ProjectDetailComponent
      )
  }
];
```

---

# 18. `main.ts`

```typescript
import {
  bootstrapApplication
} from '@angular/platform-browser';

import {
  provideRouter
} from '@angular/router';

import {
  AppComponent
} from './app/app.component';

import {
  routes
} from './app/app.routes';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideRouter(routes)
    ]
  }
).catch(
  err => console.error(err)
);
```

---

# 19. UI Design

## Navbar

- Fixed
- Sticky
- Backdrop blur
- Border bottom
- Desktop navigation
- Mobile hamburger
- Dark mode toggle

## Hero

- Full viewport
- Large typography
- Gradient background decoration
- Profile photo
- CTA button
- Download resume

## Skills

- Category filter
- Responsive grid
- Skill card
- Hover animation

## Projects

- Project image
- Category
- Description
- Technology badges
- Hover scale

## Experience

- Vertical timeline
- Position
- Company
- Date
- Responsibilities
- Technologies

## Education

- Responsive cards
- Degree
- Institution
- Field
- Period

## Resume

- Large CTA section
- Download button

## Contact

- Email CTA
- Social links
- Simple layout

---

# 20. Color System

## Light

```text
Background:
#FFFFFF

Secondary:
#F8FAFC

Text:
#0F172A

Secondary Text:
#64748B

Border:
#E2E8F0

Primary:
#4F46E5
```

## Dark

```text
Background:
#020617

Secondary:
#0F172A

Text:
#F8FAFC

Secondary Text:
#94A3B8

Border:
#1E293B

Primary:
#6366F1
```

---

# 21. Responsive Layout

Mobile:

```text
Single column
Hamburger navigation
Full-width cards
Vertical timeline
```

Tablet:

```text
2-column project grid
2-column skill grid
```

Desktop:

```text
2-column hero
3-column project grid
4-column skill grid
```

Gunakan:

```html
<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
```

---

# 22. Animation

Gunakan animasi sederhana:

- Fade in
- Slide up
- Hover scale
- Hover shadow
- Navbar transition

Contoh:

```html
class="
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-xl
"
```

Untuk animasi saat scroll, prioritaskan `IntersectionObserver` daripada library animasi besar.

---

# 23. SEO

Tambahkan:

- Title
- Meta description
- Open Graph
- Twitter Card
- Favicon

Contoh:

```text
Title:
Gilang Prakoso — Software Engineer

Description:
Personal portfolio showcasing software engineering,
Angular, TypeScript, frontend architecture,
and digital products.
```

Gunakan semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

---

# 24. Accessibility

Pastikan:

- Semua gambar memiliki `alt`
- Button memiliki label jelas
- Link memiliki tujuan jelas
- Kontras warna cukup
- Keyboard navigation
- Focus state
- Mobile menu mudah ditutup
- Semantic HTML

---

# 25. Performance

Optimasi:

- Lazy load images
- Gunakan WebP jika tersedia
- Kompres gambar
- Hindari gambar terlalu besar
- Minimalkan dependency
- Gunakan Tailwind content scanning
- Hindari JavaScript yang tidak digunakan

---

# 26. Development Steps

## Step 1

Create Angular project.

## Step 2

Configure Tailwind CSS.

## Step 3

Create global styles.

## Step 4

Create data models.

## Step 5

Create portfolio data.

## Step 6

Create ThemeService.

## Step 7

Create Navbar.

## Step 8

Create Hero.

## Step 9

Create Skills.

## Step 10

Create Projects.

## Step 11

Create Experience.

## Step 12

Create Education.

## Step 13

Create Resume CTA.

## Step 14

Create Contact.

## Step 15

Create Footer.

## Step 16

Implement Dark Mode.

## Step 17

Implement Responsive UI.

## Step 18

Implement Animation.

## Step 19

Implement SEO.

## Step 20

Production Build.

---

# 27. Recommended Nx Architecture

Jika project akan dimasukkan ke Nx monorepo, gunakan:

```text
apps/
└── portfolio/
    └── src/
        └── app/

libs/
├── shared/
│   ├── ui/
│   ├── theme/
│   └── models/
│
└── portfolio/
    ├── data/
    ├── feature-home/
    ├── feature-skills/
    ├── feature-projects/
    ├── feature-experience/
    └── feature-contact/
```

Rekomendasi pembagian:

```text
libs/shared/ui
```

Untuk:

- Button
- Card
- Badge
- Modal
- Section title

```text
libs/shared/theme
```

Untuk:

- ThemeService
- Dark mode
- Design tokens

```text
libs/shared/models
```

Untuk:

- Profile
- Skill
- Project
- Experience
- Education

```text
libs/portfolio/data
```

Untuk:

- Portfolio data
- Skills
- Projects
- Experience
- Education

```text
libs/portfolio/feature-*
```

Untuk setiap feature portfolio.

---

# 28. Expected Final UI

```text
┌─────────────────────────────────────────────┐
│ Gilang.    Skills Projects Experience  ◐   │
├─────────────────────────────────────────────┤
│                                             │
│ Hello, I'm                                 │
│                                             │
│ GILANG PRAKOSO          ┌───────────────┐   │
│                         │               │   │
│ Software Engineer       │ Profile Photo │   │
│ & Technical Product    │               │   │
│ Builder                └───────────────┘   │
│                                             │
│ [View Projects] [Download Resume]           │
│                                             │
├─────────────────────────────────────────────┤
│ Skills                                      │
│                                             │
│ [All] [Frontend] [Backend] [DevOps]         │
│                                             │
│ [Angular] [TypeScript] [Nx] [Docker]        │
│                                             │
├─────────────────────────────────────────────┤
│ Products & Projects                         │
│                                             │
│ [ Project ]  [ Project ]  [ Project ]       │
│                                             │
├─────────────────────────────────────────────┤
│ Experience                                  │
│                                             │
│ ● Senior Software Engineer                  │
│ │                                           │
│ ● Frontend Engineer                         │
│                                             │
├─────────────────────────────────────────────┤
│ Education                                   │
│                                             │
│ [ University / Degree ]                     │
│                                             │
├─────────────────────────────────────────────┤
│ Interested in working together?             │
│                                             │
│ [ Download Resume ]                         │
│                                             │
├─────────────────────────────────────────────┤
│ Let's Connect                               │
│                                             │
│ [ Email Me ]                                │
│                                             │
├─────────────────────────────────────────────┤
│ © 2026 Gilang Prakoso                       │
└─────────────────────────────────────────────┘
```

---

# 29. Important Implementation Notes

Website referensi digunakan sebagai inspirasi struktur dan pengalaman pengguna.

Jangan menyalin source code website referensi.

Fokus implementasi:

1. Angular sebagai framework utama.
2. Tailwind CSS sebagai styling framework.
3. Standalone Components.
4. Data portfolio terpisah dari UI.
5. Reusable Components.
6. Responsive Mobile-first.
7. Light/Dark Mode.
8. Smooth Scrolling.
9. SEO.
10. Accessibility.
11. Performance.
12. Clean Architecture.

Data dummy harus diganti dengan data portfolio sebenarnya:

- Nama
- Foto profil
- Role
- Deskripsi
- Skills
- Project
- Experience
- Education
- Email
- GitHub
- LinkedIn
- Resume

Untuk project yang menggunakan Nx, prioritaskan pemisahan antara `apps`, `libs/shared`, dan `libs/portfolio` agar dapat dikembangkan menjadi arsitektur monorepo.
