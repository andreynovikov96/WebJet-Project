import {JetView} from "webix-jet";
import {cars} from "models/cars";

export default class dataTableBrand extends JetView {
	config(){

		let upload = {
			rows:[
				{
					view:"template", 
					id:"img", 
					borderless:true, 
					template:(a) => {
						return `<img class="image" src=${typeof(a) !== "object" ? a :"http://emptyensemble.com/wp-content/themes/emptyensemble2015/assets/images/empty_ensemble_empty_set_logo.png"}>`;
					}
				},
				{
					view:"uploader", 
					label:"Change picture",
					autosend:false, 
					multiple:false,
					id:"uploadImg",
					accept:"image/jpeg, image/png",
					upload:"http://localhost:3000/carTable",
					on:{
						onAfterFileAdd:(upload)=>{
							let file = upload.file;
							let reader = new FileReader(); 
							reader.onload = (event) => {
								this.$$("img").setValues(event.target.result);
							};    
							reader.readAsDataURL(file);
							return false;
						}
					}
				}
			]
		};
        
		let checkMenu = {
			rows:[
				{cols:[
					{ view:"checkbox", id:"hideUpload", label:"Show upload", labelWidth:100,
						click:() => {
							this.$$("hideUpload").getValue() ? this.$$("partUpload").show() : this.$$("partUpload").hide();
						}
					},
					{ view:"checkbox", id:"hideTable", label:"Show table", labelWidth:100,
						click:() => {
							this.$$("hideTable").getValue() ? this.$$("partTable").show() : this.$$("partTable").hide();
						}
					}	
				]}
			]
		};
        
		let table = {     
			view: "datatable", 
			id:"settings:table",
			select:true,
			columns:[
				{id:"Brand", header:"Brand of machine", fillspace:1},
				{id:"Model", header:"Model", fillspace:1},
			]
		}; 
        
		let multicombo = {
			rows: [
				{
					labelPosition: "top",
					view:"multicombo", 
					label:"Delete model car", 
					id:"settings:milti", 
					suggest: {    
						body:{
							data:cars,
							template:"#Model#"
						}
					}
				},
				{
					view: "button", 
					label: "Delete",
					click:()=>{
						let id = this.$$("settings:milti").getValue();
						cars.remove(id);
						this.$$("settings:milti").refresh();
					}
				}

			]
		};
        
		let partTable = {
			id:"partTable",
			rows: [table, multicombo]
		};
        
		let partUpload = {
			id:"partUpload",
			rows: [upload]
		};

		let form = {
			view:"form",
			elements:[
				{cols:[
					{rows:[
						checkMenu, 
						partUpload
					]},
					partTable
				]
				}
			]
		};
        
		return form;
	}
	init() {
		this.$$("settings:table").sync(cars);
	}
}