import { useQuery } from "@tanstack/react-query";
import { getHotelDetailsAPI } from "../API";
import { HotelInformation } from "../types";

const useGetHotelDetailsAPI = (hotelId: string) => {
  const { data: hotelInformation, isLoading } = useQuery<HotelInformation>({
    queryKey: ["hotel-information"],
    queryFn: () => getHotelDetailsAPI(hotelId),
  });

  return { hotelInformation: hotelInformation , isLoading };
};

export default useGetHotelDetailsAPI;
