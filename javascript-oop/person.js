class Person {
  name;

  constructor (name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const jack = new Person('jack');
jack.introduceSelf(); // Hi, I am jack

const doe = new Person();
doe.introduceSelf(); // Hi, I am undefined
