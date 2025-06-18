import { FC, useState } from "react";
import useGetAvailableRoomsAPI from "../hooks/useGetAvailableRoomsAPI";
import { Box, Grid, Typography } from "@mui/material";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import HotelRoom from "@/components/HotelRoom";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";

interface AvailableRoomsProps {
  hotelId: string;
}

const AvailableRooms: FC<AvailableRoomsProps> = ({ hotelId }) => {
  const { availableRooms, isLoading, isError, refetch } =
    useGetAvailableRoomsAPI(hotelId);
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };
  
  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }
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
