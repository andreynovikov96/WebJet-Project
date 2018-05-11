import {JetView} from "webix-jet";
import {cars} from "models/cars";
import {countries} from "models/countries";

export default class dataTableBrand extends JetView {
	config(){

		let checkMenu = {
			id:"checkMenuResponsive", 
			rows: [{
				responsive:"checkMenuResponsive",
				cols:[
					{view:"checkbox", id:"hideUpload", value:1, label:"Show upload", labelWidth:100, width:150,
						click:() => {
							this.$$("hideUpload").getValue() ? this.$$("partUpload").show() : this.$$("partUpload").hide();
						}
					},
					{view:"checkbox", id:"hideTable", label:"Show table", value:1, labelWidth:100, width:150,
						click:() => {
							this.$$("hideTable").getValue() ? this.$$("partTable").show() : this.$$("partTable").hide();
						}
					},
					{view:"checkbox", id:"hideDeleteButton", label:"Show delete car", value:1, labelWidth:120, width:150,
						click:() => {
							this.$$("hideDeleteButton").getValue() ? this.$$("partMult").show() : this.$$("partMult").hide();
						}
					},
					{}	
				]}]
		};

		let filter = (obj)=>{
			this.$$("settings:table").filter((data) => {
				let value = this.$$(obj).getText();
				return data[obj] == value;
			},"",true);
			this.$$(obj).disable();
		};

		let uploadFile = {
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
						this.$$("template:img").setValues({Photo:event.target.result}, true);
					};    
					reader.readAsDataURL(file);
					return false;
				}
			}
		};

		let uploadTemplate = {
			view:"template", 
			id:"template:img", 
			borderless:true, 
			template:(obj) => {
				return `<img class="image" src=${obj.Photo || "https://png.icons8.com/metro/1600/truck.png"}>`;
			}
		};

		let saveServer = {
			view: "button", 
			label: "Upload to server",
			click:() => {
				let	values = this.$$("settings:table").getSelectedItem();
				let promise = new Promise ((resolve) =>{
					this.$$("uploadImg").files.data.each(function(file){
						let reader = new FileReader(); 
						reader.onload = (event) => {
							resolve(event.target.result);
						};    
						reader.readAsDataURL(file.file);						
					});
				});
				promise.then((result)=>{
					values.Photo = result;
					webix.message("Photo uploaded");
					cars.updateItem(values.id, values);
				});
			}
		};
		
		let grid = {
			view:"toolbar",
			elements: [
				{view:"label", label:"Select"},
				{
					view:"richselect",
					id:"Brand",
					suggest: {
						view:"gridsuggest",
						textValue:"Brand",
						body: {
							columns:[
								{id:"Brand"}
							],
							data:cars
						}
					},
					on: { 
						onChange: () => filter ("Brand") 
					}
				},
				{
					view:"richselect",
					id:"Year",
					suggest: {
						view:"gridsuggest",
						textValue:"Year",
						body: {
							columns:[
								{id:"Brand"}, 
								{id:"Model"}, 
								{id:"Year"}
							],
							data:cars
						}
					},
					on: { 
						onChange: () => filter ("Year") 
					}
				},
				
			]

		};

		let table = {     
			view: "datatable", 
			id:"settings:table",
			select:true,
			columns:[
				{id:"Brand", header:"Brand of machine", fillspace:true, minWidth:100},
				{id:"Model", header:"Model", width:120},
				{id:"Year", header:"Production year",  width:120},
				{id:"CountriesID", header:"Brand country", collection:countries,  width:120}
			],
			on:{
				onAfterSelect: (id) => {
					this.setParam("id", id, true);
				}
			}
			
		}; 
        
		let multicombo = {
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
		};

		let deleteButton = {
			view: "button", 
			label: "Delete",
			click:()=>{
				let val = this.$$("settings:milti").getValue();
				val = val.split(",");
				let length = val.length;
				for(let i = 0; i < length; i++){
					cars.remove(val[i]);
				}
				this.$$("settings:milti").refresh();
				this.app.show("top/settings");
				this.$$("settings:milti").setValue();
			}
		};
        
		let partTable = {
			id:"partTable",
			gravity:100,
			rows: [
				grid, 
				table
			]
		};
        
		let partUpload = {
			id:"partUpload",
			gravity:100,
			rows: [
				uploadTemplate,
				uploadFile, 
				saveServer
			]
		};

		let partMult = {
			id:"partMult",
			rows: [
				multicombo, 
				deleteButton
			]
		};

		let form = {
			view:"form",
			elements:[
				{cols:[
					{rows:[
						checkMenu, 
						partUpload,
						{}
					]},
					{rows:[
						partTable,
						partMult,
						{}
					]},
					
				]
				}
			]
		};
        
		return form;
	}
	init() {
		this.$$("settings:table").sync(cars);
		this.$$("settings:milti").getPopup().getList().sync(this.$$("settings:table").data);

		this.$$("settings:table").attachEvent("onAfterSelect", (id) => {
			this.setParam("id", id, true);
			let values = cars.getItem(id);
			this.$$("template:img").setValues(values);
		});
	}
	urlChange(){
		cars.waitData.then(() =>{
			let id = this.getParam("id", true);
			if (id === undefined || !cars.exists(id)) {
				id = cars.getFirstId();
			} 
			this.$$("settings:table").select(id);
		});
	}
}