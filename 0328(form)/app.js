const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
  const myTitle = "폼 실습을 합시다~";
  res.render("index", { title: myTitle });
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("get 요청 성공!");
  res.render("result", {
    title: "GET",
    id: req.query.id,
    pw: req.query.pw,
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공!");
  res.render("result", {
    title: "POST",
    id: req.body.id,
    pw: req.body.pw,
  });
});
app.listen(PORT, function () {
  console.log("웹 서버 실행!");
  console.log(`http://localhost:${PORT}`);
});
