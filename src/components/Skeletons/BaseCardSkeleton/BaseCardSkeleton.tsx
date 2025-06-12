import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
} from "@mui/material";

const BaseCardSkeleton = () => {
  const skeletonArray = Array.from({ length: 3 });

  const renderSkeletonCard = (
    <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
      <CardMedia>
        <Skeleton variant="rectangular" height={180} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" height={30} width="80%" />
        <Skeleton variant="text" height={20} width="40%" />
        <Box display="flex" alignItems="center" mb={1}>
          <Skeleton variant="text" width={80} height={20} />
        </Box>
        <Box display="flex" justifyContent="space-between" gap={1}>
          <Skeleton variant="text" width="40%" height={28} />
          <Skeleton variant="text" width="40%" height={28} />
        </Box>
      </CardContent>
    </Card>
  );
  return skeletonArray.map((_, index) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
      {renderSkeletonCard}
    </Grid>
  ));
};

export default BaseCardSkeleton;
