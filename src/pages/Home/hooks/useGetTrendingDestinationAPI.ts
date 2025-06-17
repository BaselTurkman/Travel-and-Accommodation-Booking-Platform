import { useQuery } from "@tanstack/react-query";
import { GetTrendingDestination } from "../types";
import { getTrendingDestinationAPI } from "../API";

const useGetTrendingDestinationAPI = () => {
  const {
    data: trendingDestinations,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetTrendingDestination>({
    queryKey: ["trending-destinations"],
    queryFn: getTrendingDestinationAPI,
  });
  return {
    trendingDestinations: trendingDestinations ?? [],
    isLoading,
    isError,
    refetch,
  };
};

export default useGetTrendingDestinationAPI;
