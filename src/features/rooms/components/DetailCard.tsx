import React, { CSSProperties, ReactElement } from "react";

import { color } from "~/colors";

import Room, { BUILDING_TYPE_MATHCER, SELLING_TYPE_MATCHER } from "../models";

const 디테일_카드_style = (): CSSProperties => ({
  width: 312,
  height: 1000,
  backgroundColor: color.basicWhite,
  borderRadius: 6,
  marginTop: 16,
  padding: "0 24px 0 24px",
});
const 디테일_카드_타이틀_style = (): CSSProperties => ({
  fontSize: 26,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  letterSpacing: "normal",
  color: color.grayscale29,
  margin: "28px 0 0 0",
});
const 디테일_카드_타이틀_언더바_style = (): CSSProperties => ({
  backgroundColor: color.primaryDullPurple,
  height: 2,
  width: 264,
  marginTop: 14,
});

type DetailCardProps = {
  room: Room;
};

export default function DetailCard({ room }: DetailCardProps): ReactElement {
  const 유형_보증금 = `${SELLING_TYPE_MATCHER[room.selling_type]} ${
    room.deposit
  }`;
  const 유형_보증금_월세 = `${SELLING_TYPE_MATCHER[room.selling_type]} ${
    room.deposit
  }/${room.monthly_rent}`;
  return (
    <div style={디테일_카드_style()}>
      <p style={디테일_카드_타이틀_style()}>{유형_보증금}</p>
      <div style={디테일_카드_타이틀_언더바_style()} />
      <DatailCardRow label="가격" content={유형_보증금_월세} />
      <DatailCardRow label="주소" content={room.address} />
      <DatailCardRow
        label="주거형태"
        content={BUILDING_TYPE_MATHCER[room.building_type]}
      />
      <DatailCardRow
        label="평형정보"
        content={`${Math.round(room.room_size / 3.33)}평`}
      />
      <DatailCardRow label="층/건물층수" content={room.floor} />
      <DatailCardRow
        label="엘리베이터"
        content={room.has_elevator ? "있음" : "없음"}
      />
      <DatailCardRow
        label="관리비"
        content={`${room.administrative_expenses}만 원`}
      />
    </div>
  );
}

const 디테일_카드_행_언더바_style = (): CSSProperties => ({
  width: 264,
  height: 1,
  backgroundColor: color.grayscalef9,
});
type DetailCardRowProps = {
  label: string;
  content: string;
};
function DatailCardRow({ label, content }: DetailCardRowProps): ReactElement {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          width: 264,
          height: 25,
        }}
      >
        <span
          style={{
            fontSize: 11,
            width: 69,
            height: 16,
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.41,
            margin: "4px 0 5px 2px",
            letterSpacing: "normal",
            color: color.grayscalebb,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: 11,
            width: 196,
            height: 16,
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.41,
            margin: "4px 5px 0 2px",
            letterSpacing: "normal",
            color: color.grayscale29,
          }}
        >
          {content}
        </span>
      </div>
      <div style={디테일_카드_행_언더바_style()} />
    </div>
  );
}
