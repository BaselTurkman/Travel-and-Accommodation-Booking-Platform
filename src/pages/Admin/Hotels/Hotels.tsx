import PageContainer from "@/containers/PageContainer";
import HotelsContainer from "./component/HotelsContainer";
import { Stack } from "@mui/material";

const Hotels = () => {
  return (
    <PageContainer>
      <Stack>
        <HotelsContainer/>
      </Stack>
    </PageContainer>
  );
};

export default Hotels;
