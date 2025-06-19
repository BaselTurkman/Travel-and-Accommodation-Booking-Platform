import * as yup from "yup";
import { City } from "./types";

export const validationSchema: yup.ObjectSchema<City> = yup.object({
  name: yup.string().required("Please enter the city name"),
  description: yup
    .string()
    .trim()
    .required("Please enter the city description"),
  id: yup.number().required("Customer is required"),
});
