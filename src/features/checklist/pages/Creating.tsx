import React, { ReactElement, CSSProperties } from "react";
import Lottie from "react-lottie";
import { connect } from "react-redux";
import { RootState } from "typesafe-actions";
import { Redirect } from "react-router-dom";

import { color } from "~/colors";
import creating from "~/assets/creating";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.checklist.isLoading,
});

type Props = ReturnType<typeof mapStateToProps>;

function Creating({ isLoading }: Props): ReactElement {
  return !isLoading ? (
    <div
      style={{
        width: 360,
        height: 635,
        backgroundColor: color.primaryDeepDarkBlue,
      }}
    >
      <div style={{ margin: "152px 50px 0 50px" }}>
        <Lottie
          options={lottieOptions}
          height={180}
          width={180}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p style={textStyle()}>나만의 체크리스트 생성중..</p>
    </div>
  ) : (
    <Redirect to="/persona/result" />
  );
}
const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: creating,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const textStyle = (): CSSProperties => ({
  width: 222,
  height: 22,
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
  textAlign: "center",
  margin: "16px 69px 0 69px",
});

export default connect(mapStateToProps)(Creating);
