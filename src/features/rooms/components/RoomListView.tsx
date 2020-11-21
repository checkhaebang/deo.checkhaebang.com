import React, { CSSProperties, ReactElement } from "react";

import { AddCard, RoomCard } from "../components";
import { Room } from "../models";

const 방_리스트_style = (): CSSProperties => ({
  display: "flex",
  margin: "0 0 0 24px",
  height: 80,
  overflowX: "auto",
  flexWrap: "nowrap",
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
  return (
    <div style={방_리스트_style()}>
      {
        <RoomCard
          key={select.uid}
          room={select}
          width={width}
          height={height}
          margin={margin}
          label_overlay={true}
          is_selected={true}
        />
      }
      {rooms
        .filter((room) => room.uid !== select.uid)
        .map((room) => (
          <RoomCard
            key={room.uid}
            room={room}
            width={width}
            height={height}
            margin={margin}
            label_overlay={true}
            is_selected={false}
          />
        ))}
      <AddCard
        align="start"
        width={width}
        height={height}
        plusSize={30}
        margin={margin}
      />
    </div>
  );
}
