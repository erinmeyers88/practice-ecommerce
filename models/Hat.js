//Require mongoose
var mongoose = require("mongoose");


//Create hat schema
var hatModel = mongoose.Schema ({
	
	title: {type: String, unique: true, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true, min: 0},
	color: {type: String, default: "N/A"},
	pattern: {type: String, default: "N/A"},
	style: {type: String, required: true},
	size: {type: String, required: true},
	material: {type: String, required: true},
	imageUrl: String
	
});


//Middleware to change data before saving to database


//Include hatModel in module.exports
module.exports = mongoose.model("Hat", hatModel);