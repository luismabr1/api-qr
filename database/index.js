const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '192.168.1.14',
  user: 'modoqr',
  password: 'Modo2022',
  database: 'db_modo_qr',
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