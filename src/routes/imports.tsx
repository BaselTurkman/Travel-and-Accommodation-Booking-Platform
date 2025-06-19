import { safeLazy } from "./utils/safeLazy";

export const Login = safeLazy(() => import("@/pages/Login"));
export const Home = safeLazy(() => import("@/pages/Home"));
export const SearchResult = safeLazy(() => import("@/pages/SearchResult"));
export const HotelDetails = safeLazy(() => import("@/pages/HotelDetails"));
export const Checkout = safeLazy(() => import("@/pages/Checkout"));
export const ConfirmationBooking = safeLazy(() => import("@/pages/ConfirmationBooking"))
export const Profile = safeLazy(() => import("@/pages/Profile"))
export const Cities = safeLazy(() => import("@/pages/Admin/Cities"))