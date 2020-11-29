import React, { ReactElement } from "react";

import { CheckQuestion } from "../models";
import { groupBy } from "../utils";
import QuestionPanel from "./QuestionPanel";

type Props = {
  questions: Array<CheckQuestion>;
  room_id: string;
};
export default function ChecklistView({
  questions,
  room_id,
}: Props): ReactElement {
  const checklists_by_label: Map<string, CheckQuestion[]> = groupBy(
    questions,
    (question: CheckQuestion) => question.label
  );
  return (
    <div style={{ marginTop: 20 }}>
      {Array.from(checklists_by_label).map(([label, questions], index) => (
        <QuestionPanel
          key={index}
          label={label}
          questions={questions}
          room_id={room_id}
        />
      ))}
    </div>
  );
}
