import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/domains/common/utils/fetcher/fetcher";

export const useCities = () => {
  return useQuery({
    queryKey: ['get-all-cities'],
    queryFn: () => fetcher(`/api/v1/regions/cities?limit=1000`, {
      method: 'GET',
      requestType: 'Basic',
    }),
  })
} 