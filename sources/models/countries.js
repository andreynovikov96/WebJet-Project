export const countries =  new webix.DataCollection({
	url:"http://localhost:3000/countryTable",
	save:"rest->http://localhost:3000/countryTable"
});