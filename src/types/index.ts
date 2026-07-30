export type ProjectType = 'startup' | 'contract' | 'hackathon' | 'undisclosed';

export interface Project {
  id: string;
  number: string;
  title: string;
  projectType: ProjectType;
  description: string;
  image: string;
  previewUrl?: string;
  technologies: string[];
  link?: string;
  status?: string;
  hackathonWin?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineMilestone {
  phase: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
  image: string;
}

export interface Experience {
  role: string;
  organisation: string;
  period: string;
  type: 'internship' | 'ngo' | 'startup' | 'community';
  description: string;
  highlights: string[];
}

export interface Social {
  label: string;
  url: string;
  handle?: string;
}

export interface PressItem {
  publication: string;
  headline: string;
  excerpt: string;
  date: string;
  url: string;
  previewUrl: string;
}

export interface PersonInfo {
  name: string;
  alias: string;
  tagline: string;
  role: string;
  bio: string;
  about: string[];
  location: string;
  email: string;
  university: string;
  degree: string;
  level: string;
  profileImage: string;
  resumeUrl: string;
  socials: Social[];
}
