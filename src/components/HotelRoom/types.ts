import { HotelRoomPayload, Room } from "@/types";

export interface HotelRoomProps {
  room: Room;
  onEdit?: (roomPayload: HotelRoomPayload) => void;
  actionButtons?: boolean;
}

