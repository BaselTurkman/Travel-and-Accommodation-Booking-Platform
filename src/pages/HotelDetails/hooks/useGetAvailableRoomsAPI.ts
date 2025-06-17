import { useQuery } from "@tanstack/react-query";
import { getAvailableRoomsAPI } from "../API";
import { GetAvailableRooms } from "../types";

const useGetAvailableRoomsAPI = (hotelId: string) => {
  const {
    data: availableRooms,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetAvailableRooms>({
    queryKey: ["available-rooms", hotelId],
    queryFn: () => getAvailableRoomsAPI(hotelId),
  });

  return { availableRooms: availableRooms ?? [], isLoading, isError, refetch };
};

export default useGetAvailableRoomsAPI;
