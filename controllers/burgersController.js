const express = require("express");
const router = express.Router();

// Import burger.js to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("router.get path reached here");

  burger.all(function(data) {
    var handlebarsObject = {burger: data};
    console.log("handlebarsObject here - displaying burgers:");
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burger", function(req, res) {
  console.log("router.post path reached here");
  burger.create(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], function(result) {
    console.log("post to /api/burger here - result:");
    console.log(result);

    res.json(result);
//  res.redirect("/burger");
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

    console.log("put to /api/burger here - burgerID is: ");
    console.log(req.params.id);
    console.log("'devoured' value is: ");
    console.log(req.body.devoured);

  burger.update(["devoured"], [req.body.devoured], condition, function(data){
    console.log("burger.update reached here");
    res.json(result);
//  res.redirect("/burger");

  });
});

// Export routes for server.js to use.
module.exports = router;