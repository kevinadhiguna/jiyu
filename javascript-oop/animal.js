// A class without constructor

class Animal {
  sleep() {
    console.log('zzz...');
  }
}

const panda = new Animal();
panda.sleep(); // zzz...

// Check if 'panda' is an object created from the 'Animal' class
const question = panda instanceof Animal;

// A quick alternative of :
// if (question) {
//   // Do something here
//   console.log("panda is an instance of Animal class")
// }
question && console.log("panda is an instance of Animal class");
