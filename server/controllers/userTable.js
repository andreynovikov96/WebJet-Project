let db = require("../db");

module.exports = {
	getData: (req, res) => {
		let limit = (req.query.count || 15)*1;
		let offset = (req.query.start || 0)*1;

		let where = req.query.filter ? {
			Name:{$like:"%"+req.query.filter.Name+"%"},
			Email:{$like:"%"+req.query.filter.Email+"%"},
			Phone:{$like:"%"+req.query.filter.Phone+"%"}
		}: {};
		
		let order = [];
		for(let key in req.query.sort)
			order = [[key, req.query.sort[key]]];

		let count = db.User.findAndCountAll({where});
		let page = db.User.findAll({
			where, limit, offset, order
		});

		Promise.all([count, page]).then(data => res.json({
			pos:offset, total_count:data[0].count, data:data[1] 
		}));
	},
	updateData: (req, res) => {
		db.User.findById(req.body.id).then((User) => {
			User.update({
				Name: req.body.Name,
				Email: req.body.Email,
				Phone: req.body.Phone
			}).then(() => res.json({}));
		});
	}
};