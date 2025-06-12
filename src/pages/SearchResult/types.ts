import { Amenities } from "@/types";

export interface SearchResult{
    hotelId: number,
    hotelName: string,
    starRating: number,
    latitude: number,
    longitude: number,
    roomPrice: number,
    roomType: string,
    cityName: string,
    roomPhotoUrl: string,
    discount: number,
    amenities: Amenities[]
}

export type GetSearchResultAPI = Array<SearchResult>;