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
    .test("is-valid-date", "Invalid date format", (value) => {
      return !isNaN(Date.parse(value || ""));
    })
    .test("is-future-date", "Booking date cannot be in the past", (value) => {
      if (!value) return false;
      const inputDate = new Date(value);
      const today = new Date();
      inputDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return inputDate >= today;
    }),
  totalCost: yup
    .number()
    .required("Total cost is required")
    .min(0, "Total cost must be a non-negative number"),
  paymentMethod: yup.string().required("Payment method is required"),
});
