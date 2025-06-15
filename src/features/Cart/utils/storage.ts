import { Cart } from "../types";

export const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveCartToStorage = (cart: Cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {
    /* empty */
  }
};
