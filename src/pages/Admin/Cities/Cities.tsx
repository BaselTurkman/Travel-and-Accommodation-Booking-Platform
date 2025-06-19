import PageContainer from "@/containers/PageContainer";
import { Box, Stack, Typography } from "@mui/material";
import CitiesContainer from "./components/CitiesContainer";
import SearchCity from "./components/SearchCity";
import AddCityButton from "./components/AddCityButton";

const Cities = () => {
  
  return (
    <PageContainer>
      <Stack gap={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Cities
          </Typography>
          <SearchCity />
          <AddCityButton />
        </Box>
        <CitiesContainer />
      </Stack>
    </PageContainer>
  );
};

export default Cities;
