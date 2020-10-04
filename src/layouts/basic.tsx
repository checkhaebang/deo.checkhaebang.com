import React, { CSSProperties, ReactElement } from "react";
import TITLE_LOGO from "../assets/title-logo-gray.svg";
import LEFT_ARROW from "../assets/left-arrow.svg";

interface LayoutProps {
  titleBarProps?: TitleBarProps;
  children: ReactElement;
}
/** 기본 레이아웃 */
export function BasicLayout({
  titleBarProps,
  children,
}: LayoutProps): ReactElement {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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

interface TitleBarProps {
  title?: string;
}

/** 타이틀 바 */
export function TitleBar({ title }: TitleBarProps): ReactElement {
  const leftMargin = 24;
  const style: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "46px",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
  };
  const leftIconStyle: CSSProperties = {
    alignContent: "start",
    width: "16px",
    height: "16px",
    fill: "currentcolor",
    userSelect: "none",
    flexDirection: "initial",
    marginLeft: `${leftMargin}px`,
    cursor: "pointer",
  };
  return (
    <div style={style}>
      <img style={leftIconStyle} src={LEFT_ARROW} alt="left-icon" />
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
