import type { Experience } from "../types/experience";

const API_URL = import.meta.env.VITE_API_URL;

export const experiencesApi = {
  async list(): Promise<Experience[]> {
    if (!API_URL) {
      throw new Error("A variável VITE_API_URL não foi configurada.");
    }

    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/public/experiences`,
    );

    if (!response.ok) {
      throw new Error("Não foi possível carregar as experiências.");
    }

    return response.json() as Promise<Experience[]>;
  },
};
