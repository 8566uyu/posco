import { useState } from "react";
function HiComponent() {
  const [message, setMessage] = useState("안녕하세요");
  const [bool, setBool] = useState(true);
  const hello = () => {
    setMessage("안녕하세요");
    setBool(true);
  };
  const hi = () => {
    setMessage("");
    setBool(false);
  };

  return (
    <>
      {bool && (
        <>
          <h1>{message}</h1>
          <button onClick={hi}>사라져라</button>
        </>
      )}
      <button onClick={hello}>보여라</button>
    </>
  );
}
export default HiComponent;
