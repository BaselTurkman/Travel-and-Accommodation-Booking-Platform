import { FormikHelpers } from "formik";
import { Grid, Stack } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { HotelPayload } from "../types";
import { FC } from "react";
import FormSection from "@/components/FormSection";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: HotelPayload;
  onSubmit: (
    values: HotelPayload,
    helpers: FormikHelpers<HotelPayload>
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
      <Stack spacing={3}>
        <FormSection title="Basic Information">
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="hotelName"
              aria-label="Please Enter the Hotel Name"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="hotelType"
              aria-label="Please Enter the Hotel Type"
            />
          </Grid>
        </FormSection>
        <FormSection title="Location">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField name="location" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField name="latitude" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField name="longitude" />
            </Grid>
          </Grid>
        </FormSection>
        <FormSection title="Details">
          <Grid size={{ xs: 12 }}>
            <TextField name="starRating" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              name="description"
              aria-label="Please Enter the City Description"
              rows={4}
              multiline
            />
          </Grid>
        </FormSection>
      </Stack>
    </GenericFormDialog>
  );
};

export default HotelFormDialog;
