import { useMutation } from "@tanstack/react-query";
import { deleteCityAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackBar";

const useDeleteCityAPI = (cityId: number) => {
  const { showSuccessSnackbar } = useSnackBar();

  const { mutate: deleteCity, isPending } = useMutation({
    mutationFn: () => deleteCityAPI(cityId),
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Deleted Successfully" });
    },
  });

  return {
    deleteCity,
    isPending,
  };
};

export default useDeleteCityAPI;