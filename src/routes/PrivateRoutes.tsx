import AppLayout from "@/containers/Layout";
import { RouteObject } from "react-router-dom";
import { Home, SearchResult } from "./imports";
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
      ],
    },
  ],
};

export default privateRoutes;
