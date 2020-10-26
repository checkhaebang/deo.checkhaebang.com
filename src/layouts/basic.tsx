import React, { CSSProperties, ReactElement } from "react";
import TITLE_LOGO from "../assets/title-logo-gray.svg";
import LEFT_ARROW from "../assets/left-arrow.svg";
import { useHistory } from "react-router-dom";
type LayoutProps = {
  titleBarProps?: TitleBarProps;
  children: ReactElement;
};
/** 기본 레이아웃 */
function BasicLayout({ titleBarProps, children }: LayoutProps): ReactElement {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "rgb(249, 249, 249)",
  };
  return (
    <div style={style}>
      <TitleBar title={titleBarProps?.title} />
      {children}
    </div>
  );
}

type TitleBarProps = {
  title?: string;
};

/** 타이틀 바 */
function TitleBar({ title }: TitleBarProps): ReactElement {
  const leftMargin = 24;
  const history = useHistory();
  return (
    <div style={style()}>
      <img
        style={leftIconStyle(leftMargin)}
        src={LEFT_ARROW}
        alt="left-icon"
        onClick={() => history.goBack()}
      />
      {title ? <p>{title}</p> : ""}
      <img
        style={{ marginLeft: `-${leftMargin}px` }}
        alt="title-logo"
        src={TITLE_LOGO}
      />
      <img alt="" />
    </div>
  );
}
const style = (): CSSProperties => ({
  display: "flex",
  width: "100%",
  height: "46px",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "16px",
});
const leftIconStyle = (leftMargin: number): CSSProperties => ({
  alignContent: "start",
  width: "16px",
  height: "16px",
  fill: "currentcolor",
  userSelect: "none",
  flexDirection: "initial",
  marginLeft: `${leftMargin}px`,
  cursor: "pointer",
});

export { BasicLayout, TitleBar };
