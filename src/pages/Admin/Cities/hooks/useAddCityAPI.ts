import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCityAPI } from "../API";
import { CityPayload } from "../types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useAddCityAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: (city: CityPayload) => addCityAPI(city),
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Added successfully." });
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });

  return {
    addCity,
    isPending,
  };
};

export default useAddCityAPI;
