export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tech: string[];
  category: string;
  demoUrl: string;
  sourceUrl: string;
  features: string[];
  completionDate: string;
  duration: string;
  challenges?: string[];
  learnings?: string[];
}