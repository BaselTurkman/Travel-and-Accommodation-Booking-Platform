import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackBar } from "@/hooks/useSnackBar";
import { deleteHotelAPI } from "../API";

const useDeleteHotelAPI = (hotelId: number) => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deleteHotel, isPending } = useMutation({
    mutationFn: () => deleteHotelAPI(hotelId),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Deleted Successfully" });
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
  });

  return {
    deleteHotel,
    isPending,
  };
};

export default useDeleteHotelAPI;
