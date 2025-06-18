import { Box, Grid, Typography } from "@mui/material";
import useGetTrendingDestinationAPI from "../hooks/useGetTrendingDestinationAPI";
import Destination from "./Destination";
import MediaCardSkeleton from "@/components/Skeletons/MediaCardSkeleton";
import { useState } from "react";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";

const TrendingDestination = () => {
  const { trendingDestinations, isLoading, isError, refetch } =
    useGetTrendingDestinationAPI();
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

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
        {isLoading ? <MediaCardSkeleton /> : renderTrendingDestination}
      </Grid>
    </Box>
  );
};

export default TrendingDestination;
