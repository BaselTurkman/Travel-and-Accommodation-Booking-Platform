import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCityAPI } from "../API";
import { City } from "../types";
import { useSnackBar } from "@/hooks/useSnackBar";

const useEditCityAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: editCity, isPending } = useMutation({
    mutationFn: (city: City) => editCityAPI(city),
    onSuccess: () => {
      showSuccessSnackbar({ message: "City edited successfully." });
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });

  return {
    editCity,
    isPending,
  };
};

export default useEditCityAPI;
