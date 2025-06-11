import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/features/User";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Tooltip } from "@mui/material";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking
          </Typography>
          <Tooltip title="Log out" arrow>
            <Button color="error" variant="text" onClick={handleLogout}>
              <LogOut />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
