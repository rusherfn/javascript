// 1. 조건 연산자 - if, else if, else 
console.log('조건 연산자 - if')

const age = 10
if(age >= 20) {
  // 조건이 참일때
  console.log('성인입니다.')
} else {
  // 조건이 거짓일 때
  console.log('청소년입니다.')
}

// if 구문의 구조
// if() {
// //
// } else {
// 
// } if와 else 둘 다 쓸 필요는 없음
// 한줄이라면 중괄호 생략 가능

const month = 2
if( month >= 3 && month <= 5) {
  console.log('spring')
} else if ( month >= 6 && month <= 8) {
  console.log('summer')
} else if ( month >= 9 && month <= 11) {
  console.log('fall')
} else {
  console.log('winter')
}

// 2. 삼항 조건 연산자 
// 조건 ? 값1 : 값2
// myAge >= 20? '성인' : '청소년'

const myAge = 34
console.log( myAge >= 20? '성인' : '청소년') 

// 3. 조건연산자 - switch 문
console.log('조건 연산자 - switch 문')

const color = 'red'

switch (color) {
  case 'red' : 
  console.log('I like red')
  break
  case 'blue' :
    console.log('I like blue')
    break
  case 'green' :
  console.log ('I like green')
  break
  default :
  console.log ('i dont know')
  break
}

s