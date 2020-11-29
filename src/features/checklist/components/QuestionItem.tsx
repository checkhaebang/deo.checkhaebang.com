import React, { CSSProperties, ReactElement } from "react";

import { CheckQuestion } from "../models";
import { color } from "~/colors";
import SingleChoiceView from "./SingleChoiceView";
import MultipleChoiceView from "./MultipleChoiceView";

type Props = {
  question: CheckQuestion;
};
const 행_style = (): CSSProperties => ({
  display: "flex",
  alignItems: "flex-start",
  height: "auto",
  padding: "9px 0 9px 0",
});
const 행_질문_style = (type: string): CSSProperties => ({
  width: `${type === "MultipleChoice" ? "84px" : "auto"}`,
  fontSize: 12,
  alignSelf: "center",
  flexGrow: 1,
});

const 밑줄_style = (): CSSProperties => ({
  width: 264,
  height: 1,
  backgroundColor: color.grayscalef9,
});
export default function QuestionItem({ question }: Props): ReactElement {
  return (
    <div>
      <div style={행_style()}>
        <span style={행_질문_style(question.type_)}>{question.title}</span>
        {question.type_ === "MultipleChoice" ? (
          <MultipleChoiceView checks={question.checks} />
        ) : (
          <SingleChoiceView check={question.checks[0]} />
        )}
      </div>
      <div style={밑줄_style()} />
    </div>
  );
}
