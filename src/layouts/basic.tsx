import React, { CSSProperties, ReactElement } from "react";
import TITLE_LOGO from "../assets/title-logo-gray.svg";
import LEFT_ARROW from "../assets/left-arrow.svg";
import { ic_cancel } from "~/assets";
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
  const { has_back, title, closeable } = titleBarProps || {
    has_back: true,
    title: "",
    closeable: false,
  };
  return (
    <div style={style}>
      <TitleBar has_back={has_back} title={title} closeable={closeable} />
      {children}
    </div>
  );
}

type TitleBarProps = {
  has_back?: boolean;
  title?: string;
  closeable?: boolean;
};

/** 타이틀 바 */
function TitleBar({ has_back, title, closeable }: TitleBarProps): ReactElement {
  const leftMargin = has_back ? 24 : 0;
  const rightMargin = closeable ? 24 : 0;
  const history = useHistory();
  return (
    <div style={style()}>
      {has_back ? (
        <img
          style={leftIconStyle(leftMargin)}
          src={LEFT_ARROW}
          alt="left-icon"
          onClick={() => history.goBack()}
        />
      ) : (
        <p></p>
      )}
      {title ? (
        <p style={titleStyle(leftMargin, rightMargin)}>{title}</p>
      ) : (
        <img
          style={{
            marginLeft: `-${leftMargin}px`,
            marginRight: `-${rightMargin}px`,
          }}
          alt="title-logo"
          src={TITLE_LOGO}
        />
      )}
      {closeable ? (
        <img
          style={rightIconStyle(rightMargin)}
          alt="ic_cancel"
          src={ic_cancel}
        />
      ) : (
        <p></p>
      )}
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

const titleStyle = (
  leftMargin: number,
  rightMargin: number
): CSSProperties => ({
  width: 200,
  height: 22,
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
  marginLeft: `-${leftMargin}px`,
  marginRight: `-${rightMargin}px`,
});

const rightIconStyle = (rightMargin: number): CSSProperties => ({
  alignContent: "end",
  width: "16px",
  height: "16px",
  fill: "currentcolor",
  userSelect: "none",
  flexDirection: "initial",
  marginRight: `${rightMargin}px`,
  cursor: "pointer",
});

export { BasicLayout, TitleBar };
