export interface Project {
  id: number;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Experience {
  year: string;
  title: string;
  company?: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}
