import React, { CSSProperties, ReactElement } from "react";

import { CheckItem } from "../models";

import CheckBox from "./CheckBox";

type MultipleChoiceViewProps = {
  checks: Array<CheckItem>;
};
const 행_style = (): CSSProperties => ({
  display: "grid",
  alignSelf: "flex-end",
  width: 174,
  gridTemplateColumns: "0.5fr 2fr 0.5fr 2fr",
  gap: "3px",
});
export default function MultipleChoiceView({
  checks,
}: MultipleChoiceViewProps): ReactElement {
  return (
    <div style={행_style()}>
      {checks?.map((check) => (
        <CheckBox key={check.uid} uid={check.uid} label={check.contents} />
      ))}
    </div>
  );
}
