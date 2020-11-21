import React, { CSSProperties, ReactElement } from "react";

import { color } from "~/colors";

import {
  Room,
  BUILDING_TYPE_MATHCER,
  SELLING_TYPE_MATCHER,
  ROOM_CONTENTS_LABEL,
} from "../models";
import { ChecklistView } from "~/features/checklist/components";

const 상세보기_카드_style = (): CSSProperties => ({
  width: 312,
  height: 1000,
  backgroundColor: color.basicWhite,
  borderRadius: 6,
  marginTop: 16,
  padding: "0 24px 0 24px",
});
const 상세보기_카드_타이틀_style = (): CSSProperties => ({
  fontSize: 26,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  letterSpacing: "normal",
  color: color.grayscale29,
  margin: "28px 0 0 0",
});
const 상세보기_카드_타이틀_언더바_style = (): CSSProperties => ({
  backgroundColor: color.primaryDullPurple,
  height: 2,
  width: 264,
  marginTop: 14,
});

type DetailCardProps = {
  title: string;
  children?: ReactElement;
};

export default function DetailCard({
  title,
  children,
}: DetailCardProps): ReactElement {
  return (
    <div style={상세보기_카드_style()}>
      <p style={상세보기_카드_타이틀_style()}>{title}</p>
      <div style={상세보기_카드_타이틀_언더바_style()} />
      {children}
    </div>
  );
}

type DetailCardTableProps = {
  room: Room;
};
type RoomSummary = {
  price: string;
  address: string;
  buildingType: string;
  size: string;
  floor: string;
  elevator: string;
  administrationCost: string;
};
export function SummaryTable({ room }: DetailCardTableProps): ReactElement {
  const {
    selling_type,
    deposit,
    monthly_rent,
    address,
    building_type,
    room_size,
    floor,
    has_elevator,
    administrative_expenses,
  } = room;
  const summary: RoomSummary = {
    price: `${
      selling_type in SELLING_TYPE_MATCHER
        ? SELLING_TYPE_MATCHER[selling_type]
        : ""
    } ${deposit}${monthly_rent ? "/" + monthly_rent : ""}`,
    address: address,
    buildingType: BUILDING_TYPE_MATHCER[building_type],
    size: `${Math.round(room_size / 3.33)}평`,
    floor: floor,
    elevator: has_elevator ? "있음" : "없음",
    administrationCost: `${administrative_expenses}만 원`,
  };

  return (
    <>
      {Object.entries(ROOM_CONTENTS_LABEL).map(([key, label]) => (
        <SummaryRow label={label} content={summary[key as keyof RoomSummary]} />
      ))}
      <ChecklistView />
    </>
  );
}

const 밑줄_style = (): CSSProperties => ({
  width: 264,
  height: 1,
  backgroundColor: color.grayscalef9,
});
type DetailCardRowProps = {
  label: string;
  content: string;
};
function SummaryRow({ label, content }: DetailCardRowProps): ReactElement {
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
      <div style={밑줄_style()} />
    </div>
  );
}
