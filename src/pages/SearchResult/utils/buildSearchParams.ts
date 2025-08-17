import { SearchQuery } from "@/types";

export const buildSearchParams = (query: SearchQuery): string => {
  const params = new URLSearchParams();

  if (query.city) params.append("city", query.city);
  if (query.checkInDate) params.append("checkInDate", query.checkInDate);
  if (query.checkOutDate) params.append("checkOutDate", query.checkOutDate);
  if (query.sort) params.append("sort", query.sort);
  if (query.starRate !== undefined && query.starRate !== null)
    params.append("starRate", query.starRate.toString());

  params.append("numberOfRooms", query.numberOfRooms.toString());
  params.append("adults", query.adults.toString());
  params.append("children", query.children.toString());

  return params.toString();
};
