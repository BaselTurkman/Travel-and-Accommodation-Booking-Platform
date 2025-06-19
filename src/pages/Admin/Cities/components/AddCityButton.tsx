import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import AddIcon from "@mui/icons-material/Add";
import CityFormDialog from "./CityFormDialog";
import { City } from "../types";
import { initialValues } from "../constants";
import useAddCityAPI from "../hooks/useAddCityAPI";

function AddCityButton() {
  const [open, setOpen] = useState(false);
  const { addCity, isPending } = useAddCityAPI();
  const handleClose = () => setOpen(false);

  const handleAdd = (values: City, helpers: FormikHelpers<City>) => {
    addCity(values, {
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
      <CityFormDialog
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

export default AddCityButton;
