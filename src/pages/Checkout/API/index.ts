import { axiosInstance } from "@/config/axios.config";
import { BookingPayload } from "../types";

export const addBookingAPI = async (booking:BookingPayload) => {
  const res = await axiosInstance.post<BookingPayload>(`/bookings`, booking);
  return res.data;
};
