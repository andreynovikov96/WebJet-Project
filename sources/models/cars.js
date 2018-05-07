export const cars = new webix.DataCollection({ 
/* 	data: [
		{"id":1,"Brand":"Porshe","Model":"Cayenne","Year":"2015", "Photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", "Number": "1000000", "CountriesID":"1"},
		{"id":2,"Brand":"Audi","Model":"A4","Year":"2005", "Photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", "Number": "3000000", "CountriesID":"1"},
		{"id":3,"Brand":"Fiat","Model":"500c","Year":"2007", "Photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png", "Number": "15000000", "CountriesID":"4"},
		{"id":4,"Brand":"Porshe","Model":"911","Year":"1996", "Photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", "Number": "500000", "CountriesID":"1"},
		{"id":5,"Brand":"Geely","Model":"XS7","Year":"2000", "Photo":"https://travellan.ru/upload/News%20of%20Travel/flag_kitaya.jpg", "Number": "1250000", "CountriesID":"3"},
		{"id":6,"Brand":"Volvo","Model":"XC90","Year":"1988", "Photo":"https://travellan.ru/upload/News%20of%20Travel/flag_kitaya.jpg", "Number": "2000000", "CountriesID":"3"},
		{"id":7,"Brand":"Jeep","Model":"Grand Cherokee ","Year":"1985", "Photo":"https://1103306.ssl.1c-bitrix-cdn.ru/upload/iblock/8bb/8bb76d21bf7c72b4094c0680401b29ca.jpg?151690907626896", "Number": "3200000", "CountriesID":"2"},
		{"id":8,"Brand":"Mercedes","Model":"SLS","Year":"2018", "Photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", "Number": "2500000", "CountriesID":"1"},
		{"id":9,"Brand":"Ford","Model":"RAM","Year":"2001", "Photo":"https://1103306.ssl.1c-bitrix-cdn.ru/upload/iblock/8bb/8bb76d21bf7c72b4094c0680401b29ca.jpg?151690907626896", "Number": "5000000", "CountriesID":"2"},
		{"id":10,"Brand":"Chevrolet","Model":"Tahoe","Year":"2011", "Photo":"https://1103306.ssl.1c-bitrix-cdn.ru/upload/iblock/8bb/8bb76d21bf7c72b4094c0680401b29ca.jpg?151690907626896", "Number": "25000000", "CountriesID":"2"}
	] */
	url:"http://localhost:3000/carTable",
	save:"rest->http://localhost:3000/carTable"
});