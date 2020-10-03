import React, { CSSProperties, ReactElement } from "react";
import { PersonaQuestion } from "../models";

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
    height: "100vh",
    padding: "0px 24px",
    backgroundColor: "rgb(249, 249, 249)",
  };
  return (
    <div style={style} className="container">
      <AnswersView question={question} />
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
  const answerCardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "center",
    justifyContent: "center",
    WebkitBoxAlign: "center",
    alignItems: "center",
    marginBottom: "20px",
    padding: "20px",
    width: "100%",
    height: "83px",
    border: "1px solid rgb(41, 41, 41)",
    borderRadius: "6px",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgb(41, 41, 41) 1px 1px 0px 2px",
  };
  const answerContentStyle: CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "21px",
    textAlign: "center",
    color: "rgb(41, 41, 44)",
  };
  return (
    <div>
      <h1 style={titleStyle}>{question?.title}</h1>
      <div style={answersContainerStyle}>
        {question?.choices?.map((item) => {
          return (
            <div style={answerCardStyle}>
              <p style={answerContentStyle}>{item.contents}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
