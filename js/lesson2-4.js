/* 参数默认值 */
function num () {
  let num = 0
  Array.from(arguments).forEach(function (item) {
    num += item * 1
  })
  return num
}
console.log(num(2, 3, 4, 5, 6))

// es6
function sum2 (...nums) {
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return num
}

console.log(sum2(2, 3, 4, 5, 6))

let test = (x, y, z) => ({
  x, y, z
})
console.log(test(1, 2, 3))

let test2 = {
  name: 'test2',
  say: function () {
    console.log(this.name)
  }
}
test2.say() // test

let test3 = {
  name: 'test3',
  say: () => {
    console.log(this.name)
  }
}
test3.say() // undefined

let myarr = [2, 5, 3, 4, 9, 2, 7, 6, 11]
console.log(myarr.sort((x, y) => x - y))
