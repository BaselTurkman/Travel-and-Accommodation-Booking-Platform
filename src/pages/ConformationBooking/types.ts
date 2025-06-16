import { BookingPayload } from "@/types";

export interface Booking extends BookingPayload {
  bookingStatus: string;
  confirmationNumber: string;
}
