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
				/*{id:"Brand", header:["Brand of machine", {content:"textFilter"}], fillspace:2, sort:"string", },
				{id:"Model", header:["Model", {content:"textFilter"}], sort:"string", fillspace:2},
				{id:"Year", header:["Production year", {content:"textFilter"}], sort:"string", fillspace:1},
				{id:"CountriesID", header:["Brand country", {content:"selectFilter"}], sort:"string", collection:countries, fillspace:1},
				{id:"Number", header:["Circulation of cars", {content:"textFilter"}], sort:"string", fillspace:2},
				{template:"{common.trashIcon()}", width:50} */
			]
		}; 
		return { rows: [table]};
	}
	init() {
		this.$$("brand:table").sync(cars);
	}
}