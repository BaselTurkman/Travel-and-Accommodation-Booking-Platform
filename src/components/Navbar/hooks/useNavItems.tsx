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

  const navItems: NavItem[] = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/me",
      isVisible: userRole === "User",
    },
    {
      text: "Search",
      icon: <SearchIcon />,
      path: "/me/search-result",
      isVisible: userRole === "User",
    },
    {
      text: "Cities",
      icon: <LocationCityIcon />,
      path: "/me/cities",
      isVisible: userRole === "Admin",
    },
    {
      text: "Hotels",
      icon: <ApartmentIcon />,
      path: "/me/hotels",
      isVisible: userRole === "Admin",
    },
    {
      text: "Rooms",
      icon: <MeetingRoomIcon />,
      path: "/me/rooms",
      isVisible: userRole === "Admin",
    },
  ];

  return navItems.filter((item) => item.isVisible);
};
