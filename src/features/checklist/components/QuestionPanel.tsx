/**
 * Expansion 기능을 제공
 * Header: Title, TriangleIcon
 * Contents:
 *   SingleChoice: title, status, checks
 *   MultipleChoice: title, status, checks
 */
import React, { CSSProperties, ReactElement, useState } from "react";

import { CheckQuestion } from "../models";
import { ic_open } from "~/assets";
import { color } from "~/colors";
import QuestionItem from "./QuestionItem";

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
const 콘텐츠_style = (expand: boolean): CSSProperties => ({
  display: `${expand ? "block" : "none"}`,
});
type ItemProps = {
  label: string;
  questions: Array<CheckQuestion>;
};
export default function QuestionPanel({
  label,
  questions,
}: ItemProps): ReactElement {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <QuestionPanelHeader label={label} expand={expand} click={setExpand} />
      <div style={밑줄_style()} />
      <div style={콘텐츠_style(expand)}>
        {questions.map((question) => (
          <QuestionItem key={question.uid} question={question} />
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
const 아이콘_style = (expand: boolean): CSSProperties => ({
  transition: "all ease 0.5s",
  transform: `rotate(${expand ? 180 : 360}deg)`,
});

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
