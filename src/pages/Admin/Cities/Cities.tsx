import PageContainer from "@/containers/PageContainer";
import { Stack, Typography } from "@mui/material";
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "center" }}
          spacing={2}
          flexWrap="wrap"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign={{ xs: "center", md: "left" }}
            width={{ xs: "100%", md: "auto" }}
          >
            Cities
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <SearchCity onSearch={setSearchQuery} />
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <AddCityButton />
          </Stack>
        </Stack>
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
