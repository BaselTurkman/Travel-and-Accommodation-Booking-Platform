export interface Amenity {
  id: number;
  name: string;
  description: string;
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

export interface Room {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Amenity[];
  price: number;
  availability: boolean;
}

export interface HotelRoomPayload {
  roomId : number;
  roomNumber: number;
  price: number;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number
}

export interface BookingPayload {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

export interface Booking extends BookingPayload {
  bookingStatus: string;
  confirmationNumber: string;
}

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

export interface PaginationProps {
  page: number;
  pageSize: number;
}

export interface SearchParams {
  pageNumber: number;
  pageSize: number;
  searchQuery: string;
}
