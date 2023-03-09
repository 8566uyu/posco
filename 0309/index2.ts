//조건문

// if (5:Number,3:Number):Number{
//   console.log('얍')
// }

if (5>3) {
  console.log('얍')
}

//
// if (number>10) {
//   console.log("이 수는 10보다 큽니다.");
// }else {
//   console.log("이 수는 10보다 작습니다.");
// }
//
//
// if (number>10) {
//   console.log('이 수는 10보다 큽니다.');
// }else if (number === 10) {
//   console.log('입력한 수는 10이네요!')
// }else{
//   console.log('입력한 수가 10보다 작습니다.')
// }


//퀴즈

let age:number = 15;

    if(age>=20) {
      console.log('성인')
    }else if (age >=17) {
      console.log('고등학생')
    } else if (age>=14) {
      console.log('중학생')
    } else if (age >=8) {
      console.log('초등학생')
    }else  {
  console.log('유아')
}

// db
let userId:string|number = 'user01';
let userPw:string|number = '1234qwer';
function loginUser():void {
  let inputId:string|number = prompt('아이디를 입력해주세요.');
  let inputPw:string|number = prompt('비밀번호를 입력해주세요.');
  if (userId === inputId) {
    if (userPw === inputPw) {
      alert('로그인 성공');
    } else {
      alert('비밀번호가 틀렸습니다!!');
    }
  } else if (inputId === '') {
    alert('아이디를 입력하지 않았습니다.');
  } else {
    alert('아이디가 틀렸습니다.');
  }
}



//삼향 연산자
let num:number = 5;
if (num %2 ===1) {
  console.log('홀수')
}else {
  console.log('짝수')
  
}

num % 2 ===1 ? console.log('홀수') : console.log('짝수')

let now:number = new Date().getHours()
console.log(now)



//for문

for (let i=0; i<10; i++) {
  console.log('안녕',i)
}
console.log('========')

for (let i=0; i<10; i+=2){
  console.log(`안녕 ${i}`)
}

for (let i=1; i<=5; i++) {
  console.log(i);
}

for (let i=1; i<6; i++){
  console.log(i + 1)
}

for (let i=5; i>0; i--) {
  console.log(i)
}

let n:number = 11;
let sum:number = 0;
for (let i=0; i<=n; i++) {
  sum = sum + i;
}
console.log(sum)


//배열과 for문

let fruits:string[] = ['사과','배','포도','망고']
for (let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

let numsArr:number[] = [90,50,30,20,11];
let numsSum:number = 0;
for (let i=0; i<numsArr.length; i++) {
  numsSum = numsSum +numsArr[i]
}
console.log(numsSum)

//1~20 짝수일 때의 합 구하기

let sum2:number = 0;
for (let i=0; i<=20; i++){
  if (i % 2 === 0) {
    sum2 = sum2 + i;
  }
}
console.log(sum2)



for (let i=0; i<=10000; i++) {
  if (i%13===0 && i%2===1) {
    console.log(i)
  }
}

for (let i=2; i<10; i++){
  console.log(`${i}단`)
  for (let j=1; j<10; j++) {
    console.log(`${i}*${j}=${i*j}`)
  }
}


//while문
let n2:number = 1;
while (n2<= 5) {
  console.log(n2)
  n2++;
}
n2 = 10;
while (n2>=5){
  console.log(n2);
  n2--;
}

n2=10;
while (n2 >=1){
  if (n2%2===0){
    console.log(n2)
  }
  n2--;
}

//구구단 while
let i = 2, j = 1;
while(i < 10) {
  while(j<10) {
    console.log(i, "x", j, "=", i*j);
    j++;
  }
  i++;
  j = 1;
}

//continue
let sum3:number=0;
for (let i=0; i<10;i++){
  if (i%2===0){
    continue;
  }
  sum3+=i;
}
console.log(sum3);
