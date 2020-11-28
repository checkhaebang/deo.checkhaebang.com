import React, { Component, CSSProperties, ReactElement } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { BasicLayout } from "~/layouts";
import { color } from "~/colors";

import { Room, SELLING_TYPE_MATCHER } from "../models";
import { loadRooms } from "../actions";
import { loadChecklist } from "~/features/checklist/actions";
import {
  RoomListView,
  DetailCard,
  SummaryTable,
  DeleteModal,
} from "../components";
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
  room?: Room;
  visible: boolean;
};
class Detail extends Component<Props, State> {
  private ref = React.createRef<HTMLDivElement>();
  constructor(props: Props) {
    super(props);
    this.state = { visible: false };
  }
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

    const title = select
      ? `${
          select.selling_type in SELLING_TYPE_MATCHER
            ? SELLING_TYPE_MATCHER[select.selling_type]
            : ""
        } ${select.deposit}${
          select.monthly_rent ? "/" + select.monthly_rent : ""
        }`
      : "";

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
          <div style={this.방_상세정보_wrapper_style()}>
            <DetailCard title={title}>
              <>
                <SummaryTable room={select} />
                <ChecklistView questions={questions} />
              </>
            </DetailCard>
            <DeleteButton
              setVisible={(visible: boolean) =>
                this.setState({ visible: visible })
              }
            />
          </div>
          <DeleteModal
            room_price={title}
            ref={this.ref}
            visible={this.state.visible}
            setVisible={(visible: boolean) => {
              this.setState({ visible: visible });
            }}
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
  방_상세정보_wrapper_style = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 549,
    backgroundColor: color.primaryDeepDarkBlue,
    overflowY: "auto",
    paddingBottom: 40,
  });
}

const 방_삭제하기_버튼_style = (): CSSProperties => ({
  width: 310,
  height: 51,
  background: color.grayscalec9,
  borderRadius: 6,
});
const 방_삭제하기_버튼_텍스트_style = (): CSSProperties => ({
  height: 51,
  lineHeight: "51px",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  fontWeight: "bold",
  color: color.primaryDeepDarkBlue,
});

type DeleteButtonProps = {
  setVisible: (visible: boolean) => void;
};
function DeleteButton({ setVisible }: DeleteButtonProps): ReactElement {
  return (
    <div style={방_삭제하기_버튼_style()}>
      <span
        style={방_삭제하기_버튼_텍스트_style()}
        onClick={() => setVisible(true)}
      >
        방 삭제하기
      </span>
    </div>
  );
}

export default connect(mapStateToProps, dispatchProps)(Detail);
