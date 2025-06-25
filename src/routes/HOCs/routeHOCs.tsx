import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import { RouteConfigs } from "../types";
import { selectUserRole } from "@/features/User";
import { useAppSelector } from "@/store/store";
import pagesAccessRights from "../pagesAccessRights";

const routeHOC =
  <ComponentProps extends object>(configs: RouteConfigs) =>
  (Component: ComponentType<ComponentProps>) => {
    const { pageAccessName, title } = configs;
    document.title = title;

    const WrappedComponent: FC<ComponentProps> = (props) => {
      const userRole = useAppSelector(selectUserRole);

      if (!pageAccessName) return <Component {...props} />;

      const pageAccessRight = pagesAccessRights.get(pageAccessName);

      if (!pageAccessRight) return <Component {...props} />;

      const hasAccess = pageAccessRight.roles.includes(userRole);

      if (!hasAccess) {
        return <Navigate to="/access-denied" replace={true} />;
      }

      return <Component {...props} />;
    };

    return WrappedComponent;
  };

export default routeHOC;
