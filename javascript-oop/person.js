class Person {
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
