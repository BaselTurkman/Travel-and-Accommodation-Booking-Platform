import useGetRecentVisitedHotelAPI from "../hooks/useGetRecentVisitedHotelAPI";
import { Box, Grid, Typography } from "@mui/material";
import Hotel from "./Hotel";

const RecentVisitedHotels = () => {
  const { recentVisitedHotels, isLoading } = useGetRecentVisitedHotelAPI();
  const renderVisitedHotels = recentVisitedHotels.map((hotel) => (
    <Hotel key={hotel.hotelId} hotel={hotel} />
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Recently Visited Hotels
      </Typography>
      <Grid container spacing={2}>
        {renderVisitedHotels}
      </Grid>
    </Box>
  );
};

export default RecentVisitedHotels;
