import { FormikHelpers } from "formik";
import { Stack } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { validationSchema } from "../formSchema";
import { City } from "../types";

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
        <TextField name="name" aria-label="Please Enter the City Name" />
        <TextField
          name="description"
          aria-label="Please Enter the City Description"
        />
      </Stack>
    </GenericFormDialog>
  );
};

export default CityFormDialog;
