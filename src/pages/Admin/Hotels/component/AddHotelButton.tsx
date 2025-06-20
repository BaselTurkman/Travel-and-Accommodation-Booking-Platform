import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import AddIcon from "@mui/icons-material/Add";
import HotelFormDialog from "./HotelFormDialog";
import { HotelPayload } from "../types";
import useAddHotelAPI from "../hooks/useAddHotelAPI";
import { initialValues } from "../constants";

function AddHotelButton() {
  const [open, setOpen] = useState(false);
  const { addHotel, isPending } = useAddHotelAPI();
  const handleClose = () => setOpen(false);

  const handleAdd = (
    values: HotelPayload,
    helpers: FormikHelpers<HotelPayload>
  ) => {
    addHotel(values, {
      onSuccess: () => {
        helpers.resetForm();
        handleClose();
      },
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={5}>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add City
      </Button>
      <HotelFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAdd}
        isPending={isPending}
        title="Make a Booking"
        formType="add"
      />
    </Box>
  );
}

export default AddHotelButton;
