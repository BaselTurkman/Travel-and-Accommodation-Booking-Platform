import PageContainer from "@/containers/PageContainer";
import { Stack, Typography, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartItems from "./components/CartItems";
import UserInformation from "./components/UserInformation";
import CheckoutButton from "./components/CheckoutButton";
import { useAppSelector } from "@/store/store";
import { selectCartItemsCount, selectTotalPrice } from "@/features/Cart";
import routeHOC from "@/routes/HOCs/routeHOCs";

const Checkout = () => {
  const cartLength = useAppSelector(selectCartItemsCount);
  const totalPrice = useAppSelector(selectTotalPrice);

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
        {cartLength !== 0 && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <Typography variant="h6" fontWeight="medium">
              Total Price:
            </Typography>
            <Typography variant="h6" color="success.main" fontWeight="bold">
              ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        )}
        {cartLength !== 0 && <CheckoutButton />}
      </Stack>
    </PageContainer>
  );
};

const CheckoutWithRoute = routeHOC({
  title: "Checkout",
  pageAccessName: "Checkout",
})(Checkout);

export default CheckoutWithRoute;
