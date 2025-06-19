import { useGetHotelsAPI } from "../hooks/useGetHotelsAPI";
import { Grid } from "@mui/material";
import HotelCard from "./HotelCard";

const HotelsContainer = () => {
  const { hotels, isLoading } = useGetHotelsAPI();
  const renderHotels = hotels.map((hotel) => (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      key={hotel.id + "-" + hotel.hotelName}
    >
      <HotelCard hotel={hotel} />
    </Grid>
  ));
  if(isLoading) return (<div>isLoading...</div>)
  return <Grid container spacing={2}>
    {renderHotels}
  </Grid>;
};

export default HotelsContainer;
