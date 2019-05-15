// Set up MySQL connection.
var mysql = require("mysql");

// mysql://bb60f738bf0b6e:8ece0986@us-cdbr-iron-east-02.cleardb.net/heroku_3f2114fb02a15d5?reconnect=true
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  // port: 8889,
  user: "bb60f738bf0b6e",
  password: "8ece0986",
  database: "heroku_3f2114fb02a15d5"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
