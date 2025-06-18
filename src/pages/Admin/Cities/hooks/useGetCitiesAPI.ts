import { useQuery } from "@tanstack/react-query";
import { GetCities } from "../types";
import { getCitiesAPI } from "../API";

export const useGetCitiesAPI = () => {
  const {
    data: cities,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetCities>({
    queryKey: ["cities"],
    queryFn: getCitiesAPI,
  });
  return { cities: cities ?? [], isLoading, isError, refetch };
};
