import Alert, { AlertProps } from "@mui/material/Alert";
import { forwardRef } from "react";

const BookingAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

BookingAlert.displayName = "Alert";

export default BookingAlert;
