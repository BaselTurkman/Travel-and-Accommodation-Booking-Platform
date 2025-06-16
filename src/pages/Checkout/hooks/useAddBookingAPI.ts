import { useMutation } from "@tanstack/react-query";
import { addBookingAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackBar";
import { useNavigate } from "react-router-dom";

const useAddBookingAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();
  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Booking Added Successfully",
      });
      //Since the response body doesn't include a booking ID, it's currently hardcoded to 1
      navigate(`/me/confirmation/1`);
    },
  });
  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
