/* var events = require ("events");
var util = require("util");

var myEmit = new events.EventEmitter();

myEmit.on("some_event", (text) => {
	console.log(text);
});

myEmit.emit("some_event", "Обработчик событий сработал");

var Cars = function (model) {
	this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars("Bmw");
var audi = new Cars("Audi");
var volvo = new Cars("Volvo");

var cars = [bmw, audi, volvo];
cars.forEach(function (car) {
	car.on("speed", function (text) {
		console.log(car.model + " speed is " + text);
	});
});

bmw.emit("speed", "254");
audi.emit("speed", "145");
volvo.emit("speed", "200"); */

//var fs = require ("fs");

/* var file_readed = fs.readFileSync("primer.txt", "utf8");

//console.log(file_readed);
var message= "Привет мир\n" + file_readed;
fs.writeFileSync("newFile.txt", message); */

/* fs.readFile("primer.txt", "utf8", function(err, data) {
    console.log(data);
});

fs.writeFile("newFile2.txt", "hi hi", function(err, data) {
    console.log(data);
});

console.log("Test"); */

/* fs.unlink("./new-one/newFile.txt", function() {
	fs.rmdir("new-one", function() {}); //удаление папки
}); */ // удаление

/* fs.mkdir("new-one", function() {
    fs.writeFile("./new-one/newFile.txt", "Создание файла",function() {
        console.log("все хорошо");
    });
}); */ //создание папки

/* var http = require ("http");
var server = http.createServer(function (req, res) {
	console.log("URL страницы:" + req.url);
	if (req.url === "/index" || req.url === "/") {
		res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	}
	else {
		res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"});
		fs.createReadStream(__dirname + "/404.html").pipe(res);
	}
});

server.listen(3000, "127.0.0.1");
console.log("мы отслеживаем порт 3000");
 */


var express = require ("express");
var bodyParser = require("body-parser");

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/news", function(req, res) {
	res.sendFile(__dirname + "/news.html");
});

app.post("/news", urlencodedParser, function(req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.sendFile(__dirname + "/news.html");
});

app.get("/news/:id", function(req, res) {
	res.render("activities", {activitiesID:req.params.id});
});

app.listen(3000);