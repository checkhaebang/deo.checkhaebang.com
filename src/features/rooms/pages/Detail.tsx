import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { BasicLayout } from "~/layouts";
import { AddCard, RoomCard } from "../components";
import Room from "../models";
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
        <div style={this.방_리스트_style()}>
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
