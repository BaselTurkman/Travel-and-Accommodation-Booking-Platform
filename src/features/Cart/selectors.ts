import { RootState } from "@/store/store";

export const selectCartItems = ({ cart }: RootState) => cart;

export const selectCartItemsCount = ({ cart }: RootState) => cart.length;

export const selectIsRoomInCart =
  (roomId: number) =>
  ({ cart }: RootState) =>
    cart.some((item) => item.room.roomId === roomId);
