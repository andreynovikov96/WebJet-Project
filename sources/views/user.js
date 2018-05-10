import {JetView} from "webix-jet";

export default class dataTableUser extends JetView{
	config(){

		let table = {     
			view: "datatable", 
			select:true,
			borderless:true,
			editable:true,
			editaction:"dblclick",
			datafetch:10,
			loadahead:20,
			columns:[
				{id:"Name", header:["User Name", {content:"serverFilter"}], sort:"server", editor:"text", fillspace:1},
				{id:"Email", header:["Email", {content:"serverFilter"}], sort:"server", editor:"text", fillspace:1},
				{id:"Phone", header:["Phone", {content:"serverFilter"}], sort:"server", editor:"text", fillspace:1}
			],
			url:"http://localhost:3000/userTable",
			save:"rest->http://localhost:3000/userTable"
		};
		return  table;
	}

}