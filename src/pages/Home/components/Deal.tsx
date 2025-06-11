import { Box, Typography, Stack, Rating } from "@mui/material";
import { Deal as FeatureDeal } from "../types";
import { FC } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BaseCard from "@/components/BaseCard";

interface Props {
  deal: FeatureDeal;
}

const Deal: FC<Props> = ({ deal }) => {
  const {
    cityName,
    finalPrice,
    hotelName,
    hotelStarRating,
    originalRoomPrice,
    roomPhotoUrl,
    description,
    title,
  } = deal;

  return (
    <BaseCard image={roomPhotoUrl} alt={`${hotelName} room`}>
      <Stack gap={0.5}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <HotelIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {hotelName}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="textSecondary">
            {cityName}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            value={hotelStarRating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary" ml={1}>
            {hotelStarRating} Stars
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" gap={1}>
          <Typography variant="h6" color="text.secondary">
            <s>${originalRoomPrice}</s>
          </Typography>
          <Typography variant="h6" color="primary" fontWeight={700}>
            ${finalPrice}
          </Typography>
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default Deal;
