import { Card, CardContent, CardActions, Skeleton, Grid } from "@mui/material";
import { FC } from "react";

const CityCardSkeleton: FC = () => {
  const skeletonArray = Array.from({ length: 6 });
  const renderSkeletonCard = (
    <Card>
      <CardContent>
        <Skeleton variant="text" height={32} width="60%" />
        <Skeleton variant="text" height={24} width="100%" />
        <Skeleton variant="text" height={24} width="90%" />
      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" width={80} height={36} />
        <Skeleton variant="rectangular" width={80} height={36} />
      </CardActions>
    </Card>
  );
  return skeletonArray.map((_, index) => (
    <Grid size={{ xs: 12, sm: 6 }} key={index}>
      {renderSkeletonCard}
    </Grid>
  ));
};

export default CityCardSkeleton;
