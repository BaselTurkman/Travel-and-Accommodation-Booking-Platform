import { BaseAutoCompleteItem } from "@/components/Fields/AutoCompleteField/types";

export interface BookingPayload {
  customerName: string;
  roomNumber: number;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

export type PaymentMethod = BaseAutoCompleteItem & {
  id: number;
  name: string;
};