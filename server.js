var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
//Import routes and give server access to them.
app.use(routes);

//Start server so it can begin listening to client requests. 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
  });


  console.log('i');