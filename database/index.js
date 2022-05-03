const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'https://databases.000webhost.com/',
  user: 'id18877315_lbrito',
  password: 'oU[9=(M[(QBJS51G',
  database: 'id18877315_modo_qr',
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