export const countries =  new webix.DataCollection({
	/* data: [
		{ "id":1, "Value":"Germany" },
		{ "id":2, "Value":"USA" },
		{ "id":3, "Value":"China" },
		{ "id":4, "Value":"Italy" }
	] */
	url:"http://localhost:3000/countryTable",
	save:"rest->http://localhost:3000/countryTable"
});