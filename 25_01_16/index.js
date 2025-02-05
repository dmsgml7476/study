// 변수

// 변하는 경우의 수
// variable
// 자바 스크립트는 글자, 띄워쓰기 안됨.
// ctrl + / 주석처리
// 제대로 된 코드 옆에다가 설명을 적고 싶을때 // 두개

// 12345;
// ("apple"); // 문자열 string

// 변수를 선언하는 방법 3가지

// var apple = "apple"; // variable = var 발 바
// not defined == 니가 쓰고 있는 변수 어디서 안지 모르겠음 만든거 맞음???

// let 너는 ~해라
// let apple = "apple";

// constant 계속, 앞으로도 쭉, 절대 안변하는 : 항상 ~~~일
// const apple = "apple";

// 1. 위에서 var 를 사용하여서 apple을 선언했지만 아래에서 var를 사용하지 않고 변수이름 부른 뒤 = 으로 값을 할당해주면 처음 var 로 선언한 변수의 값이 변함
// apple = "banana";
// 2.js. 위에서 아래로 흐름

// Let 실험

// let apple = "apple";
// apple = "마이크로소프트";
// // 결과 : var 와 마찬가지로 let도 값을 덮어쓸 수 있다.

// let vs var

// var apple = "apple";
// apple = "banana";

// var apple = 10000; // 재선언 됨.

// let apple = "apple";
// apple = "ms";

// let apple = 10000;  // 오류. 재선언 안됨
//1. var는 위에서 선언하고 아래에서 반복적으로 선언 가능함. 호이스팅 (hoisting)
// 2. let 역시 값을 재할당 할 수 있지만 재 선언은 불가능.
// 3. 같은 이름으로 변수 선언 안됨

// #3
const a = "apple";

// a = "banana";

// const a = "ms";

// const 로 선언한 변수는 절대 바뀔 수 없다.

// js 쓰는 이유 => 두번 이상 중복 될때 변수처리
// 귀찮아서.

// 귀찮은 일을 제거할 때 정말 귀찮게 많은 코드를 써야할 수 있음.

// console.log(a);
