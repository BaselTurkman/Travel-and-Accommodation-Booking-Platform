import { useGetHotelsAPI } from "../hooks/useGetHotelsAPI";
import { Grid } from "@mui/material";
import HotelCard from "./HotelCard";
import { useState } from "react";
import { HotelPayload } from "../types";
import HotelFormDialog from "./HotelFormDialog";
import useEditHotelAPI from "../hooks/useEditHotelAPI";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";


const HotelsContainer = () => {
  const { hotels, isLoading } = useGetHotelsAPI();
  const {editHotel, isPending} = useEditHotelAPI();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<HotelPayload | null>(null);
  const {showWarningSnackbar} = useSnackBar()

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
  const renderHotels = hotels.map((hotel) => (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      key={hotel.id + "-" + hotel.hotelName}
    >
      <HotelCard hotel={hotel} onEdit={handleEdit} />
    </Grid>
  ));
  if (isLoading) return <div>isLoading...</div>;
  return (
    <>
      <Grid container spacing={2}>
        {renderHotels}
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
