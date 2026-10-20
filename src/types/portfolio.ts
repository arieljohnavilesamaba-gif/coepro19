export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Software Development' | 'Web Development' | 'Full-Stack' | 'Systems / Tools' | 'Hardware & Embedded';
  tags: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  featuredBadge?: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  date: string;
}

export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Proficient' | 'Advanced' | 'Certified Master';
  percent?: number; // Optional, percentages removed in favor of mastery tiers
  tier: string;
  mythologySymbol?: string;
  mythologyTitle?: string;
  iconName?: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Hardware & Systems' | 'Tools & DevOps';
  description?: string;
  highlights?: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  location?: string;
  period: string;
  type: 'experience' | 'education' | 'certification' | 'milestone';
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  discord?: string;
  phone?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialId?: string;
  description: string;
  skills: string[];
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  status: string;
  location: string;
  address: string;
  phone: string;
  timezone: string;
  avatarUrl?: string;
  about: {
    lead: string;
    paragraphs: string[];
    philosophy: string;
    focusAreas: string[];
  };
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: SocialLinks;
  certifications: Certification[];
  resume: {
    viewUrl: string;
    filename: string;
    summary: string[];
  };
}
