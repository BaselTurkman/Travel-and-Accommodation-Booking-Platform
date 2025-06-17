import { lazy } from "react";

export const Login = lazy(() => import("@/pages/Login"));
export const Home = lazy(() => import("@/pages/Home"));
export const SearchResult = lazy(() => import("@/pages/SearchResult"));
export const HotelDetails = lazy(() => import("@/pages/HotelDetails"));
export const Checkout = lazy(() => import("@/pages/Checkout"));
export const ConfirmationBooking = lazy(() => import("@/pages/ConfirmationBooking"))
export const Profile = lazy(() => import("@/pages/Profile"))