import { useGetCitiesAPI } from "../hooks/useGetCitiesAPI";
import { Grid } from "@mui/material";
import CityCard from "./CityCard";
import CityCardSkeleton from "@/components/Skeletons/CityCardSkeleton/CityCardSkeleton";
import { FC, useState } from "react";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import isEqual from "fast-deep-equal";
import CityFormDialog from "./CityFormDialog";
import { City } from "../types";
import useEditCityAPI from "../hooks/useEditCityAPI";
import { useSnackBar } from "@/hooks/useSnackBar";
import { cardColors } from "../constants";
import NoItemFound from "@/components/NoItemFound";
import useRetryHandler from "@/hooks/useRetryHandler";

interface CitiesContainerProps {
  searchQuery: string;
}

const CitiesContainer: FC<CitiesContainerProps> = ({ searchQuery }) => {
  const { cities, isLoading, isError, refetch } = useGetCitiesAPI();
  const { editCity, isPending } = useEditCityAPI();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const { showWarningSnackbar } = useSnackBar();
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  const handleEdit = (city: City) => {
    setSelectedCity(city);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedCity(null);
    setOpenDialog(false);
  };

  const handleSubmit = async (values: City) => {
    if (isEqual(values, selectedCity)) {
      showWarningSnackbar({ message: "No changes were made." });
    } else {
      editCity(values);
    }
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

  const noCities = !isLoading && cities.length === 0;

  const filteredCities = !searchQuery
    ? cities
    : cities.filter((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const noSearchResults =
    !isLoading && cities.length > 0 && filteredCities.length === 0;

  const renderCities = filteredCities.map((city, index) => (
    <Grid size={{ xs: 12, sm: 6 }} key={city.id + "-" + city.name}>
      <CityCard
        city={city}
        onEdit={handleEdit}
        cardColor={cardColors[index % cardColors.length]}
      />
    </Grid>
  ));

  const citiesToRender = isLoading ? (
    <CityCardSkeleton />
  ) : noCities ? (
    <NoItemFound title="No cities available. Please add one." />
  ) : noSearchResults ? (
    <NoItemFound title="No city matches your search." />
  ) : (
    renderCities
  );

  return (
    <>
      <Grid container spacing={2}>
        {citiesToRender}
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
