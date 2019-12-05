/* Promise */
// function timeout (ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done')
//   })
// }
//
// timeout(2000).then((value) => {
//   console.log(value)
// })

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => { console.log(1); reject(new Error('fail')) }, 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => { console.log(2); resolve(p1) }, 1000)
// })
//
// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(3)
const p3 = Promise.resolve(4)

Promise.all([p1, p2, p3]).then((value) => {
  console.log(value)
})
