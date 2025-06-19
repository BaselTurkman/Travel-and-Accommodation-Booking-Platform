import { useQuery } from "@tanstack/react-query";
import { GetHotels } from "../types";
import { getHotelsAPI } from "../API";

export const useGetHotelsAPI = () => {
  const {
    data: hotels,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetHotels>({
    queryKey: ["hotels"],
    queryFn: getHotelsAPI,
  });
  return { hotels: hotels ?? [], isLoading, isError, refetch };
};
