import * as React from "react";
import {
  Box,
  Avatar,
  MenuItem,
  Divider,
  IconButton,
  Tooltip,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StyledMenu } from "./StyledMenu";
import { clearSession } from "@/lib/session";

const LogoutMenuItem = ({ onLogout }: { onLogout: () => void }) => {
  const theme = useTheme();
  return (
    <MenuItem onClick={onLogout}>
      <ListItemIcon>
        <LogOut fontSize="small" color={theme.palette.error.main} />
      </ListItemIcon>
      <Typography variant="inherit" color="error">
        Logout
      </Typography>
    </MenuItem>
  );
};

export const AccountMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/me/profile");
    handleClose();
  };
  const handleLogout = () => {
    clearSession();
    navigate("/", { replace: true });
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleOpen}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleProfileClick}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <LogoutMenuItem onLogout={handleLogout} />
      </StyledMenu>
    </>
  );
};

export default AccountMenu;
