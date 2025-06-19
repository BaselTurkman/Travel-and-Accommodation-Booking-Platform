import { useGetCitiesAPI } from "../hooks/useGetCitiesAPI";
import { Grid } from "@mui/material";
import CityCard from "./CityCard";
import CityCardSkeleton from "@/components/Skeletons/CityCardSkeleton/CityCardSkeleton";
import { useState } from "react";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";

import CityFormDialog from "./CityFormDialog"; // Import the form dialog
import { City } from "../types";
import useEditCityAPI from "../hooks/useEditCityAPI";

const CitiesContainer = () => {
  const { cities, isLoading, isError, refetch } = useGetCitiesAPI();
  const { editCity, isPending } = useEditCityAPI();
  const [retryCount, setRetryCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };

  const handleEdit = (city: City) => {
    setSelectedCity(city);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedCity(null);
    setOpenDialog(false);
  };

  const handleSubmit = async (values: City) => {
    editCity(values);
    console.log("Form submitted with values", values);
    handleCloseDialog();
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
      <CityCard city={city} onEdit={handleEdit} />
    </Grid>
  ));

  return (
    <>
      <Grid container spacing={2}>
        {isLoading ? <CityCardSkeleton /> : renderCities}
      </Grid>

      {selectedCity && (
        <CityFormDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          initialValues={selectedCity}
          onSubmit={handleSubmit}
          isPending={isPending}
          title="Edit City"
          formType="edit"
        />
      )}
    </>
  );
};

export default CitiesContainer;
