/* var 全局作用域 */
var abc = 123
console.log(abc)
console.log(window.abc)
console.log(window)

var value = 1

function foo () {
  console.log(value)
}

function bar () {
  var value = 2
  foo()
}

bar()

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }
setTimeout(() => {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
}, 1000)
