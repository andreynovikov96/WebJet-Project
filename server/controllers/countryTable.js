let db = require("../db");

module.exports = {
	getData: (req, res) => {
		db.Country.findAll().then((data, err) => {
			if (!err)
				res.json(data);
			else
				console.log("Error: Cannot get file's data from database.");
		});
	},
	updateData: (req, res) => {
		db.Country.findById(req.body.id).then((Country)=>{
			Country.update({
				value: req.body.value,
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
	}
};