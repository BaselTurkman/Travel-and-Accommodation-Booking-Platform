import { axiosInstance } from "@/config/axios.config";
import { GetCities } from "../types";

export const getCitiesAPI = async () => {
  const res = await axiosInstance.get<GetCities>("/cities");
  return res.data;
};
