import { useQuery } from "@tanstack/react-query";
import { getSearchResultAPI } from "../API";
import { GetSearchResultAPI } from "../types";
import { useAppSelector } from "@/store/store";
import { selectSearchQuery } from "@/features/SearchQuery";

const useGetSearchResultAPI = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  const { data: searchResult, isLoading } = useQuery<GetSearchResultAPI>({
    queryKey: ["search-result", searchQuery], 
    queryFn: () => getSearchResultAPI(searchQuery),
  });

  return { searchResult: searchResult ?? [], isLoading };
};

export default useGetSearchResultAPI;
