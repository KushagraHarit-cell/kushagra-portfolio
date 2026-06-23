export interface Project {
  id: number;
  title: string;
  description: string;
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
