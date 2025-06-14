import { FC } from "react";
import useGetHotelDetailsAPI from "../hooks/useGetHotelDetailsAPI";
import HotelAmenities from "@/components/HotelAmenities";
import { Box, Rating, Stack, Typography } from "@mui/material";
import InteractiveMap from "@/components/InteractiveMap";
import HotelInformationSkeleton from "@/components/Skeletons/HotelInformationSkeleton/HotelInformationSkeleton";

interface HotelInformationProps {
  hotelId: string;
}

const HotelInformation: FC<HotelInformationProps> = ({ hotelId }) => {
  const { hotelInformation, isLoading } = useGetHotelDetailsAPI(hotelId);
  if (isLoading) return <HotelInformationSkeleton />;
  const renderHotelInformation = hotelInformation!;
  const renderHotelAmenities = (
    <HotelAmenities amenities={renderHotelInformation.amenities} />
  );
  return (
    <Stack bgcolor="white" p={3} gap={3} borderRadius={3}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" fontWeight="bold">
          {renderHotelInformation.hotelName}
        </Typography>
        <Rating
          name="read-only"
          value={renderHotelInformation.starRating}
          readOnly
        />
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          {renderHotelInformation.description}
        </Typography>
      </Box>
      <Box>{renderHotelAmenities}</Box>
      <Box>
        <InteractiveMap
          latitude={renderHotelInformation.latitude}
          longitude={renderHotelInformation.longitude}
          popupLabel={renderHotelInformation.location}
        />
      </Box>
    </Stack>
  );
};

export default HotelInformation;
