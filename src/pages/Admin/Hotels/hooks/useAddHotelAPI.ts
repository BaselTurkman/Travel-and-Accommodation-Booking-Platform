import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHotelAPI } from "../API";
import { HotelPayload } from "../types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useAddHotelAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addHotel, isPending } = useMutation({
    mutationFn: (hotel: HotelPayload) => addHotelAPI(hotel),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Added Successfully." });
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
  });

  return {
    addHotel,
    isPending,
  };
};

export default useAddHotelAPI;
