var express = require ("express");
var mysql = require ("mysql");

var app = express();

var connection = mysql.createConnection ({
	host: "127.0.0.1",
	user: " root",
	password: "",
	database: "sampleDB"
});

connection.connect(function (error) {
	if (!!error) {
		console.log("Error");
	} else {
		console.log("Connected");
	}
});

app.get("/", function(req, res) {
	connection.query("SELECT * FROM `mySampleData`", function(error, rows, fields) {
		if(!!error) {
			console.log("Error in the query");
		} else{
			console.log("Successful query");
			console.log(rows);
		}
	});
});

app.listen(5000);