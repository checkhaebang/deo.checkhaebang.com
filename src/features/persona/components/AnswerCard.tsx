import React, { ReactElement, CSSProperties } from "react";
import reactStringReplace from "react-string-replace";

type Props = { contents: string; onClick: () => void };

export default function AnswerCard({ contents, onClick }: Props): ReactElement {
  const result = reactStringReplace(contents, /<hr>(.*)<\/hr>/g, (match, i) => (
    <span key={i} style={{ backgroundColor: "#fff9da" }}>
      {match}
    </span>
  ));
  return (
    <div className="answer-card" style={style()} onClick={onClick}>
      <p>{result}</p>
    </div>
  );
}

const style = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  WebkitBoxPack: "center",
  justifyContent: "center",
  WebkitBoxAlign: "center",
  alignItems: "center",
  margin: "0px 24px 20px 24px",

  width: "312px",
  height: "83px",
  border: "1px solid rgb(41, 41, 41)",
  borderRadius: "6px",
  backgroundColor: "rgb(255, 255, 255)",
  boxShadow: "rgb(41, 41, 41) 1px 1px 0px 2px",
  cursor: "pointer",
  // font
  fontFamily: "Spoqa Han Sans",
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "21px",
  textAlign: "center",
  color: "rgb(41, 41, 44)",
});
