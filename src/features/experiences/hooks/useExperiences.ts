import { useQuery } from "@tanstack/react-query";
import { experiencesApi } from "../api/experiencesApi";

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: experiencesApi.list,
  });
}
