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
