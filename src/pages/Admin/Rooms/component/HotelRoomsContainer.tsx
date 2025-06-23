import { Grid } from "@mui/material";
import { FC, useState } from "react";
import { HotelRoomPayload } from "@/types";
import HotelFormDialog from "./HotelFormDialog";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import NoItemFound from "@/components/NoItemFound";
import { useGetHotelRoomsAPI } from "../hooks/useGetHotelRoomsAPI";
import useEditHotelRoomAPI from "../hooks/useEditHotelRoomAPI";
import HotelRoom from "@/components/HotelRoom";

// interface HotelsContainerProps {
//   searchParams: SearchParams;
// }

const HotelRoomsContainer: FC = () => {
  const { hotelRooms, isLoading, isError, refetch } = useGetHotelRoomsAPI();
  const { editHotelRoom, isPending } = useEditHotelRoomAPI();
  const { showWarningSnackbar } = useSnackBar();
  const [retryCount, setRetryCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotelRoom, setSelectedHotel] =
    useState<HotelRoomPayload | null>(null);

  const handleCloseDialog = () => {
    setSelectedHotel(null);
    setOpenDialog(false);
  };

  const handleEdit = (hotel: HotelRoomPayload) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleSubmit = async (values: HotelRoomPayload) => {
    if (isEqual(values, selectedHotelRoom)) {
      showWarningSnackbar({ message: "No changes were made." });
    } else {
      editHotelRoom(values);
    }
    handleCloseDialog();
  };

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        <BaseCardSkeleton />
      </Grid>
    );
  }  
  const isEmpty = hotelRooms.length === 0;
  const renderHotels = hotelRooms.map((room) => (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      key={room.roomId + "-" + room.roomNumber}
    >
      <HotelRoom room={room} onEdit={handleEdit} actionButtons={true} />
    </Grid>
  ));

  return (
    <>
      <Grid container spacing={2}>
        {isEmpty ? <NoItemFound title="No Hotels Found" /> : renderHotels}
      </Grid>
      {selectedHotelRoom && (
        <HotelFormDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          initialValues={selectedHotelRoom}
          onSubmit={handleSubmit}
          isPending={isPending}
          title="Edit Hotel"
          formType="edit"
        />
      )}
    </>
  );
};

export default HotelRoomsContainer;
