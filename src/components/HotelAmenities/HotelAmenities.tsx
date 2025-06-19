import { FC } from "react";
import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { HotelAmenitiesProps } from "./types";
import { bgColors } from "./constants";

const HotelAmenities: FC<HotelAmenitiesProps> = ({ amenities }) => {
  if (!amenities) return null;

  return (
    <Box my={1}>
      <Typography variant="body1" fontWeight={600} gutterBottom>
        Amenities
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {amenities.map((amenity, index) => (
          <Tooltip
            key={`${amenity.name}-${index}`}
            title={amenity.description}
            arrow
          >
            <Box
              px={1.5}
              py={0.5}
              borderRadius={2}
              fontSize="0.8rem"
              bgcolor={bgColors[index % bgColors.length]}
            >
              {amenity.name}
            </Box>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

export default HotelAmenities;
