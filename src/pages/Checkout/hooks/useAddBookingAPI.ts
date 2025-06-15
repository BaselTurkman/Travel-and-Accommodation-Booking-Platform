import { useMutation } from "@tanstack/react-query";
import { addBookingAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackBar";

const useAddBookingAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Booking Added Successfully",
      });
    },
  });
  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
