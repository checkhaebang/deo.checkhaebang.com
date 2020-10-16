/** persona question의 선택지 view  */
import React, { CSSProperties, ReactElement } from "react";
import { connect } from "react-redux";
import { PersonaQuestion } from "../models";
import { AnswerCard } from "../components";
import * as actions from "../actions";

type defaultProps = {
  question: PersonaQuestion;
  onClick: () => void;
};

const dispatchProps = {
  addAnswer: actions.addAnswer,
};

type Props = typeof dispatchProps & defaultProps;

/** persona question의 선택지 view  */
function AnswersView({ question, onClick, addAnswer }: Props): ReactElement {
  return (
    <div>
      <div style={{ height: "134px" }}>
        <h1 style={titleStyle()}>
          Q{question.uid}.
          <br />
          {question?.title}
        </h1>
      </div>
      <div style={answersContainerStyle()}>
        {question?.choices?.map((item) => {
          return (
            <AnswerCard
              key={item.uid}
              contents={item.contents}
              onClick={() => {
                addAnswer(item.uid);
                onClick();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const titleStyle = (): CSSProperties => ({
  margin: "24px 24px 20px 24px",
  height: "90px",
  fontSize: "22px",
  fontWeight: "bold",
  lineHeight: "29px",
});
const answersContainerStyle = (): CSSProperties => ({
  height: "272px",
  marginTop: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  WebkitBoxAlign: "center",
});

export default connect(null, dispatchProps)(AnswersView);
