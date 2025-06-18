import { useGetCitiesAPI } from "../hooks/useGetCitiesAPI";
import { Grid } from "@mui/material";
import CityCard from "./CityCard";
import CityCardSkeleton from "@/components/Skeletons/CityCardSkeleton/CityCardSkeleton";
import { useState } from "react";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";

const CitiesContainer = () => {
  const { cities, isLoading, isError, refetch } = useGetCitiesAPI();
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

  const renderCities = cities.map((city) => (
    <Grid size={{ xs: 12, sm: 6 }} key={city.id + "-" + city.name}>
      <CityCard city={city} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {isLoading ? <CityCardSkeleton /> : renderCities}
    </Grid>
  );
};

export default CitiesContainer;
