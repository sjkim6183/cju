/**
 * Type declarations for the Chungbuk National University (충북대학교) portal application.
 */

export type ActiveTab = 'home' | 'academics' | 'campus-life';

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  views: number;
  featured?: boolean;
}

export interface AcademicNotice {
  id: string;
  title: string;
  category: '일반' | '학사' | '장학' | '채용';
  date: string;
  department: string;
  isNew?: boolean;
  isImportant?: boolean;
}

export interface AcademicCalendarEvent {
  id: string;
  month: string;
  day: string;
  title: string;
  dates: string;
  type: 'academic' | 'holiday' | 'festival';
}

export interface UniversityStat {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Department {
  id: string;
  name: string;
  college: '인문대학' | '사회과학대학' | '자연과학대학' | '공과대학' | '의학/바이오' | '예술/디자인';
  image: string;
  description: string;
  studentRatio: string; // e.g. "12:1"
  employmentRate: string; // e.g. "82%"
  careers: string[];
  subjects: string[];
  clubs: string[];
}

export interface SpecialProgram {
  id: string;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface CampusLifePhoto {
  id: string;
  title: string;
  category: '축제' | '동아리' | '학습/도서관' | '체육';
  image: string;
  description: string;
  date: string;
}

export interface Facility {
  id: string;
  name: string;
  koreanName: string;
  description: string;
  amenities: string[];
  hours: string;
  location: string;
  image: string;
  details: string;
}

export interface DormSpec {
  name: string;
  capacity: string;
  roomTypes: string[];
  fee: string;
  features: string[];
}

export interface StudentTestimonial {
  id: string;
  name: string;
  department: string;
  year: number;
  quote: string;
  avatar: string;
}

export interface DailyMenu {
  date: string;
  dayOfWeek: '월' | '화' | '수' | '목' | '금';
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  calories: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}
