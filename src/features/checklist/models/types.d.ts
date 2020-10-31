declare module "ChecklistModels" {
  export enum ChoiceType {
    SingleChoice = "SingleChoice",
    MultipleChoice = "MultipleChoice",
  }
  export enum StatusCategory {
    Looking = "Looking",
    Contracting = "Contracting",
    Moving = "Moving",
  }

  type CheckItem = {
    uid: number;
    question_id: number;
    contents: string;
  };

  type CheckQuestion = {
    uid: number;
    title: string;
    type_: ChoiceType;
    label: string;
    status: StatusCategory;
    checks: Array<CheckItem>;
  };
}
