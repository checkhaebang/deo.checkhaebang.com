/**
 * /rooms 에서 보여줄 정보의 카테고리를 선택하는 드롭다운
 */
import React, { ReactElement, CSSProperties, useEffect, useRef } from "react";
import { setSelect, setMenuOpen } from "../actions";
import { useDispatch } from "react-redux";
import { color } from "~/colors";

type Props = {
  items: Array<string>;
  is_open: boolean;
  select: number;
};

type State = {
  is_open: boolean;
  select: number;
};

function DropDown({ items, select, is_open }: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleOutsideClick = (e: MouseEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(setMenuOpen(false));
    }
  };

  const item = items[select];
  const toggle = () => dispatch(setMenuOpen(!is_open));

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <div ref={ref}>
      <div style={컨테이너_style(is_open)} onClick={() => toggle()}>
        <p style={선택된_내용_style(is_open)}>{item}</p>
        <IconTriangle is_open={is_open} />
      </div>
      <ListView visible={is_open} items={items} select={select} />
    </div>
  );
}

const 컨테이너_style = (is_open: boolean): CSSProperties => {
  return {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottom: "2px solid black",
    width: 117,
    marginBottom: -5,
    cursor: "pointer",
    backgroundColor: `${is_open ? color.basicBlack : color.grayscalef9}`,
  };
};
const 선택된_내용_style = (is_open: boolean): CSSProperties => {
  return {
    fontSize: 22,
    height: 30,
    padding: 0,
    margin: "0 6px 2px 8px",
    fontWeight: "bold",
    color: `${is_open ? color.basicWhite : color.basicBlack}`,
  };
};

type IconProps = {
  is_open: boolean;
};
function IconTriangle({ is_open }: IconProps): ReactElement {
  return <div style={icon_style(is_open)} />;
}
const icon_style = (is_open: boolean): CSSProperties => {
  const ic_down = {
    borderTop: `6px solid ${is_open ? color.grayscalef9 : color.basicBlack}`,
  };
  const ic_up = {
    borderBottom: `6px solid ${is_open ? color.grayscalef9 : color.basicBlack}`,
  };
  const icon = is_open ? ic_up : ic_down;
  return {
    alignSelf: "center",
    width: 6,
    height: 6,
    marginRight: 8,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    ...icon,
  };
};

type ListViewProps = {
  items: Array<string>;
  visible: boolean;
  select: number;
};
function ListView({ items, visible, select }: ListViewProps): ReactElement {
  return (
    <div
      style={{
        display: `${visible ? "block" : "none"}`,
        backgroundColor: color.basicWhite,
        padding: "1px 0 1 0",
        marginTop: 5,
        border: `1px solid ${color.grayscalec9}`,
      }}
    >
      {items?.map((item, index) => (
        <ListItemView
          key={index}
          textViewProps={{ text: item }}
          radioButtonProps={{ select: select, index: index }}
        />
      ))}
    </div>
  );
}

type ListItemViewProps = {
  textViewProps: TextViewProps;
  radioButtonProps: RadioButtonProps;
};
function ListItemView({
  textViewProps,
  radioButtonProps,
}: ListItemViewProps): ReactElement {
  const dispatch = useDispatch();
  const { text } = textViewProps;
  const { select, index } = radioButtonProps;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onClick={() => {
          dispatch(setSelect(index));
          dispatch(setMenuOpen(false));
        }}
      >
        <TextView text={text} />
        <RadioButton select={select} index={index} />
      </div>
      <div
        style={{
          marginTop: 12,
          width: 101,
          height: 1,
          backgroundColor: color.grayscalef9,
          alignSelf: "center",
        }}
      />
    </div>
  );
}

type TextViewProps = {
  text: string;
};
function TextView({ text }: TextViewProps): ReactElement {
  return (
    <p
      style={{
        width: 80,
        height: 22,
        fontSize: 16,
        fontWeight: "bold",
        margin: "10px 0 0 4px",
        color: color.basicBlack,
        cursor: "pointer",
      }}
    >
      {text}
    </p>
  );
}
type RadioButtonProps = {
  index: number;
  select: number;
};
function RadioButton({ index, select }: RadioButtonProps): ReactElement {
  return (
    <div
      style={{
        color: "white",
        margin: "14px 8px 0 0",
        alignSelf: "center",
        cursor: "pointer",
        width: 13,
        height: 13,
        lineHeight: 13,
        border: `solid 3px ${color.grayscale29}`,
        borderRadius: "50%",
        backgroundColor: `${
          select === index ? color.primaryYellow : color.basicWhite
        }`,
      }}
    />
  );
}

export default DropDown;
