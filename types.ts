
export type Language = 'nl' | 'en';

export interface HeaderContent {
  name: string;
  navLinks: { id: string; text: string }[];
}

export interface HeroContent {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export interface AboutMeContent {
  title?: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export type CourseStatus = 'Lopend' | 'Afgerond' | 'Komend';

export interface Course {
  name: string;
  status: CourseStatus;
  credits: number;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  logoUrl?: string;
  years: string;
  status: 'Lopend' | 'Afgerond';
  details: {
    opleidingsnaam: string;
    niveau: string;
    uitstroomprofiel: string;
    locatie: string;
  };
  clickableText: string;
  dialogContent?: {
    title: string;
    projects?: Project[];
    curriculum?: {
      year: number;
      courses: Course[];
    }[];
    mainProject?: {
      title: string;
      description: string;
    };
    followedCourses?: {
      name: string;
      credits: number;
    }[];
  };
  accordionContent?: {
    title: string;
    certificateNumber: string;
    issuedBy: string;
    date: string;
    logoUrl?: string;
  };
}

export interface EducationContent {
  title: string;
  institutions: EducationItem[];
  labels?: {
    courseName?: string;
    level?: string;
    profile?: string;
    location?: string;
    projects?: string;
    mainProject?: string;
    curriculum?: string;
    followedCourses?: string;
    year?: string;
    statusInProgress?: string;
    statusCompleted?: string;
    statusUpcoming?: string;
    // labels for the extracurricular/accordion diploma section
    certificateNumber?: string;
    issuedBy?: string;
    certificateDate?: string;
  };
}

export interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
    supervisor?: string;
    skills: string[];
    logoUrl?: string;
}

export interface SkillCategory {
    title: string;
    skills: { name: string; logoUrl?: string }[];
}

export interface TransferableSkill {
    title: string;
    description: string;
}

export interface WorkExperienceContent {
  title: string;
  categories: {
    it: string;
    communication: string;
    logistics: string;
  };
  jobs: {
    it: Job[];
    communication: Job[];
    logistics: Job[];
  };
  technicalSkills: {
    title: string;
    frontend: SkillCategory;
    backend: SkillCategory;
    database: SkillCategory;
  };
  transferableSkills: {
    title: string;
    skills: TransferableSkill[];
  }
  // optional labels for localization (e.g., supervisor label)
  labels?: {
    supervisor?: string;
  };
}


export interface Hobby {
  name: string;
  description: string;
  percentage: number;
}

export interface HobbiesContent {
  title: string;
  intro: string;
  hobbies: Hobby[];
}

export interface Goal {
  title: string;
  description: string;
}

export interface GoalsContent {
  title: string;
  goals: Goal[];
}

export interface FooterContent {
  title: string;
  email: string;
  linkedin: string;
  labels?: {
    linkedinHeading?: string;
    emailHeading?: string;
    copyright?: string;
  };
}

export interface ContentData {
  header: HeaderContent;
  hero: HeroContent;
  aboutMe: AboutMeContent;
  education: EducationContent;
  workExperience: WorkExperienceContent;
  hobbies: HobbiesContent;
  goals: GoalsContent;
  footer: FooterContent;
}

export type AppContent = {
  [key in Language]: ContentData;
};
