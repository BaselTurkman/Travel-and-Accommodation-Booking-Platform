import { axiosInstance } from "@/config/axios.config";
import { GetAvailableRooms, GetHotelReviews, HotelInformation } from "../types";
import dayjs from "dayjs";

export const getHotelDetailsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<HotelInformation>(`/hotels/${hotelId}`);
  return res.data;
};

export const getHotelReviewsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelReviews>(
    `/hotels/${hotelId}/reviews`
  );
  return res.data;
};

export const getAvailableRoomsAPI = async (hotelId: string) => {
  const currentData = dayjs(new Date()).format("YYYY-MM-DD");
  const res = await axiosInstance.get<GetAvailableRooms>(
    `/hotels/${hotelId}/available-rooms?checkInDate=${currentData}&CheckOutDate=${currentData}`
  );
  return res.data;
};
