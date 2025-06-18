import { useQuery } from "@tanstack/react-query";
import { GetFeaturesDealsResponse } from "../types";
import { getFeaturedDealAPI } from "../API";

const useGetFeaturedDealAPI = () => {
  const {
    data: featuredDeals,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetFeaturesDealsResponse>({
    queryKey: ["featured-deal"],
    queryFn: getFeaturedDealAPI,
  });
  return { featuredDeals: featuredDeals ?? [], isLoading, isError, refetch };
};

export default useGetFeaturedDealAPI;
