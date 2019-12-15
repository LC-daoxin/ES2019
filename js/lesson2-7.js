/* Reflect */
// console.log(Math.floor.apply(null, [3.74]))
console.log(Reflect.apply(Math.floor, null, [3.74]))
//
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   get age () {
//     return _age
//   }
//   set age (value) {
//     _age = value
//   }
//   eat () {
//     console.log('i an eat food')
//   }
// }
//
// const dog = Reflect.construct(Animal, ['dog'])
// console.log(dog.age)

/* Proxy */
let o = {
  age: 19
}
let obj = new Proxy(o, {
  get (target, key, receiver) {
    console.log(receiver)
    if (key === 'age') {
      return target[key] + 20
    } else {
      return 0
    }
  },
  set (target, key, value) {
    return false
  }
})
console.log(Reflect.getPrototypeOf(obj))
console.log(obj.age)
obj.abc = 123
console.log(obj)
console.log(o)

let a = {
  name: 'xiaomong',
  price: 200
}
let handler =  {
  get (target, key) {
    return target[key] || ''
  },
  set (target, key, value) {
    if (Reflect.has(target, key)) {
      if (key === 'price') {
        if (value > 300) {
          return false
        } else {
          target[key] = value
        }
      } else {
        target[key] = value
      }
    } else {
      return false
    }
  }
}
let d = new Proxy(a, handler)
d.price = 302
console.log(d)
