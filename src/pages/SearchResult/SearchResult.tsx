import SearchForm from "@/components/SearchForm";
import PageContainer from "@/containers/PageContainer";
import Hotels from "./components/Hotels";
import { Stack } from "@mui/material";
import useGetSearchResultAPI from "./hooks/useGetSearchResultAPI";

const SearchResult = () => {
  const { isLoading } = useGetSearchResultAPI();
  return (
    <PageContainer>
      <Stack gap={2}>
        <SearchForm isLoading={isLoading} />
        <Hotels />
      </Stack>
    </PageContainer>
  );
};

export default SearchResult;
