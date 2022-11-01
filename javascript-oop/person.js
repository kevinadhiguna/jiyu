class Person {
  // optional declaration
  name;
  age;
  weight;
  height;

  constructor (name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  introduceSelf() {
    console.log(`Hi, I am ${this.name}.`);
  }

  currentAge() {
    console.log(`I am ${this.age} years old.`);
  }

  physique() {
    console.log(`I am ${this.height} cm tall and am ${this.weight} kg.`);
  }
}

const jack = new Person('jack', 20, 200, 85);
jack.introduceSelf(); // Hi, I am jack
jack.currentAge(); // I am 20 years old.
jack.physique(); // I am 200 cm tall and am 85 kg.

const doe = new Person();
doe.introduceSelf(); // Hi, I am undefined

// Inheritance
class Professor extends Person {
  constructor (name, teaches) {
    super(name, teaches); // super(), passing up the name parameter. The superclass constructor takes care of setting name.
    this.teaches = teaches;
  }

  // Override introduceSelf() method from superclass/parent class
  introduceSelf() {
    console.log(`My name is ${this.name} and I will be teaching ${this.teaches}.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(`Paper title is ${paper} and your grade is ${grade}`);
  }
}

const hanyu = new Professor('Hanyu Yuzuru', 'Ice Skating');
hanyu.introduceSelf();
hanyu.grade('How to master free style in ice skating competition');
