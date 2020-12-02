import React, { ReactElement, useState } from "react";
import { connect } from "react-redux";
import { box_unchecked, box_checked } from "~/assets";
import * as actions from "../actions";
type CheckProps = {
  uid: string;
  label?: string;
};

const dispatchProps = {
  addAnswer: actions.addAnswer,
  deleteAnswer: actions.deleteAnswer,
};

type Props = typeof dispatchProps & CheckProps;

function CheckBox({
  uid,
  label = "",
  addAnswer,
  deleteAnswer,
}: Props): ReactElement {
  const [is_checked, setCheck] = useState(false);
  return (
    <>
      <img
        alt={"checkbox"}
        src={is_checked ? box_checked : box_unchecked}
        width="18"
        height="18"
        style={{ cursor: "pointer" }}
        onClick={() => {
          !is_checked ? addAnswer(uid) : deleteAnswer(uid);
          setCheck(!is_checked);
        }}
      />
      <span
        style={{ fontSize: 12, display: "inline-block", cursor: "pointer" }}
        onClick={() => {
          !is_checked ? addAnswer(uid) : deleteAnswer(uid);
          setCheck(!is_checked);
        }}
      >
        {label}
      </span>
    </>
  );
}

export default connect(null, dispatchProps)(CheckBox);
