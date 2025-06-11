import { useQuery } from "@tanstack/react-query";
import { GetTrendingDestination } from "../types";
import { getTrendingDestinationAPI } from "../API";

const useGetTrendingDestinationAPI = () => {
  const { data: trendingDestinations, isLoading } = useQuery<GetTrendingDestination>(
    {
      queryKey: ["trending-destinations"],
      queryFn: getTrendingDestinationAPI,
    }
  );
  return { trendingDestinations: trendingDestinations ?? [], isLoading };
};

export default useGetTrendingDestinationAPI;
