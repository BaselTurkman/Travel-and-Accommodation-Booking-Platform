import SearchForm from "@/components/SearchForm";
import PageContainer from "@/containers/PageContainer";
import Hotels from "./components/Hotels";
import FilterAmenities from "./components/FilterAmenities";
import { Grid, Box } from "@mui/material";
import useGetSearchResultAPI from "./hooks/useGetSearchResultAPI";
import { AmenitiesProvider } from "./context/AmenitiesProvider";

const SearchResult = () => {
  const { isLoading } = useGetSearchResultAPI();

  return (
    <AmenitiesProvider>
      <PageContainer>
        <SearchForm isLoading={isLoading} />
        <Grid container spacing={4} alignItems="flex-start">
          <Grid
            size={{ xs: 12, md: 3 }}
            position={{ xs: "static", md: "sticky" }}
            zIndex={1}
            top={40}
          >
            <FilterAmenities />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Hotels />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </AmenitiesProvider>
  );
};

export default SearchResult;
