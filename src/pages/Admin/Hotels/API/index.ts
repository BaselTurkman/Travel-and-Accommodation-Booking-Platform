import { SearchParams } from "@/types";
import { HotelPayload, HotelResponse } from "../types";
import { axiosInstance } from "@/config/axios.config";
import { buildHotelSearchURL } from "../utils/buildHotelSearchURL";

export const getHotelsAPI = async (searchParams: SearchParams) => {
  const url = buildHotelSearchURL(searchParams);
  console.log(url);
  
  const res = await axiosInstance.get<HotelResponse>(url);
  return res.data;
};

export const deleteHotelAPI = async (hotelId: number) => {
  const res = await axiosInstance.delete(`/hotels/${hotelId}`);
  return res.data;
};

export const editHotelAPI = async (hotel: HotelPayload) => {
  const res = await axiosInstance.put<HotelPayload>(
    `/hotels/${hotel.id}`,
    hotel
  );
  return res.data;
};

export const addHotelAPI = async (hotel: HotelPayload) => {
  const res = await axiosInstance.post("/hotels", hotel);
  return res.data;
};
