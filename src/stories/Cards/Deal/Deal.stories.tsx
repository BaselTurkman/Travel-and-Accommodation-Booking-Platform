import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import Deal from "@/pages/Home/components/Deal";
import { baseDeal } from "./Constants";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/containers/PageContainer";

const meta: Meta<typeof Deal> = {
  title: "Components/Cards/Deal",
  component: Deal,
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

type Story = StoryObj<typeof Deal>;

export const Default: Story = {
  args: {
    deal: baseDeal,
  },
  render: () => {
    return (
      <Box width={450}>
        <Deal deal={baseDeal} />
      </Box>
    );
  },
};

export const HighRatedLuxuryHotel: Story = {
  args: {
    deal: {
      ...baseDeal,
      hotelStarRating: 5,
      originalRoomPrice: 480,
      finalPrice: 390,
    },
  },
  render: () => {
    const newDeal = {
      ...baseDeal,
      hotelStarRating: 5,
      originalRoomPrice: 480,
      finalPrice: 390,
    };
    return (
      <Box width={450}>
        <Deal deal={newDeal} />
      </Box>
    );
  },
};

export const LongDescription: Story = {
  args: {
    deal: {
      ...baseDeal,
      description:
        "This elegant hotel offers a truly immersive experience for guests, combining modern amenities with a touch of historic charm. Enjoy rooftop dining, personalized concierge service, and more.",
    },
  },
  render: () => {
    const newDeal = {
      ...baseDeal,
      description:
        "This elegant hotel offers a truly immersive experience for guests, combining modern amenities with a touch of historic charm. Enjoy rooftop dining, personalized concierge service, and more.",
    };
    return (
      <Box width={450}>
        <Deal deal={newDeal} />
      </Box>
    );
  },
};

export const MultiDeals: Story = {
  render: () => {
    const rooms = Array(6)
      .fill(null)
      .map((_, i) => ({
        ...baseDeal,
        hotelId: 300 + i,
      }));

    return (
      <PageContainer>
        <Grid container spacing={2}>
          {rooms.map((deal) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Deal key={deal.hotelId} deal={deal} />
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    );
  },
};
