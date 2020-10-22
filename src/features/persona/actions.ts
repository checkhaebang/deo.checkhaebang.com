import { createAction, createAsyncAction } from "typesafe-actions";
import { PersonaQuestion } from "./models";

export const loadQuestionsAsync = createAsyncAction(
  "LOAD_QUESTIONS_REQUEST",
  "LOAD_QUESTIONS_SUCCESS",
  "LOAD_QUESTIONS_FAILURE"
)<undefined, Array<PersonaQuestion>, string>();

export const postAnswersAsync = createAsyncAction(
  "POST_QUESTIONS_REQUEST",
  "POST_QUESTIONS_SUCCESS",
  "POST_QUESTIONS_FAILURE"
)<undefined, undefined, string>();

export const setCurrentIdx = createAction("SET_CURRENT_IDX")<number>();
export const addAnswer = createAction("ADD_ANSWER", (uid: number) => uid)<
  number
>();
export const clearAnswer = createAction("CLEAR_ANSWER")<void>();
