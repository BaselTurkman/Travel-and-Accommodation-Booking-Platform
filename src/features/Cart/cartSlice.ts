import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartPayload, RemoveFromCart } from "./types";
import { loadCartFromStorage, saveCartToStorage } from "./utils/storage";
import { Cart } from "./types";

const initialCart: Cart = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const updatedCart = [...state, action.payload];
      saveCartToStorage(updatedCart);
      return updatedCart;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCart>) => {
      const updatedCart = state.filter(
        (room) => room.room.roomNumber !== action.payload.roomNumber
      );
      saveCartToStorage(updatedCart);
      return updatedCart;
    },
    clearCart: () => {
      saveCartToStorage([]);
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
