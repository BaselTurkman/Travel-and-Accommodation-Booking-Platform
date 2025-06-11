import { axiosInstance } from "@/config/axios.config";
import { GetFeaturesDealsResponse, GetRecentHotel, GetTrendingDestination } from "../types";

export const getFeaturedDealAPI = async () => {
  const res = await axiosInstance.get<GetFeaturesDealsResponse>("/home/featured-deals");
  return res.data;
};

export const getRecentVisitedHotelAPI = async (id: string) => {
  const res = await axiosInstance.get<GetRecentHotel>(`/home/users/${id}/recent-hotels`);
  return res.data;
};

export const getTrendingDestinationAPI = async () => {
  const res = await axiosInstance.get<GetTrendingDestination>(`/home/destinations/trending`);
  return res.data;
};
