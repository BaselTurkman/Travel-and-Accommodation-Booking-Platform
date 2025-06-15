import { Room } from "@/types";

export interface CartItem {
  room: Room;
}

export type Cart = Array<CartItem>;

export type AddToCartPayload = CartItem;

export interface RemoveFromCart {
  roomNumber: number;
}
