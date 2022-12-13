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

// Check if 'stuff' is an object created from the 'Example' class
const question = stuff instanceof Example;

// A quick alternative of :
// if (question) {
//   // Do something here
//   console.log("stuff is an instance of Example class")
// }
question && console.log("stuff is an instance of Example class");
