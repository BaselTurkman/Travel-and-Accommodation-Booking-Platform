import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import BlockUI from "@/containers/BlockUI";
import useSession from "@/hooks/useSession";

const AuthRoute: FC = () => {
  const { isUpdatingSession, isLoggedIn } = useSession();
  const location = useLocation();

  if (isUpdatingSession) return <BlockUI />;

  if (!isLoggedIn) {
    return <Navigate to="/unauthenticated" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default AuthRoute;