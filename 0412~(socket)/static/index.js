// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();

let myNick;
socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >> ", socket.id);
});

// [실습1]
// function sayHello() {
//   // clinet -> server 정보 보내기
//   // socket.emit(event, data): 데이터 "전송"
//   // => event 라는 이름으로 data를 전송
//   socket.emit("hello", { who: "client", msg: "hello" });
//
//   //socket.on(event, callback):데이터 "수신"
//   // event에 대해서 정보를 받아 callback 실행
//
//   socket.on("hellokr", (data) => {
//     const p = document.querySelector("#form-server");
//     p.textContent = `${data.who}: ${data.msg}`;
//   });
// }
//
// function sayStudy() {
//   socket.emit("study", { who: "client", msg: "study" });
//
//   socket.on("studykr", (data) => {
//     const p = document.querySelector("#form-server");
//     p.textContent = `${data.who}: ${data.msg}`;
//   });
// }
//
// function sayBye() {
//   socket.emit("bye", { who: "client", msg: "bye" });
//
//   socket.on("byekr", (data) => {
//     const p = document.querySelector("#form-server");
//     p.textContent = `${data.who}: ${data.msg}`;
//   });
// }

// 실습3 채팅창 입장/퇴장 안내 문구
// [실습3] 채팅창 입장 안내 문구
socket.on("notice", (msg) => {
  document
    .querySelector("#chatBox")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

//실습 3-2
function entry() {
  socket.emit("setNick", document.querySelector("#nickname").value);
}

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력창 비활성화 (클릭 막기)
  document.querySelector(".entry-box > button").disabled = true; // 버튼 비활성화 (클릭 막기)

  //..
  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-Box").classList.remove("d-none");
  document.querySelector(".entry-box").style.display = "none";
  document.querySelector(".my-chat-text").style.display = "none";
  document.querySelector(".other-chat-text").style.display = "none";
});

//실습3-2
//닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

//닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value='all'>전체</option>`;

  //select#nick-list 요소의 option 추가
  for (let key in obj) {
    options += `<option value='${key}'>${obj[key]}</option>`;
  }

  //select#nick-list 요소에 options 추가(덮어쓰기)
  document.querySelector("#nick-list").innerHTML = options;
});

// 메세지 전송
// function click_me() {
//   const message = document.querySelector("#message").value; // 입력된 메세지 값 가져오기
//   const chatBox = document.querySelector("#chatBox"); // 채팅 박스 요소 선택
//   const newMessage = document.createElement("div"); // 새로운 div 요소 생성
//   const newMessage2 = document.createElement("span"); // 새로운 span 요소 생성
//   newMessage.classList.add("chat-wrap", "my-chat-text"); // 클래스 추가
//   newMessage2.classList.add("chat-box", "my-chat");
//   // newMessage.textContent = message; // 메세지 텍스트 추가
//   newMessage2.textContent = message;
//   newMessage.appendChild(newMessage2);
//   chatBox.appendChild(newMessage); // 채팅 박스에 새 메세지 요소 추가
//   // chatBox.appendChild(newMessage2);
//   document.querySelector("#message").value = ""; // 메세지 입력값 초기화
// }

// 클라이언트별 이미지 URL 매핑 객체
const clientImageUrls = new Map();

const imageUrls = [
  "/views/quokka1.png",
  "/views/quokka2.png",
  "/views/quokka3.png",
];

// 채팅창 메세지 전송 Step1
// "send" 이벤트 전송 { 닉네임, 입력메세지 }
function send() {
  const data = {
    myNick: myNick,
    msg: document.querySelector("#message").value,
    imageUrl: getRandomImageUrl(socket.id),
  };
  socket.emit("send", data);

  document.querySelector("#message").value = ""; // 인풋 초기화
}

// 랜덤 이미지 URL 반환하는 함수
function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

// 이미지 URL 사용 예시
const imageUrl = getRandomImageUrl();
console.log("이미지 URL: ", imageUrl);

// 채팅창 메세지 전송 Step2
// 서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
socket.on("newMessage", (data) => {
  console.log("socket on newMessage >> ", data);
  const chatBox = document.querySelector("#chatBox"); // 채팅 박스 요소 선택
  const newMessage = document.createElement("div"); // 새로운 div 요소 생성
  const newMessage2 = document.createElement("span"); // 새로운 span 요소 생성

  // newMessage2.innerText = data.msg;

  if (data.nick === myNick) {
    newMessage.classList.add("chat-wrap", "my-chat-text"); // 클래스 추가
    newMessage2.classList.add("chat-box", "my-chat");
    newMessage2.innerText = data.msg;
  } else {
    newMessage.classList.add("chat-wrap", "other-chat-text"); // 클래스 추가
    newMessage2.classList.add("chat-box", "other-chat");
    newMessage2.innerText = data.nick + ": " + data.msg;
  }

  newMessage.appendChild(newMessage2);
  chatBox.appendChild(newMessage); // 채팅 박스에 새 메세지 요소 추가

  // 랜덤 이미지 선택
  if (data.nick !== myNick) {
    const randomImageUrl = data.imageUrl;
    const imageElement = document.createElement("img");
    const imageElement1 = document.createElement("img");

    imageElement.classList.add("chat-wrap", "other-chat-text"); // 클래스 추가
    imageElement1.classList.add("chat-box", "other-chat");
    // imageElement1.src = randomImageUrl;
    imageElement.src = randomImageUrl;

    // 이미지의 위치 조정
    imageElement.style.position = "absolute";
    imageElement.style.top = "-0.5rem";
    imageElement.style.left = "-2.2rem";
    imageElement.style.width = "3rem";
    imageElement.style.height = "3rem";
    // 이미지를 원형으로 표시
    imageElement.style.borderRadius = "50%";
    newMessage.appendChild(imageElement);
  }
});

// // 이미지 랜덤
// const randomImageUrl =
//     imageUrls[Math.floor(Math.random() * imageUrls.length)];
// const imageElement = document.createElement("img");
// const imageElement1 = document.createElement("img");
//
// imageElement.classList.add("chat-wrap", "other-chat-text"); // 클래스 추가
// imageElement1.classList.add("chat-box", "other-chat");
// imageElement.src = randomImageUrl;
// // imageElement1.src = randomImageUrl;
//
// // imageElement.appendChild(imageElement1);
// newMessage.appendChild(imageElement);
// }
