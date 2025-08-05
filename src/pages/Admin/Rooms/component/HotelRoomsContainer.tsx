import { Box, Grid, Pagination } from "@mui/material";
import { FC, useState } from "react";
import { HotelRoomPayload, SearchParams } from "@/types";
import HotelRoomFormDialog from "./HotelRoomFormDialog";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import NoItemFound from "@/components/NoItemFound";
import { useGetHotelRoomsAPI } from "../hooks/useGetHotelRoomsAPI";
import useEditHotelRoomAPI from "../hooks/useEditHotelRoomAPI";
import HotelRoom from "@/components/HotelRoom";
import useRetryHandler from "@/hooks/useRetryHandler";

interface HotelRoomsContainerProps {
  searchParams: SearchParams;
  onPageChange: (page: number) => void;
}
const HotelRoomsContainer: FC<HotelRoomsContainerProps> = ({
  onPageChange,
  searchParams,
}) => {
  const { hotelRooms, isLoading, isError, refetch, pageNumber, totalPages } =
    useGetHotelRoomsAPI(searchParams);
  const { editHotelRoom, isPending } = useEditHotelRoomAPI();
  const { showWarningSnackbar } = useSnackBar();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotelRoom, setSelectedHotel] =
    useState<HotelRoomPayload | null>(null);
  const { retryCount, handleRetry } = useRetryHandler(refetch);

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

  const renderContent = isEmpty ? (
    <NoItemFound title="No Rooms Found" />
  ) : (
    renderHotels
  );

  return (
    <>
      <Grid container spacing={2}>
        {renderContent}
      </Grid>
      {!isLoading && !isError && (
        <Box mt={5} display="flex" justifyContent="center">
          <Pagination
            count={totalPages || 1}
            page={pageNumber}
            onChange={(_, value) => onPageChange(value)}
            color="primary"
          />
        </Box>
      )}
      {selectedHotelRoom && (
        <HotelRoomFormDialog
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
