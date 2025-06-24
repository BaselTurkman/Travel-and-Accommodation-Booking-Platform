import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHotelRoomAPI } from "../API";
import { HotelRoomPayload } from "@/types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useAddHotelRoomAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addHotelRoom, isPending } = useMutation({
    mutationFn: (hotel: HotelRoomPayload) => addHotelRoomAPI(hotel),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Room Added Successfully." });
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });

  return {
    addHotelRoom,
    isPending,
  };
};

export default useAddHotelRoomAPI;
