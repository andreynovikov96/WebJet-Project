import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {cars} from "models/cars";

export default class InfoView extends JetView {
	config(){

		let list = {
			view:"list",
			id:"list:info",
			maxWidth:200,
			minWidth:100,
			select:true,
			borderless:true,
			template:"#value#"
		};

		let table = {
			view: "datatable", 
			id:"info:table",
			select:true,
			borderless:true,
			editable:true,
			editaction:"dblclick",
			columns:[
				{id:"Brand", header:"Brand of machine", editor:"text", fillspace:true, sort:"string", width:80},
				{id:"Model", header:"Model", editor:"text", sort:"string", width:100}
			]
		};
		
		let infoCars =
			{	
				view:"template",
				borderless:true,
				id:"info:template",
				template:(obj) => {
					return (obj.Brand || obj.Model || obj.Photo || obj.Year || obj.Number) ? 
						`<div class='carsTemplate'>
							<div class='carName'>${obj.Brand} ${obj.Model}</div>
							<img src="${obj.Photo}">
							<div class='infoCars'>Production year: ${obj.Year}</div>
							<div class='infoCars'>Circulation of cars: ${obj.Number}</div>
						</div>` : "";
				}
			};

		return {cols:[list, table, infoCars]};
	}

	init(){
		this.$$("list:info").sync(countries);

		this.$$("list:info").attachEvent("onAfterSelect", (id) => {
			this.show(`infocars?id=${id}`);
			this.$$("info:table").data.sync(cars, () => {
				this.$$("info:table").filter((obj) => {
					return obj.CountriesID == id;
				}, "", true);
			});
		});

		this.$$("info:table").attachEvent("onAfterSelect", (id) => {
			this.setParam("cars", id, true);
			let values = cars.getItem(id);
			this.$$("info:template").setValues(values);
		});
	}
	urlChange(){
		countries.waitData.then(() =>{
			let id = this.getParam("id");
			if(id !== this.$$("list:info").getSelectedId()){
				if ( !id || !countries.exists(id))
					id = countries.getFirstId();
				this.$$("list:info").select(id);
				this.$$("list:info").showItem(id);
			}
		});
	}
}