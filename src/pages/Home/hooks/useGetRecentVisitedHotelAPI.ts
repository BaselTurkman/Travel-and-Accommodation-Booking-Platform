import { useQuery } from "@tanstack/react-query";
import { GetRecentHotel } from "../types";
import { getRecentVisitedHotelAPI } from "../API";
import { useAppSelector } from "@/store/store";
import { selectUserId } from "@/features/User";

const useGetRecentVisitedHotelAPI = () => {
  const userId = useAppSelector(selectUserId);

  const {
    data: recentHotels,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetRecentHotel>({
    queryKey: ["recent-hotel", userId],
    queryFn: () => getRecentVisitedHotelAPI(userId),
    enabled: !!userId,
  });

  return {
    recentVisitedHotels: recentHotels ?? [],
    isLoading,
    isError,
    refetch,
  };
};

export default useGetRecentVisitedHotelAPI;
