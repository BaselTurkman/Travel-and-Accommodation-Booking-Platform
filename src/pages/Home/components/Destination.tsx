import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { TrendingDestination } from '../types';
import { FC } from 'react';


interface Props {
  destination: TrendingDestination;
}

const Destination: FC<Props> = ({ destination }) => {
  const { cityName, countryName, thumbnailUrl } = destination;

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="400"
            image={thumbnailUrl}
            alt={`${cityName}, ${countryName}`}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              px: 2,
              py: 1,
            }}
          >
            <Typography variant="h6">{cityName}</Typography>
            <Typography variant="body2">{countryName}</Typography>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {destination.description.slice(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Destination;
