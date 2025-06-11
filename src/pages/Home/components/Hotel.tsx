import { Rating, Typography, Box, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { FC } from "react";
import { RecentHotel } from "../types";
import HotelIcon from "@mui/icons-material/Hotel";
import BaseCard from "@/components/BaseCard";

interface Props {
  hotel: RecentHotel;
}

const Hotel: FC<Props> = ({ hotel }) => {
  const {
    hotelName,
    starRating,
    visitDate,
    cityName,
    thumbnailUrl,
    priceLowerBound,
    priceUpperBound,
  } = hotel;

  const visitDateFormatted = new Date(visitDate).toLocaleDateString();

  return (
    <BaseCard image={thumbnailUrl} alt={`${hotelName} thumbnail`}>
      <Stack gap={1}>
        <Box display="flex" alignItems="center">
          <HotelIcon fontSize="small" color="action" sx={{ mr: 1 }} />
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
        <Box display="flex" alignItems="center">
          <Rating value={starRating} precision={0.5} readOnly size="medium" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            {starRating} Stars
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AttachMoneyIcon fontSize="small" color="action" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textDecoration:
                priceUpperBound > priceLowerBound ? "line-through" : "none",
            }}
          >
            {priceUpperBound}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight={700}>
            {priceLowerBound}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            / night
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={1}>
          <CalendarTodayIcon
            fontSize="small"
            color="disabled"
            sx={{ mr: 0.5 }}
          />
          <Typography variant="caption" color="textSecondary">
            Visited on: {visitDateFormatted}
          </Typography>
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default Hotel;
