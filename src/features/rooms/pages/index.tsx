import React, { CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";

import { connect } from "react-redux";
import { color } from "~/colors";
import { BasicLayout, TitleBarProps } from "~/layouts";

import { DropDown, RoomCard, AddCard } from "../components";
import Crawling from "./Crawling";
import Add from "./Add";
import Detail from "./Detail";

import { loadRooms } from "../actions";

const mapStateToProps = (state: RootState) => ({
  menu: {
    select: state.rooms.select,
    items: state.rooms.menu_items,
    is_open: state.rooms.is_menu_open,
  },
  isLoading: state.rooms.isLoading,
  rooms: state.rooms.rooms,
});
const dispatchProps = {
  fetchRooms: loadRooms.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
class Rooms extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchRooms();
  }
  render(): ReactElement {
    const { isLoading, rooms, menu }: Props = this.props;
    const { select, items, is_open } = menu;
    const width = 148;
    const height = 148;
    const plusSize = 56;
    const margin = "0 0 0 0";
    return isLoading ? (
      <>Loading..</>
    ) : (
      <BasicLayout titleBarProps={this.타이틀바_props()}>
        <div style={this.컨테이너_style()}>
          <MenuSection items={items} is_open={is_open} select={select} />
          <div
            style={{
              height: 568,
              padding: 8,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(3, 1fr)",
              overflow: "scroll",
            }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.uid}
                room={room}
                height={height}
                width={width}
                margin={margin}
                label_overlay={false}
                is_selected={false}
              />
            ))}
            <AddCard
              align="center"
              margin={margin}
              height={height}
              width={width}
              plusSize={plusSize}
            />
          </div>
        </div>
      </BasicLayout>
    );
  }
  타이틀바_props(): TitleBarProps {
    return {
      backgroundColor: color.primaryYellow,
      txt_title: "민철's",
      is_black_logo: true,
      has_profile: true,
    };
  }
  컨테이너_style(): CSSProperties {
    return { display: "flex", flexDirection: "column" };
  }
}
type MenuSectionProps = {
  items: Array<string>;
  is_open: boolean;
  select: number;
};
class MenuSection extends React.Component<MenuSectionProps> {
  render(): ReactElement {
    const { items, is_open, select } = this.props;
    return (
      <div style={this.컨테이너_style()}>
        <div style={this.메뉴_style()}>
          <p style={this.메뉴_p_style()}>지금은</p>
          <DropDown items={items} is_open={is_open} select={select} />
        </div>
      </div>
    );
  }
  컨테이너_style(): CSSProperties {
    return {
      display: "flex",
      flexDirection: "row",
      width: 360,
      height: 58,
      zIndex: 999,
    };
  }
  메뉴_style(): CSSProperties {
    return {
      marginLeft: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      height: 30,
    };
  }
  메뉴_p_style(): CSSProperties {
    return {
      fontSize: 22,
      height: 30,
      padding: 0,
      margin: "0 8px 0 0",
      fontWeight: "bold",
    };
  }
}

export { Crawling, Add, Detail };

export default connect(mapStateToProps, dispatchProps)(Rooms);
