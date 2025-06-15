import { Box, Rating, Skeleton, Stack } from "@mui/material";
import { FC } from "react";

const ReviewSkeleton: FC = () => {
  return (
    <Stack bgcolor="white" p={3} my={3} gap={3} borderRadius={3}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Stack key={idx}>
          {/* Reviewer name + rating */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Skeleton variant="text" width="40%" height={24} />
            <Rating value={0} readOnly />
          </Box>

          <Box>
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default ReviewSkeleton;
