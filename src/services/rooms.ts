import { Room } from "RoomModels";
import { rooms as roomsMock } from "../features/rooms/mock";
const rooms: Array<Room> = roomsMock;

export function fetchRooms(): Promise<Array<Room>> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(rooms);
    }, 1000);
  });
}
