import { Card, CardContent, CardMedia, Grow } from '@mui/material';
import { FC } from 'react';
import { BaseCardProps } from './types';


const BaseCard: FC<BaseCardProps> = ({
  image,
  alt,
  children,
  growIn = true,
  height = 180,
}) => {
  const card = (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia component="img" height={height} image={image} alt={alt} />
      <CardContent sx={{ flexGrow: 1 }}>{children}</CardContent>
    </Card>
  );

  return growIn ? <Grow in timeout={500}>{card}</Grow> : card;
};

export default BaseCard;
