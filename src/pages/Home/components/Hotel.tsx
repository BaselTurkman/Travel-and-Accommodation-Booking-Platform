import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { RecentHotel } from "../types";

interface Props {
  hotel: RecentHotel;
}

const Hotel: FC<Props> = ({ hotel }) => {
  const {
    hotelName,
    starRating,
    cityName,
    thumbnailUrl,
    priceLowerBound,
    priceUpperBound,
  } = hotel;
  return (
    <Grid size={{ xs: 12, sm: 4 }}>
      <Card>
        <CardMedia component="img" height="140" image={thumbnailUrl} />
        <CardContent>
          <Typography variant="h6">{hotelName}</Typography>
          <Typography color="textSecondary">{cityName}</Typography>
          <Rating value={starRating} readOnly />
          <Typography variant="body2" color="textSecondary">
            From ${priceUpperBound}/night to ${priceLowerBound} night
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Hotel;
