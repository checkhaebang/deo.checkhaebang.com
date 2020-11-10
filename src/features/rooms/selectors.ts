import { RoomsState } from "./reducers";

export const getSelect = (state: RoomsState): number => state.select;
export const getMenuItems = (state: RoomsState): Array<string> =>
  state.menu_items;
export const isMenuOpen = (state: RoomsState): boolean => state.is_menu_open;
