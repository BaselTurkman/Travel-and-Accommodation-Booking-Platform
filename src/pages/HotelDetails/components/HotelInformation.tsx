import { FC } from "react";
import useGetHotelDetailsAPI from "../hooks/useGetHotelDetailsAPI";
import HotelAmenities from "@/components/HotelAmenities";
import { Box, Rating, Stack, Typography } from "@mui/material";
import InteractiveMap from "@/components/InteractiveMap";
import HotelInformationSkeleton from "@/components/Skeletons/HotelInformationSkeleton/HotelInformationSkeleton";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import useRetryHandler from "@/hooks/useRetryHandler";

interface HotelInformationProps {
  hotelId: string;
}

const HotelInformation: FC<HotelInformationProps> = ({ hotelId }) => {
  const { hotelInformation, isLoading, isError, refetch } =
    useGetHotelDetailsAPI(hotelId);
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  if (isLoading) return <HotelInformationSkeleton />;

  if (isError || !hotelInformation) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  const renderHotelAmenities = (
    <HotelAmenities amenities={hotelInformation.amenities} />
  );

  return (
    <Stack bgcolor="white" p={3} gap={3} borderRadius={3}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" fontWeight="bold">
          {hotelInformation.hotelName}
        </Typography>
        <Rating name="read-only" value={hotelInformation.starRating} readOnly />
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          {hotelInformation.description}
        </Typography>
      </Box>
      <Box>{renderHotelAmenities}</Box>
      <Box>
        <InteractiveMap
          latitude={hotelInformation.latitude}
          longitude={hotelInformation.longitude}
          popupLabel={hotelInformation.location}
        />
      </Box>
    </Stack>
  );
};

export default HotelInformation;
