import React, { useState } from "react";

function FunctionComponent() {
  //const list = 'abc'
  const [counter, setCounter] = useState(0);
  console.log(counter);
  //console.log(props);
  //props = {name:"둘리", age: "400"}
  const Increase = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };
  const Decrease = () => {
    setCounter(counter - 2);
    console.log("클릭되었습니다");
  };
  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={Increase}>숫자업</button>
      <button onClick={Decrease}>숫자다운</button>
    </div>
  );
}

export default FunctionComponent;
