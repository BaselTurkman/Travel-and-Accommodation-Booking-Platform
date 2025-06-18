import PageContainer from "@/containers/PageContainer";
import { Box, Divider, Stack, Typography } from "@mui/material";
import CitiesContainer from "./components/CitiesContainer";
import SearchCity from "./components/SearchCity";

const Cities = () => {
  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Cities
          </Typography>
          <SearchCity />
        </Box>
        <Divider />
        <CitiesContainer />
      </Stack>
    </PageContainer>
  );
};

export default Cities;
