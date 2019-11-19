/* Array */
// for 循环
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// forEach
arr.forEach(function (item) {
  console.log(item)
})

// arr.forEach(callback[, thisArg])

// every

arr.every(function (item) {
  console.log(item)
  return true
})

// for in
for (let index in arr) {
  console.log(arr[index])
}

// map

arr.map(function (item) {
  console.log(item)
})

// for of

const Price = {
  A: [1, 2, 3],
  B: [0.1, 0.3, 0.5],
  C: [0.2, 4, 13]
}

for (let key of Object.keys(Price)) {
  console.log(Price[key])
}

Array.prototype.method = function () {
  console.log(this.length)
}
const myArray = [1, 2, 4, 5, 6, 7]
myArray.name = '数组'
for (let value of myArray) {
  console.log(value)
}
for (let key in myArray) {
  console.log(key)
}
list(2, 3, 4)
function list (arr) {
  // console.log(arguments.slice(1))
  // for (let key of arguments) {
  //   console.log(key)
  // }
  console.log(Array.prototype.slice.call(arguments))
  let NewArr = Array.from(arguments, function multiply (item) {
    return item * 2
  })
  console.log(NewArr)
}
let arraylike = Array(5)
let array = Array.from(arraylike, function (item) {
  return 1
})
console.log(array)
console.log(array.slice(1))

// Array.of
let arrof = Array.of(1, 3, 4)
console.log(arrof)

// Array.fill()
let One = Array(5).fill(2)
console.log(One)

// Array.filter
let Two = [2, 5, 7, 11, 22]
let find = Two.filter(function (item) {
  return item > 6
})
console.log(find)

// Array.find
let Two2 = [2, 5, 7, 11, 22]
let find2 = Two2.find(function (item) {
  return item > 6
})
console.log(find2)