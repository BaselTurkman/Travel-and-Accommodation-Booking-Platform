import * as yup from "yup";
import { BookingPayload } from "./types";

export const bookingSchema: yup.ObjectSchema<BookingPayload> = yup.object({
  customerName: yup.string().required("Customer name is required"),
  hotelName: yup.string().required("Hotel name is required"),
  roomNumber: yup.string().required("Room number is required"),
  roomType: yup.string().required("Room type is required"),
  bookingDateTime: yup
    .string()
    .required("Booking date and time is required")
    .typeError("Invalid date format"),
  totalCost: yup
    .number()
    .required("Total cost is required")
    .min(0, "Total cost must be a non-negative number"),
  paymentMethod: yup.string().required("Payment method is required"),
});
