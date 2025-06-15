import { useQuery } from "@tanstack/react-query";
import { getHotelReviewsAPI } from "../API";
import { GetHotelReviews } from "../types";

const useGetHotelReviewsAPI = (hotelId: string) => {
  const { data: hotelReviews, isLoading } = useQuery<GetHotelReviews>({
    queryKey: ["hotel-reviews"],
    queryFn: () => getHotelReviewsAPI(hotelId),
  });

  return { hotelReviews: hotelReviews ?? [] , isLoading };
};

export default useGetHotelReviewsAPI;
