/**
 * /login/google 구글 로그인 화면
 */
import React, { CSSProperties, ReactElement } from "react";
import KakaoLogin from "react-kakao-login";

import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import { color } from "~/colors";
import complete from "~/assets/complete";

export default function Kakao(): ReactElement {
  const history = useHistory();
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

      <div style={카카오로_시작하기_버튼_style()}>
        <KakaoLogin
          token={`${process.env.REACT_APP_KAKAO_API_TOKEN}`}
          onSuccess={() => history.push("/rooms")}
          onFail={(error) => console.error(error)}
          onLogout={(token) => console.info(token)}
        >
          <div>카카오로 시작하기</div>
        </KakaoLogin>
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
const 카카오로_시작하기_버튼_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  width: 312,
  height: 54,
  margin: "16px 24px 0 24px",
  borderRadius: 4,
  boxShadow: "0 1px 1px 0 rgba(0,0,0,0.03)",
});
