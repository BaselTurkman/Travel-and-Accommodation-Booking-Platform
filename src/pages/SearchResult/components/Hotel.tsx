import { Rating, Typography, Box, Stack, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HotelIcon from "@mui/icons-material/Hotel";
import { FC } from "react";
import { SearchResult } from "../types";
import BaseCard from "@/components/BaseCard";
import HotelAmenities from "@/components/HotelAmenities";
import NavigationButton from "@/components/Buttons/NavigationButton/NavigationButton";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

interface Props {
  hotel: SearchResult;
}

const Hotel: FC<Props> = ({ hotel }) => {
  const {
    hotelName,
    starRating,
    discount,
    roomPhotoUrl,
    roomPrice,
    cityName,
    hotelId,
    numberOfAdults,
    numberOfChildren,
    numberOfRooms,
  } = hotel;

  const priceLowerBound = +(roomPrice - roomPrice * (discount / 100)).toFixed(
    2
  );
  const priceUpperBound = roomPrice;

  return (
    <BaseCard image={roomPhotoUrl} alt={`${hotelName} thumbnail`}>
      <Stack gap={1}>
        <Box display="flex" alignItems="center">
          <MeetingRoomIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {hotelName}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {cityName}
          </Typography>
        </Box>

        <HotelAmenities amenities={hotel.amenities} />

        <Box display="flex" gap={2} mt={1} mb={2}>
          <Chip
            sx={{ px: 0.5, py: 1 }}
            size="small"
            icon={<GroupIcon />}
            label={`Adults: ${numberOfAdults}`}
            color="primary"
          />
          <Chip
            size="small"
            sx={{ px: 0.5, py: 1 }}
            icon={<HotelIcon />}
            label={`Room${numberOfRooms === 1 ? "" : "s"}: ${numberOfRooms}`}
            color="success"
          />
          <Chip
            size="small"
            sx={{ px: 0.5, py: 1 }}
            icon={<ChildCareIcon />}
            label={`Children: ${numberOfChildren}`}
            color="warning"
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Rating value={starRating} precision={0.5} readOnly size="medium" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            {starRating} Stars
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          justifyContent="space-between"
        >
          <AttachMoneyIcon fontSize="small" color="action" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textDecoration:
                priceUpperBound > priceLowerBound ? "line-through" : "none",
            }}
          >
            ${priceUpperBound}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight={700}>
            ${priceLowerBound}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            / night
          </Typography>
          <NavigationButton
            to={`/me/hotel/${hotelId}`}
            caption="show more details"
          />
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default Hotel;
