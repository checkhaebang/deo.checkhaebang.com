import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { loadChecklist } from "./actions";
import { checklist as checklistMock } from "./mock";

export const isLoading = createReducer(true as boolean)
  .handleAction([loadChecklist.request], () => true)
  .handleAction([loadChecklist.success, loadChecklist.failure], () => false);

export const questions = createReducer(checklistMock).handleAction(
  loadChecklist.success,
  (_, action) => action.payload
);

const checklistReducer = combineReducers({ isLoading, questions });

export default checklistReducer;
export type ChecklistState = ReturnType<typeof checklistReducer>;
