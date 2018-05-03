let db = require("../db");

module.exports = {
	getData: (req, res) => {
		db.Country.findAll().then(data => res.json(data));	
	},
	updateData: (req, res) => {
		db.Country.findById(req.body.id).then((Country)=>{
			Country.update({
				value: req.body.value,
			}).then(() => res.json({}));
		});
	}
};