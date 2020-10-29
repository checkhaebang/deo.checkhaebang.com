import { ChoiceType } from "../../persona/models/constants";
import { StatusCategory } from "./constants";

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

export type { CheckQuestion, CheckItem };
