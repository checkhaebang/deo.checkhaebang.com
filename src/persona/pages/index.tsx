import React, { CSSProperties, ReactElement } from "react";
import { PersonaQuestion } from "../models";
import { AnswerCard, ProgressBar } from "../components";

interface PersonaAnalysisProps {
  questions: PersonaQuestion[];
}

/** 페르소나 분석 Fragment */
export function PersonaAnalysisFragment({
  questions,
}: PersonaAnalysisProps): ReactElement {
  const position = 0;
  const question: PersonaQuestion = questions[position];
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: "rgb(249, 249, 249)",
  };
  return (
    <div style={style} className="container">
      <AnswersView question={question} />
      <ProgressBar current={1} max={10} />
    </div>
  );
}

/** AnswerView의 props */
interface AnswerViewProps {
  question: PersonaQuestion;
}

/** persona question의 선택지 view  */
export function AnswersView({ question }: AnswerViewProps): ReactElement {
  const titleStyle: CSSProperties = {
    marginTop: "50px",
    height: "90px",
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "29px",
  };
  const answersContainerStyle: CSSProperties = {
    height: "380px",
    marginTop: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    WebkitBoxAlign: "center",
  };

  return (
    <div>
      <h1 style={titleStyle}>{question?.title}</h1>
      <div style={answersContainerStyle}>
        {question?.choices?.map((item) => {
          return <AnswerCard key={item.uid} contents={item.contents} />;
        })}
      </div>
    </div>
  );
}
