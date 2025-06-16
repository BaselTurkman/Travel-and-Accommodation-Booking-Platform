import { FormikHelpers } from "formik";
import GenericFormDialog from "@/components/GenericFormDialog";
import { BookingPayload } from "../types";
import { bookingSchema } from "../formSchema";
import CheckoutFormContent from "./CheckoutFormContent";

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
      <CheckoutFormContent />
    </GenericFormDialog>
  );
};

export default CheckoutFormDialog;
