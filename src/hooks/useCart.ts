import { addToCart, clearCart, removeFromCart, selectCartItems } from "@/features/Cart";
import { AddToCartPayload, RemoveFromCart } from "@/features/Cart/types";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);

  const handleAddToCart = (payload: AddToCartPayload) => {
    dispatch(addToCart(payload));
  };

  const handleRemoveFromCart = (payload: RemoveFromCart) => {
    dispatch(removeFromCart(payload));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return {
    cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    clearCart: handleClearCart,
  };
};
