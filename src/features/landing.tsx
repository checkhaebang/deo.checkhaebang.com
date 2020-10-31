import React, { ReactElement, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import { startIllust } from "~/assets";
import { color } from "~/colors";

export default function LandingPage({
  history,
}: RouteComponentProps): ReactElement {
  const count = Intl.NumberFormat().format(10_000_000);

  return (
    <div style={containerStyle()}>
      <div style={{ width: "100%", height: 207 }}>
        <p style={titleStyle()}>{TEXT().title}</p>
        <p style={subtitleStyle()}>{TEXT().subtitle}</p>
      </div>

      <img
        style={{ height: 226, objectFit: "contain" }}
        src={startIllust}
        alt="startIllust"
      />
      <div style={{ height: 48, width: 360 }}>
        <span style={counterStyle()}>
          총 <p style={viewerStyle()}>{count}</p>
          {TEXT().counter}
        </span>
      </div>

      <div style={buttonStyle()}>
        <div
          style={startButtonStyle()}
          onClick={() => history.push("/persona")}
        >
          <p style={startButtonTextStyle()}>{TEXT().startButton}</p>
        </div>
        <div style={skipButtonStyle()}>
          <p
            style={skipButtonTextStyle()}
            onClick={() => {
              history.push("login");
            }}
          >
            {TEXT().skipButton}
          </p>
          <div style={skipButtonUnderlineStyle()} />
        </div>
      </div>
    </div>
  );
}

interface Text {
  title: string;
  subtitle: string;
  counter: string;
  startButton: string;
  skipButton: string;
}

const TEXT = (): Text => ({
  title: "당신의 성향 기반으로\n1:1 자취방 체크리스트를\n만들어 드릴게요!",
  subtitle: "방 구하기부터 이사까지,\n그 누구도 알려주지 않은 맞춤형 꿀팁",
  counter: "명이 체크해방을 참고해 방을 구했어요!",
  startButton: "자취 유형 테스트 시작",
  skipButton: "이미 나만의 체크리스트가 있어요!",
});

const containerStyle = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color.primaryYellow,
  whiteSpace: "pre-wrap",
  width: 360,
  height: 660,
  color: color.grayscale29,
});

const titleStyle = (): CSSProperties => ({
  margin: "48px 0 0 0",
  padding: "0 24px",
  fontSize: "26px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  letterSpacing: -0.3,
  lineHeight: 1.33,
});

const subtitleStyle = (): CSSProperties => ({
  margin: "16px 0 16px 0",
  padding: "0 24px",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: 1.32,
  letterSpacing: "normal",
});

const counterStyle = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "8px 42px 8px 42px",
  height: 32,
  opacity: 0.7,
  borderRadius: 17,
  backgroundColor: color.primaryDeepDarkBlue,
  fontSize: 12,
  color: color.basicWhite,

  lineHeight: 1.29,
});

const viewerStyle = (): CSSProperties => ({
  color: color.primaryYellow,
  fontSize: 12,
  margin: "8px, 16px 8px 16px",
  fontStyle: "normal",
  fontWeight: "normal",
  fontStretch: "normal",
  letterSpacing: "normal",
  lineHeight: 1.29,
  textAlign: "center",
});

const buttonStyle = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: 8,
});

const startButtonStyle = (): CSSProperties => ({
  width: 312,
  height: 54,
  borderRadius: 4,
  margin: "0 24px 8px 24px",
  boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.03)",
  backgroundColor: "#ffffff",
  cursor: "pointer",
});
const startButtonTextStyle = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  width: 144,
  height: 22,
  margin: "15px 84px 16px 84px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
});

const skipButtonStyle = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: 168,
  height: 37,
  margin: "0px 96px 0px 96px",
  fontSize: "12px",
  fontWeight: "bold",
  cursor: "pointer",
});

const skipButtonTextStyle = (): CSSProperties => ({
  width: 167,
  height: 16,
  opacity: 0.5,
  fontSize: 12,
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  //   lineHeight: 1.29,
  letterSpacing: "normal",
  textAlign: "center",
  margin: 0,
  color: color.grayscale29,
});

const skipButtonUnderlineStyle = (): CSSProperties => ({
  width: 167,
  height: 2,
  opacity: 0.5,
  marginTop: 2,
  backgroundColor: color.grayscale29,
});
