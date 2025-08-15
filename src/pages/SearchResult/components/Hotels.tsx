import { Box, Grid, Typography } from "@mui/material";
import useGetSearchResultAPI from "../hooks/useGetSearchResultAPI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import Hotel from "./Hotel";
import { useAmenities } from "../context/useAmenities";
import NoItemFound from "@/components/NoItemFound";
import useRetryHandler from "@/hooks/useRetryHandler";
import WithRetry from "@/components/WithRetry";

const Hotels = () => {
  const { searchResult, isLoading, isError, refetch } = useGetSearchResultAPI();
  const { selectedAmenities } = useAmenities();
  const { retryCount, handleRetry } = useRetryHandler(refetch);
  // Since there isn't much consistency between the IDs, I decided to filter based on the amenity name instead.
  const selectedAmenityNames = selectedAmenities.map((a) => a.name);

  const filteredHotels = searchResult.filter((hotel) =>
    hotel.amenities.some((hotelAmenity: { name: string }) =>
      selectedAmenityNames.includes(hotelAmenity.name)
    )
  );

  const hotelsToRender =
    selectedAmenityNames.length > 0 ? filteredHotels : searchResult;

  const renderSearchResult = hotelsToRender.map((hotel) => (
    <Grid size={{ xs: 12, sm: 6 }} key={hotel.hotelId}>
      <Hotel hotel={hotel} />
    </Grid>
  ));

  const isThereHotels = hotelsToRender.length !== 0;

  const renderContent = isLoading ? (
    <BaseCardSkeleton />
  ) : !isThereHotels ? (
    <NoItemFound title="No hotels found" />
  ) : (
    renderSearchResult
  );

  return (
    <WithRetry
      handleRetry={handleRetry}
      isError={isError}
      retryCount={retryCount}
    >
      <Box mb={4}>
        <Grid container spacing={2}>
          {renderContent}
        </Grid>
        {isThereHotels && (
          <Typography
            mt={5}
            variant="body1"
            color="text.secondary"
            align="center"
          >
            {hotelsToRender.length}{" "}
            {hotelsToRender.length === 1 ? "hotel found" : "hotels found"}
          </Typography>
        )}
      </Box>
    </WithRetry>
  );
};

export default Hotels;
