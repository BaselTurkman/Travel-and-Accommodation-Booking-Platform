import PageContainer from "@/containers/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";
import AddHotelButton from "./component/AddHotelButton";
import { useState } from "react";
import SearchHotel from "./component/SearchHotel";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import HotelRoomsContainer from "./component/HotelRoomsContainer";
import PageLimitSelector from "@/components/PageLimitSelector";

const HotelRooms = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
  });

  const handleSearchChange = (searchQuery: string) => {
    setSearchParams((prev) => {
      if (prev.searchQuery === searchQuery.trim()) return prev;
      return {
        ...prev,
        searchQuery: searchQuery.trim(),
        pageNumber: 1,
      };
    });
  };

  const handleLimitChange = (pageSize: number) => {
    setSearchParams((prev) => ({
      ...prev,
      pageSize,
      pageNumber: 1,
    }));
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
            <SearchHotel onSearch={handleSearchChange} />
            <PageLimitSelector
              value={searchParams.pageSize}
              onChange={handleLimitChange}
            />
            <AddHotelButton />
          </Stack>
        </Stack>
        <Divider />
        <HotelRoomsContainer />
      </Stack>
    </PageContainer>
  );
};

export default HotelRooms;
