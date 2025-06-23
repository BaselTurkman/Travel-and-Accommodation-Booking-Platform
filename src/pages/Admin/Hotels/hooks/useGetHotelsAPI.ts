import { useQuery } from "@tanstack/react-query";
import { HotelResponse } from "../types";
import { getHotelsAPI } from "../API";
import { SearchParams } from "@/types";

export const useGetHotelsAPI = (searchParams: SearchParams) => {
  const { data, isLoading, isError, refetch } = useQuery<HotelResponse>({
    queryKey: ["hotels", searchParams],
    queryFn: () => getHotelsAPI(searchParams),
  });
  return {
    hotels: data?.hotels ?? [],
    totalCount: data?.totalCount ?? 1,
    totalPages: data?.totalPages ?? 1,
    isLoading,
    isError,
    refetch,
  };
};
