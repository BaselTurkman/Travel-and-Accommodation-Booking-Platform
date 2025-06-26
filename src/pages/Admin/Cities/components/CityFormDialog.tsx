import { FormikHelpers } from "formik";
import { Grid, Stack } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { City } from "../types";
import FormSection from "@/components/FormSection";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: City;
  onSubmit: (values: City, helpers: FormikHelpers<City>) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const CityFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}: Props) => {
  return (
    <GenericFormDialog<City>
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
        <FormSection title="City Information">
          <Grid size={{ xs: 12 }}>
            <TextField name="name" aria-label="Please Enter the City Name" />
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

export default CityFormDialog;
