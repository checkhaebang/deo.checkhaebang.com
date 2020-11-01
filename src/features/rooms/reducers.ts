import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { setSelect, setMenuItems, setMenuOpen } from "./actions";

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

const roomsReducer = combineReducers({
  select,
  menu_items,
  is_menu_open,
});

export default roomsReducer;
export type RoomsState = ReturnType<typeof roomsReducer>;
