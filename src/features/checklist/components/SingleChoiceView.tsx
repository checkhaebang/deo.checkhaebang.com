import React, { CSSProperties, ReactElement } from "react";

import { CheckItem } from "../models";

import CheckBox from "./CheckBox";

type Props = {
  check: CheckItem;
};
const 행_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 2,
});
export default function SingleChoiceView({ check }: Props): ReactElement {
  return (
    <div style={행_style()}>
      <CheckBox uid={check.uid} />
    </div>
  );
}
