import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Box,
  Chip,
  Divider,
  Rating,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { FC } from "react";
import HotelAmenities from "@/components/HotelAmenities";
import { Hotel, HotelPayload } from "../types";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useDeleteHotelAPI from "../hooks/useDeleteHotelAPI";
import InteractiveMap from "@/components/InteractiveMap";
import EditButton from "@/components/Buttons/EditButton";
import DeleteButton from "@/components/Buttons/DeleteButton";

interface Props {
  hotel: Hotel;
  onEdit: (hotel: HotelPayload) => void;
}

const HotelCard: FC<Props> = ({ hotel, onEdit }) => {
  const { showConfirmationDialog } = useConfirmationDialog();
  const {
    id,
    hotelName,
    starRating,
    amenities,
    availableRooms,
    hotelType,
    location,
    description,
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

  const hotelPayload: HotelPayload = {
    id,
    hotelName,
    starRating,
    latitude,
    longitude,
    description,
    hotelType,
    location,
  };

  return (
    <Card sx={{ mb: 3 }}>
      <InteractiveMap
        latitude={latitude}
        longitude={longitude}
        popupLabel={hotelName}
      />
      <CardContent>
        <Stack spacing={1}>
          <Box display="flex" alignItems="center">
            <MeetingRoomIcon fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight={600} noWrap>
              {hotelName}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </Typography>
          <Box display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
            <Typography variant="subtitle2" color="text.secondary" noWrap>
              {location}
            </Typography>
          </Box>
          <Divider />
          <HotelAmenities amenities={amenities} />
          <Stack direction="row" spacing={1} mt={1} mb={2} flexWrap="wrap">
            {availableRooms && (
              <Chip
                size="small"
                icon={<HotelIcon />}
                label={`Available Rooms: ${availableRooms}`}
                color="success"
              />
            )}
            <Chip size="small" label={`Type: ${hotelType}`} color="primary" />
          </Stack>
          <Box display="flex" alignItems="center">
            <Rating value={starRating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary" ml={1}>
              {starRating} Stars
            </Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <DeleteButton onClick={handleDelete} loading={isPending}>
          Delete
        </DeleteButton>
        <EditButton onClick={() => onEdit(hotelPayload)}>Edit</EditButton>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
