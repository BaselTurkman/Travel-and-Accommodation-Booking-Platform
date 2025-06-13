export interface Amenity{
    id: number,
    name: string,
    description: string
}

export interface SearchQuery {
  checkInDate?: string;
  checkOutDate?: string;
  city?: string;
  numberOfRooms: number;
  adults: number;
  children: number;
  sort?: string;
  starRate?: number;
}