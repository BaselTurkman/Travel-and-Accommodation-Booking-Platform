import SearchForm from "@/components/SearchForm";
import PageContainer from "@/containers/PageContainer";
import Hotels from "./components/Hotels";
import FilterAmenities from "./components/FilterAmenities";
import { Grid, Box, Typography, Divider } from "@mui/material";
import useGetSearchResultAPI from "./hooks/useGetSearchResultAPI";
import { AmenitiesProvider } from "./context/AmenitiesProvider";
import routeHOC from "@/routes/HOCs/routeHOCs";

const SearchResult = () => {
  const { isLoading } = useGetSearchResultAPI();

  return (
    <AmenitiesProvider>
      <PageContainer>
        <Box mb={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Explore Stays Across the City
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find the perfect hotel tailored to your needs
          </Typography>
          <Divider sx={{ mt: 2 }} />
        </Box>
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

const SearchResultWithRoute = routeHOC({
  title: "Search Result",
  pageAccessName: "SearchResult",
})(SearchResult);

export default SearchResultWithRoute;
