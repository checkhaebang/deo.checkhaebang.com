import React, { CSSProperties, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import Room from "../models";
import { img_no_thumbnail } from "~/assets";
import { color } from "~/colors";
type Props = {
  room: Room;
};

const 카드_style = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const 카드_썸네일_style = (): CSSProperties => ({
  width: 148,
  height: 148,
  margin: "8px 8px 0 8px",
  borderRadius: 6,
  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
});
const 카드_노썸네일_style = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 148,
  height: 148,
  margin: "8px 8px 0 8px",
  backgroundColor: color.basicWhite,
  borderRadius: 6,
  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
});
const 카드_라벨_style = (): CSSProperties => ({
  fontSize: 12,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.29,
  letterSpacing: "normal",
  textAlign: "center",
  color: color.grayscale29,
  marginTop: 4,
});
const 카드_노썸네일_이미지_style = (): CSSProperties => ({
  width: 64,
  height: 64,
});
function RoomCard({ room }: Props): ReactElement {
  const history = useHistory();
  return (
    <div
      style={카드_style()}
      onClick={() => history.push(`/rooms/${room.uid}`)}
    >
      {room.thumbnail ? (
        <img style={카드_썸네일_style()} alt="thumbnail" src={room.thumbnail} />
      ) : (
        <div style={카드_노썸네일_style()}>
          <img
            style={카드_노썸네일_이미지_style()}
            src={img_no_thumbnail}
            alt="no-thumbnail"
          />
        </div>
      )}
      <span style={카드_라벨_style()}>{room.name}</span>
    </div>
  );
}

const 카드_방추가_style = (
  width: number,
  height: number,
  plusSize: number
): CSSProperties => ({
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  fontSize: plusSize,
  width: width,
  height: height,
  borderRadius: "6px",
  border: "1px dashed rgb(201, 201, 201)",
  color: "rgb(201, 201, 201)",
  margin: "8px 8px 0 8px",
});

type AddCardProps = {
  width: number;
  height: number;
  align: string;
  plusSize: number;
};
function AddCard({
  width,
  height,
  align,
  plusSize,
}: AddCardProps): ReactElement {
  const history = useHistory();
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: align,
        justifySelf: align,
      }}
    >
      <div
        style={카드_방추가_style(width, height, plusSize)}
        onClick={() => history.push(`/rooms/crawling`)}
      >
        +
      </div>
    </div>
  );
}
export { AddCard };
export default RoomCard;
