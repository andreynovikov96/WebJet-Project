let db = require("../db");

module.exports = {
	getData: (req, res) => {
		db.Cars.findAll().then((data, err) => {
			if (!err)
				res.json(data);
			else
				console.log("Error: Cannot get file's data from database.");
		});
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
			}).then(result => {
				if (result) {
					console.log("ok");
					res.json({result:true, msg:"file update"});
				}
				else {
					console.log("error");
					res.json({result:false, msg:"file not update"});
				}
			});
		});
	},
	saveData: (req, res) => {
		db.Cars.create(req.body).then((obj, err) => 
		{
			if (!err)
				res.json({id:obj.id});
			else
				console.log("Error: Cannot create new file's record into the database.");
		});
	},
	removeData: function(req, res){
		db.Cars.findById(req.params.id).then((car) => {
			if (car.status == "Ok") {
				car.destroy();
				console.log("file remove");
				res.json({result:true, msg:"file delete"});
			}
			else {
				console.log("Error: file not remove");
				res.json({result:false, msg:"file not delete"});
			}
		});
	}
};