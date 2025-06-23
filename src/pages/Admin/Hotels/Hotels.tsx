import PageContainer from "@/containers/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";
import AddHotelButton from "./component/AddHotelButton";
import { useState } from "react";
import SearchHotel from "./component/SearchHotel";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import HotelsContainer from "./component/HotelsContainer";
import PageLimitSelector from "@/components/PageLimitSelector";

const Hotels = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
  });

  const handleSearchChange = (searchQuery: string) => {
    setSearchParams((prev) => ({
      ...prev,
      searchQuery,
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
            Hotels
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
        <HotelsContainer
          searchParams={searchParams}
          onPageChange={handlePageChange}
        />
      </Stack>
    </PageContainer>
  );
};

export default Hotels;
