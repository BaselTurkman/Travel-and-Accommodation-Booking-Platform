import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import BlockUI from "@/containers/BlockUI";

const AppRoutes = () => {
  const appRoutes = useRoutes([PublicRoutes, PrivateRoutes]);

  return <Suspense fallback={<BlockUI />}>{appRoutes}</Suspense>;
};

export default AppRoutes;
