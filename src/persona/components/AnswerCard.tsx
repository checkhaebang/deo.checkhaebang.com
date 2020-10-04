import React, { ReactElement, CSSProperties } from "react";
interface AnswerCardProps {
  contents: string;
}
export function AnswerCard({ contents }: AnswerCardProps): ReactElement {
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
    cursor: "pointer",
    // font
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "21px",
    textAlign: "center",
    color: "rgb(41, 41, 44)",
  };
  return (
    <div className="answer-card" style={answerCardStyle}>
      {contents}
    </div>
  );
}
