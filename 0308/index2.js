/* alt shift a
* 자료형
  - 기본
   - */

let myName = "길동";
let email = "8566yu@gmail.com";
let city = "서울";

console.log(myName);
console.log(email);
console.log(city);

console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다.`);

let gildong = `내 이름은 ${myName}이고 이메일은 ${email}입니다.`;
console.log(gildong);

// 배열
let fruits = ["orange", "pineapple", "grape", "apple"];
let fruits2 = ["orange", "pineapple", "grape", "apple"];

console.log(fruits[0], fruits[2]);

let data = [1, "allie", false, null, undefined];
console.log(data[4]);

// 배열 2차원

let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[0][2]);

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

let numberSize = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew() {
    return "냐옹";
  },
};

console.log(cat);
// let me = {
//  name:'yujin'
//  age:26
//  city:'incheon'
//
// }

console.log(typeof 3);
console.log(typeof "안녕");
console.log(typeof 3, typeof "안녕");

/* typeof 사용 */
let und;
console.log(typeof "문자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof cat);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof und);
console.log(`${typeof 1} isn't ${typeof "1"} data type`);
console.log(
  "typeof 를 array 이나 null 에 사용하면" +
    typeof {} +
    "결과를 얻을 수 있습니다."
);
// 형변환
// let mathScore = prompt('수학 점수를 입력하세요'); //80
// let engScore = prompt('영어 점수를 입력하세요'); //90
//
// let avg = (mathScore + engScore) / 2;
// console.log(avg);
// 1. -> 문자 String()
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1);
console.log(typeof str1.toString());
//2. ? ->숫자 Number()
let n1 = true;
let n2 = false;
let n3 = "123.9";
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof Number(n1)); //1
console.log(typeof Number(n2)); //0
console.log(typeof Number(n3)); //123.9
console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3));

let 수학점수 = "77";
let 영어점수 = "88";
let avgScore = (Number(수학점수) + Number(영어점수)) / 2;

console.log(avgScore);

//변수

//var 안씀
//let 재할당 가능 재선언
//const 재선언 재할당 안댐

// % 나머지 연산자
// ** 거듭제곱 연산자
// num = num +5 // num += 5
// 증감 연산자
// num++;
// num--;

var name = "홍길동";
console.log(name);

// let 은 재선언 불가능 / 재할당만 가능

let a = 1;
let a = 2; // 재선언 안됨.
a = 2; // 재할당은 됨.

let aa;
aa = 3;

// const : 재선언 불가 / 재할당 불가
// 선언과 동시에 초기화 해야함

// const b; // 초기화해야함.

// 식별자(변수,함수)이름 규칙
// 1. $ _ 만 가능
let $ = 5;
let _ = 6;
// 2. 숫자가 맨 처음이면 안됨
// 3. 예약어 금지 (let const ver)

// 논리 연산자 ||(OR) &&(AND) !(NOT)
// && 모든값이 true 면 true / 아니면 false
// || 하나값이 true 면 true / 아니면 false
// ! 값의 반대

// 문자열끼리의 연산
// 더하기 : 나열
// 나머지 : 실제연산이됨
