var mysql = require('mysql');　　//mysqlを要求
var connection = mysql.createConnection({   　　//hostの情報でDBへアクセス
  host: 'cm-act-mysql', user: 'docker',
  password: 'docker', database: 'ccwebdb'
});

exports.connection = connection;

function handleDisconnect() {
  console.log('INFO.CONNECTION_DB: ');
  connection = mysql.createConnection(connection);
  
  connection.connect((err) => {   　//DB接続テスト用。アクセス成功でメッセージ返す。
      if (err) {
          console.log('Error connecting to DB');
          console.error(err);
      }
      else { console.log('Connection established'); }
  });

  //error('PROTOCOL_CONNECTION_LOST')時に再接続
  connection.on('error', function (err) {
      console.log('ERROR.DB: ', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.log('ERROR.CONNECTION_LOST: ', err);
          handleDisconnect();
      } else {
          throw err;
      }
  });
}

handleDisconnect();
