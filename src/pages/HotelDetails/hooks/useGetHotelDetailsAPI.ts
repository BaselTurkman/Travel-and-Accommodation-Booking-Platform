import { useQuery } from "@tanstack/react-query";
import { getHotelDetailsAPI } from "../API";
import { HotelInformation } from "../types";

const useGetHotelDetailsAPI = (hotelId: string) => {
  const {
    data: hotelInformation,
    isLoading,
    isError,
    refetch,
  } = useQuery<HotelInformation>({
    queryKey: ["hotel-information", hotelId],
    queryFn: () => getHotelDetailsAPI(hotelId),
  });

  return { hotelInformation: hotelInformation, isLoading, isError, refetch };
};

export default useGetHotelDetailsAPI;
