import { Room } from "@/types";

export type GetHotelRooms = Array<Room>;

export interface GetHotelRoomsResponse {
    data: GetHotelRooms;
    pageSize: number;
    pageNumber: number;
    totalPages: number
}