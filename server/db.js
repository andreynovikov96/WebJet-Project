var Sequelize = require("sequelize");
var sequelize = new Sequelize("ProjectNode", "root", "",{
	host:"localhost",
	dialect:"mysql"
});

var Cars = sequelize.define("cars", {
	Brand: Sequelize.STRING,
	Model: Sequelize.STRING,
	Year: Sequelize.INTEGER,
	Photo: Sequelize.STRING(1000000),
	Number: Sequelize.INTEGER,
	CountriesID: Sequelize.INTEGER,
	status: Sequelize.STRING
});

var Country = sequelize.define("country", {
	value: Sequelize.STRING
});

let User = sequelize.define("user", {
	Name: Sequelize.STRING,
	Email: Sequelize.STRING,
	Phone: Sequelize.STRING
});


Cars.hasMany(Country);

sequelize.sync({ force: true }).then(() => {
	Cars.create({
		"Brand":"Porshe","Model":"Cayenne","Year":"2015", "Photo":"http://allroad-garage.ru/site/templates/dd_carrepair_18/images/slideshow/slide3.png", "Number": "1000000", "CountriesID":"1", "status": "No"
	});
	Cars.create({
		"Brand":"Audi","Model":"A4","Year":"2005", "Photo":"https://www.greasenergy-shop.com/WebRoot/Store2/Shops/63102114/4E03/2309/B529/ADA1/8A27/C0A8/29BB/BE48/Audi-B6-web.png", "Number": "3000000", "CountriesID":"1", "status": "No"
	});
	Cars.create({
		"Brand":"Fiat","Model":"500c","Year":"2007", "Photo":"http://www.ibssrl.eu/en/dx-sx-180x30-mm-5014/fiat-500-tutti-i-modelli.png", "Number": "15000000", "CountriesID":"4", "status":"Ok"
	});
	Cars.create({
		"Brand":"Porshe","Model":"911","Year":"1996","Photo":"http://oemvag.ru/wa-data/public/shop/products/83/84/4538483/images/42260/42260.970.png", "Number": "500000", "CountriesID":"1", "status":"Ok"
	});
	Cars.create({
		"Brand":"Geely","Model":"XS7","Year":"2014", "Photo":"http://global.geely.com/wp-content/uploads/2017/10/X7.png", "Number": "1250000", "CountriesID":"3", "status":"Ok"
	});
	Cars.create({
		"Brand":"Volvo","Model":"XC90","Year":"2001", "Photo":"https://content.repairpalcdn.com/images/car_images/320/2008VLV009a_320/2008VLV009a_320_01.png", "Number": "2000000", "CountriesID":"3", "status":"Ok"
	});
	Cars.create({
		"Brand":"Jeep","Model":"Grand Cherokee","Year":"1985","Photo":"https://www.cstatic-images.com/car-pictures/xl/cac00jes051c0101.png", "Number": "3200000", "CountriesID":"2", "status":"Ok"
	});
	Cars.create({
		"Brand":"Mercedes","Model":"SLS","Year":"2018","Photo":"https://www.rolf.ru/uploaded_files/18def699efc0736db276fd97c9a4141f.png", "Number": "2500000", "CountriesID":"1", "status":"Ok"
	});
	Cars.create({
		"Brand":"Ford","Model":"RAM","Year":"2001","Photo":"https://www.cstatic-images.com/car-pictures/xl/cab80fot145b0101.png", "Number": "5000000", "CountriesID":"2", "status":"Ok"
	});
	Cars.create({
		"Brand":"Chevrolet","Model":"Tahoe","Year":"2011", "Photo":"http://gm-catalog.ru/upload/medialibrary/f6a/f6a2d1fd3b40aa80be07981ac1755456.png", "Number": "25000000", "CountriesID":"2", "status":"Ok"
	});

	Country.create({
		"value":"Germany"
	});
	Country.create({
		"value":"USA"
	});
	Country.create({
		"value":"China"
	});
	Country.create({
		"value":"Italy"
	});
	/* for (var i=0; i<200; i++) {
		User.create({Name:"Alex Wanny", Email: "alex@gmail.com", Phone: "+375 (29) 555-36-78"
		});
	} */
	User.create({Name:"Alex Wanny", Email: "alex@gmail.com", Phone: "+375 (29) 555-36-78"
	});
	User.create({Name:"Doris Wan", Email: "doris@mail.com", Phone: "+375 (29) 123-58-96"
	});
	User.create({Name:"Alan Smith", Email: "alan@mail.com", Phone: "+375 (29) 147-85-75"
	});
	User.create({Name:"Kevin Sallivan", Email: "kevin@mail.com", Phone: "+375 (29) 964-75-36"
	});
	User.create({Name:"Sergey Petrov", Email: "sergeyn@mail.com", Phone: "+375 (29) 457-85-74"
	});
	User.create({Name:"Mina Leen", Email: "mina@mail.com", Phone: "+375 (29) 475-96-21"
	});
	User.create({Name:"Sam White", Email: "sam@mail.com", Phone: "+375 (29) 365-87-95"
	});
	User.create({Name:"Alex Wanny", Email: "alex@gmail.com", Phone: "+375 (29) 555-36-78"
	});
	User.create({Name:"Doris Wan", Email: "doris@mail.com", Phone: "+375 (29) 123-58-96"
	});
	User.create({Name:"Alan Smith", Email: "alan@mail.com", Phone: "+375 (29) 147-85-75"
	});
	User.create({Name:"Kevin Sallivan", Email: "kevin@mail.com", Phone: "+375 (29) 964-75-36"
	});
	User.create({Name:"Sergey Petrov", Email: "sergeyn@mail.com", Phone: "+375 (29) 457-85-74"
	});
	User.create({Name:"Mina Leen", Email: "mina@mail.com", Phone: "+375 (29) 475-96-21"
	});
	User.create({ Name:"Sam White", Email: "sam@mail.com", Phone: "+375 (29) 365-87-95"
	});
	User.create({Name:"Alex Wanny", Email: "alex@gmail.com", Phone: "+375 (29) 555-36-78"
	});
	User.create({Name:"Doris Wan", Email: "doris@mail.com", Phone: "+375 (29) 123-58-96"
	});
	User.create({Name:"Alan Smith", Email: "alan@mail.com", Phone: "+375 (29) 147-85-75"
	});
	User.create({Name:"Kevin Sallivan", Email: "kevin@mail.com", Phone: "+375 (29) 964-75-36"
	});
	User.create({Name:"Sergey Petrov", Email: "sergeyn@mail.com", Phone: "+375 (29) 457-85-74"
	});
	User.create({Name:"Mina Leen", Email: "mina@mail.com", Phone: "+375 (29) 475-96-21"
	});
	User.create({Name:"Sam White", Email: "sam@mail.com", Phone: "+375 (29) 365-87-95"
	});
	User.create({Name:"Alex Wanny", Email: "alex@gmail.com", Phone: "+375 (29) 555-36-78"
	});
	User.create({Name:"Doris Wan", Email: "doris@mail.com", Phone: "+375 (29) 123-58-96"
	});
	User.create({Name:"Alan Smith", Email: "alan@mail.com", Phone: "+375 (29) 147-85-75"
	});
	User.create({Name:"Kevin Sallivan", Email: "kevin@mail.com", Phone: "+375 (29) 964-75-36"
	});
	User.create({Name:"Sergey Petrov", Email: "sergeyn@mail.com", Phone: "+375 (29) 457-85-74"
	});
	User.create({Name:"Mina Leen", Email: "mina@mail.com", Phone: "+375 (29) 475-96-21"
	});
	User.create({Name:"Sam White", Email: "sam@mail.com", Phone: "+375 (29) 365-87-95"
	});
	User.create({Name:"Mina Leen", Email: "mina@mail.com", Phone: "+375 (29) 475-96-21"
	});
	User.create({Name:"Sam White", Email: "sam@mail.com", Phone: "+375 (29) 365-87-95"
	});
});

module.exports = {Cars, Country, User};