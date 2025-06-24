import { axiosInstance } from "@/config/axios.config";

export const deleteHotelRoomAPI = async (roomId: number) => {    
  const res = await axiosInstance.delete(`/rooms/${roomId}`);
  return res.data;
};