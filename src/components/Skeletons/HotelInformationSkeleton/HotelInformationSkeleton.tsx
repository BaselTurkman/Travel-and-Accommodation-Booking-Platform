import { Box, Rating, Skeleton, Stack, Typography } from "@mui/material";
import { FC } from "react";

const HotelInformationSkeleton: FC = () => {
  return (
    <Stack bgcolor="white" p={3} gap={3} borderRadius={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Skeleton variant="text" width="40%" height={30} />
        <Rating value={0} readOnly />
      </Box>
      <Box>
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
      </Box>
      <Box>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          Amenities
        </Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={idx} variant="rounded" width={80} height={30} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Box>
    </Stack>
  );
};

export default HotelInformationSkeleton;
