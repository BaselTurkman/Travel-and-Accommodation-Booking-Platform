import { useQuery } from "@tanstack/react-query";
import { Booking } from "../types";
import { getBookingAPI } from "../API";

const useGetBookingAPI = (bookingId: string) => {
  const { data: bookingData, isLoading } = useQuery<Booking>({
    queryKey: ["booking-data", bookingId],
    queryFn: () => getBookingAPI(bookingId),
  });
  return { bookingData: bookingData, isLoading };
};

export default useGetBookingAPI;
