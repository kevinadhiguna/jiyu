const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 200,
    // An odd number will result in : "Error saving account 2 :  User validation failed: age: 25 is not an even number"
    validate: {
      validator: v => v % 2 === 0,
      message: props => `${props.value} is not an even number`
    }
  },
  email: {
    type: String,
    minLength: 4,
    required: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    immutable: true, // <- does not allow changes
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  hobbies: [String],
  address: addressSchema
});


// -- Schema methods/virtuals --
userSchema.methods.greet = function() { // <- Only actual function, no arrow function! (Because of 'this' keyword)
  console.log(`Hi, my name is ${this.name}`);
}

userSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, "i") }); // Search using regular expression and make sure it is not case-sensitive
}

userSchema.query.byName = function(name) {
  return this.where({ name: new RegExp(name, "i") }); // Chainable
}
// Note : '.query' must be chained and is not a "standalone" function like '.methods' and '.statics'

userSchema.virtual("namedEmail").get(function() {
  return `${this.name} <${this.email}>`;
})
// Note : '.virtual' does not get saved to MongoDB

// -- Schema middleware --
userSchema.pre("save", function(next){
  console.log("-- Middleware pre-save action --");
  this.updatedAt = Date.now();
  next();
});

userSchema.post("save", function(doc, next){
  console.log("-- Middleware post-save action --");
  doc.greet();
  next();
});

module.exports = mongoose.model("User", userSchema);
