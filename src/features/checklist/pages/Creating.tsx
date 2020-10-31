import React, { ReactElement, CSSProperties } from "react";
import Lottie from "react-lottie";
import { connect } from "react-redux";
import { RootState } from "typesafe-actions";
import { Redirect } from "react-router-dom";

import { color } from "~/colors";
import creating from "~/assets/creating";
import { loadChecklistAsync } from "../actions";
import { CheckQuestion } from "../models";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.checklist.isLoading,
});
const dispatchProps = {
  fetchChecklists: loadChecklistAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
type State = { checklists: Array<CheckQuestion> };
class Creating extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchChecklists();
  }

  render() {
    const { isLoading }: Props = this.props;
    return isLoading ? (
      <div
        style={{
          width: 360,
          height: 635,
          backgroundColor: color.primaryDeepDarkBlue,
        }}
      >
        <div style={{ margin: "152px 50px 0 50px" }}>
          <Lottie
            options={this.lottieOptions}
            height={180}
            width={180}
            isStopped={false}
            isPaused={false}
          />
        </div>
        <p style={this.textStyle()}>나만의 체크리스트 생성중..</p>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
  lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: creating,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  textStyle = (): CSSProperties => ({
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
}

export default connect(mapStateToProps, dispatchProps)(Creating);
