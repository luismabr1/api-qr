const mysql = require('mysql');
const { MYSQL_DATABASE, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = require('../config');

const mysqlConnection = mysql.createConnection({
  host: MYSQL_HOST || 'remotemysql.com',
  user: MYSQL_USER || '5atQzokoAZ',
  password: MYSQL_PASSWORD || 'GQUrZaHS7E',
  database: MYSQL_DATABASE || '5atQzokoAZ',
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