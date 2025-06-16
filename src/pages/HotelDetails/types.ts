import { Amenity, Room } from "@/types";

export interface HotelInformation {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
}

export interface HotelReview {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}

export interface Gallery {
  id: number;
  url: string;
}

export type GetHotelReviews = Array<HotelReview>;

export type GetAvailableRooms = Array<Room>;

export type GetHotelGallery = Array<Gallery>;
