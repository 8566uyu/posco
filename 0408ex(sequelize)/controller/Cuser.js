//before
// const User = require("../models/User");
//after
const models = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = async (req, res) => {
  const result = await models.Users.findAll();
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  //before
  // User.post_signup(req.body, () => {
  //   res.send(true);
  // });

  //after
  const result = await models.Users.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  });
  res.send(result);
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = async (req, res) => {
  //before
  // console.log(req.body);
  // User.post_signin(req.body, (result) => {
  //   console.log("Controller post_sign: ", result); // [ RowDataPacket { id: 'sean', name: 'sean', pw: '1234' } ]
  //
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  //after
  const result = await models.Users.findOne({
    where: { userid: req.body.userid },
  });

  // res.send(result.id, result.userid, result.pw, result.name);
  res.send(result);
};

exports.post_profile = async (req, res) => {
  const result = await models.Users.findOne({
    where: { userid: req.body.userid },
  });
  console.log("lll", result); //  { id: 14, userid: '2', pw: '2', name: '2' },

  // console.log(req.body);
  // User.post_profile(req.body.userid, (result) => {
  //   // 여기는 늘 성공할 때이므로 else 절이 아예 필요 없을듯
  //   // POST /user/profile 로그인이 성공되어야만 수행하는 요청
  //
  //   if (result.length > 0) {
  //     // 로그인 성공; views/profile.ejs 렌더링
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     // 로그인 실패; /user/signin 현재 주소 다시 접속
  //     res.redirect("/user/signin");
  //   }
  // });

  res.render("profile", {
    id: result.id,
    userid: result.userid,
    pw: result.pw,
    name: result.name,
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.send("회원정보 수정 성공!");
  // });
  //after
  models.Users.update(
    {
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );

  res.send();
};

exports.delete_profile = async (req, res) => {
  //before
  // console.log(req.body);
  // User.delete_profile(req.body.id, () => {
  //   // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
  //   // res.redirect('/user/signin');
  //   // res.redirect('/user');
  //   res.send(true);

  //after
  await models.Users.destroy({
    where: { id: req.body.id },
  });
  res.end();
};
