import { FC, PropsWithChildren } from "react";
import BookingQueryClientProvider from "./containers/BookingQueryClientProvider";
import { Provider } from "react-redux";
import Booking from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingThemeProvider from "./style/BookingThemeProvider";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog";
import BookingSnackbar from "./components/Snackbar";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={Booking}>
      <PersistGate loading={null} persistor={persistor}>
        <BookingThemeProvider>
          <BookingQueryClientProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
            <BookingSnackbar />
            <ConfirmationDialog />
          </BookingQueryClientProvider>
        </BookingThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
