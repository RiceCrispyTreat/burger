let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgersController.js");

app.use("/", routes);

app.listen(port, function(){
    
});