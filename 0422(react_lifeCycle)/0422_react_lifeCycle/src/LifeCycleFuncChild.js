import { useEffect } from "react";
import { useState } from "react";
// 자식 컴포넌트
const LifeCycleFuncChild = (props) => {
  // console.log("props >>> ", props);
  const { number } = props;
  const [text, setText] = useState("");

  // useEffect(() => {
  //   // mount 시점에 실행
  //   console.log("mount!!!");
  //
  //   // unmount 시점에 실행
  //   return () => {
  //     console.log("unmount!!!");
  //   };
  // }, []);
  //
  // // mount & update 시점에 실행
  // useEffect(() => {
  //   console.log("mount or update!!!");
  // });

  // text state 가 바뀔떄마다 실행

  useEffect(() => {
    console.log("update!!!");
  }, [text]);

  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>{" "}
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
