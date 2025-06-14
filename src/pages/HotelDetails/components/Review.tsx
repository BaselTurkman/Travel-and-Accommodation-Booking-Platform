import { FC } from "react";
import { HotelReview } from "../types";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";

interface ReviewProps {
  review: HotelReview;
}

const Review: FC<ReviewProps> = ({ review }) => {
  const { customerName, description, rating } = review;
  return (
    <Stack gap={2} my={1}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" fontWeight="bold">
          {customerName}
        </Typography>
        <Rating readOnly value={rating} />
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
      <Divider />
    </Stack>
  );
};

export default Review;
