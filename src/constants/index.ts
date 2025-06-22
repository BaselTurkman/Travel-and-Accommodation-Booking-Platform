import { PaginationProps, SearchParams } from "@/types";

export const MAX_RETRIES = 3

export const DEFAULT_SEARCH_PARAMS: SearchParams = {
  pageNumber: 1,
  pageSize: 5,
  searchQuery: "",
};


export const DEFAULT_PAGINATION_PROPS: PaginationProps = {
  page: 1,
  pageSize: 5,
};