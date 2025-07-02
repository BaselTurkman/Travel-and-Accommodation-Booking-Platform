import { useFormikContext } from "formik";
import { Box, Grid } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import NumericInput from "@/components/Fields/NumericInput";
import AutoCompleteField from "@/components/Fields/AutoCompleteField/AutoCompleteField";
import { BookingPayload, PaymentMethod } from "../types";
import { paymentMethods } from "../constants";
import FormSection from "@/components/FormSection";

const CheckoutFormContent = () => {
  const { setFieldValue, values } = useFormikContext<BookingPayload>();

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <FormSection title="Booking Info">
        <Grid size={{ xs: 12 }}>
          <DatePickerField name="bookingDateTime" label="Booking Date Time" />
        </Grid>
      </FormSection>
      <FormSection title="Customer Details">
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField name="customerName" aria-label="Enter a Customer Name" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField name="hotelName" aria-label="Enter a Hotel Name" />
        </Grid>
      </FormSection>
      <FormSection title="Room Info">
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField name="roomNumber" aria-label="Enter a Room Number" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField name="roomType" aria-label="Enter a Room Type" />
        </Grid>
      </FormSection>
      <FormSection title="Payment">
        <Grid size={{ xs: 12 }}>
          <NumericInput name="totalCost" min={0} label="Total Cost" fullWidth />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AutoCompleteField
            name="paymentMethod"
            placeholder="Payment Method"
            size="small"
            options={paymentMethods}
            value={
              paymentMethods.find(
                (item) => item.name === values.paymentMethod
              ) ?? null
            }
            getOptionLabel={(option) => (option as PaymentMethod)?.name || ""}
            onChange={(_, newValue) => {
              const paymentName = (newValue as PaymentMethod)?.name ?? "";
              setFieldValue("paymentMethod", paymentName);
            }}
          />
        </Grid>
      </FormSection>
    </Box>
  );
};

export default CheckoutFormContent;
