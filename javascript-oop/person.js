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
const doe = new Person();
jack.introduceSelf();
doe.introduceSelf();
