import { CheckQuestion } from "./models";
import { ChecklistState } from "./reducers";

export const getChecklistQuestions = (
  state: ChecklistState
): Array<CheckQuestion> => state.questions;
