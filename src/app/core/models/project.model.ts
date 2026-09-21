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
