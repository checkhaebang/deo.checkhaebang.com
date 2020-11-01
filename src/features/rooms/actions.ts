import { createAction } from "typesafe-actions";

export const setSelect = createAction("MENU/SET_SELECT")<number>();
export const setMenuItems = createAction("MENU/SET_ITEMS")<Array<string>>();
export const setMenuOpen = createAction("MENU/SET_OPEN")<boolean>();
