import { useGetHotelsAPI } from "../hooks/useGetHotelsAPI";
import { Grid } from "@mui/material";
import HotelCard from "./HotelCard";
import { useState } from "react";
import { HotelPayload } from "../types";
import HotelFormDialog from "./HotelFormDialog";
import useEditHotelAPI from "../hooks/useEditHotelAPI";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";

const HotelsContainer = () => {
  const { hotels, isLoading, isError, refetch } = useGetHotelsAPI();
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
      {selectedHotel && (
        <HotelFormDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          initialValues={selectedHotel}
          onSubmit={handleSubmit}
          isPending={isPending}
          title="Edit City"
          formType="edit"
        />
      )}
    </>
  );
};

export default HotelsContainer;
