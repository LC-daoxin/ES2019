/* Module */
import name, { text as abc } from './lesson2-8-1'

console.log(name(2), abc)

const data = {
  PortLand: '78/50',
  Dublin: '21/34',
  Lima: '32/08'
}

Reflect.defineProperty(data, 'Lima', {
  enumerable: false
})

let a = Object.getOwnPropertyDescriptors(data)
let b = Reflect.getOwnPropertyDescriptor(data, 'Lima')

console.log(a)
console.log(b)

let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]]

function flat (arr) {
  let NewArr = []
  for (let item of Object.values(arr)) {
    if (Array.isArray(item)) {
      NewArr = NewArr.concat(flat(item))
    } else {
      NewArr.push(item)
    }
  }
  return NewArr
}
console.log(flat(arr))
