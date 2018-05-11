import {JetView} from "webix-jet";
import {cars} from "models/cars";
import {countries} from "models/countries";
import WindowCars from "views/windowCars";

export default class dataCars extends JetView{
	config(){

		let tabbar = {
			view:"toolbar",
			cols: [
				{view:"button", type:"icon", icon:"download", label:"Export to excel", width:150, click:() => webix.toExcel(this.$$("cars:table"))},
				{view:"button", type:"icon", icon:"refresh", label:"Refresh", width:100, click:() => {
					this.$$("cars:table").clearAll();
					this.$$("cars:table").load("http://localhost:3000/carTable");
					webix.message("refresh");
				}},
			]
		};

		let table = {     
			view: "datatable", 
			id:"cars:table",
			select:true,
			borderless:true,
			columns:[
				{id:"Brand", header:["Brand of machine", {content:"textFilter"}], fillspace:true, minWidth:100, sort:"string", },
				{id:"Model", header:["Model", {content:"textFilter"}], sort:"string", width:200},
				{id:"Year", header:["Production year", {content:"textFilter"}], sort:"string", width:150},
				{id:"CountriesID", header:["Brand country", {content:"selectFilter"}], sort:"string", collection:countries, width:100},
				{id:"Number", header:["Circulation of cars", {content:"textFilter"}], sort:"string", width:200},
				{template:"{common.trashIcon()}", width:50}
			],
			on: {
				onItemDblClick: (id) => {
					this.WindowCars.showWindow(this.$$("cars:table").getItem(id));
				}
			},
			onClick:{
				"fa-trash":(ev, id) => {
					webix.confirm ({
						text: "The data will be cleared. Continue?",
						callback:(result) => {
							if (result) {
								if(id == 10) webix.message("This car can not be removed");
								else cars.remove(id);
							}
						}
					});
					return false;
				}
			}
		}; 

		return { rows: [tabbar, table]};
	}
	init() {
		this.WindowCars = this.ui(WindowCars);
		this.$$("cars:table").sync(cars);

		this.on(cars.data, "onStoreUpdated", () =>{
			this.$$("cars:table").filterByAll();
		});
	}
}