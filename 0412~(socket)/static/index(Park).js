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
  document.querySelector(".roomWrap").classList.remove("d-none");
  document.querySelector(".title").classList.remove("d-none");

  document.querySelector(".entry-box").style.display = "none";
  document.querySelector(".my-chat-text").style.display = "none";
  document.querySelector(".other-chat-text").style.display = "none";
  document.querySelector(".h11").style.display = "none";
});

//실습3-2
//닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

//닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value='all'>참여자 목록</option>`;

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

// 이미지 랜더
const picture = ["/views/park1.jpg", "/views/quokka1.png"];

// 채팅창 메세지 전송 Step1
// "send" 이벤트 전송 { 닉네임, 입력메세지 }
function send() {
  // const fileInput = document.querySelector("#image-file"); // 이미지 파일을 선택하는 input 요소
  // const file = fileInput.files[0]; // 선택된 파일
  // const formData = new FormData(); // FormData 객체 생성
  // formData.append("image", file); // 이미지 파일 추가

  const data = {
    myNick: myNick,
    de: "삭제됨 ㅇㅅㅇ",
    msg: document.querySelector("#message").value,
    picture: picture.id,
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

// 안녕
socket.on("newMessage", (data) => {
  console.log("socket on newMessage >> ", data);
  const chatBox = document.querySelector("#chatBox"); // 채팅 박스 요소 선택
  const newMessage = document.createElement("div"); // 새로운 div 요소 생성
  const newMessage2 = document.createElement("span"); // 새로운 span 요소 생성

  if (data.nick === myNick) {
    newMessage.classList.add("chat-wrap", "my-chat-text"); // 클래스 추가
    newMessage2.classList.add("chat-box", "my-chat");
    newMessage2.innerText = data.msg;

    newMessage2.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      if (confirm("정말 삭제하시겠습니까??") == true) {
        //삭제
        newMessage2.innerText = data.de;

        const updateData = {
          messageId: data.messageId, // 삭제할 메시지의 아이디
          de: data.de, // 삭제될 메시지의 내용
        };
        // 서버로 삭제 요청 보내기
        socket.emit("deleteMessage", updateData); // 서버로 삭제 요청 보내기
      } else {
        //취소
        return false;
      }
    });
  } else {
    newMessage.classList.add("chat-wrap", "other-chat-text"); // 클래스 추가
    newMessage2.classList.add("chat-box", "other-chat");
    newMessage2.innerText = data.nick + ": " + data.msg;
  }

  newMessage.appendChild(newMessage2);
  chatBox.appendChild(newMessage); // 채팅 박스에 새 메세지 요소 추가

  //바이
  // 클라이언트측
  // 삭제할 메시지의 ID
  const messageId = 1;

  // DELETE 요청을 보내는 함수
  const deleteMessage = async (id) => {
    try {
      const response = await fetch(`/messages/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("메시지 삭제 성공");
      } else {
        console.error("메시지 삭제 실패");
      }
    } catch (err) {
      console.error("네트워크 오류", err);
    }
  };

  // 메시지 삭제 함수 호출
  deleteMessage(messageId);

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

  // 사진 ㅛ
  // picture.addEventListener("click", function (e) {
  //   const imageBox = document.querySelector(".imageBox"); // 채팅 박스 요소 선택
  //   const newIms = document.createElement("div");
  //   const newIms2 = document.createElement("ul");
  //
  //   newIms.classList.add("imageBox"); // 클래스 추가
  //   newIms2.classList.add("image-box");
  //
  //   for (let i = 0; i < 6; i++) {
  //     const li = document.createElement("li");
  //     li.classList.add("images");
  //     li.id = `img${i}`;
  //
  //     newIms.innerText = data.picture;
  //   }
  //
  //   newMessage2.innerText = data.picture;
  //
  //   newMessage.appendChild(newMessage2);
  //   newMessage.appendChild(newIms);
  //   chatBox.appendChild(newMessage);
  // });

  // picture.addEventListener("click", function (e) {
  //   const imageBox = document.querySelector(".imageBox"); // 채팅 박스 요소 선택
  //   const newIms = document.createElement("div");
  //   const newIms2 = document.createElement("ul");
  //
  //   newIms.classList.add("imageBox"); // 클래스 추가
  //   newIms2.classList.add("image-box");
  //
  //   for (let i = 0; i < 6; i++) {
  //     const li = document.createElement("li");
  //     li.classList.add("images");
  //     li.id = `img${i}`;
  //
  //     // picture 객체에서 이미지 경로 가져오기
  //     const imgSrc = picture[i + 1];
  //
  //     // 이미지를 생성하여 li 요소에 추가
  //     const img = document.createElement("img");
  //     img.src = imgSrc;
  //     // li.appendChild(img);
  //
  //     // newIms2.appendChild(li);
  //     newMessage.appendChild(img);
  //
  //     newMessage.appendChild(newMessage2);
  //     chatBox.appendChild(newMessage);
  //   }
  //
  //   newIms.appendChild(newIms2);
  //   imageBox.appendChild(newIms);

  // 사진 뽑기 안녕
  // const pic = document.querySelector(".images");
  // pic.addEventListener("click", function (e) {
  //   const imageBox = document.querySelectorAll(".imageBox"); // 채팅 박스 요소 선택
  //   const newIms = document.createElement("div");
  //   const newIms2 = document.createElement("ul");
  //   newIms.classList.add("imageBox"); // 클래스 추가
  //   newIms2.classList.add("image-box");
  //
  //   for (let i = 0; i < 2; i++) {
  //     const li = document.createElement("li");
  //     li.classList.add("images");
  //     li.id = `img${i}`;
  //
  //     // picture 객체에서 이미지 경로 가져오기
  //     const imgSrc = picture[i];
  //
  //     // 이미지를 생성하여 li 요소에 추가
  //     const img = document.createElement("img");
  //     img.src = imgSrc;
  //     li.appendChild(img);
  //
  //     // newIms2.appendChild(li);
  //     newMessage.appendChild(img);
  //
  //     // newMessage.appendChild(newMessage2);
  //     // chatBox.appendChild(newMessage);
  //   }
  //
  //   // 이미지 클릭 이벤트 처리
  //   // newMessage.addEventListener("click", function (e) {
  //   //   // 클릭된 이미지 정보 처리 로직 작성
  //   //   // e.target을 통해 클릭된 이미지 엘리먼트에 접근할 수 있음
  //   //   // 예시: 클릭된 이미지의 src 값을 가져와서 사용
  //   //   const clickedImgSrc = e.target.src;
  //   //   console.log("클릭된 이미지 경로:", clickedImgSrc);
  //   // });
  // });

  const pic = document.querySelector(".images");
  pic.addEventListener("click", function (e) {
    const imageBox = document.querySelectorAll(".imageBox"); // 채팅 박스 요소 선택
    const newIms = document.createElement("div");
    const newIms2 = document.createElement("ul");
    newIms.classList.add("imageBox"); // 클래스 추가
    newIms2.classList.add("image-box");

    // 클릭한 이미지의 인덱스 가져오기
    const clickedImageIndex = Number(e.target.id.replace("img", ""));

    // picture 객체에서 해당 이미지 경로 가져오기
    const imgSrc = picture[clickedImageIndex];

    // 이미지를 생성하여 li 요소에 추가
    const img = document.createElement("img");
    img.src = imgSrc;
    const li = document.createElement("li");
    li.classList.add("images");
    li.appendChild(img);

    // newIms2.appendChild(li);
    newMessage.appendChild(img);
  });

  // (선택) 메세지가 많아져서 스크롤이 생기더라도 하단 고정
  chatBox.scrollTop = chatBox.scrollHeight;
});

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("images")) {
//     // 이미지를 클릭한 경우
//     const newMessage = document.createElement("div"); // 새로운 div 요소 생성
//     const newMessage2 = document.createElement("span"); // 새로운 span 요소 생성
//
//     newMessage.classList.add("chat-wrap", "my-chat-text"); // 클래스 추가
//     newMessage2.classList.add("chat-box", "my-chat");
//     newMessage2.innerText = data.msg;
//
//     // picture 객체에서 이미지 경로 가져오기
//     const imgSrc = picture[e.target.id.replace("img", "")];
//     // for (let i = 0; i < 3; i++) {
//     //   const li = document.createElement("li");
//     //   li.classList.add("images");
//     //   li.id = `img${i}`;
//     // }
//     // 이미지를 생성하여 newMessage 요소에 추가
//     const img = document.createElement("img");
//     img.src = imgSrc;
//     newMessage.appendChild(img);
//
//     // newMessage.appendChild(newMessage2);
//     chatBox.appendChild(newMessage);
//   }
// });

// 삭제하기
// const chatBox = document.querySelectorAll(".my-chat-text");
// document.querySelectorAll(".my-chat-text").style.onclick = "removeCheck()";

// chatBox.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   if (confirm("정말 삭제하시겠습니까??") == true) {
//     function removeCheck() {
//       document.querySelector(".my-chat-text").remove();
//     }
//   } else {
//     //취소
//     return false;
//   }
// });

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
// });

// 링크 서버 보내기
// 클라이언트 측 JavaScript 파일 (client.js)
// changePage 함수 정의
// 버튼 클릭 시 이벤트 핸들러 함수 정의
// $(document).ready(function () {
//   // 버튼 클릭 시 서버로 요청 보내기
//   $("#goToChatHongBtn").on("click", function () {
//     $.ajax({
//       url: "/goToChatHong", // 서버의 라우팅 경로
//       method: "GET", // 요청 메소드
//       success: function (response) {
//         // 서버에서 응답이 성공적으로 돌아오면 페이지 이동
//         window.location.href = "/views/chat(hong).ejs"; // 이동할 페이지 경로
//       },
//       error: function (xhr, status, error) {
//         console.error("Failed to fetch chat(hong).ejs:", status);
//       },
//     });
//   });
// });

function mainPage() {
  // AJAX 요청으로 chat(hong).ejs 파일의 내용을 가져옴
  $.get("/views/chatPlace.ejs", function (data) {
    // 가져온 내용으로 현재 페이지의 내용을 대체
    document.open();
    document.write(data);
    document.close();
  });
}

function loadChatKdt() {
  // AJAX 요청으로 chat(hong).ejs 파일의 내용을 가져옴
  $.get("/views/chat(kdt).ejs", function (data) {
    // 가져온 내용으로 현재 페이지의 내용을 대체
    document.open();
    document.write(data);
    document.close();
  });
}

function loadChatHong() {
  // AJAX 요청으로 chat(hong).ejs 파일의 내용을 가져옴
  $.get("/views/chat(hong).ejs", function (data) {
    // 가져온 내용으로 현재 페이지의 내용을 대체
    document.open();
    document.write(data);
    document.close();
  });
}

function loadChatBread() {
  // AJAX 요청으로 chat(hong).ejs 파일의 내용을 가져옴
  $.get("/views/chat(bread).ejs", function (data) {
    // 가져온 내용으로 현재 페이지의 내용을 대체
    document.open();
    document.write(data);
    document.close();
  });
}

function loadChatPark() {
  // AJAX 요청으로 chat(hong).ejs 파일의 내용을 가져옴
  $.get("/views/chat(park).ejs", function (data) {
    // 가져온 내용으로 현재 페이지의 내용을 대체
    document.open();
    document.write(data);
    document.close();
  });
}
