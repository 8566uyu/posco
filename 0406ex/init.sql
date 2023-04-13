SHOW databases;
USE kdt;
SHOW tables;

-- 기존 테이블 지움 (필요없음)
DROP TABLE user;

-- 새로운 데이터베이스 생성
CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);

-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;

DELETE FROM user WHERE id >= 3;

-- user 계정 생성하기
-- mysql_native_password: mysql 비밀번호 암호화 방식 중 하나 
-- https://www.lesstif.com/dbms/mysql-2054-mysql-8-authentication-policy-89556039.html
-- http://minsql.com/mysql8/C-2-A-authentificationPlugin/
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 
-- user 계정에 모든 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;
-- 생성된 계정 확인
SELECT host, user from mysql.user;

-- 참고) 계정 비번 변경 
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

SELECT * FROM mysql.user;

select host, user from mysql.user;
drop user user@localhost;


