/**
 * /rooms/{room.uid}의 화면 상단에 나오는 방 리스트
 */
import React, { CSSProperties, ReactElement } from "react";

import { AddCard, RoomCard } from "../components";
import { Room } from "../models";

const 방_리스트_style = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  margin: "0 0 0 24px",
  height: 80,
  overflowX: "auto",
  flexWrap: "nowrap",
  zIndex: 1001,
});

type RoomListViewProps = {
  width: number;
  height: number;
  margin: string;
  select: Room;
  rooms: Array<Room>;
};

export default function RoomListView({
  width,
  height,
  margin,
  select,
  rooms,
}: RoomListViewProps): ReactElement {
  const cards = rooms.map((room) => (
    <RoomCard
      key={room.uid}
      room={room}
      width={width}
      height={height}
      margin={margin}
      label_overlay={true}
      is_selected={room.uid === select.uid}
    />
  ));
  cards.push(
    <AddCard
      key="add-card"
      align="start"
      width={width}
      height={height}
      plusSize={30}
      margin={"0 8px 8px 0"}
    />
  );
  return <div style={방_리스트_style()}>{cards}</div>;
}
