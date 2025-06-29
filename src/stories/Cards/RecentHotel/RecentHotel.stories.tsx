import Hotel from "@/pages/Home/components/Hotel";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { baseHotel } from "./constants";
import PageContainer from "@/containers/PageContainer";
import { Box, Grid } from "@mui/material";

const meta: Meta<typeof Hotel> = {
  title: "Components/Cards/RecentHotel",
  component: Hotel,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hotel>;

export const Default: Story = {
  args: {
    hotel: baseHotel,
  },
  render: () => {
    return (
      <Box width={450}>
        <Hotel hotel={baseHotel} />
      </Box>
    );
  },
};

export const DiscountedHotel: Story = {
  args: {
    hotel: {
      ...baseHotel,
      priceLowerBound: "95",
      priceUpperBound: "130",
    },
  },
  render: () => {
    const newHotel = {
      ...baseHotel,
      priceLowerBound: "95",
      priceUpperBound: "130",
    };
    return (
      <Box width={450}>
        <Hotel hotel={newHotel} />
      </Box>
    );
  },
};

export const LuxuryHotel: Story = {
  args: {
    hotel: {
      ...baseHotel,
      hotelName: "The Royal Suites",
      cityName: "Dubai",
      starRating: 5,
      priceLowerBound: "460",
      priceUpperBound: "460",
      visitDate: "2025-06-01",
    },
  },
  render: () => {
    const newHotel = {
      ...baseHotel,
      hotelName: "The Royal Suites",
      cityName: "Dubai",
      starRating: 5,
      priceLowerBound: "460",
      priceUpperBound: "460",
      visitDate: "2025-06-01",
    };
    return (
      <Box width={450}>
        <Hotel hotel={newHotel} />
      </Box>
    );
  },
};

export const MultiHotels: Story = {
  render: () => {
    const rooms = Array(6)
      .fill(null)
      .map((_, i) => ({
        ...baseHotel,
        hotelId: 300 + i,
      }));

    return (
      <PageContainer>
        <Grid container spacing={2}>
          {rooms.map((hotel) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Hotel key={hotel.hotelId} hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    );
  },
};
