import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { BasicLayout } from "~/layouts";
import { color } from "~/colors";

import { Room, SELLING_TYPE_MATCHER } from "../models";
import { loadRooms } from "../actions";
import { loadChecklist } from "~/features/checklist/actions";
import { RoomListView, DetailCard, SummaryTable } from "../components";
import { ChecklistView } from "~/features/checklist/components";

const mapStateToProps = (state: RootState) => ({
  isRoomsLoading: state.rooms.isLoading,
  isChecklistLoading: state.checklist.isLoading,
  rooms: state.rooms.rooms,
  questions: state.checklist.questions,
});
type MatchProps = {
  id: string;
};
const dispatchProps = {
  fetchRooms: loadRooms.request,
  fetchChecklist: loadChecklist.request,
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
    this.props.fetchChecklist();
  }

  render(): ReactElement {
    const {
      match: { params },
      isRoomsLoading,
      isChecklistLoading,
      rooms,
      questions,
    }: Props = this.props;
    const select = rooms.filter((room) => room.uid === params.id)[0];
    const width = 56;
    const height = 56;
    const margin = "0 8px 0 0";

    return isRoomsLoading || isChecklistLoading ? (
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
              <>
                <SummaryTable room={select} />
                <ChecklistView questions={questions} />
              </>
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
