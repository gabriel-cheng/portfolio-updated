import { useQuery } from "@tanstack/react-query";
import { educationsApi } from "../api/educationsApi";

export function useEducations() {
  return useQuery({
    queryKey: ["educations"],
    queryFn: educationsApi.list,
  });
}

