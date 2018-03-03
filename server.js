
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

var port = process.env.PORT || 3000;

// Add bodyParser middleware to Express
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
