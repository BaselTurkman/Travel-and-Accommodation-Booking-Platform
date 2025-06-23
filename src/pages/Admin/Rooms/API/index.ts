import { HotelRoomPayload } from "@/types";
import { GetHotelRooms } from "../types";
import { axiosInstance } from "@/config/axios.config";

export const getHotelRoomsAPI = async () => {
  //for now hard coded to 2
  const res = await axiosInstance.get<GetHotelRooms>(`/hotels/2/rooms`);
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
