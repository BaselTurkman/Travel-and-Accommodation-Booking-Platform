import { FormikHelpers } from "formik";
import { Stack } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { HotelPayload } from "../types";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: HotelPayload;
  onSubmit: (values: HotelPayload, helpers: FormikHelpers<HotelPayload>) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const HotelFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}: Props) => {
  return (
    <GenericFormDialog<HotelPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={validationSchema}
      formType={formType}
    >
      <Stack gap={2}>
        <TextField name="hotelName" aria-label="Please Enter the Hotel Name" />
        <TextField name="hotelType" aria-label="Please Enter the Hotel Type"/>
        <TextField name="latitude" />
        <TextField name="longitude"/>
        <TextField name="starRating"/>
        <TextField
          name="description"
          aria-label="Please Enter the City Description"
          rows={4}
          multiline
        />
      </Stack>
    </GenericFormDialog>
  );
};

export default HotelFormDialog;
