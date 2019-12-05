/* obj */
/* Set  Get */
let s = new Set()
s.add('hello').add('world')
// s.delete('hello')
// s.clear()
console.log(s.has('hello'))
console.log(s.size)

function Timer () {
  this.S1 = 0
  // setInterval(function () {
  //   this.S1++
  // }, 1000)
  setInterval(() => this.S1++, 1000)
}
let timer = new Timer()
setTimeout(() => console.log(timer.S1), 3100)
