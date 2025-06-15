import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCart } from "./constants";
import { AddToCartPayload, RemoveFromCart } from "./types";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state = [...state, action.payload];
      return state;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCart>) => {
      state = state.filter(
        (room) => room.room.roomNumber !== action.payload.roomNumber
      );
      return state;
    },
    clearCart: (state) => {
      state = initialCart;
      return state;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
