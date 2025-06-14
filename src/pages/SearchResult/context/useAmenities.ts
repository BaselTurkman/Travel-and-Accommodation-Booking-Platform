import { useContext } from "react";
import { AmenitiesContext } from "./AmenitiesContext";

export const useAmenities = () => {
  const context = useContext(AmenitiesContext);
  if (!context) throw new Error("useAmenities must be used within AmenitiesProvider");
  return context;
};
