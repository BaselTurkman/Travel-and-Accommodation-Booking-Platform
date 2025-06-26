import { RouteObject } from "react-router-dom";
import { AccessDenied, Login, Unauthenticated } from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: "access-denied",
      element: <AccessDenied />,
    },
    {
      path: "unauthenticated",
      element: <Unauthenticated />,
    },
  ],
};

export default publicRoutes;
