import { Box, Grid, Typography } from "@mui/material";
import useGetTrendingDestinationAPI from "../hooks/useGetTrendingDestinationAPI";
import Destination from "./Destination";
import MediaCardSkeleton from "@/components/Skeletons/MediaCardSkeleton";
import useRetryHandler from "@/hooks/useRetryHandler";
import WithRetry from "@/components/WithRetry";

const TrendingDestination = () => {
  const { trendingDestinations, isLoading, isError, refetch } =
    useGetTrendingDestinationAPI();
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  const renderTrendingDestination = trendingDestinations.map((destination) => (
    <Grid size={{ xs: 12, sm: 6 }} key={destination.cityId}>
      <Destination destination={destination} />
    </Grid>
  ));

  return (
    <WithRetry
      handleRetry={handleRetry}
      isError={isError}
      retryCount={retryCount}
    >
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Trending Destinations
        </Typography>
        <Grid container spacing={2}>
          {isLoading ? <MediaCardSkeleton /> : renderTrendingDestination}
        </Grid>
      </Box>
    </WithRetry>
  );
};

export default TrendingDestination;
