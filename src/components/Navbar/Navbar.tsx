import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { selectCartItemsCount } from "@/features/Cart";
import AccountMenu from "../AccountMenu";

export const Navbar = () => {
  const navigate = useNavigate();
  const cartItemCount = useAppSelector(selectCartItemsCount);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mr: 2 }}
            >
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
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
