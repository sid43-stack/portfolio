export interface Project {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  description: string;
  keyPoints: string[];
  hrTakeaway: string;
  problem: string;
  approach: string;
  whatIBuilt: string[];
  challenges: string;
  outcomePurpose: string;
  whatILearned: string;
  githubUrl?: string;
  pipelineSteps?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StrengthCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  boardOrUniversity?: string;
  gpaOrStream?: string;
  description?: string;
  highlights?: string[];
}
