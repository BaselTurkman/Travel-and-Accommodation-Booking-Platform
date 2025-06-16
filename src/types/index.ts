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

export interface BookingPayload {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

