import { createAction, createAsyncAction } from "typesafe-actions";
import { Room } from "./models";

export const setSelect = createAction("MENU/SET_SELECT")<number>();
export const setMenuItems = createAction("MENU/SET_ITEMS")<Array<string>>();
export const setMenuOpen = createAction("MENU/SET_OPEN")<boolean>();

export const loadRooms = createAsyncAction(
  "ROOMS/LOAD_REQUEST",
  "ROOMS/LOAD_SUCCESS",
  "ROOMS/LOAD_FAILURE"
)<undefined, Array<Room>, string>();
