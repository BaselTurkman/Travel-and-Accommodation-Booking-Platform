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
import { useAppSelector } from "@/store/store";
import { selectIsRoomInCart } from "@/features/Cart";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useDeleteHotelRoomAPI from "./hooks/useDeleteHotelRoomAPI";
import { HotelRoomPayload } from "@/types";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useCart } from "@/hooks/useCart";
import CheckoutButton from "@/pages/Checkout/components/CheckoutButton";

const HotelRoom: FC<HotelRoomProps> = ({
  room,
  onEdit,
  actionButtons,
  isBooking = false,
}) => {
  const { showSuccessSnackbar, showWarningSnackbar } = useSnackBar();
  const { addToCart, removeFromCart } = useCart();
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
    roomNumber,
    roomId,
  } = room;
  const { deleteHotelRoom, isPending } = useDeleteHotelRoomAPI(roomId);

  const roomPayload: HotelRoomPayload = {
    price,
    roomNumber,
    roomId,
    roomType,
    capacityOfAdults,
    capacityOfChildren,
  };

  const handleDelete = () => {
    removeFromCart({ roomNumber: room.roomNumber });
    showWarningSnackbar({ message: "Room removed from your cart." });
  };

  const handleAdd = () => {
    setIsButtonDisabled(true);
    addToCart({ room });
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

  const handleRoomDelete = () => {
    showConfirmationDialog({
      title: "Delete Room",
      message: "Are you sure you want to delete this room?",
      onConfirm: () => deleteHotelRoom(),
    });
  };

  const renderCartButton = (
    <Box display="flex" justifyContent={isBooking? "space-between" : "center"} alignItems="center">
      <AddToCartButton
        onClick={handleCartAction}
        disabled={isButtonDisabled}
        text={isRoomInCart ? "Remove from Cart" : "Add to Cart"}
        color={isRoomInCart ? "error" : "primary"}
        variant={isRoomInCart ? "contained" : "outlined"}
      />
      {isBooking && <CheckoutButton roomNumber={roomNumber} />}
    </Box>
  );

  const renderActionButtons = (
    <Box display="flex" justifyContent="space-between" bgcolor="w">
      <EditButton onClick={() => onEdit?.(roomPayload)}>Edit</EditButton>
      <DeleteButton loading={isPending} onClick={handleRoomDelete}>
        Delete
      </DeleteButton>
    </Box>
  );

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
              color="secondary"
            />
          </Box>
          <HotelAmenities amenities={roomAmenities} />
          <Divider sx={{ mb: 1 }} />
        </Stack>
        {actionButtons ? renderActionButtons : renderCartButton}
      </Stack>
    </BaseCard>
  );
};

export default HotelRoom;
