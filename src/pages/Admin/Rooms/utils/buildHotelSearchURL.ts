import { SearchParams } from "@/types";

export const buildHotelSearchURL = (params: SearchParams): string => {
  const query = new URLSearchParams({
    searchQuery: params.searchQuery,
    pageNumber: params.pageNumber.toString(),
    pageSize: params.pageSize.toString(),
  });

  return `/hotels?${query.toString()}`;
};
