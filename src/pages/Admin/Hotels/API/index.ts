import { GetHotels } from "../types";
import { axiosInstance } from "@/config/axios.config";

export const getHotelsAPI = async () => {
  const res = await axiosInstance.get<GetHotels>(`/hotels`);
  return res.data;
};
