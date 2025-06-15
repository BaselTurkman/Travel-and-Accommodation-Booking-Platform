import PageContainer from "@/containers/PageContainer";
import { useParams } from "react-router-dom";
import HotelInformation from "./components/HotelInformation";
import { Grid } from "@mui/material";
import HotelReviews from "./components/HotelReviews";
import AvailableRooms from "./components/AvailableRooms";

const HotelDetails = () => {
  const { hotelId = "" } = useParams();
  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <HotelInformation hotelId={hotelId} />
          <HotelReviews hotelId={hotelId} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <AvailableRooms hotelId={hotelId} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HotelDetails;
