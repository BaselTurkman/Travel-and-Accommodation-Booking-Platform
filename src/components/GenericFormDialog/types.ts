import { FormikHelpers, FormikValues } from "formik";
import { ReactNode } from "react";
import * as yup from "yup";

export interface GenericFormDialogProps<T extends FormikValues> {
  open: boolean;
  handleClose: () => void;
  initialValues: T;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void;
  isPending: boolean;
  title: string;
  validationSchema: yup.ObjectSchema<T>;
  children: ReactNode;
  formType?: string;
}