// Prototype

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}!`
}

function Student(name, age) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying.`
}

Object.setPrototypeOf(Student.prototype, Person.prototype) // Person -> Student 상속

const me = new Student('gapjin', 35) // new를 통해서 함수를 부를 경우 생성자 역할을 한다.
console.log(me.greet())
