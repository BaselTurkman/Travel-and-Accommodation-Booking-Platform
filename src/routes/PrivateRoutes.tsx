import AppLayout from "@/containers/Layout";
import { RouteObject } from "react-router-dom";
import {
  Checkout,
  ConfirmationBooking,
  Home,
  HotelDetails,
  SearchResult,
} from "./imports";
import AuthRoute from "./AuthRoute";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search-result",
          element: <SearchResult />,
        },
        {
          path: "hotel/:hotelId",
          element: <HotelDetails />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "confirmation/:bookingId",
          element: <ConfirmationBooking />,
        },
      ],
    },
  ],
};

export default privateRoutes;
