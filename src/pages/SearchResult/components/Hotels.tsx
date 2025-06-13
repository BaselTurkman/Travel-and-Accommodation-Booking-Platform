import { Box, Grid, Typography } from "@mui/material";
import useGetSearchResultAPI from "../hooks/useGetSearchResultAPI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import Hotel from "./Hotel";
import NoHotelsFound from "./NoHotelsFound";

const Hotels = () => {
  const { searchResult, isLoading } = useGetSearchResultAPI();
  const renderSearchResult = searchResult.map((hotel) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={hotel.hotelId}>
      <Hotel hotel={hotel} />
    </Grid>
  ));

  const isThereHotels = searchResult.length !== 0;

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Search Result
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <BaseCardSkeleton />
        ) : !isThereHotels ? (
          <NoHotelsFound />
        ) : (
          renderSearchResult
        )}
      </Grid>
      {isThereHotels && (
        <Typography
          mt={5}
          variant="body1"
          color="text.secondary"
          align="center"
        >
          {searchResult.length}{" "}
          {searchResult.length === 1 ? "hotel found" : "hotels found"}
        </Typography>
      )}
    </Box>
  );
};

export default Hotels;
