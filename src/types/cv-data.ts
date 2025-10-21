// --- Temel Alanlar ---
export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface BasicDetails {
  name: string;
  label: string; // Title
  image: string;
  email: string;
  phone: string;
  url: string; // Website URL
  summary: string;
  location: Location;
  relExp: string; // Relevant Experience
  totalExp: string; // Total Experience
  objective: string;
  profiles: Profile[]; // Sosyal medya/linkler
}

// --- Deneyim Alanları ---
export interface WorkExperience {
  id: string;
  name: string; // Company
  position: string;
  url: string;
  startDate: string;
  isWorkingHere: boolean;
  endDate: string | null;
  highlights: string[];
  summary: string; // HTML içeriği içeriyor
  years: string;
}

// --- Beceri Alanları (Skill Item) ---
export interface SkillItem {
  name: string;
  level: number; // Yüzde veya 1-5 seviye
}

export interface Skills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  technologies: SkillItem[];
  libraries: SkillItem[];
  databases: SkillItem[];
  practices: SkillItem[];
  tools: SkillItem[];
}

// --- Eğitim Alanları ---
export interface Education {
  id: string;
  institution: string;
  url: string;
  studyType: string;
  area: string;
  startDate: string;
  isStudyingHere: boolean;
  endDate: string;
  score: string;
  courses: string[];
}

// --- Aktiviteler ---
export interface Activities {
  involvements: string;
  achievements: string;
}

// --- Gönüllü Çalışmalar ---
export interface Volunteer {
  id: string;
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  isVolunteeringNow: boolean;
}

// --- Ödüller ---
export interface Award {
  id: string;
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

// --- Ana CV Veri Yapısı ---
export interface CvData {
  basics: BasicDetails;
  skills: Skills;
  work: WorkExperience[];
  education: Education[];
  activities: Activities;
  volunteer: Volunteer[];
  awards: Award[];
}
