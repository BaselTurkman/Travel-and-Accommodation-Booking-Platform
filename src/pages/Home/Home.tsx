import PageContainer from "@/containers/PageContainer";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentVisitedHotels from "./components/RecentVisitedHotels";
import TrendingDestination from "./components/TrendingDestination";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <PageContainer>
      <Stack gap={2}>
        <FeaturedDeals />
        <RecentVisitedHotels />
        <TrendingDestination />
      </Stack>
    </PageContainer>
  );
};

export default Home;
