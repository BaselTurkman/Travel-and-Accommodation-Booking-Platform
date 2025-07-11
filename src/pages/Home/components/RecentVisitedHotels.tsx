import useGetRecentVisitedHotelAPI from "../hooks/useGetRecentVisitedHotelAPI";
import { Box, Grid, Typography } from "@mui/material";
import Hotel from "./Hotel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../constants";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import { MAX_RETRIES } from "@/constants";
import { useState } from "react";
import RequestErrorFallback from "@/components/RequestErrorFallback";

const RecentVisitedHotels = () => {
  const { recentVisitedHotels, isLoading, isError, refetch } =
    useGetRecentVisitedHotelAPI();
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

  const renderVisitedHotels = recentVisitedHotels.map((hotel) => (
    <Box px={2} my={2} key={hotel.hotelId}>
      <Hotel hotel={hotel} />
    </Box>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Recently Visited Hotels
      </Typography>
      {isLoading ? (
        <Grid container spacing={2}>
          <BaseCardSkeleton />
        </Grid>
      ) : (
        <Slider {...settings}>{renderVisitedHotels}</Slider>
      )}
    </Box>
  );
};

export default RecentVisitedHotels;
