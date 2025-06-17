import SearchForm from "@/components/SearchForm";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentVisitedHotels from "./components/RecentVisitedHotels";
import TrendingDestination from "./components/TrendingDestination";
import { Box, Stack, Typography } from "@mui/material";
import PageContainer from "@/containers/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      <Stack gap={2}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h2" fontWeight="bold">
            Find Your Next Stay
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Discover deals on hotels, homes, and more – tailored for your next
            adventure.
          </Typography>
        </Box>
        <SearchForm isInSearchPage={false} />
        <FeaturedDeals />
        <RecentVisitedHotels />
        <TrendingDestination />
      </Stack>
    </PageContainer>
  );
};

export default Home;
