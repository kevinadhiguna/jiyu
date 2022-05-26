// import mysql from "mysql";
const mysql2 = require("mysql2");

// Import 'dotenv' in ES6 (reference: https://github.com/motdotla/dotenv/issues/89#issuecomment-139372079)
// import dotenv from "dotenv";
// dotenv.config();

// Import 'dotenv' in commonJS
require("dotenv").config();

// MySQL connection config
const mysqlConnection = mysql2.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  port: process.env.MYSQL_PORT,
});

// Connect to MySQL
mysqlConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL !");
});

mysqlConnection.query(
  "SELECT * FROM mysql.user",
  function (error, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
