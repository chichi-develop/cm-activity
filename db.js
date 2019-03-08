var mysql = require('mysql');

if (process.env.NODE_ENV === "production") {
  var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'cm-act-mysql',
  user: 'docker',
  password: 'docker',
  database: 'ccwebdb'
  });
} else {
  var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'ccwebdb'
  });
};

exports.pool = pool;
