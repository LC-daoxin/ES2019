/* Reflect */
// console.log(Math.floor.apply(null, [3.74]))
console.log(Reflect.apply(Math.floor, null, [3.74]))

let _age = 4
class Animal {
  constructor (type) {
    this.type = type
  }
  get age () {
    return _age
  }
  set age (value) {
    _age = value
  }
  eat () {
    console.log('i an eat food')
  }
}

const dog = Reflect.construct(Animal, ['dog'])
console.log(dog.age)

/* Proxy */
let o = {
  name: 'text'
}
let obj = new Proxy(o, {})
console.log(Reflect.getPrototypeOf(obj))
