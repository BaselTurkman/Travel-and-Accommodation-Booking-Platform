import { axiosInstance } from "@/config/axios.config";
import { Booking } from "../types";

export const getBookingAPI = async (bookingId: string) => {
  const res = await axiosInstance.get<Booking>(`/bookings/${bookingId}`);
  return res.data;
};
