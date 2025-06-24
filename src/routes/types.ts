import { UserRole } from "@/types/User";

export interface PageAccessRight {
  roles: UserRole[];
}

export type PageAccessName =
  | "Home"
  | "SearchResult"
  | "HotelDetails"
  | "ConfirmationBooking"
  | "Checkout"
  | "Profile"
  | "Hotels"
  | "Cities"
  | "Rooms";

export interface RouteConfigs {
  title: string;
  pageAccessName?: PageAccessName;
}
