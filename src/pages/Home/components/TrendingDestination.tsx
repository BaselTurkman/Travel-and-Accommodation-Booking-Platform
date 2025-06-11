import { Box, Grid, Typography } from "@mui/material";
import RenderSkeletonCard from "./RenderSkeletonCard";
import useGetTrendingDestinationAPI from "../hooks/useGetTrendingDestinationAPI";
import Destination from "./Destination";

const TrendingDestination = () => {
  const { trendingDestinations, isLoading } = useGetTrendingDestinationAPI();
  const renderTrendingDestination = trendingDestinations.map((destination) => (
    <Grid size={{ xs: 12, sm: 6 }} key={destination.cityId}>
      <Destination destination={destination} />
    </Grid>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Trending Destinations
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? <RenderSkeletonCard /> : renderTrendingDestination}
      </Grid>
    </Box>
  );
};

export default TrendingDestination;
