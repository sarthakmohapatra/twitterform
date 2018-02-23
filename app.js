var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    config           = require('./config');
    
    app.set("view engine", "ejs");
    app.use(express.static(__dirname + "/public"));


//Body-Parser config

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Path for all routes

var allRoutes 		= require("./routes/routes");

//Using All Routes Here

app.use(allRoutes);

//Starting Server Here

app.listen(config.port, config.host, () => {
    console.log(`server is running at http://${config.host}:${config.port}`);
});