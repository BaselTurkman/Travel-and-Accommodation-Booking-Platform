import { axiosInstance } from "@/config/axios.config";
import { GetCities } from "../types";

export const getCitiesAPI = async () => {
  const res = await axiosInstance.get<GetCities>("/cities");
  return res.data;
};

export const deleteCityAPI = async (cityId: number) => {
  const res = await axiosInstance.delete(`/cities/${cityId}`)
  return res.data
}