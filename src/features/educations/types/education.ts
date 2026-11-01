export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string | null;
  period?: string;
  status: string;
  type: string;
  description: string;
  skills: string[];
  diplomaImage: string | null;
  diplomaAlt: string | null;
}
