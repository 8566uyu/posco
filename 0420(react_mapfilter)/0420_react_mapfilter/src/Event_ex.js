import { useState } from "react";

const Email = () => {
  // alphabet, state: 리스트에 대한 상태
  const [email, setEmail] = useState([
    { id: 1, name: "코디", mail: "codi@gmail.com" },
    { id: 2, name: "윤소희", mail: "yoonsohee@gmail.com" },
  ]);
  // inputAlpha state: input 에 넣는 값에 대한 상태
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");

  const addAlpha = () => {
    if (inputMail.trim().length === 0) return;

    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newEmail = email.concat({
      id: email.length + 1,
      name: inputName,
      mail: inputMail,
    });

    setEmail(newEmail); // 리스트 상태 업데이트
    setInputMail(""); // input창 초기화
    setInputName(""); // input창 초기화
  };

  const deleteMail = (id) => {
    const newEmail = email.filter((obj) => obj.id !== id);
    setEmail(newEmail);
  };

  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") addAlpha();
  };

  return (
    <>
      <input
        type="text"
        value={inputName}
        placeholder="이름"
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="text"
        value={inputMail}
        placeholder="이메일"
        onChange={(e) => setInputMail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />

      <button onClick={addAlpha}>등록</button>
      <ol>
        {email.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteMail(obj.id)}>
            {obj.name} : {obj.mail}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Email;
