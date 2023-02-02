var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: process.env.DB,
  user: "root",
  password: "",
});

module.exports = con;
