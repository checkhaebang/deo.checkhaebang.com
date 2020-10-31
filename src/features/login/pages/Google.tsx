import React, { CSSProperties, ReactElement } from "react";
import Lottie from "react-lottie";

import { color } from "~/colors";
import complete from "~/assets/complete";

export default function Google(): ReactElement {
  return (
    <div style={page_style()}>
      <div style={{ marginTop: 72 }}>
        <Lottie
          options={lottieOptions}
          height={360}
          width={360}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p style={보고싶다면_style()}>나만의 체크리스트를 보고 싶다면?</p>
      <div style={구글계정으로_시작하기_버튼_style()}>
        <p style={구글계정으로_시작하기_버튼_글자_style()}>
          구글 계정으로 시작하기
        </p>
      </div>
    </div>
  );
}
const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: complete,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const page_style = (): CSSProperties => ({
  width: 360,
  height: 635,
  backgroundColor: color.primaryDeepDarkBlue,
});
const 보고싶다면_style = (): CSSProperties => ({
  width: 226,
  height: 22,
  color: "white",
  fontSize: 16,
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
  textAlign: "center",
  margin: "79px 67px 0 67px",
});
const 구글계정으로_시작하기_버튼_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  width: 312,
  height: 54,
  margin: "16px 24px 0 24px",
  backgroundColor: color.primaryYellow,
  cursor: "pointer",
  borderRadius: 4,
  boxShadow: "0 1px 1px 0 rgba(0,0,0,0.03)",
});
const 구글계정으로_시작하기_버튼_글자_style = (): CSSProperties => ({
  height: 22,
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
  textAlign: "center",
});
