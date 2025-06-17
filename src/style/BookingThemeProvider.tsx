import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import theme from "./theme";

const BookingThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BookingThemeProvider;
