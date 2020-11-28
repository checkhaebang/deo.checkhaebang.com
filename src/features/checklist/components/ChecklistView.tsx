/**
 * Expansion 기능을 제공해야 한다
 * Header: Title, TriangleIcon
 * Contents:
 *   SingleChoice: title, status, checks
 *   MultipleChoice: title, status, checks
 *
 * 프레임워크를 만드는 것이 아니기 때문에 공용 이름보다는 용도가 적힌 것이 좋다.
 */
import React, { CSSProperties, ReactElement, useState } from "react";

import { CheckQuestion } from "../models";
import { groupBy } from "../utils";
import { ic_open } from "~/assets";
import { color } from "~/colors";

import CheckBox from "./CheckBox";

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

const 확장뷰_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 39,
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
  color: color.grayscale29,
  cursor: "pointer",
  marginTop: 28,
});
const 밑줄_style = (): CSSProperties => ({
  height: 1,
  backgroundColor: color.primaryDullPurple,
  marginTop: 2,
});
const 밑줄_style2 = (): CSSProperties => ({
  width: 264,
  height: 1,
  backgroundColor: color.grayscalef9,
});
const 아이콘_style = (expand: boolean): CSSProperties => ({
  transition: "all ease 0.5s",
  transform: `rotate(${expand ? 180 : 360}deg)`,
});
const 콘텐츠_style = (expand: boolean): CSSProperties => ({
  display: `${expand ? "block" : "none"}`,
});
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
type ItemProps = {
  label: string;
  questions: Array<CheckQuestion>;
};
export function QuestionPanel({ label, questions }: ItemProps): ReactElement {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <QuestionPanelHeader label={label} expand={expand} click={setExpand} />
      <div style={밑줄_style()} />
      <div style={콘텐츠_style(expand)}>
        {questions.map((question) => (
          <div key={question.uid}>
            <div style={행_style()}>
              <span style={행_질문_style(question.type_)}>
                {question.title}
              </span>
              {question.type_ === "MultipleChoice" ? (
                <div
                  style={{
                    display: "grid",
                    alignSelf: "flex-end",
                    width: 174,
                    gridTemplateColumns: "0.5fr 2fr 0.5fr 2fr",
                    gap: "3px",
                  }}
                >
                  {question?.checks?.map((check) => (
                    <CheckBox
                      key={check.uid}
                      uid={check.uid}
                      label={check.contents}
                    />
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexGrow: 2,
                  }}
                >
                  <CheckBox uid={question.uid} />
                </div>
              )}
            </div>
            <div style={밑줄_style2()} />
          </div>
        ))}
      </div>
    </>
  );
}

type HeaderProps = {
  label: string;
  expand: boolean;
  click: CallableFunction;
};
function QuestionPanelHeader({
  label,
  expand,
  click,
}: HeaderProps): ReactElement {
  return (
    <div style={확장뷰_style()} onClick={() => click(!expand)}>
      <span>{label}</span>
      <img
        src={ic_open}
        alt=""
        width="24"
        height="24"
        style={아이콘_style(expand)}
      />
    </div>
  );
}
