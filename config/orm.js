// all data base query
const connection = require('../config/connection.js');

// function printQuestionMarks(num){
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//       }
    
//       return arr.toString();
//     }
// function objForSql(ob){
//     var arr = [];

    
//   for (var key in ob) {
//     var value = ob[key];
    
//     if (Object.hasOwnProperty.call(ob, key)) {
      
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

const orm = {
    
    selectAll: function (tableInput, cb) {
        console.log('selectAll ' + tableInput);
        var queryString = 'SELECT * FROM'+ tableInput + ";";
            connection.query(queryString, function (err, result) {
                console.log('we are inside the query return');
                if (err) {
                    throw err;
                };
                cb(null, result);
                // cb(result);
                console.log(result);
            });
             //this not working either
    }
    
};

console.log('orm');

module.exports = orm;