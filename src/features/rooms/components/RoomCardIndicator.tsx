/**
 * /rooms/{room.uid}에서 선택된 방의 indicator
 */
import React, { ReactElement } from "react";
import { color } from "~/colors";

type RoomCardIndicatorProps = {
  visible: boolean;
  width: number;
  height: number;
  borderRadius: number;
  marginTop: number;
};
export default function RoomCardIndicator({
  visible,
  width,
  height,
  borderRadius,
  marginTop,
}: RoomCardIndicatorProps): ReactElement {
  return (
    <div
      style={{
        backgroundColor: visible ? color.primaryYellow : "",
        width: width,
        height: height,
        borderRadius: borderRadius,
        marginTop: marginTop,
        transition: ".3s ease-in-out",
      }}
    />
  );
}
