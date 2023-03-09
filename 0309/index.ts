function helloWorld1()  {
  console.log('helloWorld1')
}
helloWorld1()

function helloWorld2():string{
  return 'helloWorld2'
}

function add(a:number, b:number):number {
  return a+b;
}
add()

let helloWorld4 = ():void => {
  return
}

// function say(text:string):void {
//   return text;
// }

function sayH(text:string, name:string):string {
  return `${text} ${name}`;
}
sayH('안녕','')
// sayH('안녕','정유진');


//실습 1
function multifly(a:number, b:number):number {
  return a*b;
}
multifly(3,4)
console.log(multifly(3,4))

//실습2

const square= (a:number):number => a**2
    console.log(square(4))



let sayb = (name:string):string => {
  return '정유진'
  
}
sayb('wjddbwls')



// 조건문,반복문
