import { useQuery } from "@tanstack/react-query";
import { getAmenitiesAPI } from "../API";
import { GetAmenitiesAPI } from "../types";

const useGetAmenitiesAPI = () => {
  const {
    data: amenities,
    isLoading,
    isError,
    refetch,
  } = useQuery<GetAmenitiesAPI>({
    queryKey: ["amenities"],
    queryFn: () => getAmenitiesAPI(),
  });

  return { amenities: amenities ?? [], isLoading, isError, refetch };
};

export default useGetAmenitiesAPI;
