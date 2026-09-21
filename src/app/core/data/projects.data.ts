import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'Jago Motor',
    description:
      'A scalable enterprise CRM platform designed to manage customer operations and business workflows.',
    image: '/images/projects/jago-motor.png',
    category: 'Enterprise',
    technologies: [
      'Angular',
      'TypeScript',
      'Nx',
      'Bootstrap',
      'Module Federation'
    ],
    featured: true
  },
  {
    title: 'Jago Motor Customer App',
    description:
      'A mobile application developed for customers to seamlessly manage motorcycle purchases, order spare parts, and schedule services.',
    image: '/images/projects/customer-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Couchbase'
    ],
    featured: true
  },
  {
    title: 'Jago Motor Driver App',
    description:
      'A mobile application designed to streamline motorcycle deliveries, providing drivers with tools to manage tasks and track routes efficiently.',
    image: '/images/projects/driver-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Google Maps'
    ],
    featured: true
  },
  {
    title: 'Jago Motor Helper App',
    description:
      'An internal application for showroom staff to efficiently manage daily operations, track tasks, and monitor employee performance.',
    image: '/images/projects/helper-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Couchbase'
    ],
    featured: false
  },
  {
    title: 'Jago Motor Mechanic App',
    description:
      'A dedicated application for mechanics to track daily attendance and manage their motorcycle maintenance job lists.',
    image: '/images/projects/mechanic-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Google Maps'
    ],
    featured: false
  },
  {
    title: 'Jago Motor Sales App',
    description:
      'A comprehensive CRM tool designed for sales teams to manage customer data, schedule visits, create sales orders, and review transaction reports.',
    image: '/images/projects/sales-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Couchbase'
    ],
    featured: true
  },
  {
    title: 'Mobile Merchant App',
    description:
      'A platform designed for merchants to manage business operations, track sales, and monitor store analytics seamlessly from their mobile devices.',
    image: '/images/projects/merchant-app.png',
    category: 'Mobile Application',
    technologies: [
      'NativeScript',
      'Angular',
      'TypeScript',
      'Firebase',
      'Tailwind CSS'
    ],
    featured: false
  },
  {
    title: 'React Admin Console',
    description:
      'A comprehensive and highly customizable administrative dashboard featuring data visualization, user management, and advanced backend integrations.',
    image: '/images/projects/react-console.png',
    category: 'Web Application',
    technologies: [
      'React',
      'TypeScript',
      'Material UI',
      'Vite',
      'Firebase'
    ],
    featured: true
  }
];
