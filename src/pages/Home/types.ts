export interface Deal {
  hotelId: number;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
  title: string;
  description: string;
  roomPhotoUrl: string;
}

export type GetFeaturesDealsResponse = Array<Deal>;

export interface RecentHotel {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: string;
  priceUpperBound: string;
}

export type GetRecentHotel = Array<RecentHotel>

export interface TrendingDestination{
  cityId: number,
  cityName: string,
  countryName: string,
  description: string,
  thumbnailUrl: string
}

export type GetTrendingDestination = Array<TrendingDestination>
