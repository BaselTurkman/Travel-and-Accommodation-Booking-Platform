import { axiosInstance } from "@/config/axios.config";
import { City, CityPayload, GetCities } from "../types";

export const getCitiesAPI = async () => {
  const res = await axiosInstance.get<GetCities>("/cities");
  return res.data;
};

export const deleteCityAPI = async (cityId: number) => {
  const res = await axiosInstance.delete(`/cities/${cityId}`);
  return res.data;
};

export const editCityAPI = async (city: City) => {
  const res = await axiosInstance.put<City>(`/cities/${city.id}`, city);
  return res.data;
};

export const addCityAPI = async (city: CityPayload) => {
  const res = await axiosInstance.post<City>(`/cities`, city)
  return res.data
}
