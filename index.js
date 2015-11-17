var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongojs = require("mongojs");
var app = express();
var port = 8500;
var db = mongojs("properties");
var Houses = db.collection("houses");

app.use(bodyParser.json());
app.use(cors());


//Add a house
app.post("/api/houses", function (req, res) {
	Houses.insert(req.body, function (err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result);
		}
	});
});


//Show houses
app.get("/api/houses", function (req, res) {
	Houses.find(req.body, function (err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result);
		}
	});
});


//Edit house
app.put("/api/houses/:id", function (req, res) {
	Houses.update({"_id": mongojs.ObjectId(req.params.id)}, req.body, function (err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result);
		}	
	});
});

//Delete house
app.delete("/api/houses/:id", function (req, res) {
	Houses.remove({"_id": mongojs.ObjectId(req.params.id)}, function (err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result);
		}	
	});
});


app.listen(port, function () {
	console.log("Listening on port " + port);
	
});


