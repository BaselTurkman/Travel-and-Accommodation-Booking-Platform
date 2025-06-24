import { PageAccessName, PageAccessRight } from "./types";

const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "Home",
    {
      roles: ["User"],
    },
  ],
  [
    "SearchResult",
    {
      roles: ["User"],
    },
  ],
  [
    "HotelDetails",
    {
      roles: ["User"],
    },
  ],
  [
    "ConfirmationBooking",
    {
      roles: ["User"],
    },
  ],
  [
    "Checkout",
    {
      roles: ["User"],
    },
  ],
  [
    "Rooms",
    {
      roles: ["Admin"],
    },
  ],
  [
    "Hotels",
    {
      roles: ["Admin"],
    },
  ],
  [
    "Cities",
    {
      roles: ["Admin"],
    },
  ],
  [
    "Profile",
    {
      roles: ["Admin", "User"],
    },
  ],
]);

export default pagesAccessRights;
