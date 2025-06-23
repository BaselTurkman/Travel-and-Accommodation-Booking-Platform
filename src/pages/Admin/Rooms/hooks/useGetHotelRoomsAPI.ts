import { useQuery } from "@tanstack/react-query";
import { getHotelRoomsAPI } from "../API";
import { GetHotelRooms } from "../types";

export const useGetHotelRoomsAPI = () => {
  const { data: hotelRooms, isLoading, isError, refetch } = useQuery<GetHotelRooms>({
    queryKey: ["rooms"],
    queryFn: () => getHotelRoomsAPI(),
  });
  return {
    hotelRooms: hotelRooms ?? [],
    isLoading,
    isError,
    refetch,
  };
};
