// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "0531",
  database: "kdt",
});

exports.post_signup = (data, callback) => {
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("post_singup", rows);
    callback();
  });
};

exports.post_singin = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("post_singin", rows);
    callback(rows);
  });
};

exports.post_profile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Model User: ", rows); // [ {} ]
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const sql = `UPDATE user
               SET userid='${data.userid}', name ='${data.name}', pw='${data.pw}'
               WHERE id='${data.id}' `;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  const sql = `DELETE FROM user WHERE id='${id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};
