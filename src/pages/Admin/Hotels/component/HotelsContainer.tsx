import { useGetHotelsAPI } from "../hooks/useGetHotelsAPI";
import { Box, Grid, Pagination } from "@mui/material";
import HotelCard from "./HotelCard";
import { FC, useState } from "react";
import { HotelPayload } from "../types";
import HotelFormDialog from "./HotelFormDialog";
import useEditHotelAPI from "../hooks/useEditHotelAPI";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import { SearchParams } from "@/types";

interface HotelsContainerProps {
  searchParams: SearchParams;
  onPageChange: (page: number) => void;
}

const HotelsContainer: FC<HotelsContainerProps> = ({
  searchParams,
  onPageChange,
}) => {
  const { hotels, isLoading, isError, refetch, totalPages } =
    useGetHotelsAPI(searchParams);
  const { editHotel, isPending } = useEditHotelAPI();
  const { showWarningSnackbar } = useSnackBar();
  const [retryCount, setRetryCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<HotelPayload | null>(null);

  const handleCloseDialog = () => {
    setSelectedHotel(null);
    setOpenDialog(false);
  };

  const handleEdit = (hotel: HotelPayload) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleSubmit = async (values: HotelPayload) => {
    if (isEqual(values, selectedHotel)) {
      showWarningSnackbar({ message: "No changes were made." });
    } else {
      editHotel(values);
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

  const renderHotels = hotels.map((hotel) => (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      key={hotel.id + "-" + hotel.hotelName}
    >
      <HotelCard hotel={hotel} onEdit={handleEdit} />
    </Grid>
  ));

  return (
    <>
      <Grid container spacing={2}>
        {isLoading ? <BaseCardSkeleton /> : renderHotels}
      </Grid>
      {!isLoading && !isError && (
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={totalPages || 1}
            page={searchParams.pageNumber}
            onChange={(_, value) => onPageChange(value)}
            color="primary"
          />
        </Box>
      )}
      {selectedHotel && (
        <HotelFormDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          initialValues={selectedHotel}
          onSubmit={handleSubmit}
          isPending={isPending}
          title="Edit Hotel"
          formType="edit"
        />
      )}
    </>
  );
};

export default HotelsContainer;
