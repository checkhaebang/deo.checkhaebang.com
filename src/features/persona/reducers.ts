import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import {
  loadQuestionsAsync,
  postAnswersAsync,
  setCurrentIdx,
  addAnswer,
  clearAnswer,
} from "./actions";
import { questions as questionsMock } from "./mock";

export const isLoading = createReducer(false as boolean)
  .handleAction(
    [loadQuestionsAsync.request, postAnswersAsync.request],
    (state, action) => true
  )
  .handleAction(
    [
      loadQuestionsAsync.success,
      loadQuestionsAsync.failure,
      postAnswersAsync.success,
      postAnswersAsync.failure,
    ],
    (state, action) => false
  );

export const questions = createReducer(questionsMock).handleAction(
  loadQuestionsAsync.success,
  (_, action) => action.payload
);

export const currentIdx = createReducer(1).handleAction(
  setCurrentIdx,
  (_, action) => action.payload
);

export const answers = createReducer([] as Array<number>)
  .handleAction(addAnswer, (state, action) => {
    return [...state, action.payload];
  })
  .handleAction(clearAnswer, () => []);

const personaReducer = combineReducers({
  isLoading,
  questions,
  currentIdx,
  answers,
});

export default personaReducer;
export type PersonaState = ReturnType<typeof personaReducer>;
