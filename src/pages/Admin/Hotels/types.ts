import { HotelInformation, Room } from "@/types";

export interface Hotel extends HotelInformation {
  id: number;
  hotelType: string;
  rooms: Room[];
  availableRooms: number;
}

export type GetHotels = Array<Hotel>;

export interface HotelPayload {
  id: number
  hotelName: string;
  hotelType: string;
  latitude: number;
  longitude: number;
  starRating: number;
  description: string;
}