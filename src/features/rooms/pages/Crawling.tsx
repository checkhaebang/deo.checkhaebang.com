/**
 * /rooms/crawling 의 화면
 */
import React, { CSSProperties, ReactElement } from "react";
import { BasicLayout } from "~/layouts";
import { color } from "~/colors";
import { RouteComponentProps } from "react-router-dom";

class Crawling extends React.Component<RouteComponentProps> {
  render(): ReactElement {
    return (
      <BasicLayout
        titleBarProps={{ p_title: "자취방 추가하기", closeable: true }}
      >
        <div style={this.style()}>
          <p style={this.불러올_수_있어요_style()}>
            직방/다방 URL 링크로 방을 불러올 수 있어요.
          </p>
          <input
            className="crawling_url"
            style={this.링크를_입력해주세요_style()}
            placeholder={"URL 링크를 입력해주세요."}
          ></input>
          <div style={this.방_정보_불러오기_style()}>
            <p style={this.버튼_글씨_style()}>방 정보 불러오기</p>
          </div>
          <div
            style={this.직접_입력하기_style()}
            onClick={() => this.props.history.push("/rooms/add")}
          >
            <p style={this.버튼_글씨_style()}>직접 입력하기</p>
          </div>
        </div>
      </BasicLayout>
    );
  }
  style = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "660px",
  });
  불러올_수_있어요_style = (): CSSProperties => ({
    width: 312,
    height: 19,
    margin: "173px 24px 0 24px",
    fontSize: 12,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: 1.29,
    color: color.grayscale29,
  });
  링크를_입력해주세요_style = (): CSSProperties => ({
    width: 312,
    height: 43,
    margin: "16px 24px 0 24px",
    paddingLeft: 16,
    borderRadius: 2,
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: "rgba(133, 131, 146, 0.08)",
    border: 0,
  });
  방_정보_불러오기_style = (): CSSProperties => ({
    width: 312,
    height: 54,
    margin: "198px 24px 0 24px",
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: color.primaryYellow,
    cursor: "pointer",
  });
  직접_입력하기_style = (): CSSProperties => ({
    width: 312,
    height: 54,
    margin: "8px 24px 0 24px",
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: color.grayscalef9,
    border: `solid 1px ${color.grayscalec9}`,
    cursor: "pointer",
  });
  버튼_글씨_style = (): CSSProperties => ({ fontWeight: "bold" });
}
export default Crawling;
