import { useQuery } from "@tanstack/react-query";
import { getHotelReviewsAPI } from "../API";
import { GetHotelReviews } from "../types";

const useGetHotelReviewsAPI = (hotelId: string) => {
  const {
    data: hotelReviews,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetHotelReviews>({
    queryKey: ["hotel-reviews", hotelId],
    queryFn: () => getHotelReviewsAPI(hotelId),
  });

  return { hotelReviews: hotelReviews ?? [], isLoading, isError, refetch };
};

export default useGetHotelReviewsAPI;
