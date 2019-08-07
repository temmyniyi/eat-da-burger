var express = require("express"); 

var PORT = process.env.PORT || 3000;

var app = express();

// USE THE PUBLIC FOLDER 
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// JSON PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// USE HANDLEBARS AS THE DEFAULT VIEW ENGINE
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// GET DA ROUTES
var routes = require("./controllers/burgers_controllers");

app.use(routes);

// LISTEN UP!
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
