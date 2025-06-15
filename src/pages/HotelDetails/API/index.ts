import { axiosInstance } from "@/config/axios.config";
import { GetHotelReviews, HotelInformation } from "../types";

export const getHotelDetailsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<HotelInformation>(
    `/hotels/${hotelId}`
  );
  return res.data;
};

export const getHotelReviewsAPI = async (hotelId: string) => {
    const res = await axiosInstance.get<GetHotelReviews>(`/hotels/${hotelId}/reviews`);
    return res.data
}