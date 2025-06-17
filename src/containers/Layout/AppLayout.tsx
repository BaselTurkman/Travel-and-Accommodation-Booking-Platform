import Navbar from "@/components/Navbar";
import useSession from "@/hooks/useSession";
import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import BlockUI from "../BlockUI";
import Footer from "@/components/Footer";

const AppLayout: FC = () => {
  const { isUpdatingSession } = useSession();

  if (isUpdatingSession) return <BlockUI />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f0f4f8,rgb(233, 238, 248))", // or your desired gradient
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          px: 3,
          py: 4,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
