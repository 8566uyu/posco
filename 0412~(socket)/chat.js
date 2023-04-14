const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

//닉네임을 저장할 객체
// : 닉네임이 겹치지 않도록 객체({ })를 사용함
// { 소켓_아이디: 닉네임, ...}
const nickObj = {};

//닉네임 리스크 객체 업데이트
function updateNickList() {
  //닉네임 리스트 전송
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // ⭕❌
  //최초 입장시 (연결)
  // socket.id: 소켓 고유 아이디 ->socket 은 웹 페이지별로 id 생성!
  // 크롬에서 탭 2개 띄우면 socket.id 는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // [실습1]
  // socket.on("hello", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   //server -> client 보낼 때
  //   socket.emit("hellokr", { who: "hello", msg: "안녕 ~" });
  // });
  //
  // socket.on("study", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   //server -> client 보낼 때
  //   socket.emit("studykr", { who: "study", msg: "공부 좀 혀 ~" });
  // });
  //
  // socket.on("bye", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   //server -> client 보낼 때
  //   socket.emit("byekr", { who: "bye", msg: "잘 가라 ~" });
  // });

  //[실습3] 채팅창 입장 안내 문구
  // io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);
  socket.on("setNick", (nick) => {
    console.log("socket in setNick >> ", nick); // 프론트에서 입력한 값

    // 닉네임 중복 여부
    if (Object.values(nickObj).indexOf(nick) > -1) {
      // 아이디 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요!");
    } else {
      // 아이디 통과
      nickObj[socket.id] = nick; //nick 객체에 '소켓_아이디: 닉네임' 추가
      io.emit("notice", `${nick}님이 입장하셨습니다.`); // 입장 메세지 "전체 공지"
      // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); //입장 성공시
      updateNickList(); // 닉네임 리스크 객체 업데이트
    }
  });

  // 실습 3-3 접속자 퇴장
  //disconnect event : 클라이언트가 연결을 끊었을 떄 발생 (브라우저 탭 닫음)
  socket.on("disconnect", () => {
    console.log("**** Server socket Disconnected >> ", socket.id);
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`); // 퇴장 메세지 "전체 공지"
    // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
    delete nickObj[socket.id];
    updateNickList(); // 닉네임 리스크 객체 업데이트
  });

  // //실습4 채팅창 메세지 전송
  // socket.on("send", (obj) => {
  //   console.log("socket on send >> ", obj);
  //
  //   const sendData = {
  //     nick: obj.myNick,
  //     msg: obj.msg,
  //   };
  //   io.emit("newMessage", sendData);
  // });

  // 이미지 URL 배열
  const imageUrls = [
    "/views/quokka1.png",
    "/views/quokka2.png",
    "/views/quokka3.png",
  ];

  // 클라이언트별 이미지 URL 매핑 객체
  const clientImageUrls = new Map();

  // 랜덤 이미지 URL 반환하는 함수
  function getRandomImageUrl(clientId) {
    let imageUrl;
    if (clientImageUrls.has(clientId)) {
      // 이미 클라이언트에게 할당된 이미지 URL이 있는 경우, 해당 URL 반환
      imageUrl = clientImageUrls.get(clientId);
    } else {
      // 클라이언트에게 할당된 이미지 URL이 없는 경우, 랜덤하게 선택하여 매핑 객체에 저장하고 해당 URL 반환
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      imageUrl = imageUrls[randomIndex];
      clientImageUrls.set(clientId, imageUrl);
    }
    return imageUrl;
  }

  // "send" 이벤트 전송 { 닉네임, 입력메세지 }
  function send() {
    const data = {
      myNick: myNick,
      de: "삭제됨 ㅇㅅㅇ",
      msg: document.querySelector("#message").value,
      imageUrl: getRandomImageUrl(socket.id), // 랜덤 이미지 URL 추가
    };
    socket.emit("send", data);

    document.querySelector("#message").value = ""; // 인풋 초기화
  }

  // 실습4 채팅창 메세지 전송
  socket.on("send", (obj) => {
    console.log("socket on send >> ", obj);
    // [전체] 선택하고 전송시 -> dm: 'all'
    // 특정 닉네임을 서ㅓㄴ택하고 전ㄴ송 -> dm: socket.id

    const sendData = {
      nick: obj.myNick,
      de: obj.de,
      msg: obj.msg,
      imageUrl: getRandomImageUrl(socket.id), // 랜덤 이미지 URL 추가
    };
    io.emit("newMessage", sendData);

    // 실습5 DM 기능 구현
    // 만약에 dm 메세지라면, 그 특정 socket.id 에게만 메세지 전달
    // { nick, dm, msg, imageUrl }
    // 만약에 dm 메세지가 아니먄, 전체공지
    // { nick,  msg, imageUrl }

    //   if (obj.dm !== "all") {
    //     let dmSocketId = obj.dm;
    //     const sendData = {
    //       nick: obj.myNick,
    //       dm: "(비밀.)",
    //       msg: obj.msg,
    //       imageUrl: getRandomImageUrl(socket.id), // 랜덤 이미지 URL 추가
    //     };
    //
    //     // 1. dm을 보내고자 하는 그 socket.id한테 메세지 전송
    //     io.to(dmSocketId).emit("newMessage", sendData);
    //     //2. dm을 보내고 있는 자기자신 메세지 전송
    //     socket.emit("newMessage", sendData);
    //   } else {
    //     const sendData = {
    //       nick: obj.myNick,
    //       msg: obj.msg,
    //       imageUrl: getRandomImageUrl(socket.id), // 랜덤 이미지 URL 추가
    //     };
    //     io.emit("newMessage", sendData);
    //   }
  });

  // 5 실시간 메세지 삭제 반영
  // socket.on("deleteMessage", (messageId) => {
  //   const updateData = {
  //     de: data.de,
  //   };
  //   io.emit("deleteMessage", messageId, updateData);
  // });
  // socket.on("deleteMessage", (messageId) => {
  //   const updateData = {
  //     de: "삭제됨",
  //   };
  //   io.emit("deleteMessage", messageId, updateData);
  // });

  // 클라이언트로부터 새 메시지 수신 시 처리
  socket.on("newMessage", (data) => {
    console.log("socket on newMessage >> ", data);
  });
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
