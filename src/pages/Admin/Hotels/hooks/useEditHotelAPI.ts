import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHotelAPI } from "../API";
import { HotelPayload } from "../types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useEditHotelAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: editHotel, isPending } = useMutation({
    mutationFn: (hotel: HotelPayload) => editHotelAPI(hotel),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Edited Successfully." });
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
  });

  return {
    editHotel,
    isPending,
  };
};

export default useEditHotelAPI;
