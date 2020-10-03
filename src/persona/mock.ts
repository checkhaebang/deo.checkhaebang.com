import { QuestionCategory, ChoiceType } from "./models/constants";
import { PersonaQuestion } from "./models";
export const questions: Array<PersonaQuestion> = [
  {
    uid: 1,
    title: "질문입니다",
    choices: [
      {
        uid: 1,
        question_id: 1,
        contents: "선택지입니다",
        category: QuestionCategory.Normal,
      },
      {
        uid: 2,
        question_id: 1,
        contents: "선택지입니다",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
];
