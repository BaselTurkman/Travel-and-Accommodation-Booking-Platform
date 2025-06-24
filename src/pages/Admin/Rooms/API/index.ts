import { HotelRoomPayload, SearchParams } from "@/types";
import { GetHotelRoomsResponse } from "../types";
import { axiosInstance } from "@/config/axios.config";
import { buildHotelRoomSearchURL } from "../utils/buildHotelRoomSearchURL";

export const getHotelRoomsAPI = async (searchParams: SearchParams) => {
  const url = buildHotelRoomSearchURL(searchParams, 2)  
  const res = await axiosInstance.get<GetHotelRoomsResponse>(url);
  return res.data;
};

export const editHotelRoomAPI = async (hotelRoom: HotelRoomPayload) => {    
  const res = await axiosInstance.put<HotelRoomPayload>(`/rooms/${hotelRoom.roomId}`, hotelRoom);
  return res.data;
};

export const addHotelRoomAPI = async (hotelRoom: HotelRoomPayload) => {
  const res = await axiosInstance.post("/rooms", hotelRoom);
  return res.data;
};
