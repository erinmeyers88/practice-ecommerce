var Hat = require("../models/Hat");

module.exports = {

//Add a hat
	addHat: function (req, res) {
		new Hat(req.body).save(function (err, hat) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(hat);
			}
		});
	},

//List all hats
	listHats: function (req, res) {
		Hat.find({}, function (err, hat) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(hat);
			}
		});	
	},

//Edit a hat
	editHat: function (req, res) {
		Hat.findByIdAndUpdate(req.params.id, req.body, function (err, hat) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(hat);
				}
		});
	},


//deleteHat
	deleteHat: function (req, res) {
		Hat.findByIdAndRemove(req.params.id, function (err, hat) {
			if (err) {
				res.status(500).send(err);
			}
		});
	}


};