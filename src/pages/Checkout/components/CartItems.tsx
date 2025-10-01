import HotelRoom from "@/components/HotelRoom";
import { Grid } from "@mui/material";
import NoItemsFound from "./NoItemsFound";
import { useCart } from "@/hooks/useCart";

const CartItems = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <Grid container>
        <NoItemsFound />
      </Grid>
    );
  }

  const renderCartItems = cart.map(({ room }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={room.roomId}>
      <HotelRoom room={room} isBooking={true} />
    </Grid>
  ));
  return (
    <Grid container spacing={2}>
      {renderCartItems}
    </Grid>
  );
};

export default CartItems;
