import React, { ReactElement, useState } from "react";
import { box_unchecked, box_checked } from "~/assets";

type Props = {
  uid: number;
  label?: string;
};
export default function CheckBox({ uid, label = "" }: Props): ReactElement {
  const [is_checked, setCheck] = useState(false);
  return (
    <>
      <img
        alt={"checkbox"}
        src={is_checked ? box_checked : box_unchecked}
        width="18"
        height="18"
        style={{ cursor: "pointer" }}
        onClick={() => setCheck(!is_checked)}
      />
      <span
        style={{ fontSize: 12, display: "inline-block", cursor: "pointer" }}
        onClick={() => setCheck(!is_checked)}
      >
        {label}
      </span>
    </>
  );
}
