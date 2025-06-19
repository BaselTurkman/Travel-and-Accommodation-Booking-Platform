import {
  Rating,
  Typography,
  Box,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HotelIcon from "@mui/icons-material/Hotel";
import { FC } from "react";
import BaseCard from "@/components/BaseCard";
import HotelAmenities from "@/components/HotelAmenities";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Hotel } from "../types";

interface Props {
  hotel: Hotel;
}

const HotelCard: FC<Props> = ({ hotel }) => {
  const {
    hotelName,
    starRating,
    amenities,
    availableRooms,
    hotelType,
    imageUrl,
    location,
    rooms,
    description,
  } = hotel;

  const roomPrices = rooms.map((room) => room.price);
  const priceLowerBound = Math.min(...roomPrices);
  const priceUpperBound = Math.max(...roomPrices);

  return (
    <BaseCard image={imageUrl} alt={`${hotelName} thumbnail`}>
      <Stack gap={1}>
        <Box display="flex" alignItems="center">
          <MeetingRoomIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {hotelName}
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="body2" color="textPrimary">
            {description.slice(0, 100)}
            {description.length > 100 && "..."}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="subtitle2" color="text.secondary">
            {location}
          </Typography>
        </Box>
        <Divider />
        <HotelAmenities amenities={amenities} />
        <Box display="flex" gap={2} mt={1} mb={2}>
          <Chip
            size="small"
            sx={{ px: 0.5, py: 1 }}
            icon={<HotelIcon />}
            label={`Available Rooms: ${availableRooms}`}
            color="success"
          />
          <Chip
            size="small"
            sx={{ px: 0.5, py: 1 }}
            label={`Type: ${hotelType}`}
            color="primary"
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Rating value={starRating} precision={0.5} readOnly size="medium" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            {starRating} Stars
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
          <AttachMoneyIcon fontSize="small" color="action" />
          {priceLowerBound !== priceUpperBound && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ${priceUpperBound}
            </Typography>
          )}
          <Typography variant="h6" color="primary" fontWeight={700}>
            ${priceLowerBound}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            / night
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button variant="text" size="large" color="error">
            Delete
          </Button>
          <Button variant="text" size="large" color="warning">
            Edit
          </Button>
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default HotelCard;
