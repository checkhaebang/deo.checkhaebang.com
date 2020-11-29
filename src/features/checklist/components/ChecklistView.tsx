import React, { ReactElement } from "react";

import { CheckQuestion } from "../models";
import { groupBy } from "../utils";
import QuestionPanel from "./QuestionPanel";

type Props = {
  questions: Array<CheckQuestion>;
};
export default function ChecklistView({ questions }: Props): ReactElement {
  const checklists_by_label: Map<string, CheckQuestion[]> = groupBy(
    questions,
    (question: CheckQuestion) => question.label
  );
  return (
    <div style={{ marginTop: 20 }}>
      {Array.from(checklists_by_label).map(([label, questions], index) => (
        <QuestionPanel key={index} label={label} questions={questions} />
      ))}
    </div>
  );
}
