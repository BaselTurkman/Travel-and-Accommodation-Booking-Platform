import { FC, PropsWithChildren } from "react";
import BookingQueryClientProvider from "./containers/BookingQueryClientProvider";

//To DO, put all the Providers here including redux and theme
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <BookingQueryClientProvider>{children}</BookingQueryClientProvider>;
};

export default Providers;
