import { createContext } from "react";
import { Amenity } from "@/types";

export interface AmenitiesContextType {
  selectedAmenities: Amenity[];
  toggleAmenity: (amenity: Amenity) => void;
  selectAll: (all: Amenity[]) => void;
  clearAll: () => void;
}

export const AmenitiesContext = createContext<AmenitiesContextType | undefined>(undefined);
