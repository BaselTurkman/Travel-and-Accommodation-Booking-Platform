import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { GuestRoomSelectorProps } from "./types";
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HotelIcon from "@mui/icons-material/Hotel";
import NumericCounter from "../NumericCounter";

const GuestRoomSelector = ({ guestRoomSelector }: GuestRoomSelectorProps) => {
  const { adults, children, rooms, setAdults, setChildren, setRooms } =
    guestRoomSelector;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const options = [
    {
      name: "adults",
      label: "Adults",
      value: adults,
      setter: setAdults,
      min: 1,
    },
    {
      name: "children",
      label: "Children",
      value: children,
      setter: setChildren,
      min: 0,
    },
    { name: "numberOfRooms", label: "Rooms", value: rooms, setter: setRooms, min: 1 },
  ];

  return (
    <Box>
      <Button variant="text" onClick={handleClick} sx={{ minWidth: 320 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <PersonIcon fontSize="small" />
          <Typography variant="body2">
            {adults} Adult{adults > 1 ? "s" : ""}
          </Typography>
          <ChildCareIcon fontSize="small" />
          <Typography variant="body2">
            {children} Child{children !== 1 ? "ren" : ""}
          </Typography>
          <HotelIcon fontSize="small" />
          <Typography variant="body2">
            {rooms} Room{rooms > 1 ? "s" : ""}
          </Typography>
        </Box>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {options.map(({ name, label, min }) => (
          <MenuItem key={name} disableRipple>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>{label}</Typography>
              <NumericCounter name={name} min={min} />
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GuestRoomSelector;
