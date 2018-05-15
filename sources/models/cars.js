export const cars = new webix.DataCollection({ 
	url:"http://localhost:3000/carTable",
	save:"rest->http://localhost:3000/carTable"
});