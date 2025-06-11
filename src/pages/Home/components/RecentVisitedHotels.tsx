import useGetRecentVisitedHotelAPI from "../hooks/useGetRecentVisitedHotelAPI";
import { Box, Grid, Typography } from "@mui/material";
import Hotel from "./Hotel";
import RenderSkeletonCard from "./RenderSkeletonCard";

const RecentVisitedHotels = () => {
  const { recentVisitedHotels, isLoading } = useGetRecentVisitedHotelAPI();
  const renderVisitedHotels = recentVisitedHotels.map((hotel) => (
    <Grid key={hotel.hotelId} size={{ xs: 12, sm: 6, md: 4 }}>
      <Hotel hotel={hotel} />
    </Grid>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Recently Visited Hotels
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? <RenderSkeletonCard /> : renderVisitedHotels}
      </Grid>
    </Box>
  );
};

export default RecentVisitedHotels;
