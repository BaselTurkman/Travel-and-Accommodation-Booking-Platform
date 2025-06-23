import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import AddIcon from "@mui/icons-material/Add";
import HotelFormDialog from "./HotelFormDialog";
import { HotelRoomPayload } from "@/types";
import { initialValues } from "../constants";
import useAddHotelRoomAPI from "../hooks/useAddHotelAPI";

function AddHotelButton() {
  const [open, setOpen] = useState(false);
  const {addHotelRoom, isPending} = useAddHotelRoomAPI()
  const handleClose = () => setOpen(false);

  const handleAdd = (
    values: HotelRoomPayload,
    helpers: FormikHelpers<HotelRoomPayload>
  ) => {
    addHotelRoom(values, {
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
        Add Hotel Room
      </Button>
      <HotelFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAdd}
        isPending={isPending}
        title="Add Hotel"
        formType="add"
      />
    </Box>
  );
}

export default AddHotelButton;
