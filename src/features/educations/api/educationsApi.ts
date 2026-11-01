import type { Education } from "../types/education";

const API_URL = import.meta.env.VITE_API_URL;

export const educationsApi = {
  async list(): Promise<Education[]> {
    if (!API_URL) {
      throw new Error("A variável VITE_API_URL não foi configurada.");
    }

    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/public/educations`,
    );

    if (!response.ok) {
      throw new Error("Não foi possível carregar as formações acadêmicas.");
    }

    return response.json() as Promise<Education[]>;
  },
};

