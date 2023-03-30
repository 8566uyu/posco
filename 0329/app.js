const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
  const myTitle = "실습풀이";
  res.render("index", { title: myTitle });
});

app.get("/practice1", function (req, res) {
  console.log(req.query);
  // res.send("get 요청 성공!");
  res.render("practice1", {
    // title: "GET",
    name: req.query.name,
    gender: req.query.gender,
    ho: req.query.ho,
  });
});

app.get("/practice2", function (req, res) {
  console.log(req.query);
  // res.send("get 요청 성공!");
  res.render("practice2", {
    name: req.query.name,
    gender: req.query.gender,
    ho: req.query.ho,
    like: req.query.like,
    num: req.query.num,
  });
});

app.get("/getForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공!");
  res.render("result", {
    name: req.query.name,
    gender: req.query.gender,
    ho: req.query.ho,
    like: req.query.like,
    num: req.query.num,
  });
});
app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공!");
  res.render("result", {
    name: req.query.name,
    gender: req.query.gender,
    ho: req.query.ho,
    like: req.query.like,
    num: req.query.num,
  });
});
app.listen(PORT, function () {
  console.log("웹 서버 실행!");
  console.log(`http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json 형태로 데이터를 주고 받음

// Routing (경로 설정)
// app.get('/', function (req, res) {
//   res.render('index');
// });
//
// app.get('/practice1', function (req, res) {
//   res.render('practice1');
// });
//
// app.get('/practice2', function (req, res) {
//   res.render('practice2');
// });
//
// app.get('/result1', function (req, res) {
//   console.log(req.query);
//   // res.send('get 폼 전송 완료');
//   res.render('result', {
//     title: '실습1 폼 전송 완료!',
//     userInfo: req.query,
//   });
// });
//
// app.post('/result2', function (req, res) {
//   console.log(req.body);
//   res.render('result', {
//     title: '실습2 폼 전송 완료!',
//     userInfo: req.body,
//   });
// });
//
// app.listen(PORT, function () {
//   console.log('웹 서버 실행!!');
//   console.log(`http://localhost:${PORT}`);
// });
