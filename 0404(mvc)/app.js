const express = require("express"); // express 모듈 셋팅
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); //views 파일설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index"); // views/index.ejs 파일을 찾아서 응답
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
