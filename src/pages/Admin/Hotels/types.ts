import { HotelInformation, Room } from "@/types";

export interface Hotel extends HotelInformation {
  id: number;
  hotelType: string;
  rooms: Room[];
  availableRooms: number;
}

export type GetHotels = Array<Hotel>;
