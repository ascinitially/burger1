var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

// in "scripts"
// "start": "node server.js",
// "watch": "nodemon server.js"

// "engines" : {
//   "node" : "10.15.3"
// },

// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   port: 8889,
//   user: "bb60f738bf0b6e",
//   password: "8ece0986",
//   database: "heroku_3f2114fb02a15d5"
// });