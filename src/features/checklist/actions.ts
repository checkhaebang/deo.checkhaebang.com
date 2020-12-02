import { createAsyncAction, createAction } from "typesafe-actions";
import { CheckQuestion, CheckItem } from "./models";

export const loadChecklist = createAsyncAction(
  "LOAD_CHECKLIST_REQUEST",
  "LOAD_CHECKLIST_SUCCESS",
  "LOAD_CHECKLIST_FAILURE"
)<undefined, Array<CheckQuestion>, string>();

// {room.uid}::{check_id}
export const addAnswer = createAction(
  "CHECKLIST/ADD_ANSWER",
  (uid: string) => uid
)<string>();
export const deleteAnswer = createAction(
  "CHECKLIST/DELETE_ANSWER",
  (uid: string) => uid
)<string>();

export const loadAnswers = createAsyncAction(
  "CHECKLIST/LOAD_ANSWERS_REQUEST",
  "CHECKLIST/LOAD_ANSWERS_SUCCESS",
  "CHECKLIST/LOAD_ANSWERS_FAILURE"
)<undefined, Map<string, Array<CheckItem>>, string>();

export const postAnswers = createAsyncAction(
  "CHECKLIST/POST_ANSWERS_REQUEST",
  "CHECKLIST/POST_ANSWERS_SUCCESS",
  "CHECKLIST/POST_ANSWERS_FAILURE"
)<undefined, undefined, string>();

export const clearAnswers = createAction("CHECKLIST/CLEAR_ANSWERS")<void>();
