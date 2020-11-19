import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { BasicLayout } from "~/layouts";
import { color } from "~/colors";

import { AddCard, RoomCard } from "../components";
import Room, { BUILDING_TYPE_MATHCER, SELLING_TYPE_MATCHER } from "../models";
import { loadRooms } from "../actions";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.rooms.isLoading,
  rooms: state.rooms.rooms,
});
type MatchProps = {
  id: string;
};
const dispatchProps = {
  fetchRooms: loadRooms.request,
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  RouteComponentProps<MatchProps>;

type State = {
  room: Room;
};
class Detail extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render(): ReactElement {
    const {
      match: { params },
      isLoading,
      rooms,
    }: Props = this.props;
    const select = rooms.filter((room) => room.uid === params.id)[0];
    const width = 56;
    const height = 56;
    const margin = "0 8px 0 0";

    return isLoading ? (
      <>Loading..</>
    ) : (
      <BasicLayout
        titleBarProps={{ p_title: "자취방 체크리스트", has_back: true }}
      >
        <div>
          <RoomListView
            width={width}
            height={height}
            margin={margin}
            select={select}
            rooms={rooms}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: 549,
              backgroundColor: color.primaryDeepDarkBlue,
              overflowY: "auto",
            }}
          >
            <DetailCard room={select} />
          </div>
        </div>
      </BasicLayout>
    );
  }
  방_리스트_style = (): CSSProperties => ({
    display: "flex",
    margin: "0 24px 0 24px",
    height: 80,
    overflowX: "auto",
    flexWrap: "nowrap",
  });
}

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

function RoomListView({
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

function DetailCard({ room }: DetailCardProps): ReactElement {
  return (
    <div style={디테일_카드_style()}>
      <p style={디테일_카드_타이틀_style()}>{`${
        SELLING_TYPE_MATCHER[room.selling_type]
      } ${room.deposit}`}</p>
      <div style={디테일_카드_타이틀_언더바_style()} />
      <DatailCardRow label="가격" content={`${room.deposit}`} />
      <DatailCardRow label="주소" content={room.address} />
      <DatailCardRow
        label="주거형태"
        content={BUILDING_TYPE_MATHCER[room.building_type]}
      />
      <DatailCardRow label="평형정보" content={`${room.room_size}`} />
      <DatailCardRow label="층/건물층수" content={room.floor} />
      <DatailCardRow
        label="엘리베이터"
        content={room.has_elevator ? "있음" : "없음"}
      />
      <DatailCardRow
        label="관리비"
        content={`${room.administrative_expenses}`}
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
export default connect(mapStateToProps, dispatchProps)(Detail);
