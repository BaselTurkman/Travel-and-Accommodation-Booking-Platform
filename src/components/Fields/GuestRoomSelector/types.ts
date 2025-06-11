export interface GuestRoomSelector {
  adults: number;
  children: number;
  rooms: number;
  setAdults: (v: number) => void;
  setChildren: (v: number) => void;
  setRooms: (v: number) => void;
}

export interface GuestRoomSelectorProps {
    guestRoomSelector: GuestRoomSelector;
}