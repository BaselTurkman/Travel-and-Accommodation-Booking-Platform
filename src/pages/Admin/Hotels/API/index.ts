import { GetHotels } from "../types";
import { axiosInstance } from "@/config/axios.config";

export const getHotelsAPI = async () => {
  const res = await axiosInstance.get<GetHotels>(`/hotels`);
  return res.data;
};

export const deleteHotelAPI = async (hotelId: number) => {
  const res = await axiosInstance.delete(`/hotels/${hotelId}`);
  return res.data
}