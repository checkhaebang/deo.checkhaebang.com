import React, { ReactElement } from "react";
import Lottie from "react-lottie";
import analyzing from "~/assets/analyzing";
import { color } from "~/colors";

type Props = {
  isStopped: boolean;
};

class AnalyzingView extends React.Component<Props> {
  render(): ReactElement {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: analyzing,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        style={{
          width: 360,
          height: 635,
          backgroundColor: color.primaryDeepDarkBlue,
        }}
      >
        <div style={{ margin: "163px 90px 0 90px" }}>
          <Lottie
            options={defaultOptions}
            height={180}
            width={180}
            isStopped={false}
            isPaused={false}
          />
        </div>
        <p
          style={{
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
          }}
        >
          나의 자취 유형 분석 중 ..
        </p>
      </div>
    );
  }
}

export default AnalyzingView;
