import React, { CSSProperties } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { ProgressBar } from "../components";

import * as selectors from "../selectors";
import {
  setCurrentIdx,
  loadQuestionsAsync,
  postAnswersAsync,
} from "../actions";

import AnswersView from "./AnswerView";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.persona.isLoading,
  questions: selectors.getQuestions(state.persona),
  currentIdx: selectors.getCurrentIdx(state.persona),
  answers: selectors.getAnswers(state.persona),
});
const dispatchProps = {
  setCurrentIdx: setCurrentIdx,
  fetchQuestions: loadQuestionsAsync.request,
  saveAnswers: postAnswersAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = { _: null };

/** 페르소나 분석 Fragment */
class PersonaAnalysisFragment extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    if (this.props.isLoading)
      return <p style={{ marginLeft: "24px" }}>Loading...</p>;

    const { questions, currentIdx, setCurrentIdx }: Props = this.props;
    if (currentIdx > questions?.length) {
      // this.props.saveAnswers();
      return <Redirect push to="/" />;
    }
    return (
      <div style={style()} className="container">
        <AnswersView
          question={questions[currentIdx - 1]}
          onClick={() => setCurrentIdx(currentIdx + 1)}
        />
        <ProgressBar current={currentIdx} max={questions?.length} />
      </div>
    );
  }
}

const style = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "660px",
});

export default connect(mapStateToProps, dispatchProps)(PersonaAnalysisFragment);
