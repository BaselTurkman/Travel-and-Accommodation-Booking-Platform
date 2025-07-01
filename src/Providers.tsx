import { FC, PropsWithChildren } from "react";
import BookingQueryClientProvider from "./containers/BookingQueryClientProvider";
import { Provider } from "react-redux";
import Booking from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingThemeProvider from "./style/BookingThemeProvider";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog";
import BookingSnackbar from "./components/Snackbar";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={Booking}>
      <BookingThemeProvider>
        <BookingQueryClientProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
          <BookingSnackbar />
          <ConfirmationDialog />
        </BookingQueryClientProvider>
      </BookingThemeProvider>
    </Provider>
  );
};

export default Providers;
