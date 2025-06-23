import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackBar } from "@/hooks/useSnackBar";
import { deleteHotelRoomAPI } from "../API";

const useDeleteHotelRoomAPI = (hotelId: number) => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deleteHotelRoom, isPending } = useMutation({
    mutationFn: () => deleteHotelRoomAPI(hotelId),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Room Deleted Successfully" });
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });

  return {
    deleteHotelRoom,
    isPending,
  };
};

export default useDeleteHotelRoomAPI;
