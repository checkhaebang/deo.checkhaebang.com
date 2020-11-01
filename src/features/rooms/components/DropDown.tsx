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
  const handleOutsideClick = (e: any) => {
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
  }, []);
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
    justifyContent: "center",
    flexDirection: "row",
    borderBottom: "2px solid black",
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
    margin: 0,
    fontWeight: "bold",
    marginRight: 6,
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
        backgroundColor: color.basicBlack,
        padding: "2px 0 12px 0",
        marginTop: -8,
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
      style={{ display: "flex", flexDirection: "row" }}
      onClick={() => {
        dispatch(setSelect(index));
        dispatch(setMenuOpen(false));
      }}
    >
      <TextView text={text} />
      <RadioButton select={select} index={index} />
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
        margin: "12px 0 0 4px",
        color: color.grayscalef9,
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
        margin: "12px 0 0 0",
        alignSelf: "center",
        cursor: "pointer",
        width: 13,
        height: 13,
        border: `solid 2px ${color.grayscale29}`,
        borderRadius: 7,
        backgroundColor: `${
          select === index ? color.primaryYellow : color.basicWhite
        }`,
      }}
    />
  );
}

export default DropDown;
