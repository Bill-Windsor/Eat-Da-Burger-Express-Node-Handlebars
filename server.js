
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

const app = express();

// Configure default port for Express and Heroku
var PORT = process.env.PORT || 3000;

// Add bodyParser middleware to Express
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");
app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
