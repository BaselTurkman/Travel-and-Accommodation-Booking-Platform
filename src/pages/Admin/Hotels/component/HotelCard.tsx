import {
  Rating,
  Typography,
  Box,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import { FC } from "react";
import BaseCard from "@/components/BaseCard";
import HotelAmenities from "@/components/HotelAmenities";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Hotel, HotelPayload } from "../types";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useDeleteHotelAPI from "../hooks/useDeleteHotelAPI";

interface Props {
  hotel: Hotel;
  onEdit: (hotel: HotelPayload) => void;
}

const HotelCard: FC<Props> = ({ hotel, onEdit }) => {
  const { showConfirmationDialog } = useConfirmationDialog();
  const {
    hotelName,
    starRating,
    amenities,
    availableRooms,
    hotelType,
    imageUrl,
    location,
    description,
    id,
    latitude,
    longitude,

  } = hotel;
  const { deleteHotel, isPending } = useDeleteHotelAPI(id);

  const handleDelete = () => {
    showConfirmationDialog({
      title: "Delete hotel",
      message: "Are you sure you want to delete this hotel?",
      onConfirm: deleteHotel,
    });
  };
  const hotelPayload = {id,  hotelName, starRating, latitude, longitude,description, hotelType }
  return (
    <BaseCard image={imageUrl} alt={`${hotelName} thumbnail`}>
      <Stack gap={1} minHeight="100%">
        <Box display="flex" alignItems="center">
          <MeetingRoomIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom noWrap>
            {hotelName}
          </Typography>
        </Box>
        <Box my={1}>
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="subtitle2" color="text.secondary" noWrap>
            {location}
          </Typography>
        </Box>
        <Divider />
        <HotelAmenities amenities={amenities} />
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          mt={1}
          mb={2}
          alignItems="center"
        >
          {availableRooms && (
            <Chip
              size="small"
              sx={{ px: 0.5 }}
              icon={<HotelIcon />}
              label={`Available Rooms: ${availableRooms}`}
              color="success"
            />
          )}
          <Chip
            size="small"
            sx={{ px: 0.5 }}
            label={`Type: ${hotelType}`}
            color="primary"
          />
        </Stack>
        <Box display="flex" alignItems="center">
          <Rating value={starRating} precision={0.5} readOnly size="medium" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            {starRating} Stars
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="auto">
          <Button
            variant="text"
            size="large"
            color="error"
            onClick={handleDelete}
            loading={isPending}
          >
            Delete
          </Button>
          <Button variant="text" size="large" color="warning" onClick={() => onEdit(hotelPayload)}>
            Edit
          </Button>
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default HotelCard;
