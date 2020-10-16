/** 프로그래스 바 */
import React, { ReactElement, CSSProperties } from "react";
import zeroPad from "~/util";

type Props = { current: number; max: number };

export default function ProgressBar({ current, max }: Props): ReactElement {
  return (
    <div style={containerStyle()}>
      <p style={labelStyle()}>
        {zeroPad(current, 10)}/{max}
      </p>
      <div style={backgroundStyle()}>
        <div style={progressStyle((100 / max) * current)} />
      </div>
    </div>
  );
}
const containerStyle = (): CSSProperties => ({
  margin: "115px 24px 32px 24px",
});
const progressStyle = (gauge: number): CSSProperties => ({
  height: "6px",
  width: `${gauge}%`,
  zIndex: 2,
  backgroundColor: "#ffc856",
  borderRadius: "2.5px",
  WebkitTransition: "width 0.5s ease-in-out",
  MozTransition: "width 0.5s ease-in-out",
  OTransition: "width 0.5s ease-in-out",
  transition: "width 0.5s ease-in-out",
});
const backgroundStyle = (): CSSProperties => ({
  width: "100%",
  height: "6px",
  marginTop: "8px",
  marginBottom: "32px",
  borderRadius: "2.5px",
  backgroundColor: "rgba(41, 41, 44, 0.08)",
});
const labelStyle = (): CSSProperties => ({
  textAlign: "right",
  fontFamily: "SpoqaHanSans",
  fontSize: "12px",
  color: "rgb(187, 187, 187)",
});
