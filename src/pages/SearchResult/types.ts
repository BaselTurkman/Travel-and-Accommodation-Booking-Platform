import { Amenity } from "@/types";

export interface SearchResult {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
  numberOfChildren: number;
  numberOfAdults: number;
  numberOfRooms: number;
  checkInDate: string;
  checkOutDate: string;
}

export type GetSearchResultAPI = Array<SearchResult>;

export type GetAmenitiesAPI = Array<Amenity>;
