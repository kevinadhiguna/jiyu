class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called a private method, didn't you ?");
  }
}

const stuff = new Example();
stuff.somePublicMethod(); // You called a private method, didn't you ?
// stuff.#somePrivateMethod(); // Error : Property '#somePrivateMethod' is not accessible outside class 'Example' because it has a private identifier.
