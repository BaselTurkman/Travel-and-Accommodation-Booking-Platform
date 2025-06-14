import PageContainer from "@/containers/PageContainer";
import { useParams } from "react-router-dom";
import HotelInformation from "./components/HotelInformation";
import { Grid } from "@mui/material";
import HotelReviews from "./components/HotelReviews";

const HotelDetails = () => {
  const { hotelId = "" } = useParams();
  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <HotelInformation hotelId={hotelId ?? 0} />
          <HotelReviews hotelId={hotelId ?? 0} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HotelDetails;
