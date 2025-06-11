import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import NumericInput from "../NumericInput";
import { GuestRoomSelectorProps } from "./types";

const GuestRoomSelector = ({ guestRoomSelector }: GuestRoomSelectorProps) => {
  const { adults, children, rooms, setAdults, setChildren, setRooms } = guestRoomSelector 
   
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const summaryText = `${adults} Adult${
    adults > 1 ? "s" : ""
  }, ${children} Child${children !== 1 ? "ren" : ""}, ${rooms} Room${
    rooms > 1 ? "s" : ""
  }`;

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
    { name: "rooms", label: "Rooms", value: rooms, setter: setRooms, min: 1 },
  ];

  return (
    <Box>
      <Button variant="outlined" onClick={handleClick} sx={{ minWidth: 250 }}>
        {summaryText}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {options.map(({ name, label, value, setter, min }) => (
          <MenuItem key={name} disableRipple>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>{label}</Typography>
              <NumericInput
                name={name}
                value={value}
                min={min}
                onChange={(e) => setter(parseInt(e.target.value))}
                sx={{ width: 80, ml: 2 }}
              />
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GuestRoomSelector;
