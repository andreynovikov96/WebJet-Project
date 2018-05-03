import {JetView} from "webix-jet";
import {cars} from "models/cars";

export default class WindowView extends JetView {
	config(){

		let form = {
			view:"form",
			elements: [
				{rows: [
					{view:"text", label:"Brand of machine", name:"Brand", invalidMessage:"Can’t be empty!", labelWidth:150, options:{data:cars, body:{template:"#Brand#"}}},
					{view:"text", label:"Model", name:"Model", invalidMessage:"Can’t be empty!", labelWidth:150, options:{data:cars, body:{template:"#Model#"}}},
					{view:"text", label:"Production year", name:"Year", invalidMessage:"Can’t be empty!", labelWidth:150, options:{data:cars, body:{template:"#Year#"}}},
					{view:"text", label:"Circulation of cars", name:"Number", invalidMessage:"Can’t be empty!", labelWidth:150, options:{data:cars, body:{template:"#Number#"}}},
					{
						cols:[
							{
								view:"button",
								name:"buttonAddSave",
								value:"Save",
								click: () => {
									if( this.form.validate() ){
										let values = this.form.getValues();
										if(values.id && cars.exists(values.id)){
											cars.updateItem(values.id, values);
										} else{
											cars.add(values);
										}
										this.getRoot().hide();
									}
								}
							},
							{view:"button", label:"Cancel", click:() => this.getRoot().hide()}
						]
					}
				]
				}
			],
			rules:{
				Brand:webix.rules.isNotEmpty,
				Model:webix.rules.isNotEmpty,
				Year:webix.rules.isNumber,
				Number:webix.rules.isNumber
			}
		};

		let win = {
			view:"window",
			position:"center",
			width:350,
			body: form,
			head: "Edit info cars"
		};
		return win;
	}
	init(view) {
		this.form = view.queryView({view:"form"});

		this.on(view, "onHide", () =>{
			this.form.clear();
			this.form.clearValidation();
		});
	}
	showWindow(data) {
		this.form.setValues(data);
		this.getRoot().show();
	}
}