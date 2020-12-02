import React, { CSSProperties, ReactElement } from "react";

import { CheckItem } from "../models";

import CheckBox from "./CheckBox";

type Props = {
  check: CheckItem;
  room_id: string;
};
const 행_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 2,
});
export default function SingleChoiceView({
  check,
  room_id,
}: Props): ReactElement {
  const uid = `${room_id}::${check.uid}`;
  return (
    <div style={행_style()}>
      <CheckBox key={uid} uid={uid} />
    </div>
  );
}
