import { useQuery } from "@tanstack/react-query";
import { getHotelGalleryAPI } from "../API";
import { GetHotelGallery } from "../types";

const useGetHotelGalleryAPI = (hotelId: string) => {
  const { data: hotelGallery, isLoading } = useQuery<GetHotelGallery>({
    queryKey: ["hotel-gallery", hotelId],
    queryFn: () => getHotelGalleryAPI(hotelId),
  });

  return { hotelGallery: hotelGallery ?? [] , isLoading };
};

export default useGetHotelGalleryAPI;
