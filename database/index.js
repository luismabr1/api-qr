const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'https://gator3312.hostgator.com:2083/',
  user: 'wifi',
  password: '123456',
  database: 'modo_qr',
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