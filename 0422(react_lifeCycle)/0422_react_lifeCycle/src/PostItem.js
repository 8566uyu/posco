import { useEffect, useState } from "react";
import "./App.css";

const PostItem = (props) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  const { posts } = props;
  console.log(posts);

  // const [text, setText] = useState("");
  //
  // useEffect(() => {
  //   console.log("update!!!");
  // }, [posts]);

  return (
    // TODO: 데이터 채우기

    <div className="PostItem">
      {posts.map((obj) => (
        <div key={obj.id} className="PostItem2">
          <span className="id">{obj.id}</span>
          <span className="title">{obj.title}</span>
          <p className="body">{obj.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostItem;
