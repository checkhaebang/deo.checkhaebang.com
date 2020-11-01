import React, { CSSProperties, ReactElement } from "react";
import { color } from "~/colors";
import { BasicLayout } from "~/layouts";

const form = [
  {
    title: "방 제목",
    tag: "input",
    type: "string",
    unit: "",
    placeholder: "",
    items: [],
  },
  {
    title: "",
    tag: "options",
    type: "",
    unit: "",
    placeholder: "",
    items: ["월세", "전세", "매매"],
  },
  {
    title: "가격",
    tag: "input",
    type: "string",
    unit: "",
    placeholder: "",
    items: [],
  },
  {
    title: "주소",
    tag: "input",
    type: "string",
    unit: "",
    placeholder: "",
    items: [],
  },
  {
    title: "주거형태",
    tag: "options",
    type: "string",
    unit: "",
    placeholder: "",
    items: ["원룸", "투룸", "쓰리룸"],
  },
  {
    title: "",
    tag: "options",
    type: "",
    unit: "",
    placeholder: "",
    items: ["오피스텔", "아파트", "빌라"],
  },
  {
    title: "평형정보",
    tag: "input",
    type: "number",
    unit: "평",
    placeholder: "ex) 8",
    items: [],
  },
  {
    title: "층/건물층수",
    tag: "input",
    type: "string",
    unit: "층",
    placeholder: "ex) 3/8",
    items: [],
  },
  {
    title: "엘리베이터",
    tag: "options",
    type: "string",
    unit: "",
    placeholder: "",
    items: ["있음", "없음"],
  },
  {
    title: "관리비",
    tag: "input",
    type: "string",
    unit: "만원",
    placeholder: "ex) 5",
    items: [],
  },
];
class Add extends React.Component {
  render(): ReactElement {
    return (
      <BasicLayout
        titleBarProps={{ has_back: true, p_title: "방 직접 입력하기" }}
      >
        <div style={this.화면_영역_style()}>
          <div style={this.썸네일_영역_style()}>
            <p style={this.썸네일_텍스트_style()}>image</p>
          </div>
          <div style={this.폼_영역_style()}>
            {form.map(
              ({ title, tag, type, unit, placeholder, items }, index) => (
                <div key={index} style={this.폼_아이템_영역_style()}>
                  <p style={this.폼_아이템_제목_style()}>{title}</p>
                  {tag === "input" ? (
                    <input
                      type={type}
                      style={this.폼_아이템_input_style(unit.length)}
                      placeholder={placeholder}
                    />
                  ) : (
                    <></>
                  )}
                  {tag === "options" ? (
                    items?.map((item, item_index) => (
                      <div
                        key={item}
                        style={this.폼_아이템_option_style(
                          item_index,
                          items.length
                        )}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                  {unit ? <p style={{ alignSelf: "center" }}>{unit}</p> : <></>}
                </div>
              )
            )}
          </div>
          <div style={this.방_추가하기_버튼_style()}>
            <p style={this.버튼_글씨_style()}>방 추가하기</p>
          </div>
        </div>
      </BasicLayout>
    );
  }
  화면_영역_style = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
  });
  썸네일_영역_style = (): CSSProperties => ({
    width: 312,
    height: 207,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "16px 24px 0 24px",
    borderRadius: 2,
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: color.basicWhite,
  });
  썸네일_텍스트_style = (): CSSProperties => ({
    fontSize: 13,
    height: "fit-content",
    textAlign: "center",
    color: color.grayscalec9,
  });
  폼_영역_style = (): CSSProperties => ({
    width: 308,
    margin: "16px 28px 0 28px",
  });
  폼_아이템_영역_style = (): CSSProperties => ({
    width: 308,
    height: 34,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
  });
  폼_아이템_제목_style = (): CSSProperties => ({
    width: 70,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    color: color.grayscalebb,
  });
  폼_아이템_input_style = (unit_length: number): CSSProperties => ({
    width: 230 - unit_length * 23,
    marginRight: unit_length ? 8 : 0,
    height: 34,
    borderRadius: 2,
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: "rgba(133, 131, 146, 0.08)",
    border: 0,
  });
  폼_아이템_option_style = (
    index: number,
    items_count: number
  ): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: index && items_count ? 4 : 0,
    backgroundColor: "rgba(133, 131, 146, 0.08)",
    borderRadius: 2,
    width: (230 - 3 * items_count) / items_count,
    height: 34,
    opacity: 0.6,
    color: color.grayscale29,
    textAlign: "center",
    cursor: "pointer",
  });
  방_추가하기_버튼_style = (): CSSProperties => ({
    width: 312,
    height: 54,
    margin: "16px 24px 24px 24px",
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.03)",
    backgroundColor: color.primaryYellow,
    cursor: "pointer",
  });
  버튼_글씨_style = (): CSSProperties => ({ fontWeight: "bold" });
}
export default Add;
