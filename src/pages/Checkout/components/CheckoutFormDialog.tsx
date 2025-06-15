import { FormikHelpers } from "formik";
import { Box, Grid } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { BookingPayload } from "../types";
import { bookingSchema } from "../formSchema";
import NumericInput from "@/components/Fields/NumericInput";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: BookingPayload;
  onSubmit: (
    values: BookingPayload,
    helpers: FormikHelpers<BookingPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const CheckoutFormDialog: React.FC<Props> = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}) => {
  return (
    <GenericFormDialog<BookingPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={bookingSchema}
      formType={formType}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <DatePickerField name="bookingDateTime" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField name="customerName" aria-label="Enter a Customer Name" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField name="hotelName" aria-label="Enter a Hotel Name" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField name="roomNumber" aria-label="Enter a Room Number" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField name="roomType" aria-label="Enter a Room Type" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <NumericInput
              name="totalCost"
              min={0}
              label="Total Cost"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              name="paymentMethod"
              aria-label="Enter a Payment Method"
            />{" "}
          </Grid>
        </Grid>
      </Box>
    </GenericFormDialog>
  );
};

export default CheckoutFormDialog;
