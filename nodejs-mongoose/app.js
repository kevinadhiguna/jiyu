const mongoose = require('mongoose');
const User = require("./User");

require("dotenv").config();

const mongodbURL = process.env.MONGODB_URL || "mongodb://localhost/baseball";

try {
  mongoose.connect(mongodbURL);
} catch (error) {
  console.error("Error connecting to MongoDB : ", error);  
}

// Create a user (account)
async function run() {
  try {
    // -- CREATE --
    const account = await User.create({ name: "nianda", age: 22, email: "nianda@google.com" });
    // The code above does the same thing as the code below :
    // const account = new User({ name: "Michelle", age: 22, email: "michelle@google.com" });
    // await account.save();

    // -- UPDATE --
    // Update age property to 24 then save it
    account.age = 24;
    await account.save(); 

    console.info("Account 1 created : ", account);
  } catch (error) {
    console.error("Error saving account 1 : ", error.message);    
  }

  try {
    const account2 = await User.create({
      name: "ghina",
      age: 26,
      email: "ghina@ballysportsnorth.us",
      address: {
        street: "Freeway street",
        city: "Anaheim"
      },
      hobbies: ["Player Interview", "Sport Analysis"],
    });

    console.info("Account 2 created : ", account2);
  } catch (error) {
    console.error("Error saving account 2 : ", error.message);
  }

  try {
    const account3 = await User.create({
      name: "zahra",
      age: 28,
      email: "ZahRa@yahoo.com", // <- will be converted to lowercase automatically (according to user model)
      address: {
        street: "Atlanta street",
      },
      hobbies: ["Baseball", "Pitching"],
    });

    account3.bestFriend = "633b0479d1b1e78c1bde3e0c";
    await account3.save();

    console.info("Account 3 created : ", account3);
  } catch (error) {
    console.error("Error saving account 3 : ", error.message);
  }
}


async function findUserById(userId) {
  try {
    const user = await User.findById(userId);
    console.log("user (findUserById func) : ", user);
    user.greet();
  } catch (error) {
    console.error("Error finding a user by ID (findUserById func) : ", error.message);
  }
}

async function findUser() {
  try {
    const user = await User
      .where("age").gt(15).lt(56)
      .where("name").equals("zahra")
      .limit(1)
      .select("name age")
      .populate("bestFriend");

    console.log("user (findUser func) : ", user);
  } catch(error) {
    console.error("Error finding a user (findUser func) : ", error.message);
  }
}

async function nameSearch(name) {
  try {
    const user = await User.findByName(name);
    console.log("user (nameSearch func) : ", user);
  } catch (error) {
    console.error("Error finding user name (nameSearch func) : ", error.message);
  }
}

async function exec() {
  await run();
  await findUserById("633afc319265f7c614c50214");
  await findUser();
  await nameSearch("Harper");
}

exec();
