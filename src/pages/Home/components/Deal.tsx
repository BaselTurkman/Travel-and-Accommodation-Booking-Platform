import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box,
  Grow,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";

import { Deal as FeatureDeal } from "../types";
import { FC } from "react";

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
  } = deal;

  return (
    <Grow in={true} timeout={500}>
      <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="180"
          image={roomPhotoUrl}
          alt={`${hotelName} room`}
        />
        <CardContent>
          <Stack gap={0.5}>
            <Box display="flex" alignItems="center">
              <HotelIcon fontSize="small" color="action" sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {hotelName}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon
                fontSize="small"
                color="action"
                sx={{ mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary">
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
        </CardContent>
      </Card>
    </Grow>
  );
};

export default Deal;
