// const n1 = 10000;
// const n2 = 40000;

// console.log(n1 + n2);

// rPtksrksmd

const rw1 = 54;
const rw2 = 6;
const rw3 = 5;

console.log(rw2 + rw1 + rw3);

console.log(rw1 * rw2 * rw3);

// 함수 동작하게끔 하는 코드

// 함수 선언할 때 쓰는거 var, let, const ++ function

// 변수명 + 함수명 작명하는 법
// 누구나 이해할 수 있도록 만들어야 함 ++ 변수 또는 함수의 기능을 설명해주면 ㄳ
// 변수/함수 명을 보고 3초 이상 고민 ㄴㄴ
// _을 제외한 어떠한 기호도 쓰면 안됨, 숫자도 안됨
// 숫자는 첫번째 자리가 아니면 쓸 수 있음.
// _를 제외한 모든 기호 사용불가 + 띄워쓰기 불가.
// camelCase // SnakeCase

// const 아름다운변수 = "쌍두문자";

// console.log(아름다운변수);

// 함수코드를 작성할 때는 {}안에 적음
function fn() {
  console.log(rw1 + rw2 + rw3);
}

// g함수를 만들고 사용할 때는 () 써서 사용함.

// fn(); // 함수 호출한다고 부름 call/fire

// const let var 를 사용해서 만든 함수

const fn2 = () => {
  console.log(rw1 * rw2 * rw3);
};
fn2();

// + - * =-- 곱하기 / === 나누기

document.write("<button     id='btn'     >버튼</button>");

const btn = document.getElementById("btn");

btn.innerText = "새로운 버튼";

const fs = "40px";
const bg = "magenta";
const fw = "bold";

function newName() {
  const name = "더 새로운 버튼";
  btn.innerText = name;

  btn.style.color = "tomato";
  //fontWeight, fontSize, backgroundColor
  btn.style.fontSize = fs;
  btn.style.fontWeight = fw;
  btn.style.backgroundColor = bg;
}
// newName();

btn.onclick = newName;
