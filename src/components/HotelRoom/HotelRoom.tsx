import { FC } from "react";
import { Typography, Box, Stack, Divider, Chip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BaseCard from "@/components/BaseCard";
import HotelAmenities from "@/components/HotelAmenities";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import { useSnackBar } from "@/hooks/useSnackBar";
import { HotelRoomProps } from "./types";

const HotelRoom: FC<HotelRoomProps> = ({ room }) => {
  const { showSuccessSnackbar } = useSnackBar();
  const {
    roomType,
    roomPhotoUrl,
    roomAmenities,
    price,
    capacityOfChildren,
    capacityOfAdults,
  } = room;

  const handleAddToCart = () => {
    //TD Do : Implements Add To Cart Feature
    showSuccessSnackbar({ message: "Room added to cart successfully." });
  };

  return (
    <BaseCard image={roomPhotoUrl} alt={`${roomType} thumbnail`}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h6"
            fontWeight={700}
            align="center"
            fontSize={{ xs: 16, md: 20 }}
          >
            {roomType} Room
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <AttachMoneyIcon color="success" />
            <Typography variant="subtitle1" fontWeight={500}>
              {price}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 1 }} />

        <Box display="flex" gap={2}>
          <Chip
            icon={<GroupIcon />}
            label={`Adults: ${capacityOfAdults}`}
            color="primary"
          />
          <Chip
            icon={<ChildCareIcon />}
            label={`Children: ${capacityOfChildren}`}
            color="warning"
          />
        </Box>
        <HotelAmenities amenities={roomAmenities} />
        <Divider sx={{ mb: 1 }} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <AddToCartButton onClick={handleAddToCart} />
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default HotelRoom;
