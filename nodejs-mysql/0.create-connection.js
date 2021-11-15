// import mysql from "mysql";
const mysql = require("mysql");

// Import 'dotenv' in ES6 (reference: https://github.com/motdotla/dotenv/issues/89#issuecomment-139372079)
// import dotenv from "dotenv";
// dotenv.config();

// Import 'dotenv' in commonJS
require("dotenv").config();

// MySQL connection config
const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});

// Connect to MySQL
mysqlConnection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL !");
});
