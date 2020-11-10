import React, { CSSProperties, ReactElement } from "react";
import LEFT_ARROW from "../assets/left-arrow.svg";
import {
  ic_cancel,
  ic_human,
  title_logo_gray,
  title_logo_black,
} from "~/assets";
import { useHistory } from "react-router-dom";
import { color } from "~/colors";
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
    background: color.grayscalef9,
  };
  const {
    has_back,
    p_title,
    txt_title,
    is_black_logo,
    closeable,
    has_profile,
    backgroundColor,
  } = titleBarProps || {
    has_back: true,
    p_title: "",
    txt_title: "",
    is_black_logo: undefined,
    closeable: false,
    has_profile: false,
    backgroundColor: undefined,
  };
  return (
    <div style={style}>
      <TitleBar
        has_back={has_back}
        p_title={p_title}
        txt_title={txt_title}
        is_black_logo={is_black_logo}
        closeable={closeable}
        has_profile={has_profile}
        backgroundColor={backgroundColor}
      />
      {children}
    </div>
  );
}

type TitleBarProps = {
  has_back?: boolean;
  p_title?: string;
  txt_title?: string;
  is_black_logo?: boolean;
  closeable?: boolean;
  has_profile?: boolean;
  backgroundColor?: string;
};

/** 타이틀 바 */
function TitleBar({
  has_back,
  p_title,
  txt_title,
  is_black_logo,
  closeable,
  has_profile,
  backgroundColor,
}: TitleBarProps): ReactElement {
  const icon_size = 16;
  const leftMargin = has_back ? 24 : 0;
  const rightMargin = closeable || has_profile ? 24 : 0;
  const history = useHistory();
  return (
    <div style={style(backgroundColor)}>
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
      {p_title ? (
        <p style={titleStyle(leftMargin, rightMargin)}>{p_title}</p>
      ) : (
        <></>
      )}
      {is_black_logo !== undefined ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: `-${has_back ? leftMargin + icon_size : 0}px`,
            marginRight: `-${closeable ? rightMargin + icon_size : 0}px`,
          }}
        >
          {txt_title ? <p style={txtTitleStyle()}>{txt_title} </p> : <></>}
          <img
            style={{ marginLeft: 8 }}
            alt="title-logo"
            src={is_black_logo ? title_logo_black : title_logo_gray}
          />
        </div>
      ) : (
        <></>
      )}
      {closeable ? (
        <img
          style={rightIconStyle(rightMargin)}
          alt="ic_cancel"
          src={ic_cancel}
          onClick={() => history.goBack()}
        />
      ) : (
        <></>
      )}
      {has_profile ? (
        <img
          style={rightIconStyle(rightMargin)}
          alt="ic_profile"
          src={ic_human}
        />
      ) : (
        <></>
      )}
      {!closeable && !has_profile ? <p></p> : <></>}
    </div>
  );
}
const style = (backgroundColor?: string): CSSProperties => ({
  display: "flex",
  width: "100%",
  height: "46px",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: backgroundColor ? backgroundColor : color.grayscalef9,
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
const txtTitleStyle = (): CSSProperties => ({
  width: 59,
  height: 22,
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
  textAlign: "right",
  color: color.grayscale29,
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

export type { TitleBarProps };
export { BasicLayout, TitleBar };
