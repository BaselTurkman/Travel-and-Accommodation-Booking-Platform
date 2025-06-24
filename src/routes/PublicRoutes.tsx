import { RouteObject } from "react-router-dom";
import { AccessDenied, Login } from "./imports";

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
  ],
};

export default publicRoutes;
