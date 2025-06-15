import HotelRoom from "@/components/HotelRoom";
import { selectCartItems } from "@/features/Cart";
import { useAppSelector } from "@/store/store";
import { Grid } from "@mui/material";
import NoItemsFound from "./NoItemsFound";

const CartItems = () => {
  const rooms = useAppSelector(selectCartItems);

  if (rooms.length === 0) {
    return (
      <Grid container>
        <NoItemsFound />
      </Grid>
    );
  }

  const renderCartItems = rooms.map(({ room }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={room.roomId}>
      <HotelRoom room={room} />
    </Grid>
  ));
  return (
    <Grid container spacing={2}>
      {renderCartItems}
    </Grid>
  );
};

export default CartItems;
