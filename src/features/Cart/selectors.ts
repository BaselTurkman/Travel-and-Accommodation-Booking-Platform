import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Cart, CartItem } from "./types";

export const selectCartItems = ({ cart }: RootState): Cart => cart;

export const selectCartItemsCount = ({ cart }: RootState): number =>
  cart.length;

export const selectIsRoomInCart =
  (roomId: number) =>
  ({ cart }: RootState): boolean =>
    cart.some((item) => item.room.roomId === roomId);

export const selectTotalPrice = createSelector(
  selectCartItems,
  (cart: Cart) => {
    return cart.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.room.price,
      0
    );
  }
);
