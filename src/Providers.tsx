import { FC, PropsWithChildren } from "react";
import BookingQueryClientProvider from "./containers/BookingQueryClientProvider";
import { Provider } from "react-redux";
import Booking from "./store";

//To DO, put all the Providers here including redux and theme
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={Booking}>
      <BookingQueryClientProvider>{children}</BookingQueryClientProvider>
    </Provider>
  );
};

export default Providers;
