import { CheckQuestion } from "./models";
import { ChecklistState } from "./reducers";

export const getChecklist = (state: ChecklistState): Array<CheckQuestion> =>
  state.checklist;
