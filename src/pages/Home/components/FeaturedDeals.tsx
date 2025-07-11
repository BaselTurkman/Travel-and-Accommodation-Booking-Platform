import { Box, Grid, Typography } from "@mui/material";
import useGetFeaturedDealAPI from "../hooks/useGetFeaturedDealAPI";
import Deal from "./Deal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../constants";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import { useState } from "react";
import { MAX_RETRIES } from "@/constants";

const FeaturedDeals = () => {
  const { featuredDeals, isLoading, isError, refetch } =
    useGetFeaturedDealAPI();
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

  const renderFeaturedDeals = featuredDeals.map((deal) => (
    <Box px={2} my={2} key={deal.hotelId}>
      <Deal deal={deal} />
    </Box>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Featured Deals
      </Typography>
      {isLoading ? (
        <Grid container spacing={2}>
          <BaseCardSkeleton />
        </Grid>
      ) : (
        <Slider {...settings}>{renderFeaturedDeals}</Slider>
      )}
    </Box>
  );
};

export default FeaturedDeals;
