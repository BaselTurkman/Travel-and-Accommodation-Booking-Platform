import PageContainer from "@/containers/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import HotelRoomsContainer from "./component/HotelRoomsContainer";
import PageLimitSelector from "@/components/PageLimitSelector";
import AddHotelRoomButton from "./component/AddHotelRoomButton";
import routeHOC from "@/routes/HOCs/routeHOCs";

const HotelRooms = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
  });

  const handleLimitChange = (pageSize: number) => {
    setSearchParams((prev) => ({
      ...prev,
      pageSize,
      pageNumber: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => ({
      ...prev,
      pageNumber: page,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageContainer>
      <Stack gap={2}>
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
            Rooms
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <PageLimitSelector
              value={searchParams.pageSize}
              onChange={handleLimitChange}
            />
            <AddHotelRoomButton />
          </Stack>
        </Stack>
        <Divider />
        <HotelRoomsContainer
          onPageChange={handlePageChange}
          searchParams={searchParams}
        />
      </Stack>
    </PageContainer>
  );
};

const HotelRoomsWithRoute = routeHOC({
  title: "HotelRooms",
  pageAccessName: "Rooms",
})(HotelRooms);

export default HotelRoomsWithRoute;
