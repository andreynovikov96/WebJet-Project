import {JetView} from "webix-jet";

export default class dataTableUser extends JetView{
	config(){

		let table = {     
			view: "datatable", 
			id:"dsad",
			select:true,
			borderless:true,
			editable:true,
			editaction:"dblclick",
			datafetch:10,
			//loadahead:10,
			pager: "pagerUser",
			columns:[
				{id:"id", sort:"server"},
				{id:"Name", header:["User Name", {content:"serverFilter"}], sort:"server", editor:"text", fillspace:true, minWidth:150},
				{id:"Email", header:["Email", {content:"serverFilter"}], sort:"server", editor:"text", width:200},
				{id:"Phone", header:["Phone", {content:"serverFilter"}], sort:"server", editor:"text", width:200}
			],
			url:"http://localhost:3000/userTable",
			save:"rest->http://localhost:3000/userTable"
		};
		return { rows:[
			table,
			{
				view:"pager",
				id:"pagerUser",
				size:10,
				group:3
			}
		]
		};
	}
}