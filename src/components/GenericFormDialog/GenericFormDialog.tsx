import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { FormikProvider, useFormik, Form, FormikValues } from "formik";
import { GenericFormDialogProps } from "./types";

export default function GenericFormDialog<T extends FormikValues>({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  validationSchema,
  children,
  formType = "add",
}: GenericFormDialogProps<T>) {
  const formik = useFormik<T>({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  const closeDialog = () => {
    formik.resetForm();
    handleClose();
  };

  const ButtonLabel = formType === "edit" ? "save" : "add";

  return (
    <Dialog open={open} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
        {title}
      </DialogTitle>
      <Divider />
      <FormikProvider value={formik}>
        <Form>
          <DialogContent>
            <Stack gap={2}>{children}</Stack>
          </DialogContent>
          <DialogActions
            sx={{ px: 3, pb: 2, display: "flex", justifyContent: "flex-start" }}
          >
            <Button type="submit" variant="contained" loading={isPending}>
              {ButtonLabel}
            </Button>
            <Button variant="contained" color="error" onClick={closeDialog}>
              Cancel
            </Button>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
}
