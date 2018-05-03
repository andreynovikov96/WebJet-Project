import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {cars} from "models/cars";

export default class dataTableBrand extends JetView{
	config(){

		let table = {     
			view: "datatable", 
			id:"brand:table",
			select:true,
			columns:[
				{id:"Brand", header:["Brand of machine", {content:"serverFilter"}], fillspace:1, sort:"server"},
				{id:"CountriesID", header:["Brand country", {content:"serverFilter"}], sort:"server", options:countries,fillspace:1}
			]
		}; 
		return { rows: [table]};
	}
	init() {
		this.$$("brand:table").sync(cars);
	}
}