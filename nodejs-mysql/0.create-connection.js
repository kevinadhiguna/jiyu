// import mysql from "mysql";
const mysql2 = require("mysql2");

// Import 'dotenv' in ES6 (reference: https://github.com/motdotla/dotenv/issues/89#issuecomment-139372079)
// import dotenv from "dotenv";
// dotenv.config();

// Import 'dotenv' in commonJS
require("dotenv").config();

// MySQL connection config
const mysql2Connection = mysql2.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  port: process.env.MYSQL_PORT || 3306,
  database: process.env.MYSQL_DATABASE,
});

// Connect to MySQL
mysql2Connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL !")
})

mysql2Connection.query(
  "SELECT * FROM mysql.user",
  function (error, results, fields) {
    console.log("Results : ", results); // results contains rows returned by server
    console.log("Fields : ", fields); // fields contains extra meta data about results, if available
    
    // Display errors if something went wrong
    if (error) {
      console.error("Something went wrong : ", error);
    }
  }
)
