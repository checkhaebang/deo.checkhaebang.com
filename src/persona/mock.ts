import { QuestionCategory, ChoiceType } from "./models/constants";
import { PersonaQuestion } from "./models";
/** 질문 mock 데이터 */
export const questions: Array<PersonaQuestion> = [
  {
    uid: 1,
    title: "Q.1\n둘 중 더 중요하게 생각하는 것은?",
    choices: [
      {
        uid: 1,
        question_id: 1,
        contents: "가성비가 제일 중요!\n합리적인 가격에 가성비 갑인 방...",
        category: QuestionCategory.Normal,
      },
      {
        uid: 2,
        question_id: 1,
        contents:
          "내 삶의 질이 가장 중요하지!\n무조건 방의 퀄리티가 좋아야한다",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
];
