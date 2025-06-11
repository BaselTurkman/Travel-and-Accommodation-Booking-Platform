import { Box, Grid, Typography } from "@mui/material";
import useGetFeaturedDealAPI from "../hooks/useGetFeaturedDealAPI";
import Deal from "./Deal";
import RenderSkeletonCard from "./RenderSkeletonCard";

const FeaturedDeals = () => {
  const { featuredDeals, isLoading } = useGetFeaturedDealAPI();
  const renderFeaturedDeals = featuredDeals.map((deal) => (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Deal key={deal.hotelId} deal={deal} />
    </Grid>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Featured Deals
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? <RenderSkeletonCard /> : renderFeaturedDeals}
      </Grid>
    </Box>
  );
};

export default FeaturedDeals;
