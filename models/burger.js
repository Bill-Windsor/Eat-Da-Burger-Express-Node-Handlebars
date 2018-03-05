// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(res) {
      console.log("Model Create Burger reached here");
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(res) {
      console.log("Model Update Burger reached here");
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
