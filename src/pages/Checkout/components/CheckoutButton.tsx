import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import PaymentIcon from "@mui/icons-material/Payment";
import { BookingPayload } from "../types";
import { initialValues } from "../constants";
import useAddBookingAPI from "../hooks/useAddBookingAPI";
import CheckoutFormDialog from "./CheckoutFormDialog";

interface CheckoutButtonProps {
  roomNumber: number;
}

function CheckoutButton({ roomNumber }: CheckoutButtonProps) {
  const [open, setOpen] = useState(false);
  const { addBooking, isPending } = useAddBookingAPI();
  const handleClose = () => setOpen(false);

  const handleAdd = (
    values: BookingPayload,
    helpers: FormikHelpers<BookingPayload>
  ) => {    
    addBooking(
      { ...values, roomNumber },
      {
        onSuccess: () => {
          helpers.resetForm();
          handleClose();
        },
      }
    );
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        endIcon={<PaymentIcon />}
        onClick={() => setOpen(true)}
      >
        Booking
      </Button>
      <CheckoutFormDialog
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

export default CheckoutButton;
