import PageContainer from "@/containers/PageContainer";
import { Box, Stack, Typography } from "@mui/material";
import CitiesContainer from "./components/CitiesContainer";
import SearchCity from "./components/SearchCity";
import AddCityButton from "./components/AddCityButton";
import { useState } from "react";
import routeHOC from "@/routes/HOCs/routeHOCs";

const Cities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageContainer>
      <Stack gap={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Cities
          </Typography>
          <SearchCity onSearch={setSearchQuery} />
          <AddCityButton />
        </Box>
        <CitiesContainer searchQuery={searchQuery} />
      </Stack>
    </PageContainer>
  );
};

const CitiesWithRoute = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
})(Cities);

export default CitiesWithRoute;
