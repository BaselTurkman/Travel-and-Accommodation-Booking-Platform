import * as yup from "yup";
import { HotelPayload } from "./types";

export const validationSchema: yup.ObjectSchema<HotelPayload> = yup.object({
  id: yup.number(),
  hotelName: yup
    .string()
    .required("Hotel name is required")
    .min(2, "Hotel name must be at least 2 characters"),

  hotelType: yup.string().required("Hotel type is required"),

  location: yup
    .string()
    .required("location name is required")
    .min(2, "location must be at least 2 characters"),

  latitude: yup
    .number()
    .required("Latitude is required")
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),

  longitude: yup
    .number()
    .required("Longitude is required")
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),

  starRating: yup
    .number()
    .required("Star rating is required")
    .min(1, "Minimum star rating is 1")
    .max(5, "Maximum star rating is 5"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
});
