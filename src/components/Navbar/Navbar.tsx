import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { logout } from "@/features/User";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Tooltip } from "@mui/material";
import { selectCartItemsCount } from "@/features/Cart";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const cartItemCount = useAppSelector(selectCartItemsCount);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("/me")}
            sx={{ fontWeight: "bold", mx: 1 }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/me/search-result")}
            sx={{ fontWeight: "bold", mx: 1 }}
          >
            Search
          </Button>
          <Tooltip title="Cart" arrow>
            <IconButton
              color="inherit"
              onClick={() => navigate("/me/checkout")}
            >
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Tooltip>

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
