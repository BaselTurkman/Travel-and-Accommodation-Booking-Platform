import { GetHotels, HotelPayload } from "../types";
import { axiosInstance } from "@/config/axios.config";

export const getHotelsAPI = async () => {
  const res = await axiosInstance.get<GetHotels>(`/hotels`);
  return res.data;
};

export const deleteHotelAPI = async (hotelId: number) => {
  const res = await axiosInstance.delete(`/hotels/${hotelId}`);
  return res.data;
};

export const editHotelAPI = async (hotel: HotelPayload) => {
  const res = await axiosInstance.put<HotelPayload>(`/hotels/${hotel.id}`, hotel);
  return res.data;
};
