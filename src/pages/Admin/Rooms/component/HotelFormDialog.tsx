import { FormikHelpers } from "formik";
import { Box, Stack, Typography } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { HotelRoomPayload } from "@/types";
import { FC } from "react";
import NumericInput from "@/components/Fields/NumericInput";

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

const HotelFormDialog: FC<Props> = ({
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
        <Box
          component="fieldset"
          sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2 }}
        >
          <Typography component="legend" fontWeight="bold" mb={2}>
            Room Details
          </Typography>
          <Stack spacing={3}>
            <TextField name="roomNumber" aria-label="Enter Room Number" />
            <TextField name="price" aria-label="Enter Cost" />
            <TextField name="roomType" aria-label="Enter Room Type" />
          </Stack>
        </Box>

        <Box
          component="fieldset"
          sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2 }}
        >
          <Typography component="legend" fontWeight="bold" mb={2}>
            Capacity
          </Typography>
          <Stack spacing={3} direction={{ xs: "column", sm: "row" }}>
            <NumericInput
              name="capacityOfAdults"
              label="Capacity Of Adults"
              aria-label="Enter Capacity of Adults"
              fullWidth
            />
            <NumericInput
              name="capacityOfChildren"
              label="Capacity Of Children"
              aria-label="Enter Capacity of Children"
              fullWidth
            />
          </Stack>
        </Box>
      </Stack>
    </GenericFormDialog>
  );
};

export default HotelFormDialog;
