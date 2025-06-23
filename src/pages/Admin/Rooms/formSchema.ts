import * as yup from "yup";
import { HotelRoomPayload } from "@/types";

export const validationSchema: yup.ObjectSchema<HotelRoomPayload> = yup.object({
  roomId: yup.number().required("Room ID is required"),
  roomNumber: yup
    .number()
    .required("Room number is required")
    .positive()
    .integer(),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be greater than 0"),
  roomType: yup.string().required("Room type is required").min(2, "Too short"),
  capacityOfAdults: yup
    .number()
    .required("Adult capacity is required")
    .min(1, "At least 1 adult")
    .integer(),
  capacityOfChildren: yup
    .number()
    .required("Children capacity is required")
    .min(0, "Cannot be negative")
    .integer(),
});
