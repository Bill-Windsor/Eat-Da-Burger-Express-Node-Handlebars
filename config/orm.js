// Import MySQL connection.
const connection = require("../config/connection.js");
const tableName = "burgers";
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob){
  //column1=value1, column2=value2,...
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  };
  return arr.toString();
};

var orm = {
  all: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  create: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log("queryString at create = ");
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  update: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log("queryString at update = ");
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
};
module.exports = orm;