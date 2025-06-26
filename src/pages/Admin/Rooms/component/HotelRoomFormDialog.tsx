import { FormikHelpers } from "formik";
import { Grid, Stack } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { HotelRoomPayload } from "@/types";
import { FC } from "react";
import NumericInput from "@/components/Fields/NumericInput";
import FormSection from "@/components/FormSection";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: HotelRoomPayload;
  onSubmit: (
    values: HotelRoomPayload,
    helpers: FormikHelpers<HotelRoomPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const HotelRoomFormDialog: FC<Props> = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}) => {
  return (
    <GenericFormDialog<HotelRoomPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={validationSchema}
      formType={formType}
    >
      <Stack spacing={4}>
        <FormSection title="Room Details">
          <Grid size={{ xs: 12 }}>
            <TextField
              name="roomNumber"
              aria-label="Enter Room Number"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField name="price" aria-label="Enter Cost" fullWidth />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField name="roomType" aria-label="Enter Room Type" fullWidth />
          </Grid>
        </FormSection>

        <FormSection title="Capacity">
          <Grid size={{ xs: 12 }}>
            <NumericInput
              name="capacityOfAdults"
              label="Capacity Of Adults"
              aria-label="Enter Capacity of Adults"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <NumericInput
              name="capacityOfChildren"
              label="Capacity Of Children"
              aria-label="Enter Capacity of Children"
              fullWidth
            />
          </Grid>
        </FormSection>
      </Stack>
    </GenericFormDialog>
  );
};

export default HotelRoomFormDialog;
