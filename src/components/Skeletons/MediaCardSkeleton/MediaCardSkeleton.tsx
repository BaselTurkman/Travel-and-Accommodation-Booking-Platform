import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from "@mui/material";

const MediaCardSkeleton = () => {
  const skeletonArray = Array.from({ length: 6 });

  const renderSkeletonCard = (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <Skeleton variant="rectangular" height={450} />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bgcolor="rgba(0, 0, 0, 0.3)"
            color="white"
            px={2}
            py={1}
          >
            <Skeleton width="40%" height={28} sx={{ bgcolor: "grey.700" }} />
            <Skeleton width="30%" height={20} sx={{ bgcolor: "grey.700" }} />
          </Box>
        </Box>
        <CardContent>
          <Skeleton width="100%" height={20} sx={{ mb: 1 }} />
          <Skeleton width="90%" height={20} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
  return skeletonArray.map((_, index) => (
    <Grid size={{ xs: 12, sm: 6 }} key={index}>
      {renderSkeletonCard}
    </Grid>
  ));
};

export default MediaCardSkeleton;
