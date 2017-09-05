var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'madhu',
  database : 'testdb'
});

exports.getConnection = function(){
  console.log('A function call was made for db connection..');
  return connection;
}
