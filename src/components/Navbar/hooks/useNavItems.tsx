import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { selectUserRole } from "@/features/User";
import { useAppSelector } from "@/store/store";
import { NavItem } from "@/types";

export const useNavItems = () => {
  const userRole = useAppSelector(selectUserRole);
  const isUser = userRole === "User"
  const isAdmin = userRole === "Admin"

  const navItems: NavItem[] = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/me",
      isVisible: isUser,
    },
    {
      text: "Search",
      icon: <SearchIcon />,
      path: "/me/search-result",
      isVisible: isUser,
    },
    {
      text: "Cities",
      icon: <LocationCityIcon />,
      path: "/me/cities",
      isVisible: isAdmin,
    },
    {
      text: "Hotels",
      icon: <ApartmentIcon />,
      path: "/me/hotels",
      isVisible: isAdmin,
    },
    {
      text: "Rooms",
      icon: <MeetingRoomIcon />,
      path: "/me/rooms",
      isVisible: isAdmin,
    },
  ];

  return navItems.filter((item) => item.isVisible);
};
