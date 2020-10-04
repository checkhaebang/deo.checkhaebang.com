import React, { ReactElement, CSSProperties } from "react";

interface ProgressBarProps {
  current: number;
  max: number;
}
/** 프로그래스 바 */
export function ProgressBar({ current, max }: ProgressBarProps): ReactElement {
  const gauge = (100 / max) * (current + 1);
  const progressStyle: CSSProperties = {
    height: "6px",
    width: `${gauge}%`,
    zIndex: 2,
    backgroundColor: "#ffc856",
    borderRadius: "2.5px",
    WebkitTransition: "width 0.5s ease-in-out",
    MozTransition: "width 0.5s ease-in-out",
    OTransition: "width 0.5s ease-in-out",
    transition: "width 0.5s ease-in-out",
  };
  const backgroundStyle: CSSProperties = {
    width: "100%",
    height: "6px",
    marginTop: "8px",
    borderRadius: "2.5px",
    backgroundColor: "rgba(41, 41, 44, 0.08)",
  };
  const labelStyle: CSSProperties = {
    textAlign: "right",
    marginTop: "115px",
    fontFamily: "SpoqaHanSans",
    fontSize: "12px",
    color: "rgb(187, 187, 187)",
  };
  return (
    <div>
      <p style={labelStyle}>
        {current}/{max}
      </p>
      <div style={backgroundStyle}>
        <div style={progressStyle} />
      </div>
    </div>
  );
}
