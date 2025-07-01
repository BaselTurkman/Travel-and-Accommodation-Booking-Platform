import type { Meta, StoryObj } from "@storybook/react-vite";
import HotelRoom from "@/components/HotelRoom";
import Providers from "@/Providers";
import { sampleRoom } from "./constants";
import PageContainer from "@/containers/PageContainer";
import { Box, Grid } from "@mui/material";
import BaseCardSkeleton from "@/components/Skeletons/BaseCardSkeleton";

const meta: Meta<typeof HotelRoom> = {
  title: "Components/Cards/HotelRoom",
  component: HotelRoom,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Providers>
        <PageContainer>
          <Story />
        </PageContainer>
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HotelRoom>;

export const Default: Story = {
  args: {
    room: sampleRoom,
    actionButtons: false,
  },
  render: () => {
    return (
      <Box width={400}>
        <HotelRoom room={sampleRoom} />
      </Box>
    );
  },
};

export const WithActionButtons: Story = {
  args: {
    room: sampleRoom,
    actionButtons: true,
  },
  render: () => {
    return (
      <Box width={400}>
        <HotelRoom room={sampleRoom} actionButtons={true} />
      </Box>
    );
  },
};

export const RoomWithoutAmenities: Story = {
  args: {
    room: {
      ...sampleRoom,
      roomAmenities: [],
    },
    actionButtons: false,
  },
  render: () => {
    return (
      <Box width={400}>
        <HotelRoom room={{ ...sampleRoom, roomAmenities: [] }} />
      </Box>
    );
  },
};

export const MultiRoom: Story = {
  render: () => {
    const rooms = Array(6)
      .fill(null)
      .map((_, i) => ({
        ...sampleRoom,
        roomId: 100 + i + 1,
      }));

    return (
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={room.roomId}>
            <HotelRoom key={room.roomId} room={room} actionButtons={false} />
          </Grid>
        ))}
      </Grid>
    );
  },
};

export const LoadingHotelRoom: Story = {
  render: () => {
    return (
      <Grid container spacing={2}>
        <BaseCardSkeleton />
      </Grid>
    );
  },
};
