import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getHotelRoomsAPI } from "../API";
import { GetHotelRoomsResponse } from "../types";
import { SearchParams } from "@/types";

export const useGetHotelRoomsAPI = (searchParams: SearchParams) => {
  const { data, isLoading, isError, refetch } = useQuery<GetHotelRoomsResponse>(
    {
      queryKey: ["rooms", searchParams],
      queryFn: () => getHotelRoomsAPI(searchParams),
      placeholderData: keepPreviousData,
    }
  );

  return {
    hotelRooms: data?.data ?? [],
    pageSize: data?.pageSize ?? 0,
    pageNumber: data?.pageNumber ?? 1,
    totalPages: data?.totalPages ?? 0,
    isLoading,
    isError,
    refetch,
  };
};
