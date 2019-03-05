var mysql = require('mysql');　　//mysqlを要求

if (process.env.NODE_ENV === "production") {
  var connection = mysql.createConnection({  //hostの情報でDBへアクセス
  host: 'cm-act-mysql',
  user: 'docker',
  password: 'docker',
  database: 'ccwebdb'
  });
} else {
  var connection = mysql.createConnection({
  host: 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'ccwebdb'
  });
};

exports.connection = connection;

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'cm-act-mysql',
    user: 'docker',
    password: 'docker',
    database: 'ccwebdb'
});

pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!

  // Use the connection
  connection.query('select * from cm_aclg where al_idactv = 1', function (error, results, fields) {
    // When done with the connection, release it.
    connection.release();
    // Handle error after the release.
    if (error) throw error;
    // Don't use the connection here, it has been returned to the pool.
  });
});
exports.pool = pool;
