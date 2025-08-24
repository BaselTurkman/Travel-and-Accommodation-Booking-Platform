import { useQuery } from "@tanstack/react-query";
import { getSearchResultAPI } from "../API";
import { GetSearchResultAPI } from "../types";
import { useAppSelector } from "@/store/store";
import { selectSearchQuery } from "@/features/SearchQuery";
import { useSearchParams } from "react-router-dom";
import { SearchQuery } from "@/types";

const useGetSearchResultAPI = () => {
  const reduxQuery = useAppSelector(selectSearchQuery);
  const [searchParams] = useSearchParams();

  const getNumberParam = (key: keyof SearchQuery, fallback: number) => {
    const value = searchParams.get(key as string);
    return value !== null ? Number(value) : fallback;
  };

  // Build SearchQuery from URL params if exist, else fallback to redux
  const urlQuery: SearchQuery = {
    checkInDate: searchParams.get("checkInDate") || reduxQuery.checkInDate,
    checkOutDate: searchParams.get("checkOutDate") || reduxQuery.checkOutDate,
    city: searchParams.get("city") || reduxQuery.city,
    numberOfRooms: getNumberParam("numberOfRooms", reduxQuery.numberOfRooms),
    adults: getNumberParam("adults", reduxQuery.adults),
    children: getNumberParam("children", reduxQuery.children),
    starRate:
      searchParams.get("starRate") !== null
        ? Number(searchParams.get("starRate"))
        : reduxQuery.starRate,
  };

  const {
    data: searchResult,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetSearchResultAPI>({
    queryKey: ["search-result", urlQuery],
    queryFn: () => getSearchResultAPI(urlQuery),
  });

  return { searchResult: searchResult ?? [], isLoading, isError, refetch };
};

export default useGetSearchResultAPI;
