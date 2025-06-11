import { SearchQuery } from "./types";

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export const initialValues: SearchQuery = {
  checkInDate: today.toISOString().split("T")[0],
  checkOutDate: tomorrow.toISOString().split("T")[0],
  city: "",
  numberOfRooms: 1,
  adults: 2,
  children: 0,
  sort: "",
};
