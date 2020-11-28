import React, { CSSProperties, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { Room, SELLING_TYPE_MATCHER } from "../models";
import { img_no_thumbnail } from "~/assets";
import { color } from "~/colors";
type Props = {
  room: Room;
  is_selected: boolean;
};

type ThumbnailProps = {
  width: number;
  height: number;
  margin: string;
  label_overlay: boolean;
};

const 카드_style = ({ margin }: ThumbnailProps): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  margin: margin,
});

const 카드_썸네일_style = ({
  width,
  height,
  margin,
}: ThumbnailProps): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: width,
  height: height,
  backgroundColor: color.basicWhite,
  borderRadius: 6,
  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
});
const 카드_라벨_style = (
  { width, height, margin }: ThumbnailProps,
  is_overlay = false,
  is_selected = false
): CSSProperties => {
  const _default: CSSProperties = {
    fontSize: 12,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.29,
    letterSpacing: "normal",
    textAlign: "center",
    color: color.grayscale29,
    marginTop: 4,
  };
  const overlay: CSSProperties = {
    zIndex: 100,
    marginTop: `-${height}px`,
    width: width,
    height: height,
    color: is_selected ? color.grayscale29 : color.basicWhite,
    borderRadius: 6,
    backgroundColor: is_selected ? color.primaryYellow : color.grayscale29,
    opacity: 0.7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return is_overlay ? Object.assign(_default, overlay) : _default;
};
function RoomCard({
  room,
  width,
  height,
  margin,
  label_overlay,
  is_selected,
}: Props & ThumbnailProps): ReactElement {
  const history = useHistory();
  const image = room.image || img_no_thumbnail;

  const thumbnail_wrap_props = {
    width: width,
    height: height,
    margin: margin,
    label_overlay: label_overlay,
  };
  const thumbnail_props = {
    width: room.image ? width : width / 2,
    height: room.image ? height : height / 2,
    margin: margin,
    label_overlay: label_overlay,
  };
  return (
    <div
      style={카드_style(thumbnail_wrap_props)}
      onClick={() => history.push(`/rooms/${room.uid}`)}
    >
      <div style={카드_썸네일_style(thumbnail_wrap_props)}>
        <img
          style={카드_썸네일_style(thumbnail_props)}
          alt="thumbnail"
          src={image}
        />
      </div>
      <div
        style={카드_라벨_style(
          thumbnail_wrap_props,
          label_overlay,
          is_selected
        )}
      >
        <span style={{ lineHeight: 1.41 }}>{`${
          SELLING_TYPE_MATCHER[room.selling_type]
        } ${room.deposit}/${room.monthly_rent}`}</span>
      </div>
      {is_selected ? (
        <div
          style={{
            backgroundColor: color.primaryYellow,
            width: width,
            height: 5,
            borderRadius: 2.5,
            marginTop: 3,
          }}
        />
      ) : (
        <div
          style={{
            width: width,
            height: 5,
            borderRadius: 2.5,
            marginTop: 3,
          }}
        />
      )}
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
  cursor: "pointer",
});

type AddCardProps = {
  width: number;
  height: number;
  align: string;
  plusSize: number;
  margin: string;
};
function AddCard({
  width,
  height,
  align,
  plusSize,
  margin,
}: AddCardProps): ReactElement {
  const history = useHistory();
  return (
    <div
      style={{
        width: width,
        height: height,
        margin: margin,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
