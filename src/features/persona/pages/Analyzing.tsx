import React, { CSSProperties, ReactElement } from "react";
import Lottie from "react-lottie";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import analyzing from "~/assets/analyzing";
import { color } from "~/colors";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.persona.isLoading,
});

type Props = ReturnType<typeof mapStateToProps>;

function Analyzing({ isLoading }: Props): ReactElement {
  return isLoading ? (
    <div style={pageStyle()}>
      <div style={{ margin: "163px 90px 0 90px" }}>
        <Lottie
          options={lottieOptions}
          height={180}
          width={180}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p style={textStyle()}>나의 자취 유형 분석 중 ..</p>
    </div>
  ) : (
    <Redirect to="/persona/result" />
  );
}
const pageStyle = (): CSSProperties => ({
  width: 360,
  height: 635,
  backgroundColor: color.primaryDeepDarkBlue,
});

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: analyzing,
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

export default connect(mapStateToProps)(Analyzing);
