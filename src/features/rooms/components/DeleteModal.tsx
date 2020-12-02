/**
 * 방 삭제하기 선택 시 나오는 모달 창
 */
import React, {
  CSSProperties,
  ReactElement,
  useEffect,
  forwardRef,
} from "react";
import reactStringReplace from "react-string-replace";

import { color } from "~/colors";
import { ic_cancel } from "~/assets";

const 모달_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  width: 312,
  height: 182,
  borderRadius: 6,
  background: color.basicWhite,
  zIndex: 1002,
  overflow: "auto",
  outline: 0,
  padding: 24,
});
const 모달_오버레이_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  height: 509,
  width: 360,
  zIndex: 1001,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  transition: "background-color 1s ease",
});
const 모달_닫기_style = (): CSSProperties => ({
  width: 14,
  height: 14,
  alignSelf: "flex-end",
  cursor: "pointer",
  objectFit: "contain",
});
const 모달_내용_style = (): CSSProperties => ({
  width: 264,
  fontSize: 18,
  lineHeight: 1.31,
  color: color.grayscale29,
  textAlign: "center",
  marginBottom: 20,
});
const 모달_버튼_컨테이너_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
type Props = {
  room_price: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
const modal_overlay = "modal_overlay";
export const DeleteModal = forwardRef(
  (
    { room_price, visible, setVisible }: Props,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const handleOutsideClick = (e: MouseEvent): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      if (ref.current && !ref.current.contains(e.target)) {
        if ((e.target as HTMLDivElement).id === modal_overlay) {
          setVisible(false);
        }
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    });

    return (
      <div
        style={{
          display: `${visible ? "flex" : "none"}`,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -509,
          zIndex: 1000,
        }}
      >
        <div id={modal_overlay} style={모달_오버레이_style()}>
          <div ref={ref} style={모달_style()}>
            <img
              alt="dismiss"
              src={ic_cancel}
              style={모달_닫기_style()}
              onClick={() => setVisible(false)}
            />
            <span style={모달_내용_style()}>
              {reactStringReplace(
                `<b>'${room_price}'</b> 방을\n삭제하시겠습니까?`,
                /<b>(.*)<\/b>/g,
                (match, i) => (
                  <span key={i} style={{ fontWeight: "bold" }}>
                    {match}
                  </span>
                )
              )}
            </span>
            <div style={모달_버튼_컨테이너_style()}>
              <Button
                content="아니요, 그냥 둘게요"
                border={`solid 1px ${color.grayscalec9}`}
                background={color.grayscalef9}
                onClick={() => setVisible(false)}
              />
              <Button
                content="네, 삭제할래요"
                border={`solid 1px ${color.primaryDeepDarkBlue}`}
                background={`${color.primaryDeepDarkBlue}`}
                fontColor={`${color.basicWhite}`}
                onClick={() => {
                  setVisible(false);
                  console.log("delete");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const 모달_버튼_style = (
  border: string,
  background: string
): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 124,
  height: 38,
  cursor: "pointer",
  border: border,
  background: background,
  borderRadius: 4,
});

type ButtonProps = {
  content: string;
  border: string;
  background: string;
  fontColor?: string;
  onClick: CallableFunction;
};
function Button({
  content,
  border,
  background,
  fontColor,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <div style={모달_버튼_style(border, background)} onClick={() => onClick()}>
      <span
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: fontColor || color.basicBlack,
        }}
      >
        {content}
      </span>
    </div>
  );
}
