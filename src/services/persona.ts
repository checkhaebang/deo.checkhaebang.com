import { PersonaQuestion } from "PersonaModels";
import { questions as questionsMock } from "../features/persona/mock";

const questions: Array<PersonaQuestion> = questionsMock;
let answers: Array<number> = [];

export function fetchQuestions(): Promise<Array<PersonaQuestion>> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(questions);
    }, 500);
  });
}

export function postAnswers(data: Array<number>): Promise<undefined> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      answers = data;
      console.log(answers);
      resolve();
    }, 500);
  });
}
