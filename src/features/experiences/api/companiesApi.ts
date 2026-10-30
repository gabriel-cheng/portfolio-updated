import type { Company } from "../types/experience";

const API_URL = import.meta.env.VITE_API_URL;

export const companiesApi = {
  async list(): Promise<Company[]> {
    if (!API_URL) {
      throw new Error("A variável VITE_API_URL não foi configurada.");
    }

    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/public/companies`,
    );

    if (!response.ok) {
      throw new Error("Não foi possível carregar as empresas.");
    }

    return response.json() as Promise<Company[]>;
  },
};
