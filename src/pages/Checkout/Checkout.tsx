import PageContainer from "@/containers/PageContainer";
import { Stack, Typography, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartItems from "./components/CartItems";
import UserInformation from "./components/UserInformation";
import CheckoutButton from "./components/CheckoutButton";
import { useAppSelector } from "@/store/store";
import { selectCartItemsCount } from "@/features/Cart";

const Checkout = () => {
  const cartLength = useAppSelector(selectCartItemsCount);

  return (
    <PageContainer>
      <Stack gap={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <ShoppingCartCheckoutIcon color="primary" fontSize="large" />
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Checkout
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Review your items and provide information before confirming your
              booking.
            </Typography>
          </Box>
        </Box>
        <UserInformation />
        <CartItems />
        {cartLength !== 0 && <CheckoutButton />}
      </Stack>
    </PageContainer>
  );
};

export default Checkout;
