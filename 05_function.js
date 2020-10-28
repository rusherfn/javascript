// 1. function 
// 함수 선언과 함수 호출 
(function myFunc() {
  console.log('안녕, 자바스크립트~~~')
}) ()

const sayHello = function() {
  console.log('Hello~~~')
}

sayHello ()

// 2. 매개변수 parameter
function printMessage(message) {
  console.log(message)
}

printMessage ('ㅎㅎㅎㅎ')
printMessage  ('ddddd')

// 3. 기본 파라미터 (es6)
function showInfo(title, name = '스티브잡스') {
  console.log(`${title} by ${name}`)
}

showInfo('게르니카', '피카소')
showInfo('풍경')

// 4. Rest 파라미터 / spread 연산자 (es6)
function printAll(...items) {
  // for(let i = 0; i < items.length; i++) {
  //   console.log(items[i])
  // }

  for( const item of items) {
    console.log(item)
  }
}

printAll('봄', '여름', '가을', '겨울', '안녕')

// 5. Scope
let movie = '하하하'

function paintMovie() {
  let myMovie = '생활의 발견'
  console.log(myMovie)
  console.log(movie)
}

paintMovie ()

// console.log(myMovie)

// 6. Return
function plus(a, b) {
  console.log('안녕하세요')
  return a + b  
}

const result = plus(5, 10)
console.log(result)

/// 7. callback function 콜백함수
const call = function(myName, printPicaso, printJobs) {
  if(myName === 'Picaso') {
    printPicaso()
  } else {
    printJobs()
  }
}

const printPicaso = function () {
  console.log('I am Picaso')
}

const printJobs = function () {
  console.log('I am Jobs')
}

call ('jobs', printPicaso, printJobs)

// 8. Arrow function 
// const add = function (a, b) {
//   console.log(a + b)
//   return a + b
// }

const add = (a, b) => a + b


const sum = add(5, 8)
console.log(sum)

// function printHello() {
//   console.log('안녕하세요')
//   console.log(this)
// }

const printHello = () => {
  console.log(this)
}

printHello ()