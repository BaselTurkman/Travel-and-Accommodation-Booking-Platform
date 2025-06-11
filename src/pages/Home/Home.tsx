import FeaturedDeals from "./components/FeaturedDeals";
import RecentVisitedHotels from "./components/RecentVisitedHotels";
import TrendingDestination from "./components/TrendingDestination";
import { Container, Stack } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{my: 5, p: 5}}>
      <Stack gap={2}>
        <FeaturedDeals />
        <RecentVisitedHotels />
        <TrendingDestination />
      </Stack>
    </Container>
  );
};

export default Home;
