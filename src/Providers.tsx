import { FC, PropsWithChildren } from "react";
import BookingQueryClientProvider from "./containers/BookingQueryClientProvider";
import { Provider } from "react-redux";
import Booking from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // ✅ Add this line

//To DO, put all the Providers here including redux and theme
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={Booking}>
      <BookingQueryClientProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </BookingQueryClientProvider>
    </Provider>
  );
};

export default Providers;
