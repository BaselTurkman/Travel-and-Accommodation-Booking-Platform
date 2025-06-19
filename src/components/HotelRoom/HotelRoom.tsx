import { FC, useState } from "react";
import { Typography, Box, Stack, Divider, Chip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BaseCard from "@/components/BaseCard";
import HotelAmenities from "@/components/HotelAmenities";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import { useSnackBar } from "@/hooks/useSnackBar";
import { HotelRoomProps } from "./types";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addToCart, removeFromCart, selectIsRoomInCart } from "@/features/Cart";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";

const HotelRoom: FC<HotelRoomProps> = ({ room }) => {
  const { showSuccessSnackbar, showWarningSnackbar } = useSnackBar();
  const dispatch = useAppDispatch();
  const isRoomInCart = useAppSelector(selectIsRoomInCart(room.roomId));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { showConfirmationDialog } = useConfirmationDialog();
  const {
    roomType,
    roomPhotoUrl,
    roomAmenities,
    price,
    capacityOfChildren,
    capacityOfAdults,
  } = room;

  const handleDelete = () => {
    dispatch(removeFromCart({ roomNumber: room.roomNumber }));
    showWarningSnackbar({ message: "Room removed from your cart." });
  };

  const handleAdd = () => {
    setIsButtonDisabled(true);
    dispatch(addToCart({ room }));
    showSuccessSnackbar({ message: "Room added to cart successfully." });
    setTimeout(() => setIsButtonDisabled(false), 1500);
  };

  const handleCartAction = () => {
    if (isRoomInCart) {
      showConfirmationDialog({
        title: "Remove Room from Cart",
        message: "Are you sure you want to remove this room from your cart?",
        onConfirm: () => {
          setIsButtonDisabled(true);
          handleDelete();
          setTimeout(() => setIsButtonDisabled(false), 1500);
        },
      });
    } else {
      handleAdd();
    }
  };

  return (
    <BaseCard image={roomPhotoUrl} alt={`${roomType} thumbnail`}>
      <Stack spacing={2} justifyContent="space-between" sx={{ height: "100%" }}>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
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
              sx={{ px: 0.5, py: 1 }}
              size="small"
              icon={<GroupIcon />}
              label={`Adults: ${capacityOfAdults}`}
              color="primary"
            />
            <Chip
              size="small"
              sx={{ px: 0.5, py: 1 }}
              icon={<ChildCareIcon />}
              label={`Children: ${capacityOfChildren}`}
              color="warning"
            />
          </Box>
          <HotelAmenities amenities={roomAmenities} />
          <Divider sx={{ mb: 1 }} />
        </Stack>
        <Box display="flex" justifyContent="center" alignItems="center">
          <AddToCartButton
            onClick={handleCartAction}
            disabled={isButtonDisabled}
            text={isRoomInCart ? "Remove from Cart" : "Add to Cart"}
            color={isRoomInCart ? "error" : "primary"}
            variant={isRoomInCart ? "contained" : "outlined"}
          />
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default HotelRoom;
