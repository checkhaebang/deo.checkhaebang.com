import { ChoiceType, QuestionCategory } from "./constants";

/** 페르소나 질문에 대한 선택항목 */
type PersonaChoiceItem = {
  uid: number;
  question_id: number;
  contents: string;
  category: QuestionCategory;
};

/** 페르소나 질문 */
type PersonaQuestion = {
  uid: number;
  title: string;
  choices: Array<PersonaChoiceItem>;
  type_: ChoiceType;
};

export type { PersonaChoiceItem, PersonaQuestion };
