export interface Experience {
  id: string;
  slug: string;
  companyId: string;
  company: string;
  companyDetails: {
    id: string;
    name: string;
    slug: string;
    logoUrl: string | null;
    website: string | null;
  };
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

export interface Company {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  website: string | null;
  logoUrl: string | null;
  experiences: Experience[];
  createdAt: string;
  updatedAt: string;
}
