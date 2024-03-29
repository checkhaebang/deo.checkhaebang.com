import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import {
  setSelect,
  setMenuItems,
  setMenuOpen,
  loadRooms,
  deleteRoom,
} from "./actions";
import { Room } from "./models";

export const isLoading = createReducer(true as boolean)
  .handleAction([loadRooms.request, deleteRoom.request], () => true)
  .handleAction([loadRooms.success, loadRooms.failure], () => false)
  .handleAction([deleteRoom.success, deleteRoom.failure], () => false);

export const select = createReducer(0 as number).handleAction(
  setSelect,
  (_, action) => action.payload
);

export const menu_items = createReducer([
  "방보는중",
  "방계약전",
  "이사 전",
] as Array<string>).handleAction(setMenuItems, (_, action) => action.payload);

export const is_menu_open = createReducer(false as boolean).handleAction(
  setMenuOpen,
  (_, action) => action.payload
);

export const rooms = createReducer([] as Array<Room>)
  .handleAction(loadRooms.success, (_, action) => action.payload)
  .handleAction(deleteRoom.success, (state, action) =>
    state.filter((room) => room.uid !== action.payload.uid)
  );

const roomsReducer = combineReducers({
  isLoading,
  select,
  menu_items,
  is_menu_open,
  rooms,
});

export default roomsReducer;
export type RoomsState = ReturnType<typeof roomsReducer>;
