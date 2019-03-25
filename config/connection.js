//this is where you are writting your codes for connection

const mysql = require('mysql');
//bring mysql locate (localhost)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "burger_db"
  });


//this code connects your data base
connection.connect(function(err) {
  if (err) {
    console.error('error: ' + err.stack);
    return;
  }
 
  console.log('Connected to the MySQL server.');
  console.log('connected as id ' + connection.threadId);
});
console.log('connection');

module.exports = connection;



