import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const {state} = useContext(ColorContext);
  //함수형 Component에서만 사용가능하나 겁나 편함
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor
        }}
      />
    </>
  );
};

export default ColorBox;
