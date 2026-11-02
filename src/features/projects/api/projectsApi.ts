import type { Project } from "../types/project";

const API_URL = import.meta.env.VITE_API_URL;

export const projectsApi = {
  async list(): Promise<Project[]> {
    if (!API_URL) {
      throw new Error("A variável VITE_API_URL não foi configurada.");
    }

    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/public/projects`,
    );

    if (!response.ok) {
      throw new Error("Não foi possível carregar os projetos.");
    }

    return response.json() as Promise<Project[]>;
  },
};
