import PageContainer from "@/containers/PageContainer";
import HotelsContainer from "./component/HotelsContainer";
import { Box, Stack, Typography } from "@mui/material";
import AddHotelButton from "./component/AddHotelButton";

const Hotels = () => {
  return (
    <PageContainer>
      <Stack gap={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Hotels
          </Typography>
          <AddHotelButton />
        </Box>
        <HotelsContainer/>
      </Stack>
    </PageContainer>
  );
};

export default Hotels;
