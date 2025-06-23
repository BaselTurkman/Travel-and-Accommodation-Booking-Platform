import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHotelRoomAPI } from "../API";
import { HotelRoomPayload } from "@/types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useEditHotelRoomAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: editHotelRoom, isPending } = useMutation({
    mutationFn: (hotel: HotelRoomPayload) => editHotelRoomAPI(hotel),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Room Edited Successfully." });
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });

  return {
    editHotelRoom,
    isPending,
  };
};

export default useEditHotelRoomAPI;
