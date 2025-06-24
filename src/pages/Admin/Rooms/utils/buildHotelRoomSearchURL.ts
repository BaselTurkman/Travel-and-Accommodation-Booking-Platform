import { SearchParams } from "@/types";

export const buildHotelRoomSearchURL = (params: SearchParams, hotelId: number): string => {
  const query = new URLSearchParams({
    pageNumber: params.pageNumber.toString(),
    pageSize: params.pageSize.toString(),
  });

  return `/hotels/${hotelId}/rooms?${query.toString()}`;
};