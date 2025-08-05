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
import RequestErrorFallback from "@/components/RequestErrorFallback";
import useRetryHandler from "@/hooks/useRetryHandler";
import { MAX_RETRIES } from "@/constants";

const FilterAmenities = () => {
  const { amenities, isLoading, isError, refetch } = useGetAmenitiesAPI();
  const { selectedAmenities, toggleAmenity } = useAmenities();
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  const isAmenitySelected = (name: string) =>
    selectedAmenities.some((a) => a.name === name);

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  if (isLoading) return <FilterAmenitiesSkeleton />;

  const renderAmenities = amenities.map((amenity) => (
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
  ));

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Amenities
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <FormGroup>{renderAmenities}</FormGroup>
    </Paper>
  );
};

export default FilterAmenities;
