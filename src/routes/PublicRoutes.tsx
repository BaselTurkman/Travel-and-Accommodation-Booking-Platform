import { RouteObject } from "react-router-dom";
import { Login } from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login />,
    },
  ],
};

export default publicRoutes;
