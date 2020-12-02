import React, { CSSProperties, ReactElement } from "react";

import { CheckQuestion } from "../models";
import { color } from "~/colors";
import SingleChoiceView from "./SingleChoiceView";
import MultipleChoiceView from "./MultipleChoiceView";

type Props = {
  question: CheckQuestion;
  room_id: string;
};
const 행_style = (length: number): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  height: "auto",
  padding: length > 25 ? "8px 0 8px 0" : "9px 0 9px 0",
});
const 행_질문_style = (type: string): CSSProperties => ({
  width: `${type === "MultipleChoice" ? "84px" : "auto"}`,
  marginRight: `${type === "MultipleChoice" ? "" : "6px"}`,
  fontSize: 12,
  alignSelf: "center",
  flexGrow: 1,
});

const 밑줄_style = (): CSSProperties => ({
  width: 264,
  height: 1,
  backgroundColor: color.grayscalef9,
});
export default function QuestionItem({
  question,
  room_id,
}: Props): ReactElement {
  return (
    <div>
      <div style={행_style(question.title.length)}>
        <span style={행_질문_style(question.type_)}>{question.title}</span>
        {question.type_ === "MultipleChoice" ? (
          <MultipleChoiceView checks={question.checks} room_id={room_id} />
        ) : (
          <SingleChoiceView check={question.checks[0]} room_id={room_id} />
        )}
      </div>
      <div style={밑줄_style()} />
    </div>
  );
}
