import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { loadChecklistAsync } from "./actions";
import { checklist as checklistMock } from "./mock";

export const isLoading = createReducer(false as boolean)
  .handleAction([loadChecklistAsync.request], () => true)
  .handleAction(
    [loadChecklistAsync.success, loadChecklistAsync.failure],
    () => false
  );

export const checklist = createReducer(checklistMock).handleAction(
  loadChecklistAsync.success,
  (_, action) => action.payload
);

const checklistReducer = combineReducers({ isLoading, checklist });

export default checklistReducer;
export type ChecklistState = ReturnType<typeof checklistReducer>;
