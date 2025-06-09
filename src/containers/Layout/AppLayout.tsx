import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {

  return (
    <Box sx={{ transition: " 0.25s" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default AppLayout;