import { axiosInstance } from "@/config/axios.config";
import { GetSearchResultAPI } from "../types";
import { SearchQuery } from "@/types";
import { buildSearchParams } from "../utils/buildSearchParams";

export const getSearchResultAPI = async (searchQuery: SearchQuery) => {
  const queryString = buildSearchParams(searchQuery);  
  const res = await axiosInstance.get<GetSearchResultAPI>(`/home/search?${queryString}`);
  return res.data;
};
