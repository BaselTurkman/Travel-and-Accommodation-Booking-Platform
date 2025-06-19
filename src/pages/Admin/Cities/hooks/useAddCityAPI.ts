import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCityAPI } from "../API";
import { City } from "../types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useAddCityAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: (city: City) => addCityAPI(city),
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
