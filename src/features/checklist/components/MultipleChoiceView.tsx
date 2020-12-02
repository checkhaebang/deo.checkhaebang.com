import React, { CSSProperties, ReactElement } from "react";

import { CheckItem } from "../models";

import CheckBox from "./CheckBox";

type MultipleChoiceViewProps = {
  checks: Array<CheckItem>;
  room_id: string;
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
  room_id,
}: MultipleChoiceViewProps): ReactElement {
  return (
    <div style={행_style()}>
      {checks?.map((check) => {
        const uid = `${room_id}::${check.uid}`;
        return <CheckBox key={uid} uid={uid} label={check.contents} />;
      })}
    </div>
  );
}
