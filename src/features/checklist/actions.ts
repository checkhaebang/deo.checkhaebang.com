import { createAsyncAction } from "typesafe-actions";
import { CheckQuestion } from "./models";

export const loadChecklist = createAsyncAction(
  "LOAD_CHECKLIST_REQUEST",
  "LOAD_CHECKLIST_SUCCESS",
  "LOAD_CHECKLIST_FAILURE"
)<undefined, Array<CheckQuestion>, string>();
