import { CheckQuestion } from "ChecklistModels";
import { checklist as checklistMock } from "../features/checklist/mock";
const checklist: Array<CheckQuestion> = checklistMock;

export function fetchCheckQuestions(): Promise<Array<CheckQuestion>> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(checklist);
    }, 2000);
  });
}
