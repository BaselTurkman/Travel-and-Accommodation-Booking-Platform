import { useMutation } from "@tanstack/react-query";
import { addBookingAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackBar";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

const useAddBookingAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Booking Added Successfully",
      });
      //Since the response body doesn't include a booking ID, it's currently hardcoded to 1
      navigate(`/me/confirmation/1`);
      // const roomNumber = payload.roomNumber
      // setTimeout(() => removeFromCart({roomNumber}), 1000);
      
      //Since the response body doesn't include roomNumber to remove it from the cart, i will remove all the rooms :3
       setTimeout(() => clearCart(), 1000);
    },
  });
  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
