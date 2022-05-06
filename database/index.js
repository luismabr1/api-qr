const mysql = require('mysql');
const { MYSQL_DATABASE, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = require('../config');

const mysqlConnection = mysql.createConnection({
  host: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;