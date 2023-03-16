/* val() */
function getValue(){
  let value = $('input').val();
  // let value = document.querySelector('input').value;
  alert(value);
}
function setValue(){
  $('input').val('설정!!!!');
}
/* css() */
function changeCssJS(){
  let span = document.querySelector('span');
  span.style = 'font-size: 20px; color:red;';
}
function changeCssJquery(){
  $('span').css('font-size','40px');
  $('span').css('color','blue');
  console.log($('span').css('color'))
}
/* attr() */
function changeAttrJS(){
  let a= document.querySelector('a');
  a.setAttribute('href','https://www.naver.com');
}
function changeAttrJquery(){
  $('a').attr('href','https://www.daum.net');
}
/* text() */
function changeTextJS(){
  let p = document.querySelector('.p-text');
  p.innerText = '<b>js</b> 로 바꿨습니다.';
}
function changeTextJquery(){
  $('.p-text').text('<b>jquery</b>로 바꿨습니다.');
}
/* html() */
function changeHtmlJS(){
  let p=document.querySelector('.p-html');
  p.innerHTML = '<b>js</b> 로 바꿨습니다.';
}
function changeHtmlJquery(){
  $('.p-html').html('<b>jquery</b>로 바꿨습니다.')
}

//요소 추가

function appendJS(){
  let li = document.createElement('li');
  li.innerText = 'append()로 추가된 js';
  let ul = document.querySelector('.colors');
  ul.append(li);
}

function prependJS(){

}

function afterJS(){
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = 'after()형제요소로 추가된 js'
}

function beforeJS(){
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = 'before()형제요소로 추가된 js'
}


//remove
function removeJS(){
  let li = document.querySelector('#li2')
  li.remove();
}

// empty



// 요소 탐색

function findParent(){

}

function findParents(){

}

function findNext(){

}

function findPrev(){

}

function findChildren(){

}
