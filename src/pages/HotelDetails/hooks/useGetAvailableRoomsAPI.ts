import { useQuery } from "@tanstack/react-query";
import { getAvailableRoomsAPI } from "../API";
import { GetAvailableRooms } from "../types";

const useGetAvailableRoomsAPI = (hotelId: string) => {
  const { data: availableRooms, isLoading } = useQuery<GetAvailableRooms>({
    queryKey: ["available-rooms", hotelId],
    queryFn: () => getAvailableRoomsAPI(hotelId),
  });

  return { availableRooms: availableRooms ?? [] , isLoading };
};

export default useGetAvailableRoomsAPI;
