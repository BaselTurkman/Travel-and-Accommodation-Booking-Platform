import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import BlockUI from "@/containers/BlockUI";
import useSession from "@/hooks/useSession";
import { useSnackBar } from "@/hooks/useSnackBar";

const AuthRoute: FC = () => {
  const { isUpdatingSession, isLoggedIn } = useSession();
  const location = useLocation();
  const {showWarningSnackbar} = useSnackBar()

  if (isUpdatingSession) return <BlockUI />;

  if (!isLoggedIn) {
    showWarningSnackbar({message: "Access denied! Please log in first."})
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default AuthRoute;