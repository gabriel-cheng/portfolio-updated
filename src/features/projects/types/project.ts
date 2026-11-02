export interface Project {
  id?: string;
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  image: string | null;
  imageAlt?: string | null;
  href?: string | null;
}
