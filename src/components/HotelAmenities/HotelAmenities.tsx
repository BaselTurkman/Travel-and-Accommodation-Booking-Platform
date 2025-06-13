import { FC } from "react";
import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { HotelAmenitiesProps } from "./types";


const HotelAmenities: FC<HotelAmenitiesProps> = ({ amenities }) => {
  if (!amenities.length) return null;

  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
        Amenities
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {amenities.map((amenity, index) => (
          <Tooltip key={`${amenity.name}-${index}`} title={amenity.description} arrow>
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                backgroundColor: "#f0f0f0",
                borderRadius: 1.5,
                fontSize: "0.8rem",
              }}
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
