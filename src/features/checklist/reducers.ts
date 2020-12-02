import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import {
  loadChecklist,
  deleteAnswer,
  postAnswers,
  addAnswer,
  clearAnswers,
} from "./actions";
import { checklist as checklistMock } from "./mock";

export const isLoading = createReducer(true as boolean)
  .handleAction([loadChecklist.request], () => true)
  .handleAction(
    [
      loadChecklist.success,
      loadChecklist.failure,
      postAnswers.success,
      postAnswers.failure,
    ],
    () => false
  );

export const questions = createReducer(checklistMock).handleAction(
  loadChecklist.success,
  (_, action) => action.payload
);

export const answers = createReducer([] as Array<string>)
  .handleAction(addAnswer, (state, action) => {
    return [...state, action.payload];
  })
  .handleAction(deleteAnswer, (state, action) => {
    return state.filter((uid) => uid !== action.payload);
  })
  .handleAction(clearAnswers, () => []);

const checklistReducer = combineReducers({ isLoading, questions, answers });

export default checklistReducer;
export type ChecklistState = ReturnType<typeof checklistReducer>;
