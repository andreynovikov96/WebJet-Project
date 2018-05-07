let db = require("../db");

module.exports = {
	getData: (req, res) => {
		db.Cars.findAll().then(data => res.json(data));	
	},
	updateData: (req, res) => {
		db.Cars.findById(req.body.id).then((Cars)=>{
			Cars.update({
				Brand: req.body.Brand,
				Model: req.body.Model,
				Year: req.body.Year,
				Photo: req.body.Photo,
				Number:req.body.Number,
				CountriesID: req.body.CountriesID
			}).then(() => res.json({}));
		});
	},
	saveData: (req, res) => {
		db.Cars.create(req.body).then((obj) => 
			res.json({ id: obj.id }));
	},
	removeData: function(req, res){
		db.Cars.findById(req.params.id).then((Cars) => 
			Cars.destroy()).then(() => res.json({}));
	}
};