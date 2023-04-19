import { useState } from "react";
function HiComponentEx() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색 글씨");
  const red = () => {
    setColor("red");
    setText("빨간색 글씨");
  };
  const blue = () => {
    setColor("blue");
    setText("파란색 글씨");
  };

  return (
    <>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={red}>빨간색 글씨</button>
      <button onClick={blue}>파란색 글씨</button>
    </>
  );
}
export default HiComponentEx;
