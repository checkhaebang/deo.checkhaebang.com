import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { BasicLayout } from "~/layouts";
import { color } from "~/colors";

import { Room, SELLING_TYPE_MATCHER } from "../models";
import { loadRooms } from "../actions";
import { RoomListView, DetailCard, SummaryTable } from "../components";

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
            <DetailCard
              title={`${
                select.selling_type in SELLING_TYPE_MATCHER
                  ? SELLING_TYPE_MATCHER[select.selling_type]
                  : ""
              } ${select.deposit}${
                select.monthly_rent ? "/" + select.monthly_rent : ""
              }`}
            >
              <SummaryTable room={select} />
            </DetailCard>
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

export default connect(mapStateToProps, dispatchProps)(Detail);
