/* Class */
let _age = 4
class Animal {
  constructor (type) {
    this.type = type
  }
  get age () {
    return _age
  }
  set age (value) {
    _age  = value
  }
  eat () {
    console.log('i an eat food')
  }
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')
dog.age = 5
const { eat } = dog
eat()
console.log(dog)
console.log(monkey)
