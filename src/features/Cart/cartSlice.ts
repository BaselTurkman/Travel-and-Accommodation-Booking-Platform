import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartPayload, RemoveFromCart } from "./types";
import { Cart } from "./types";

const initialCart: Cart = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const updatedCart = [...state, action.payload];
      return updatedCart;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCart>) => {
      const updatedCart = state.filter(
        (room) => room.room.roomNumber !== action.payload.roomNumber
      );
      return updatedCart;
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
