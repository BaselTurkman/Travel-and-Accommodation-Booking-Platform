import PageContainer from "@/containers/PageContainer";
import { useParams } from "react-router-dom";
import HotelInformation from "./components/HotelInformation";
import { Box, Grid } from "@mui/material";
import HotelReviews from "./components/HotelReviews";
import AvailableRooms from "./components/AvailableRooms";
import HotelGallery from "./components/HotelGallery";

const HotelDetails = () => {
  const { hotelId = "" } = useParams();
  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <HotelInformation hotelId={hotelId} />
          <Box position="sticky" top={100}>
            <HotelReviews hotelId={hotelId} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <HotelGallery hotelId={hotelId} />
          <AvailableRooms hotelId={hotelId} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HotelDetails;
