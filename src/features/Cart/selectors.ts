import { RootState } from "@/store/store";

export const selectCartItems = ({ cart }: RootState) => cart;

export const selectCartItemsCount = ({ cart }: RootState) => cart.length;
