import type { Meta, StoryObj } from "@storybook/react";
import HotelRoom from "@/components/HotelRoom";
import Providers from "@/Providers";
import { sampleRoom } from "./constants";
import PageContainer from "@/containers/PageContainer";
import { Grid } from "@mui/material";

const meta: Meta<typeof HotelRoom> = {
  title: "Components/Cards/HotelRoom",
  component: HotelRoom,
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
};

export const WithActionButtons: Story = {
  args: {
    room: sampleRoom,
    actionButtons: true,
  },
};

export const RoomWithChildrenCapacityZero: Story = {
  args: {
    room: {
      ...sampleRoom,
      capacityOfChildren: 0,
    },
    actionButtons: false,
  },
};

export const RoomWithHighPrice: Story = {
  args: {
    room: {
      ...sampleRoom,
      price: 1200,
    },
    actionButtons: false,
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
};

export const RoomUnavailable: Story = {
  args: {
    room: {
      ...sampleRoom,
      availability: false,
    },
    actionButtons: false,
  },
};

export const SixRooms: Story = {
  render: () => {
    const rooms = Array(6)
      .fill(null)
      .map((_, i) => ({
        ...sampleRoom,
        roomId: 100 + i,
      }));

    return (
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HotelRoom key={room.roomId} room={room} actionButtons={false} />
          </Grid>
        ))}
      </Grid>
    );
  },
};
