import { useReducer } from "react";

const reducer = (prevNumber, action) => {
  // prevNumber = 현재 state
  //action: dispatch 에서 인자로 받고있는 현재 액션 값

  switch (action) {
    case "INCREMENT":
      return prevNumber + 1;
    case "DECREMENT":
      return prevNumber - 1;
    case "RESET":
      return 7;
    default:
      return prevNumber;
  }
};
const UseReducerTest = () => {
  const [number, dispatch] = useReducer(reducer, 7);

  const increment = () => {
    dispatch("INCREMENT");
  };

  const decrement = () => {
    dispatch("DECREMENT");
  };

  const reset = () => {
    dispatch("RESET");
  };

  return (
    <>
      <h1> UseReducer hook</h1>
      <h2> {number} </h2>

      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerTest;
