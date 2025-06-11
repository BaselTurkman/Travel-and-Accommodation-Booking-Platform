import SearchForm from "@/components/SearchForm";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentVisitedHotels from "./components/RecentVisitedHotels";
import TrendingDestination from "./components/TrendingDestination";
import { Box, Container, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ my: 5, p: 5 }}>
      <Stack gap={2}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" fontWeight="bold">
            Find Your Next Stay
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Discover deals on hotels, homes, and more – tailored for your next
            adventure.
          </Typography>
        </Box>
        <SearchForm />
        <FeaturedDeals />
        <RecentVisitedHotels />
        <TrendingDestination />
      </Stack>
    </Container>
  );
};

export default Home;
