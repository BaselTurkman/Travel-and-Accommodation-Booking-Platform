import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
  Box,
} from "@mui/material";
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
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="180"
          image={roomPhotoUrl}
          alt={`${hotelName} room`}
        />
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {hotelName}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {cityName}
          </Typography>

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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Deal;
