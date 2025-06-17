import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Divider,
} from "@mui/material";
import useGetAmenitiesAPI from "../hooks/useGetAmenitiesAPI";
import { useAmenities } from "../context/useAmenities";
import FilterAmenitiesSkeleton from "@/components/Skeletons/FilterAmenitiesSkeleton";
import { MAX_RETRIES } from "@/constants";
import { useState } from "react";
import RequestErrorFallback from "@/components/RequestErrorFallback";

const FilterAmenities = () => {
  const { amenities, isLoading, isError, refetch } = useGetAmenitiesAPI();
  const { selectedAmenities, toggleAmenity, selectAll, clearAll } =
    useAmenities();
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  const isAmenitySelected = (name: string) =>
    selectedAmenities.some((a) => a.name === name);

  const handleSelectAll = () => {
    const allSelected = selectedAmenities.length === amenities.length;
    if (allSelected) {
      clearAll();
    } else {
      selectAll(amenities);
    }
  };

  const allChecked = selectedAmenities.length === amenities.length;
  const someChecked = selectedAmenities.length > 0 && !allChecked;

  if (isLoading) {
    return <FilterAmenitiesSkeleton />;
  }

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filter by Amenities
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={handleSelectAll}
            />
          }
          label="All"
        />
        {amenities.map((amenity) => (
          <FormControlLabel
            key={amenity.id}
            control={
              <Checkbox
                checked={isAmenitySelected(amenity.name)}
                onChange={() => toggleAmenity(amenity)}
              />
            }
            label={amenity.name}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default FilterAmenities;
