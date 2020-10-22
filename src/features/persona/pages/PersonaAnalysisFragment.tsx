import React, { CSSProperties } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { ProgressBar } from "../components";
import { RouteComponentProps } from "react-router-dom";

import {
  loadQuestionsAsync,
  postAnswersAsync,
  setCurrentIdx,
  clearAnswer,
} from "../actions";

import AnswersView from "./AnswerView";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.persona.isLoading,
  questions: state.persona.questions,
  currentIdx: state.persona.currentIdx,
  answers: state.persona.answers,
});
const dispatchProps = {
  fetchQuestions: loadQuestionsAsync.request,
  saveAnswers: postAnswersAsync.request,
  setCurrentIdx: setCurrentIdx,
  clearAnswer: clearAnswer,
};
type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  RouteComponentProps;

type State = { answers: Array<number>; currentIdx: number };

/** 페르소나 분석 Fragment */
class PersonaAnalysisFragment extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  componentWillUnmount() {
    const { setCurrentIdx, clearAnswer } = this.props;
    setCurrentIdx(1);
    clearAnswer();
  }

  render() {
    const { questions, isLoading, currentIdx }: Props = this.props;

    return isLoading ? (
      <p style={{ marginLeft: "24px" }}>Loading...</p>
    ) : (
      <div style={this.style()}>
        <AnswersView
          question={questions[currentIdx - 1]}
          onClick={this.onAnswerClick}
        />
        <ProgressBar current={currentIdx} max={questions?.length} />
      </div>
    );
  }

  onAnswerClick = (): void => {
    const { history, questions, currentIdx } = this.props;
    const { setCurrentIdx, saveAnswers } = this.props;
    if (currentIdx < questions?.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      saveAnswers();
      history.push("/");
    }
  };

  style = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "660px",
  });
}

export default connect(mapStateToProps, dispatchProps)(PersonaAnalysisFragment);
