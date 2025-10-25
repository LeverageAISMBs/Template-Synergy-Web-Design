export type Page = 'Directory' | 'Services' | 'FAQ' | 'AboutUs';

export interface Chamber {
  city: string;
  county: string;
  name: string;
  website: string;
  phone: string;
  scores: {
    services: number;
    community: number;
    advocacy: number;
    health: number;
  };
  totalScore: number;
  notes: string;
}
