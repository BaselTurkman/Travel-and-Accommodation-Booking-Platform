import { FC } from "react";
import useGetAvailableRoomsAPI from "../hooks/useGetAvailableRoomsAPI";
import { Box, Grid, Typography } from "@mui/material";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import HotelRoom from "@/components/HotelRoom";

interface AvailableRoomsProps {
  hotelId: string;
}

const AvailableRooms: FC<AvailableRoomsProps> = ({ hotelId }) => {
  const { availableRooms, isLoading } = useGetAvailableRoomsAPI(hotelId);
  const renderRooms = availableRooms.map((room) => (
    <Grid size={{ xs: 12, sm: 6 }} key={room.roomId}>
      <HotelRoom room={room} />
    </Grid>
  ));

  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Available Rooms
      </Typography>
      <Grid container spacing={2} mt={2}>
        {isLoading ? <BaseCardSkeleton /> : renderRooms}
      </Grid>
    </Box>
  );
};

export default AvailableRooms;
