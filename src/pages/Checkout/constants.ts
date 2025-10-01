import { BookingPayload, PaymentMethod } from "./types";

export const initialValues: BookingPayload = {
  bookingDateTime: "",
  customerName: "",
  paymentMethod: "",
  roomNumber: 2,
  totalCost: 1,
};

export const paymentMethods: Array<PaymentMethod> = [
  {
    name: "Visa",
    value: "Visa",
    id: 1,
  },
  {
    name: "Master Card",
    value: "Master Card",
    id: 2,
  },
  {
    name: "Cash",
    value: "Cash",
    id: 3,
  },
];
