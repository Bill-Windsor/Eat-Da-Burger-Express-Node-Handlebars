const express = require("express");
const router = express.Router();

// Import burger.js to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var handlebarsObject = {burger: data};
    console.log("handlebarsObject: ");
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], 
    function(result) {
    res.redirect('/burgers');
//  res.json(result);

  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({"devoured": req.body.devoured}, condition, function(data){
    res.redirect("/burger");
//  res.json(result);

  });
});

// Export routes for server.js to use.
module.exports = router;