export interface Experience {
  company: string;
  url: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  external: string | null;
  featured: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  readTime?: string;
}
