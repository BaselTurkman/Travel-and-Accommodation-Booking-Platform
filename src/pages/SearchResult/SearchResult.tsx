import SearchForm from "@/components/SearchForm";
import PageContainer from "@/containers/PageContainer";
import Hotels from "./components/Hotels";
import { Stack } from "@mui/material";

const SearchResult = () => {
  return (
    <PageContainer>
      <Stack gap={2}>
        <SearchForm />
        <Hotels />
      </Stack>
    </PageContainer>
  );
};

export default SearchResult;
