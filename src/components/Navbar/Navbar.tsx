import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/store";
import { selectCartItemsCount } from "@/features/Cart";
import AccountMenu from "../AccountMenu";
export const Navbar = () => {
  const navigate = useNavigate();
  const cartItemCount = useAppSelector(selectCartItemsCount);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/me" },
    { text: "Search", icon: <SearchIcon />, path: "/me/search-result" },
    {
      text: "Cart",
      icon: (
        <Badge badgeContent={cartItemCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      ),
      path: "/me/checkout",
    },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info" sx={{ borderRadius: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              Booking
            </Typography>
            {!isMobile && (
              <>
                <Button
                  color="inherit"
                  onClick={() => navigate("/me")}
                  sx={{ fontWeight: "bold", mx: 1 }}
                  startIcon={<HomeIcon />}
                  size="large"
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/me/search-result")}
                  sx={{ fontWeight: "bold", mx: 1 }}
                  startIcon={<SearchIcon />}
                  size="large"
                >
                  Search
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Tooltip title="Cart" arrow>
                <IconButton
                  color="inherit"
                  onClick={() => navigate("/me/checkout")}
                  sx={{ mr: 1 }}
                >
                  <Badge badgeContent={cartItemCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}
            <AccountMenu />
          </Box>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
