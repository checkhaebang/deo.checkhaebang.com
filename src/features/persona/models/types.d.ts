declare module "PersonaModels" {
  /** 선택 유형 */
  export enum ChoiceType {
    SingleChoice = "SingleChoice",
    MultipleChoice = "MultipleChoice",
  }
  /** 질문 카테고리 */
  export enum QuestionCategory {
    Normal = "Normal",
    Welfare = "Welfare",
    Transportation = "Transportation",
    Economical = "Economical",
  }
  /** 페르소나 질문에 대한 선택항목 */
  export type PersonaChoiceItem = {
    uid: number;
    question_id: number;
    contents: string;
    category: QuestionCategory;
  };

  /** 페르소나 질문 */
  export type PersonaQuestion = {
    uid: number;
    title: string;
    choices: Array<PersonaChoiceItem>;
    type_: ChoiceType;
  };
}
