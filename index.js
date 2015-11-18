//Depenedencies
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost:27017/hats";
var Hat = mongoose.Schema;
var port = 8500;



//Controllers
var hatCtrl = require("./controllers/hatCtrl");

//Express
var app = express();

//Express middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));


//Connections
mongoose.connect(mongoUri);
mongoose.connection.once("open", function () {
	console.log("Connected to mongo on: " + mongoUri);
});





//Add a hat
app.post("/api/hats", hatCtrl.addHat);


//Show hat
app.get("/api/hats", hatCtrl.listHats);


//Edit hat
app.put("/api/hats/:id", hatCtrl.editHat);

//Delete hat
app.delete("/api/hats/:id", hatCtrl.deleteHat);



app.listen(port, function () {
	console.log("Listening on port " + port);
	
});


