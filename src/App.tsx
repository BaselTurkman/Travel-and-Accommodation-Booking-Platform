import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog";
import BookingSnackbar from "./components/Snackbar";
import Providers from "./Providers";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Providers>
      <AppRoutes />
      <BookingSnackbar />
      <ConfirmationDialog />
    </Providers>
  );
}

export default App;
