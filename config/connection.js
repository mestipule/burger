var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.error( 'connection error: '+ err.stack );
        return;
    }
    console.log( 'connected as id: ' + connection.threadId );
});

module.exports = connection;