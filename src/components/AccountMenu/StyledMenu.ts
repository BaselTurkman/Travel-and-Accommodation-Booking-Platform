import { Menu, styled } from "@mui/material";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: theme.spacing(1.5),
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      marginLeft: -0.5,
      marginRight: theme.spacing(1),
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));