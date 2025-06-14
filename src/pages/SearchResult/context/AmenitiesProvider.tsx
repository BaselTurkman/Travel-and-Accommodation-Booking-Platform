import { useState, ReactNode } from "react";
import { Amenity } from "@/types";
import { AmenitiesContext } from "./AmenitiesContext";

export const AmenitiesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);

  const toggleAmenity = (amenity: Amenity) => {
    setSelectedAmenities((prev) =>
      prev.some((a) => a.name === amenity.name)
        ? prev.filter((a) => a.name !== amenity.name)
        : [...prev, amenity]
    );
  };

  const selectAll = (all: Amenity[]) => setSelectedAmenities(all);
  const clearAll = () => setSelectedAmenities([]);

  return (
    <AmenitiesContext.Provider
      value={{ selectedAmenities, toggleAmenity, selectAll, clearAll }}
    >
      {children}
    </AmenitiesContext.Provider>
  );
};
