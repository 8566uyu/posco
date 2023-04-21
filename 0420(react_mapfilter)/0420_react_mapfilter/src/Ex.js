import { useState } from "react";

const Ex = () => {
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(""); // 제목 input state
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: "hi",
      title: "안뇽",
    },
    {
      id: 2,
      writer: "기민",
      title: "나 돌아왓다",
    },
    {
      id: 3,
      writer: "찌리리",
      title: "반갑다",
    },
  ]); // 댓글 목록 배열 state

  const addComment = () => {
    const newComment = comment.concat({
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    });

    setComment(newComment); // 리스트 상태 업데이트
    setInputWriter(""); // input창 초기화
    setInputTitle(""); // input창 초기화
  };

  return (
    <>
      <fieldset>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          placeholder="작성자"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        &nbsp;
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          placeholder="제목"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button onClick={addComment}>작성</button>
      </fieldset>
      <br />
      <select name="namess" id="">
        <option value="1" selected>
          작성자
        </option>
        <option value="2">제목</option>
      </select>
      &nbsp;
      <input
        type="text"
        id="title"
        placeholder="검색어"
        // onChange={(e) => setInputAlpha(e.target.value)}
        // onKeyDown={(e) => activeEnter(e)}
      />
      &nbsp;
      <button>검색</button>
      {/*<ol>*/}
      {/*  {comment.map((obj) => (*/}
      {/*    <li key={obj.id}>{obj.comment}</li>*/}
      {/*  ))}*/}
      {/*</ol>*/}
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목 </th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Ex;
