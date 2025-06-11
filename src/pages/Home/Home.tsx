import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import PageContainer from "@/containers/PageContainer";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentVisitedHotels from "./components/RecentVisitedHotels";

const Home = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  return (
    <PageContainer>
      <Box p={4}>
        {/* 2.1 Search Bar */}

        {/* 2.2 Featured Deals */}
        <Box mb={4}>
          <FeaturedDeals />
        </Box>

        {/* 2.3 Recently Visited Hotels */}
        <Box>
          <RecentVisitedHotels/>
        </Box>

        {/* 2.4 Trending Destinations */}
        <Box>
          <Typography variant="h5" gutterBottom>
            Trending Destinations
          </Typography>
          <Grid container spacing={2}>
            {["Paris", "Dubai", "Tokyo", "New York"].map((city) => (
              <Grid size={{ xs: 6, sm: 3 }} key={city}>
                <Card>
                  <CardMedia
                    component="img"
                    height="120"
                    image={`https://via.placeholder.com/300x120?text=${city}`}
                  />
                  <CardContent>
                    <Typography align="center">{city}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Home;
