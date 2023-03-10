// 문자열 관련 함수 + 속성(length)
/*
 - toUpperCase(),toLowerCase()
 - trim()
 - slice()
 - replace(), replaceAll()
 - repeat */

let str1 = 'Strawberry Moon'
let str2 = '   Strawberry Moon   '

console.log(str1[0]);
console.log(str1[0] + str1[12])

//sonny

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9])

console.log(str1.length);

let msg2 = ' hello world! '
console.log(msg2.toUpperCase().trim())

//매개변수 있는 함수
let fruit:string = 'applemango'
console.log(fruit.indexOf('a'))
console.log(fruit.indexOf('apple'))
console.log(fruit.indexOf('x'))

console.log(fruit.charAt(3))

console.log(fruit.slice(5))

console.log(fruit.slice(3,6))
console.log(fruit.slice(-3))

let msg3:string = 'Wow! It is so amazing!!'
console.log(msg3.replace('Wow',"Hey"))
console.log(msg3.replaceAll('o','a'))
console.log(msg3.replace('o','a'))

let date:number = '23.03.10'
console.log(date.split('.'))



//배열
let arr1:number[] =[1,2,3,4,5]
let arr2:string[] = ['quakka','rabbit','puppy','hamster']

let arr3:number[] = [1,3,5,4,6]
let alphabets:string[] = ['a','b','c','d','e']

for (let i=0; i<arr3.length; i++){
  console.log(arr3[i])
}

for (let number of arr3) {
  console.log(number)
}

arr3.forEach(function (data,index,arr){
  console.log(data,index,arr)
});

arr3.forEach((data,index)=>{
  console.log(data,index)
})

//filter
arr3=arr3.filter(function (num){ // ?
  return num >3;
})
console.log(arr3)

// map,find
let arr4:number[]=[1,2,3].map(function (el:string):number {
  return el * 3
})console.log(arr4)

arr4=[1,2,3,4,5]
arr4.map((eql)=> eql*10)
console.log(arr4)

//실습1
let arr:number[] = []
// let nums:number = []


let sum3 = 0;

for (let i=1; i<100; i++) {
  arr.push(i+1);
}
console.log(arr)

let sum = 0;
for (let number of arr) {
  sum = sum + number;
}

let sum2 = 0;
arr.forEach((number)=>{
  sum2 = sum2 + number;
});

console.log(sum,sum2)

//실습2 same diff
let fruits1:string[] = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2:string[] = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same:string[] = []
let diff:string[] = []

//for문
for(let i=0; i<fruits1.length; i++){
  if (fruits2.includes(fruits1[i])){
    same.push(fruits1[i]);
  }else {
    diff.push(fruits1[i])
  }
}
console.log(same)
console.log(diff)

//filter
let same2 = fruits1.filter((same) => fruits2.includes(same));
let diff2 = fruits1.filter((same) => !fruits2.includes(same));

console.log(same2)
console.log(diff2)



// 자바스크립트 내장객체
let now:number = new Date()
console.log(now)
console.log(now.getFullYear(),'년')
console.log(now.getMonth()+1,'월')
console.log(now.getDate(),'일')
console.log(now.getHours(),'시')
console.log(now.getMinutes(),'분')
console.log(now.getSeconds(),'초')
console.log(now.getMilliseconds(),'ms')
console.log(now.getDay())

//Date 객체를 이용해 오늘의 요일을 얻고,
// 오늘이 평일인지 주말인지 작성
let day =  now.getDay()===0 || now.getDay()===6 ? '주말' : '평일'
console.log(day)

//math 객체
//속성
console.log(Math.PI)

//메소드
console.log(Math.min(45,2,0,-5,15))
console.log(Math.max(45,2,0,-5,15))
console.log(Math.random()) //0~1
console.log(Math.round(5.6)) //반올림 : 정수값
console.log(Math.floor(5.5)) //내림
console.log(Math.ceil(5.2)) //올림

console.log(Math.floor(Math.random()*10)) //0~10

console.log(Math.floor(Math.random()*100)+1)


//0~100
let n = 1
let sum99 = 0
while(n<100) {
  if (n%2===0 || n%3===0){
    sum99 = sum99 + n
  }
  n++
}
console.log(sum99)
