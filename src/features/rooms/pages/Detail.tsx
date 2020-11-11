import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { BasicLayout } from "~/layouts";
import { AddCard } from "../components";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.rooms.isLoading,
  rooms: state.rooms.rooms,
});
type MatchProps = {
  id: string;
};
type Props = ReturnType<typeof mapStateToProps> &
  RouteComponentProps<MatchProps>;
class Detail extends Component<Props> {
  componentDidMount() {
    const {
      match: { params },
      rooms,
    } = this.props;

    console.log(rooms.filter((room) => room.uid === params.id));
  }
  render(): ReactElement {
    return (
      <BasicLayout
        titleBarProps={{ p_title: "자취방 체크리스트", has_back: true }}
      >
        <div style={this.방_리스트_style()}>
          <AddCard align="start" width={56} height={56} plusSize={20} />
        </div>
      </BasicLayout>
    );
  }
  방_리스트_style = (): CSSProperties => ({
    display: "inline-grid",
    width: 380,
    height: 80,
    overflow: "scroll",
    alignItems: "center",
  });
}
export default connect(mapStateToProps)(Detail);
