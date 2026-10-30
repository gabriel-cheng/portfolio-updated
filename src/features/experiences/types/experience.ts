export interface Experience {
  id: string;
  slug: string;
  company: string;
  role: string;
  employmentType: string;
  location: string | null;
  description: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  displayOrder: number;
  status: "DRAFT" | "PUBLISHED";
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}
