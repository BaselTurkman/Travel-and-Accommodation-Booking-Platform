import { Box, Grid, Typography } from "@mui/material";
import useGetFeaturedDealAPI from "../hooks/useGetFeaturedDealAPI";
import Deal from "./Deal";

const FeaturedDeals = () => {
  const { featuredDeals, isLoading } = useGetFeaturedDealAPI();

  const renderFeaturedDeals = featuredDeals.map((deal) => (
    <Deal key={deal.hotelId} deal={deal} />
  ));

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Featured Deals
      </Typography>
      <Grid container spacing={2}>
        {renderFeaturedDeals}
      </Grid>
    </Box>
  );
};

export default FeaturedDeals;
